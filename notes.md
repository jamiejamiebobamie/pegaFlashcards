An enterprise
	a complex organization structure
	many locations
	needs a way to manage their channels, products,
		and customers.
	different countries: regulations for each
		jurisdiction.
	organize your application by using the same dimensions as
		your business

Enterprise Class Structure (ECS)
	a class hierarchy 
	share any rule placed in an ECS layer across multiple
		applications.
	adjust existing ECS layers as business operations change
	enforces best practices around reuse and standardization as
		the system expands to other lines of business.

Pega Platform layer
	contains the built-in assets used for
		processing cases and other work

Organization layer
	contains the assets used on an enterprise-wide basis
	rules for enterprise-wide business logic
	standard properties, decision tables, and service level
		rules
	applications used across the enterprise can use the
		rules from this layer
	contains enterprise-wide data assets
	classes and rules for data stored in the system
	classes and rules for access to data in external
		systems, via connectors.
Division layer
	contains the assets used on a division-wide basis.
	the middle level of the three (Org-Div-Unit)
	available for use in every application
	apply to a line of business, region, or brand
	an optional layer
Framework layer
	contains assets that can be extended in specific
		implementations
	may be comprised of one or more generalized
		applications
Implementation layer
	defines an application customized for a specific division or
		line of business
	may extend one or more framework layer applications.
		Ex: can develop a generalized application that
			manages product returns in the framework layer 	
			then create a unique implementation layer to
			customize the returns process.
	“brand-specific” assets, such as styling and policies.

framework vs implementation layers:
	relative separations of application assets.
	depends on the design of the application.
	implementation application for one line of business may 	
		belong to the framework layer for another application. 	
	depends on if functionality or aesthetic needs to be extended
		or specified / particularized.

Rule resolution
	a search algorithm
	used to find the most appropriate instance of a rule
	occurs whenever a rule is needed to accomplish processing
		of a case
	depends on the choices you make when defining the values
		for the key parts of a rule
	applies to most rules that are instances of classes derived
		from the abstract Rule- base class
Case types (Rule-Obj-CaseType )
Properties (Rule-Obj-Property )
UI rules such as Sections (Rule-HTML-Section) and Harnesses (Rule-HTML-Harness)
Declare expressions (Rule-Declare-Expression)
Data pages (Rule-Declare-Pages)



	does not apply to records instances of classes derived
		from Data-, System-, or Work-
Operator IDs (Data-Admin-Operator-ID)
Email listeners (Data-Admin-Connect-EmailListener)
Operator's favorites (System-User-MyRules)
The rule check-in process (Work-RuleCheckIn)
A rule's type:
	defined by the class from which the rule is derived.
	e.g.
		a section rule = Rule-HTML-Section
		an ID rule = Data-Admin-Operator-ID
rule resolution algorithm inputs:
Predefined rule keys that are used as a unique identifier, such as the Apply to: class, rule name, and rule type
User's ruleset list
Class hierarchy of the rule in question
Circumstances such as the value of a property, or time and date restrictions
Availability of the rule
User's access roles and privileges
rule resolution algorithm output:
	the first rule found that matches all of the input criteria

the Rules Cache
	helps ensure rule resolution operates efficiently
	populated by a multiple-step process
	part of the rule resolution algorithm

rule resolution algorithm
creates a list of all rules that match the purpose of the rule in question to populate the rules cache
all rule candidates marked as Not Available are discarded
all rule candidates not in the operator's Ruleset list are discarded
all rule candidates not defined in a class in the ancestor tree are discarded
rank the remaining rule candidates (“winner” is chosen)
remaining rule candidates are added to the Rules Cache

STEP1:
	creates a list of all rules that match the purpose of the
		referenced rule.
the purpose of a rule
	defined by a combination of all the key properties of a rule,
		except the Apply to: class on which the rule is
			defined
STEP2:
	filters the list of rule candidates and removes any rules
		where the Availability of a rule is set to Not Available.
STEP3:
	determines which rules the operator can access
		based on the operator's Ruleset list
The Ruleset list:
	a combination of the ruleset name and a Major-Minor
		version number
must belong to a ruleset listed in the operator's ruleset list. Major version number and Minor version number:
	less than or equal to the specified version number listed in
		the operator's ruleset list
STEP4:
	examines the Apply to: class
	determines if the rules are in the inheritance hierarchy of
		the referenced rule
the ancestor tree = a rule’s inheritance.
Only rules in the ancestor tree of the referenced rule — by pattern
	or direct inheritance — is retained
To be considered:
	Use class-based inheritance to arrive at the correct rule
		to execute? check box must be selected in the class
		definition.
STEP5:
	ranks the remaining candidate rules with a three-step sub-
		process:
the list of rule candidates is sorted
all rule candidates marked as Withdrawn are removed from the list
a default rule candidate is defined
STEP6:
	sorts the remaining rules candidates according to this
		specific order:
Class
Ruleset
Circumstance
Circumstance Date
Date/Time Range, then Version.
	Class and Ruleset:
		provide the basics of rule resolution
		the closer to:
			the Apply to: class of the referenced rule,
		the higher:
			the rank
	Circumstance, Circumstance Date, and Date/Time Range:
		further refine candidates
	Version:
		ranks candidates by the ruleset version that contains
			them
		ensures that circumstanced rules are not automatically
			overridden if the base rule is updated in a more
			recent ruleset version. (?)
STEP7:
	removes any rules set to Withdrawn
STEP8:
	determines the default rule candidate
A default rule candidate:
	the first rule candidate (highest ranked) that has no
		qualifiers
	the last possible rule to be executed
	always matches any additional requests for this rule
STEP8:
	adds the remaining rule candidates to the rules cache


If instances of the rule are not found in the rules cache, Pega
	runs a special sub-process to populate the rules cache.
The point of the rule resolution:
	return the most appropriate rule to satisfy the need of a
		specific user for a specific purpose.
If a rule is blocked:
	execution is halted, and an error message is added to
		the log file.

Verify if the user has authorization:
has all of the privileges:
the rule is executed.
does not have the privileges required:
Pega sends a message: “the rule is not authorized for execution.”
the rule does not list a required privilege:
the rule is selected and executed.

Availability of a rule:
	visible on the rule form next to the rule name or description
	used to determine if a rule is available for use during rule
		resolution
	used to determine if you can view, copy, or edit a rule in Dev
		Studio.
five values:
    Available:
        may be used
        the default
        can view, copy, edit, and execute
    Final:
        may be used
        can view and execute
        cannot be edited or copied
        indicates may be changed in subsequent releases
    Not Available:
        may not be used
        indicates to the algorithm to use the next-highest version
        can view, copy, edit
        cannot execute
        good for initial development: “allows you to save a rule without validation” (?)
    Blocked:
        may be used
        can view, copy, edit
        does not execute (is available)
        if executed, execution is halted, and an error message is added to the log file.
        good for when you need more time to develop and release an updated rule.
    Withdrawn:
        may not be used
        can view, copy, edit
        does not execute
        indicates all rules that are in the same ruleset with an equal or lower version number and the same rule type and Apply to: class are hidden and no longer considered after Availability is checked during the rule resolution process.
        looks for an instance of the rule in the parent class or next highest ruleset in the application ruleset stack.

exceptions to typical case behavior:
	make a business process more complex
	difficult to maintain and update as business conditions
		change
	e.g.
		Reduced response times for customers with elite status
	can be difficult or impossible to model with a single rule
	use circumstancing to model

circumstancing
a way of modeling complex exceptions through
	create a variant of a rule—such as a decision or a service
		level—tailored to a specific circumstance
	the system determines which rule variant best satisfies the
		need
	allows you to customize the behavior of your application
		to address each exception condition you identify
		using a collection of targeted rules rather than one
		complex, difficult-to-maintain rule
	establishes a baseline for expected case behavior and adds
		variants to address exceptions to the behavior
	the goal:
		create a variant for each anticipated situation
	create a set of focused rules to address exceptions to case
		processing, rather than one all-encompassing rule
	each rule focuses on a specific exception:
		application maintenance and updates are easier and
		can delegate to business users

To circumstance a rule:
	start by creating a base rule to define the expected behavior
Pega uses the base rule unless a circumstanced version is more appropriate.
	then, identify any exceptions to the expected behavior
	can circumstance a rule according to the value of one or
		more conditions:
			one variable
			multiple variables
			the processing date:
Date property – later than the specified date or falls within the range of dates: use the rule
As-of date – the rule variant is effective after a certain date, or during a range of dates: use the rule

the circumstance template:
	the rule that defines the properties used to determine if the
		circumstance is applicable.
A circumstance definition:
	defines the values for the circumstance template

Queue processors and job schedulers can fail:
	e.g.
	unable to obtain a lock
	an activity or related class is named incorrectly
Queue processors:
	queue objects and then process them
	if the process fails:
		the queue entry:
			goes into failure status
			indicates the process is broken
			reverses any changes the process initiated

the Queue processor landing page in Admin Studio:
	traces and monitors Queue Processor rules
users with the SysAdmin4 role:
	can troubleshoot errors
	examine items in the Broken queue
the job scheduler:
	triggers items to process at pre-configured times
	does not queue items
the Performance tool:
	manages statistic aggregation for job scheduler rules

can configure the ASYNCPROCESSOR requestor type to
	include an access group with access to the application
allows you to monitor the queue processor or job scheduler
	from Admin Studio
the Queue processors page:
	used to trace, start and stop queue processors
	Tracing processes:
		enables you to examine issues
		only while processes are running
to start a processor trace:
In Admin Studio, click Resources > Queue processors
On the row of the queue processor you want to trace, click the Actions menu icon to open the actions menu.
On the Actions menu, click Trace to begin the trace.
Tracing the pzStandardProcessor queue processor requires an additional step. You must specify the activity to run after clicking Trace from the Actions menu and then click Open tracer to begin the trace.
viewing the data flow:
	allows you to view advanced statistics for each queue
		processor
to view the data flow for a queue processor:
On the Queue processors page, click the Actions menu icon to open the actions menu for the processors.
Select View Data Flow to open the Data Flow Work Item for that processor in Dev Studio.
shows basic data about the pyBatchindexProcessor
can view run warnings, duration, start time, number of processed records and average processing time.

Below basic information:
	three tabs:
		Component statistics
		Distribution details
		Run details
	provide more complex information

errors, warnings, and other debug:
	are written to log files.

Logs track:
	exceptions
	events that impact your application
	provide valuable insight into their cause
an appender:
	manages each log
	determines the type of events written to the log file
	the appender configuration is stored in the prlog4j2.xml file
		and is used for the entire node.
logs can be found:
	In Dev Studio, from the Configure > System >
		Operations landing page
the different types of logs:
The PEGA log —
    contains
        warnings
        errors
        information messages about internal operations
    referred to as the Console log or System log
    used for debugging the application
    by default, filters entries that match the current operator ID
    contains messages created since the most recent start of the server
The ALERT log —
    contains
        performance-related alerts
        Use the PLA tool to parse and summarize this file into a Microsoft Excel spreadsheet
The ALERTSECURITY log —
    contains
        internet / URL- related alerts (identified by the prefix SECU) due to:
            improper configuration
            overt attempts to bypass system security
The BIX log —
    created by the Business Intelligence Exchange during extract operations
    optional
    provides the extract functions of an ETL (extract, transform, and load) utility
The SERVICES-PAL log —
    contains performance data saved from services
The CLUSTER log —
    contains information about the setup and run-time behavior of the cluster

Pega displays a log file:
	for your own Operator ID on the node
	in pages of 25 lines each
…may view or set log filtering criteria

Logging Level Settings tool 
	controls which logging events appear in the PEGA log.

prlog4j2.xml configuration file
	defines the levels of logging events
    can create separate prlog4j2.xml files for each node
    Rulesets and the Pega class hierarchy are irrelevant to logging

PegaRULES Log Analyzer (PLA)
	a standalone web application that developers and system
	administrators can use to view summaries of console
	logs.
	use to:
		test new or reconfigured Pega applications during user
			acceptance testing (UAT)
		do performance and stress testing
	consolidates and summarizes three types of logs:
		ALERT, PEGA, and Garbage Collection (GC)
performance =  ALERT log
stability = PEGA log
memory = JVM garbage collection log
	provides key information about operational and system
		health

performance, stability, and scaling issues are most likely to occur during performance testing, and right after deployment

the Tracer
	allows you to view events such as a case is processed
	presents a complete log of the events that occur during case
		processing
	allows you to identify the cause of execution errors
	identifies the processing steps that lead to an error
	resource-intensive and dramatically slows application
		performance
a Tracer log:
	steps with a status of Good, sometimes: with a status of Fail
	displays each event on a separate row, color-coded:
        Gray – Activity processing
        Orange – Events from flow, decision, or declarative rules
        Light blue – PegaRULES database and cache operations
    displays events in order of occurrence
    identifies each event by thread, event type, and status

access the Tracer:
	from the Runtime toolbar in App Studio
	from the Developer toolbar in Dev Studio.

open and configure the settings of the Tracer to capture only the required information. Pause logging until you are ready to run the application section you want to troubleshoot.

the Settings, Breakpoints, Watch, and Remote Tracer buttons
	on the Tracer toolbar allow you to refine what you need to
	capture by indicating the types of events and break
	conditions to log by using
Settings 
	allows you to reduce the information captured
	filter tracer display results by event, event type, ruleset, and
		break conditions.
Breakpoints
	stop the Tracer and the processing on your thread

Tracing resumes when you click Play or an hour elapses

Watch functions
	similar to breakpoints, but monitors a specific property value
		or values
	determines if and when these properties change

The Performance landing page:
	three performance tools:
Performance Analyzer (PAL)
Database Trace
Performance Profiler
	collect performance statistics
	help you distinguish between performance issues
	arise in:
		the Pega Platform server
		the database
		external systems called
	help you determine how to improve performance.

the Performance Analyzer (PAL)
	shows the system resources consumed by processing a
		single requestor session
	works on existing data
	does not degrade processing
the Database Trace tool
	useful to tune the application for database performance
	use if PAL indicate performance issues in the database
	can trace all the SQL operations like queries or commits that
		are performed.
the Profiler
	shows a detailed trace of performance information about:
	the execution of activities
	when condition rules
	data transforms
	…executed by your requestor session.
	traces every execution (in all Threads) of these ruletypes
	should be run in conjunction with Performance Analyzer to
		narrow down the specific step (Performance Profiler) of
		the cause (Performance Analyzer) (?)

Pega Predictive Diagnostic Cloud™ (PDC)
	a SaaS tool
	runs on Pega Cloud
	gathers, monitors, and analyzes real-time performance and
		health indicators from all active Pega
		Platform applications
	gathers, aggregates, and analyzes:
		alerts
		system health pulses
		guardrail violations
	allows users to predict:
		potential system performance issues
		business logic issues
	provides suggestions to fix
Systems running on Pega Cloud are already integrated with
	PDC.
Pega applications send data to PDC. PDC does not request
	data from Pega applications.
a small performance impact on the monitored Pega system due to
	asynchronous sending of data.

the System Summary landing page
	can be opened by clicking System Summary to open
	provides an overview of performance metrics for monitored
		systems
	organized by browser or service
	identifies Top Items that are the most problematic areas in
		the system based on:
	response time (item time)
	number of times the issue occurred in the past
week (occurrences)
	trend percentage (item time %).

the Stability and Improvement Plan landing page
	to open click Improvement Plan
	provides an overview of the issues that affect your system
	provides information that helps you identify areas to target to
		improve system performance
case types 
	in PDC, categories of issues that can occur in your system. 	
	Include: 
Operations – High-urgency issues that you should resolve immediately
Database – Issues that occur in your database configuration
Pega Platform Tuning – Issues related to your Pega Platform configuration
Connectors – Issues related to system connectors
Decisioning – Issues related to Decision Strategy Manager (DSM)
Exceptions – Issues related to run-time errors during Pega execution
Application Logic – Issues related to the way the application is built
Other – Issues related to any other type of problematic event
	contains a list of issues, or cases

the Event Viewer landing page
	to open click Event Viewer
	displays a list of problematic issues in the system that occur
		during a selected time interval
	is recommended for advanced users
	can filter which events are displayed
	can expand each event to view more detail

Data with identifying information (for example, case data) is not sent due to the PDC privacy concerns. PDC cannot request information from the monitored application. Pega Platform gathers the following data for PDC:
Alerts – Identifies the type of alert and metadata about what happened in an interaction
Parameter page – Describes the parameters from the current parameter page, including important contextual information about the functions that run in the monitored application. All remaining parameters are filtered out and excluded
Database alerts – Details the database query, excluding business data values
Exceptions – Contains some contextual data that is a subset of the fields sent for alerts
Performance statistics – Includes statistics for average response time and unique user count. PDC uses these statistics to identify overall performance and performance trends for monitored applications
Database indexes – Includes database index information. PDC uses database index information to generate recommendations to improve query performance
Guardrail violation counts – Counts the total number of rules with guardrail warnings, the number of rules with justified and unjustified warnings, and the number of rules based on warning severity (severe, moderate, informational)

A system KPI:
	a measured value recorded by an alert
	a threshold configured in Pega Platform
an alert
	is triggered if a value is above a KPI threshold
	maps to an action item type in PDC
KPI and alerts determine the order in which alerts are handled
The Performance Profiler:
	useful:
	when determining which part of the process might be
			having performance issues
	identifying the particular step of a data transform or
			activity that might have a performance issue.

When using the Performance Profiler…
record readings of the application's performance
analyze the readings to identify problems

to find the Performance Profiler:
Dev Studio > System > Performance >
Performance Profiler
the Performance tool in the toolbar

once you locate the Performance Profiler:
	click the green Play button to start recording the steps you
		want to trace in your application
	click the red Stop button after you have performed the steps

	the table is updated with the results for all the threads traced
		by the Profiler.
requires substantial processing overhead
disable the profiler as soon as your data is collected.

	review the trace log
	identify the thread where you performed your work
	look for the largest size
	the largest thread is most likely the one

the Database Trace
	produces a text file containing:
		the SQL statements
		rule cache hit statistics
		timings
		other data related to your requestor session with the
			Pega Platform™ database or other relational
			databases
Familiarity with SQL is not required to interpret the output.

to find the Database Trace (two options):
Dev Studio > System > Performance > Database Trace) 	
from the Performance tool in the toolbar.

once you locate the Database Trace tool…
	click Trace Options to open the settings window
	lists all possible events to trace
	have the option to generate a stack trace, an expensive
		process

	click the green Play button to start Database Trace
	click the red Stop button after trace

	the table is updated with the results for all the threads it
		traced

The Performance Analyzer (PAL)
	provides a view to all the performance statistics that Pega
		Platform captures
	use to understand the system resources consumed by
		processing a single requestor session

to find PAL (two options):
Dev Studio > System > Performance
from the Performance tool in the toolbar


once you locate PAL…
	take measurements
	click Reset Data to clear data
	two options for taking a reading:
		Add Reading 
		Add Reading with Clipboard Size
			(takes extra time to calculate)
	define points that identify what occurred during that reading

understanding PAL data:
	the INIT row:
		displays the totals from the first reading
	the DELTA rows:
		indicates the change from each a previous reading 	
	the FULL row:
		the total sum of all the statistics from the last time the
			data was reset

All values are in seconds.

RA Elapsed
	represents the time spent in rule assembly
	can skew performance readings

first use assembly (FUA)

	run through the process once to ensure all rules have been
		assembled before taking any measurements

	Results have no magic number.




Relevant records
	items that define and are most likely to be reused for a case or data
		type
	help to define the information that is displayed in the application
		windows and fields
	a number of items that are marked as relevant records by default
	can also add records for your contextual class by using the Relevant
		Records landing page
	control design-time prompting and filtering in several areas of Data
		Designer and Case Designer
	can configure the following items as relevant records:
Fields / properties
relevant fields in a case or in a data type
Views / sections
relevant views in a case
Processes / flows
relevant processes in a case
User actions / flow actions
relevant user actions in a case.
Correspondences
relevant correspondences in a case.
a record is automatically marked as relevant when
	you create them by using Data Designer or Case Designer

Case Management (18%)
Duplicate and Temporary cases
Parallel Processing configuration
Configuring flow action processes: pre- and post- processing
Decision tables and trees
Approving Cases with an Authority Matrix/Cascading approvals
Creating organization records
duplicate case
	a case that has many of the same data values as another
		case already in the system.
	matching data is not an issue.
	if a specific combination of data values match, the new
		case is possibly a duplicate case.
search duplicate cases process
	helps users identify and resolve duplicate cases
	uses basic conditions and weighted conditions to
		compare specific property values with cases already
		present in the system.
	first evaluates the basic conditions
		limit potential duplicates
		must be met before considering potential duplicate
			cases.
	then weighted conditions are evaluated
		(once all basic conditions are met)
		cases receive receive a weight value
	each condition:
		a weight (between 1 and 100)
	the weight:
		determines the relative importance of a condition
	adds up the weights of all the conditions that evaluate to
		true.
  flags the current case as a potential duplicate if the sum
of the weights exceed a specified threshold value



	displays to the user the current case and the matching case
	in the system
does not process the case further
or
the user may decide the current case is not a duplicate and choose to continue processing the case.

Temporary cases
	stored in memory on the clipboard and not in the Pega
		Platform database.
	do not have case IDs.
	save storage and improve system performance
	processed by a single operator
	cannot be routed
	up to the business to determine in which situations it is
		appropriate to implement temporary cases
	pros and cons
	less clutter in the Pega Platform database, but can’t perform
		business analytics.
	can be “persisted” -> changed into a permanent case
	persisted cases can be routed to other operators.
	add a Persist Case automation step to the case life cycle
		persists a temporary case
		creates a case ID and commits the case data to the
			database.

Parallel processing
	can configure a stage to run multiple processes in parallel. 		
	allows users to perform tasks independently in order to
		complete the work in a stage.

Parallel processes can be started and completed independently.

For more complex parallel processing:
	the Split Join shape
	the Split For Each shape
	the spinoff option in the Subprocess shape

the main process:
	the process to which you add the shape
	the shapes call one or more subprocesses that proceed in
		parallel.

Split Join
	calls multiple independent processes that operate in parallel
		and then later rejoin.
	gives you the flexibility to use join conditions that
		determine when the primary process can continue
	join condition may iterate over a when condition or a count to
		determine when to resume the flow.
	allow you to call a flow on an embedded page such as a
		data class.

Split For Each shape
	allows you to run one subprocess multiple times by
		iterating through a set of records stored in a page
		list or page group
	main flow continues:
		when the items on the list have been processed
	make sure that the flow and the page list used in the
		iteration are in the same class
	contains an Iterate join condition.
		starts flows for items on the Page Group or Page List
		property one by one, testing an optional when
		condition to determine whether to start the flow for a
		given iteration.
spinoff option in the Subprocess shape
	allows you to run the subprocess in parallel with the main
		flow.
	main process does not wait for the subprocess to
		complete before proceeding.
	an advanced feature in the Subprocess shape and is
		accessed in the flow diagram
	select the Spinoff flow option on an existing Subprocess
		shape
	configure the shape in the flow rule
	does not have a join condition

a join condition
	can be used with:
		Split For Each
		Split Join
	controls when the main flow resumes
	3 types:
		any:
			main flow resumes after any one subprocesses
				completes
			other subprocesses are stopped
			open assignments of these subprocesses are
				cancelled
		all:
			want the main flow to resume after all of the
				subprocesses complete
		some:
			a when rule or a count controls when the main
				process continues

When two or more actions attempt to update a case, the last-performed action may overwrite data written by a previous action.
Overwrites:
	corruption or loss of data
	delay case processing
	incorrect resolution of the case

a case locking strategy is essential
	if an application supports concurrent users
	ensures data integrity.
two strategies
	balance needs for user access and data protection: 	
	pessimistic locking and optimistic locking.
	configure case locking from:
		the Settings tab of the Case Designer in either App
			Studio or Dev Studio.
 
pessimistic locking strategy
	an application applies an exclusive lock when opening an
		item, such as a case.
	A user or the system gains exclusive access to the object 	
		until the application releases the lock.
	Other users cannot edit the item while locked.
	Default strategy.

optimistic locking strategy
	application does not apply an exclusive lock when opening
		an item.
	any user — or the system itself — can open and edit the
		item at any time.
	the application checks whether the item has changed before
		committing any changes.

Allow one user
	a pessimistic locking strategy
	a user opens the case, Pega Platform locks the case to
		prevent other users from applying any changes.
	can set a time-out value for the lock.
	After the time-out period lapses, another user can open and
		update the case.
	default time-out period is 30 minutes.
	***By default, Pega Platform selects the Allow one user
		option when creating a case type
		ensures data integrity during case actions

Allow multiple users
	an optimistic locking strategy
	Pega Platform checks for changes to the case when a user
		attempts to save their updates.
	If the case has changed, Pega Platform prompts the
		user to either:
			reload the case and reapply any changes
	or
			close the case without saving their
				changes.
When you update a case with an automated action, such as an
	activity, check for a lock as part of the operation, and
	include steps to address a locked case.
Lock a case when using the Obj-Open or Obj-Open-By-
	Handle methods, and remember to release the lock upon
	completing the action.

child cases inherit the locking strategy from the parent case. Pega Platform identifies the locking strategy in effect for the child case on the Settings tab.

if Allow one user is selected for the parent case, Pega Platform
	locks the parent case whenever a user opens a child
	case.
To override this behavior and allow a second user to update the parent case while the child case is open, select the Allow other users to access parent case when the child case is opened check box.

If you configure a child case to override the locking strategy of the parent case, configure the time-out value of the child case to be less than the time-out value of the parent.
If Allow many users is selected for the parent case, Pega Platform prohibits case locking configuration on any child case.
Check your knowledge with the following interaction.

When working with a case type hierarchy
	set locking on the top parent case.
	settings cascade down to each child case when it is
		instantiated

In the Case Type Explorer
	select the parent case type to set locking.
In the Case Designer on the Settings tab
	select the Locking option.
If you select Allow one user, you can modify the default locking timeout of 30 minutes in the Access time out value is ________ mins field.

If you select default locking, you can update the lock timeout for any child cases. If you do not want to lock the parent case if the child case is open, select the Allow access for the parent case when the child case is opened check box.

Child cases may be instantiated independently of a parent case. For example, you may want to create a shipping case as a standalone case that is not a child case of a purchase request parent case. If a child case is instantiated as a standalone case, it does not inherit its lock settings. You can configure case locking for this case type on the Advanced tab of the Case Type rule.

pre-processing and post-processing actions on a flow action
	allow you to perform a set-up or wrap-up action in
	conjunction with the flow action

a pre-processing action
	is performed whenever a user selects the flow action as
		well as each time the user is presented with the
		assignment (?)
	add logic to a pre(and post)processing actions to determine
		if the action should be performed
	another consideration: the flow action likelihood value (?)

a post-processing action
	is performed each time you perform the corresponding flow
		action

a when rule:
	a yes/no question to automate a decision

a decision table:
	test multiple values to answer a question
	resemble a spreadsheet with rows and columns
	can be referenced in:
		decision shapes
		declare expressions
		activities
		routers
	first column: the Conditions: a property or expression
	second column: the value to return if the first column
		evaluates to true
	the otherwise row:
		returns if none of the conditions evaluate to true.
	like an if-else block
		the first true condition starting from the top is what is
		returned
	the Evaluate all rows option
		enables the decision table to evaluate all rows
		returns an array of results that can be parsed

decision trees
	use to handle logic that returns a result from a set of test
		conditions
	can evaluate against different test conditions and
		properties
	a true comparison can lead to additional comparisons.
	starts at the top of the tree and proceeds downward
	each yes advances the evaluation
	can reference in:
		flow rules
		declare expressions
		activities
		routers
	the trunk of the tree: common conditions
	leaves: more-specific conditions
	evaluated from the top row down until a true result is
		reached
	returns the final otherwise value if not result is reached

unit testing
	testing something on its own before testing it in the context
		of the entire application

decision tables and trees:
	can:
		test for conflicts in the logic
			(logic that will never evaluate)
		check for completeness (missing logic)
	Show Conflicts
	Show completeness

cascading approval step with an authority matrix:
	requires multiple approvals
	a set of rules directs the approval chain
	prerequisites:
a page list property to hold the list of approvers
a single-value property as an element of the page list to identify each approver in the list
a decision table to determine the conditions for populating the page list with the Evaluate all rows option enabled
a data page, data transform, or activity can be used instead of the decision table to populate the list
To configure a cascading approval step
add an approval step to a stage
specify Cascading as the type
specify Authority matrix as the model

authority matrix:
	determines the approvers:
		using a list of operators, stored in a Page List
	a single value property that identifies the approver
	uses a decision table to define conditions for populating the
		list
	approver list is populated with the operators who evaluate to
		true in the table

a cascading approval process
	configures a series of approvals
	two types:
reporting structure —
approvals always move up the reporting structure of the submitter or another defined list
authority matrix —
a set of rules directs the approval chain to individuals both inside and outside the organization of the submitter

the organizational structure of Pega applications
	directs assignments to the right operator or work queues, 	
	determines the access rights of operators
	reports on activity in various company departments
a three-level hierarchy:
	organization
only one allowed
represents the enterprise
	division
one or more
a layer for categorizing business units such
	as a region, a brand, or a department
cannot have subdivisions
	unit
	contains operators who perform work specific
		to their organization
	can have child units
	unit operators: caseworkers, agents, and
		customer service representatives

organization records
	standard data instances the structure is built with
	support your requirements
	can be found in the Records Explorer in the Organization
	refer to the work that users perform and the levels of access
		they have in Pega applications
	examples:
		an operator ID
		a work group / queue
			not part of the organizational hierarchy
			belongs to a unit, a division, and an organization

a work group
	identifies a cross-functional team that contains a manager, a
		set of operators, and a work queue
	created to share resources
	one work queue
	the operator record is where a user is associated to
		work groups:
			allows individuals share work without affecting the
			organizational hierarchy.
	identifies one user who is the work group manager
	referred to as a team in the Case Manager portal
	can contain additional operators:
		Authorized managers:
			can transfer assignments
			not required to be part of the work group
			not allowed to perform approvals or complete
				assignments

may have to add new organization levels, work groups, and work
	queues
associate operators with an organization structure to define how
	work is routed to the operator
Follow these steps to update the organization in this example:
Add a new unit to the hierarchy.
Create a new work group.
Create a new work queue.
Associate the work queue with the work group.
Associate the unit and work group with an operator.
a work queue or a work group must already exist before
	either instance can be created
cannot create both the work queue and the work group at the
	same time
	use an existing work queue then go back and update the
		work queue
the Records Explorer
	where you create new organization records:
		units, work groups, and work queues
	organization names are unique and cannot be used in more
		than one hierarchy:
			a division cannot belong to more than one
				organization
			a unit cannot belong to more than one division.
	end a work group name record with:
 an at sign (@)
ToDefaultwork:
		used by the standard router activity queue to locate a
			work queue
		based on the work group associated with the current
			operator

Data Modeling (2%)
Configuring Field Values
a list of allowed values for a specific property:
	a local list on the property record:
		list is short, mostly static, and common, for all case 	
			types in the application.
a field value:
		list is large, expected to change frequently, or may be
			specific for each case type
		an alternate method
		manage the list of allowed values separately from the
			property
		enables reuse and customization based on context
		.pyStatusWork is a field value in the Work- context
		support localization of words, phrases, and sentences
			that appear on portal displays, reports, and user
			forms.

to create field values:
organize a list of allowed values you want to display in the list for the property
create a Field Value record for each allowed value. In the record, enter the value you want to display
identify the appropriate Apply to: class of the property where you want to display the list
associate each Field Value record to the property where you want to display the allowed value. Create a new Field Value record for each allowed value.

User Interface (14%)
User portal customization
Localized application content
Enabling accessibility features
Pega Web Mashup
User portals
Applications
	multiple types of users: case workers and managers.
	each type: different interactions with the app
	need different access to tools and info

a user portal:
	the user’s view into the application
	Pega has ootb, default portals that can be customized




(“Harness records”)
a harness
	organizes the structure of a portion of the user display
	organizes work forms or portals
	promotes modular design and reuse of ui components

four standard harnesses to organize the content of user forms.


also specialized harnesses for organizing user forms in screen flows(?)

Harnesses that allow users to select a flow action and complete an assignment contain an action area.

action areas:
	display the content for the selected flow action when a user
	selects a flow action to perform, such as an approval form
Harnesses that organize a user portal contain a screen layout. a screen layout:
	organizes the elements of the browser window into a main
		content pane and smaller surrounding panes.
Example: the Header Left screen layout divides the portal into three areas: a header, a smaller left pane for navigation, and a larger content pane for displaying cases and reports.

Each pane of the screen layout references a section that contains the content displayed in the pane. To modify the content in these sections, you use Live UI to identify and open the section to configure.

can customize the default end-user portals provided in Pega
if the customization is complex enough, you can also create a custom application portal.

a portal is represented with a portal rule.
a portal rule:
	identifies:
		the type of user expected to use the portal
		the harness used to organize the portal contents
		the skin that defines the branding applied to the portal.

To configure a Pega portal:
	identify the intended user role and portal type
	organize the layout of the portal
	customize the branding of the portal
	customize the content and tools available to users
	configure an access group to reference the portal if
		necessary.

Portal records are listed in the User Interface category in both the Records Explorer and the Create menu.
Portal records are classless and do not appear in the App Explorer.

configure a portal for use by either users or developers.
User portals:
	intended for users who do not routinely need to update rules
	require less memory on the user's workstation than
		developer portals
	can configure delegated rules in a user portal
Developer portals:
	intended for system architects and business architects, who
		routinely update rules.
	configures rules on a daily basis


Two portal types: composite and custom.
Composite portals:
	defined by harnesses and sections
	cross-browser compatible
	support Microsoft Internet Explorer, Mozilla Firefox, Apple
		Safari, and Google Chrome browsers.

Custom portals:
	defined by an activity.

Best practice: configure a new portal as a composite portal.

The Details tab of the portal record is where you can select the user role and portal type on

the organization of the portal:
	affects how the contents of the portal are presented to the
		user.

default user portals:
	organized with:
		a header
		a left navigation pane
		a content pane.

change the screen layout used in the harness to change the
	layout of a portal.
use Live UI to identify and open a section to configure and modify
	the contents of a section
create a new harness in the Data-Portal class, and add a section
	layout to the portal to create a new layout for a portal
	(must reference the harness on the Details tab of the
		portal record)
customize the appearance of a portal by applying a skin
Skins:
	contain instructions for formatting UI elements

To customize the appearance of a portal:
	choose between:
		1. applying the application skin to the portal
		2. configuring a skin for the portal

the application skin:
	Pega applies the skin for the active application to the portal.

if you…
switch applications, Pega applies the skin for the new
	application to the portal. (the default application skin.)
create a new portal, Pega configures the portal to default to
	the application skin. (the default application skin.)

To apply a skin to the portal, rather than reusing the application skin, select the Other skin option on the Details tab of the portal record, then enter or select the skin to apply.

For example, a portal is used across an entire organization. Within the organization, each division customizes its branding, including fonts and color schemes. In this situation, consider applying a skin to the portal to prevent changes to the portal when users switch between applications.

can add or remove content displayed in a portal:
	by updating the sections referenced in the screen layout.

to modify portal content, use Live UI to identify and open the section to update.

to override records provided in the UI-Kit ruleset for standard portals, copy the record into an application ruleset.

can add a menu to a portal by using a navigation record
A navigation record:
	defines:
		the entries in a menu
		the action performed when a user selects the menu
			item.
	used to organize the menus displayed in standard portals
		such as the Case Manager and Case Worker portals
	contains a list of menu items
		for each menu item:
			an associated click event and resulting action,
				such as logging off or displaying a harness.

Navigation records are organized in the User Interface category in the Records Explorer and the Create menu.

can update the icon displayed in the upper left corner of the portal.

Standard Pega portals:
	display the Pega icon.

To add an image or another non-text file to a Pega application, 	
	Pega creates a binary file record.

A binary file record:
	acts as a wrapper for the file, providing the security,
		inheritance, versioning, and deployment benefits of rule
		resolution.
To update the icon displayed in a portal use App Studio, go to Settings > Theme, and upload a new logo.
Pega creates a binary file to store your image.

Binary files are organized in the Technical category in the Records Explorer and the Create menu.

can customize the content displayed on the dashboard of the Case Manager portal
can display one or more dashboard widgets

dashboard widgets
	provide insight into the status and progress of open cases.
	are organized into two or more slots using a dashboard
		template.

To customize the dashboard, determine the template to use to organize the dashboard, then add widgets to each slot

can create dashboard widgets.

After you finish adding or removing widgets from the dashboard, you can publish the dashboard as a default dashboard for use by managers.
Once a manager customizes and publishes their dashboard, they no longer view any changes you make to the default dashboard.

add the portal to one or more access groups to provide users with access to a user portal
list the portal in the Available portals section of the Definition tab of the access group record.

For each access group, you select one portal for Pega to use as the default portal.

Non-default portals are available to users from either the Operator menu or the Launch menu, depending on the portal.

update the portal header to use the new logo image to replace the logo image in a composite portal
 App Studio, from the Explorer panel, select Settings > Theme to open the application theme.
Under Logo, click Upload logo to open the File Explorer.
Select your image file and click Open.
The image to the left of the Upload logo button updates with the image you selected.
In the header, click Save to complete your configuration.

To replace the logo image in a composite portal:
	update the portal header to use the new logo image:
 App Studio > Explorer panel > Settings > Theme
Logo > Upload logo > File Explorer.
Select your image file > click Open.
header > click Save

LEARN “SKINS”
Module 22 old content:
(maybe below)

configuring a skin:
	styling your user interface
	generates a Cascading Style Sheet (CSS) for the application



skin
	defines the responsive behavior and formatting:
		colors, fonts, images, and layouts
	generates the styling for the application
	defines the responsive breakpoints applied to dynamic layouts:
		enable your application to work on various devices:
			tablets vs mobile phones
	applies formatting through the use of mixins and formats
within a skin > configure the formats and mixin

mixin
	defines a set of style attributes that can be reused
	allow for defining efficient and clean style repetitions
	easy to update
	define a set of styles or inherit styles from another mixin
	four categories:
Typography: Allows you to configure anything related to text, like font, font size, or color
Background: Allows you to configure background colors of elements
Border: Allows you to configure borders and gradient effects
Combination: Allows users to create complex mixins that incorporate multiple mixin types
	applied at an application level
	can also be applied to a portal
	should be the first point of customization:
		most reusable

format
	defines the styling of a specific UI component
	configure by setting the properties or inheriting styles from a mixin

component
	an element that you can style within the skin
can have one or more formats defined
have a default format
four categories:
General: Modal Dialogs, Errors
Layouts: Dynamic Layouts, Trees and Grids
Controls: Buttons, Dropdowns, Labels
Reports: List View, Paging Bar


the relationship between mixins, formats, skins, and what you see when you view the application:

a Link Control >
	specify a format >
		formats are defined in the skin >
			the styles of the mixin are loaded

when creating a skin to customize the user interface, answer:
Will you inherit styles from another skin?
Can you inherit styles from existing mixins?


skin inheritance.
	should use wherever possible
	allows a skin to inherit formats and mixins from a parent skin
	advantages:
		can create an enterprise-wide layering of styles.
		changes to parent skin are inherited everywhere

WAI-ARIA
	Web Accessibility Initiative-Accessible Rich Internet Applications
	a technical specification
	defines ways to make Web content and Web applications more
		accessible to people with disabilities


accessibility roles.
	specific attributes applied to user interface elements
	enable communication between assistive devices and Pega
		applications about UI elements

accessible access groups
	given accessibility features
accessibility ruleset provisioned

PegaWAI ruleset
	contains rules that include the WAI-ARIA role settings on
		dynamic layouts
	describe the type and structure of elements on the page
includes properties to describe the state of interactive
	elements

enabling accessibility without the PegaWAI ruleset




Accessibility Inspector tool
	allows you to identify and rectify accessibility issues with
		your application
	opened by clicking the Accessibility icon in the Developer
		toolbar
	has two main features that aid accessibility design:
Disability preview:
None
Achromatopsia (Absence of color)
Deuteranopia (Red Green confusion)
Protanopia (Red Green confusion)
Tritanopia (Yellow Blue confusion)
audit your UI by category:
Content – For example, an icon is missing helper text or a label.
Structural – For example, the heading level hierarchy is out of order, which can potentially confuse screen readers.
Interactivity – For example, the skip to content navigation is missing on the harness, which prevents users from using the Enter key to navigate to the main content easily.
Compatibility – For example, a tab group layout, which is deprecated, is used instead of a layout group.

To implement the PegaWAI ruleset
add and save the ruleset to the list of production rulesets in the Advanced section of the application Definition page
add and save the ruleset to the Production rulesets list under Run Time Configuration on the Advanced tab of the
select the Enable accessibility add-on check box.

Dynamic UI
differs from responsive UI:
	Dynamic UI:
		what elements appear on the form
	Responsive UI:
		how form elements align and shift
configure in section rules
to configure:
		identify the UI element target that you want to dynamically
			show, hide, or disable
		decide at which level (section, layout, or field) to apply the
			condition
	uses an an event-action model
	two types of events:
property-based events:
occur when a data value changes or when a value
	meets specific criteria.
user event:
occurs when an end user takes some action
	(event types often overlap)

Run visibility condition on client option
	reduces the number of server trips and avoids page refreshes
	displayed when you use the If not blank, If not zero, or Condition
		(expression) visibility options
	causes the clipboard page to include all the possible data it can
		display
	causes the application to refresh the section based on the visibility
		condition

action sets
	consists of an event, an action, and (optionally) conditions.
Event – a trigger performed by users
Action – a response performed by the system
Conditions – restrictions such as when rules
	requires at least one event and one action
	can also create multiple for a single control or layout
	can define action sets for a single control or an entire layout



Localization wizard
	automates steps to create language-specific versions of your
		application
	identifies field values and text strings that are used in user
		interface rules
	text strings in:
		harness, section, list view, summary view, message,
			and portal rules.
	harness, section, and navigation rules are automatically
		configured to be selected for localization
	use field values for labels and confirmation notes
	use paragraph rules for text and customizing 	
		correspondence
		Base.html and Translation.html
	use work party rules in a ruleset used for each language-
		specific localization

To ensure you design your application for localization:
	create field value rules for capturing labels and
		notes
	paragraph rules for instructions and messages, 	
	correspondence rules for emails and other
		correspondence.

Language packs
	collections of language-specific rulesets that support
		localization of the Pega Platform. If language packs are
		available for your target languages
	install the language packs before you run the Localization
		wizard.
if a language pack is not available for one of your target
	languages:
			use the Localization wizard to export the Pega
			rulesets and translate them along with the 	
			content on your UI forms
	do not localize the content on your UI forms
		(automatically)
	only translate rules relevant to your application
	unlocked and, by default, enabled for localization
	(sometimes must) manually set records to Localize before
		running the Localization wizard






























STEPS TO LOCALIZE:



Pega Web Mashup
	used to embed a Pega application in a web page or
		application
	embedded HTML code
	accesses the Pega Platform application from the web page
	can exchange information with the host page to customize
		the user interaction
	to generate:
	create a Mashup channel
	(Channels and Interfaces landing page)
	customize the code as necessary
	embed the code into the web page
	configure a list of approved sites for the site origin
	consists of:
		an HTML SCRIPT tag:
			accesses Pega Platform
		an HTML code block:
			identifies the action performed by the mashup
			consists of either an IFRAME or DIV tag
			represents the Pega Gadget

Gadget = the application view provided by the Mashup

one IFRAME or DIV element per gadget

support a set of attributes for customizing behavior
single quotation marks encapsulate the value for each attribute
PegaGadget
	an IFRAME/DIV attribute
	specifies the name of the gadget

deploying a mashup
	copy the generated code to the appropriate location on your
		web page

To configure a mashup:
	Channels and Interfaces landing page
	create a Mashup channel in Channels and Interfaces
	enter a descriptive name, mashup description, and the URL
		of the system hosting the Pega Platform application
		(defaults to the current system URL)
	select the action performed by the mashup
	all actions require you to specify:
The thread in which the action is performed
A fixed or automatically-sized IFRAME
 data-pega-resizetype
	DIV tag attribute
	controls the size of the widget
	data-pega-resizetype = 'fixed'
		a fixed space
	data-pega-resizetype = ‘stretch'
		expands to fill the available space on the
			page
	default = stretch
	best practice:
		if set to ‘stretch’:
			set overflow property to auto:
				style=‘overflow:auto'
The action prompt (for example, the action is invoked when a page loads or is deferred after a button click)
Optional attributes allow you to:
Specify the skin used to format the mashup contents
Encrypt traffic between the web page and Pega Platform
Defer loading of the mashup
Select the skeleton used to organize the contents of the mashup
	Click Generate mashup code to create the mashup code
	configure the application permissions of trusted domains
trusted origins
	listed on the Integration and Security tab of the
		application rule in the Mashup security section.
	include the site that you are using to test the mashup.
	can configure the mashup gadget to read data from and
		send data to the hosting page or another mashup
		gadget
		three options for passing data to or from:
data-pega-event-onpagedata attribute
doAction() Javascript function
call using:

pega.web.api.doAction([gadgetname],[action],[parameters]).
a script within the gadget DIV tag

nonliteral values as attribute or parameter values, use:


can configure a Pega Web Mashup gadget to use the value of a DOM element set the data-pega-parameters attribute:

data-pega-parameters=“{Customer:’[page\id\dom_element_name]’}"

To use the value returned by a function on the page JavaScript as the value of a mashup attribute or action parameter
	use[page/function/token]
		token: a string
	specify the function used to retrieve the value using the
		data-pega-event-onpagedata attribute.
	use the data-pega-event-onpagedata to identify the

		function that returns the appropriate class name based
		on the token

getGadgetData and setGadgetData actions
	read and set property values in a mashup gadget

example:
	to display the value of the pyID property on the host page
		use:

pega.web.api.doAction(“gadgetName", "getGadgetData", "[gadget/gadgetName/.pyID]").

	to set the value of a property
		use:
pega.web.api.doAction("gadgetName", "setGadgetData", "propertyReference", strValue)

pega.web.api.doAction("gadgetName", "setGadgetData", ".QuoteType", "Auto").

the Firefox browser
	converts attribute names to all lowercase letters
to prevent this
	use object literal notation.

data-pega-parameters="{Customer:'[page/id/Account]', Level:'gold'}"

If you need to style a mashup to match a company web site:
	apply the skin rule by configuring a portal for web mashup
		users using a portal skin
create a portal and assign the portal to the access group for web mashup users. A web mashup may be intended for unauthenticated users or customers who lack a Pega operator ID. In this situation, you can configure the access group created for mashup users to reference the portal.
create a portal skin to configure the application styling for web mashup users (who interact with the application using the portal). Pega identifies the skin rule associated with the portal rule, as well as the HTML that streams back to the mashup, and uses the styles specified by the skin rule. The portal skin can inherit from the application skin, minimizing the customization needed for the web mashup.

Internet Application Composer (IAC) Authentication
	a standard authentication service
	web.xml
		contains a servlet named IAC
			references this authentication service instance.
				references standard IAC authentication
				activities by default
			designed for quick Pega Web Mashup
				implementation in a design environment.
			extracts values from custom HTTP headers in the
				HTTP request to identify an authenticated
				operator
		remove the IAC servlet from web.xml if you are not
			using Pega Mashup.
Reporting (5%)
Designing reports with multiple sources
Information Exchange (18%)
Exchanging data with other applications
Simulating integration data
Addressing integration errors in connectors
Managing integration settings
Exposing an application with a service
Database Updates
Keyed Data Pages

call a connector from a data page or activity
do data page
a connector rule is called. invokes the service.

Connectors
Connectors
	facilitate integration
	protocol specific
	establish the link to a external system
	implement the interface of the service running on the
		external system
	map the data structure of the application to the data
		structure used by the service called
	can parse, convert, and map data in either direction to or
		from the clipboard
	can invoke them from data pages and activities
		data pages: read, or pull, data from external systems
		activities: write or push data to external systems
invocation of a connector:
	five components:
Data page or activity – Specifies the connector to use and data transforms for request and response mapping
Data transforms – Maps the data structure of your application to the integration clipboard pages, which correspond to the format expected by the service
Connector rule – Uses the integration clipboard pages to build the request according to the protocol and service definition, invokes the service, and parses and places the response on the integration clipboard pages
Mapping rules – For most connectors, mapping rules are used to build outgoing and parsing incoming messages
External system – Exposes the service called

steps to execute connector invocation:
The data page or activity executes a data transform to map the data from your application to the integration clipboard pages.
The data page or activity invokes the connector:
The connector is initialized based on its type. The type is the protocol the connector supports.
The connector maps the request data to the protocol-specific format using the mapping rules specified for the connector. Do not confuse this mapping with data transforms. This mapping is between the clipboard and the format required by the protocol.
The application sends the request to the external system.
The application receives the protocol-specific response. The response data is parsed using the mapping rules specified in the connector rule and placed on the integration clipboard pages.
The connector is finalized and returns control to the data page or activity.
Finally, a data transform maps the response data from the integration clipboard data structure to your application.
supported connectors:
	SOAP, REST, SAP, EJB, JMS, MQ, File, and CMIS.
multiple mappings with multiple data transforms!




services
	facilitate integration
	allow you to expose
		the data
		functionality of your application to external systems
	implement the interface of a specific protocol
	provide data mapping for outbound and inbound content
	can parse, convert, and map data in either direction to or
		from the clipboard
	data can be in XML, fixed record structure, or separated by a
		delimiter character format

service listener
	listens for incoming requests
	provide the Pega Platform with information the platform
		needs to route incoming messages to a specific service
	establishes a requestor
requestor
	the processing and data associated with the incoming
		request initiated by the external system
	sometimes provided by the Web or Application Server
	sometimes provided by Pega

the procedure for processing a request from an external system:
The service listener instantiates the protocol-specific service to provide communication with Pega and establish a requestor. The service listener optionally performs authentication.
The service parses the incoming request and maps the request onto the clipboard. The service then invokes the service activity. The service activity provides the logic for the service.
When your service activity is complete, control is returned to the service. The service builds the response using data on the clipboard, and the service listener sends the response to the external system.
Supported services
supported services
	SOAP, REST, EJB, JMS, MQ, and File.

the only thing the connector rule can touch is the data pages / mapping rules
connector vs. service:
connector:
	role of client
	request data or services from another system
service
	role of server
	respond to requests from another system



Applications
	multiple types of users: case workers and managers.
	each type: different interactions with the app
	need different access to tools and info

a user portal:
	the user’s view into the application
	Pega has ootb, default portals that can be customized


(“Harness records”)
a harness
	organizes the structure of a portion of the user display
	organizes work forms or portals
	promotes modular design and reuse of ui components










four standard harnesses to organize the content of user forms.


also specialized harnesses for organizing user forms in screen flows(?)

Harnesses that allow users to select a flow action and complete an assignment contain an action area.

action areas:
	display the content for the selected flow action when a user
	selects a flow action to perform, such as an approval form
Harnesses that organize a user portal contain a screen layout. a screen layout:
	organizes the elements of the browser window into a main
		content pane and smaller surrounding panes.
Example: the Header Left screen layout divides the portal into three areas: a header, a smaller left pane for navigation, and a larger content pane for displaying cases and reports.

Each pane of the screen layout references a section that contains the content displayed in the pane. To modify the content in these sections, you use Live UI to identify and open the section to configure.

can customize the default end-user portals provided in Pega
if the customization is complex enough, you can also create a custom application portal.

a portal is represented with a portal rule.
a portal rule:
	identifies:
		the type of user expected to use the portal
		the harness used to organize the portal contents
		the skin that defines the branding applied to the portal.

To configure a Pega portal:
	identify the intended user role and portal type
	organize the layout of the portal
	customize the branding of the portal
	customize the content and tools available to users
	configure an access group to reference the portal if
		necessary.

Portal records are listed in the User Interface category in both the Records Explorer and the Create menu.
Portal records are classless and do not appear in the App Explorer.

configure a portal for use by either users or developers.
User portals:
	intended for users who do not routinely need to update rules
	require less memory on the user's workstation than
		developer portals
	can configure delegated rules in a user portal
Developer portals:
	intended for system architects and business architects, who
		routinely update rules.
	configures rules on a daily basis


Two portal types: composite and custom.
Composite portals:
	defined by harnesses and sections
	cross-browser compatible
	support Microsoft Internet Explorer, Mozilla Firefox, Apple
		Safari, and Google Chrome browsers.

Custom portals:
	defined by an activity.

Best practice: configure a new portal as a composite portal.

The Details tab of the portal record is where you can select the user role and portal type on

the organization of the portal:
	affects how the contents of the portal are presented to the
		user.

default user portals:
	organized with:
		a header
		a left navigation pane
		a content pane.

change the screen layout used in the harness to change the
	layout of a portal.
use Live UI to identify and open a section to configure and modify
	the contents of a section
create a new harness in the Data-Portal class, and add a section
	layout to the portal to create a new layout for a portal
	(must reference the harness on the Details tab of the
		portal record)
customize the appearance of a portal by applying a skin
Skins:
	contain instructions for formatting UI elements

To customize the appearance of a portal:
	choose between:
		1. applying the application skin to the portal
		2. configuring a skin for the portal

the application skin:
	Pega applies the skin for the active application to the portal.

if you…
switch applications, Pega applies the skin for the new
	application to the portal. (the default application skin.)
create a new portal, Pega configures the portal to default to
	the application skin. (the default application skin.)

To apply a skin to the portal, rather than reusing the application skin, select the Other skin option on the Details tab of the portal record, then enter or select the skin to apply.

For example, a portal is used across an entire organization. Within the organization, each division customizes its branding, including fonts and color schemes. In this situation, consider applying a skin to the portal to prevent changes to the portal when users switch between applications.

can add or remove content displayed in a portal:
	by updating the sections referenced in the screen layout.

to modify portal content, use Live UI to identify and open the section to update.

to override records provided in the UI-Kit ruleset for standard portals, copy the record into an application ruleset.

can add a menu to a portal by using a navigation record
A navigation record:
	defines:
		the entries in a menu
		the action performed when a user selects the menu
			item.
	used to organize the menus displayed in standard portals
		such as the Case Manager and Case Worker portals
	contains a list of menu items
		for each menu item:
			an associated click event and resulting action,
				such as logging off or displaying a harness.

Navigation records are organized in the User Interface category in the Records Explorer and the Create menu.

can update the icon displayed in the upper left corner of the portal.

Standard Pega portals:
	display the Pega icon.

To add an image or another non-text file to a Pega application, 	
	Pega creates a binary file record.

A binary file record:
	acts as a wrapper for the file, providing the security,
		inheritance, versioning, and deployment benefits of rule
		resolution.
To update the icon displayed in a portal use App Studio, go to Settings > Theme, and upload a new logo.
Pega creates a binary file to store your image.

Binary files are organized in the Technical category in the Records Explorer and the Create menu.

can customize the content displayed on the dashboard of the Case Manager portal
can display one or more dashboard widgets

dashboard widgets
	provide insight into the status and progress of open cases.
	are organized into two or more slots using a dashboard
		template.

To customize the dashboard, determine the template to use to organize the dashboard, then add widgets to each slot

can create dashboard widgets.

After you finish adding or removing widgets from the dashboard, you can publish the dashboard as a default dashboard for use by managers.
Once a manager customizes and publishes their dashboard, they no longer view any changes you make to the default dashboard.

add the portal to one or more access groups to provide users with access to a user portal
list the portal in the Available portals section of the Definition tab of the access group record.

For each access group, you select one portal for Pega to use as the default portal.

Non-default portals are available to users from either the Operator menu or the Launch menu, depending on the portal.

update the portal header to use the new logo image to replace the logo image in a composite portal
 App Studio, from the Explorer panel, select Settings > Theme to open the application theme.
Under Logo, click Upload logo to open the File Explorer.
Select your image file and click Open.
The image to the left of the Upload logo button updates with the image you selected.
In the header, click Save to complete your configuration

configuring a global resource setting (GRS) for an integration
create a class for the references to external systems. You place all GRS rules in the same ruleset as the integration rules
you determine which environment references to external systems will use the feature
you create a page property for each environment reference. Continue the process by creating a data transform to assign values to the environment properties using utility functions
you create a data page to tie these artifacts together.

Create SOAP Integration wizard.
Designate a class for the references

implementing GRS
create or identify a class to contain environment properties that represent the external system references. As a best practice, create the class in the base class of the integration. This helps avoid later confusion when users access multiple integrations, because each integration has its own data page. Create a class called Env in the base integration class. In this case, create the Env class in the Inventory class generated by the Create SOAP Integration wizard.
next step in implementing the GRS is to determine which environment references to external systems use the feature. Create a page property for each environment reference. For SOAP connectors, use the class Embed-Env-SOAP.
you must create a data transform to assign values to those properties. This data transform is used to source a data page. Hard coding the environmental variables in the data transform requires you to unlock the ruleset to update the values. As a best practice, never unlock a locked ruleset. Pega provides several ways of specifying environmental variables without requiring unlocking rulesets. The following table provides the options with relevant utility functions used to obtain the value.
The environmental variables should not be packaged as part of the application since that would overwrite the settings on the target system when an application is migrated.
In this example, a Dynamic System Settings is used to store the values. Because Dynamic System Settings are data, they can be updated without the need of unlocking a ruleset.
create is a data page that ties everything together. As a best practice, choose a name that includes the name of the integration to help avoid later confusion when users access multiple integrations (and each integration has its own data page). For object type, enter the class created in the first step and select the node scope. Use the data transform created to populate the data page.

to refer to the values on data page with GRS:
=DataPageName.IntegrationPropertyName.FieldPropertyName

execution-time sequence for determining the Endpoint URL for the SOAP connector:
The SOAP Connector is invoked.
A data page property is referenced.
The data transform for the data page is executed if the page is not already available on the clipboard.
The data transform invokes a utility function to obtain the value of, for example, a dynamic system setting.
The value is used by the SOAP connector to invoke the service.

Connectors are used to read data from or write data to an external system. Two types of errors can occur when integrating with an external system:
Transient errors typically do not last long; they correct themselves over time. For example, the connector is unable to connect because the application is being restarted and is temporarily unavailable.
Permanent errors are typically due to a configuration error or an error in the remote application logic. For example, an invalid SOAP request is sent to a SOAP service. In this scenario, the error persists until the SOAP request message is fixed.

best practice
	include error handling for all connectors

transient errors
	post a note to alert the end user that the integration failed
	ask the user to retry at a later time
	connection can be automatically retried.
permanent errors
	write the details to a log file so that errors can be 				
		investigated and fixed
	implement a process for the investigation and fixing

how errors are detected
	depends on how the connector is invoked
	Connectors can be invoked by data pages or activities.

data pages and activities invoked:
Add error detection to all data pages and activities
Invoke a reusable data transform to handle errors

pxErrorHandlingTemplate
	template data transform for handing errors
	used to create a reusable error handling data transform
	can be used with both data pages and activities
	resides in the base class
	shipped as part of the product

each connector has an error handling flow
	automatically invoked if the error is not detected by another
		mechanism
	always enabled

data pages used with connectors
	read data from an external system
	loaded on demand
	errors must be handled as part of the data page load
		mechanism
	type of data source
		affects how errors are detected and handled
	use response data transform to detect errors
connectors
report definitions
lookups
invoked after the connector call is complete
		use a when condition to check for any error messages
			on the page
apply the reusable error handling data transform
	use a transition condition in the activity step to detect errors
activities
apply the reusable error handling data transform
If the error is not detected in the data page or the activity, then the error handler flow for the connector is invoked to detect the error.

immediate need for the response:
Display an error message
Write the error to the log file

standard utility functions included in the template error handling data transform:
Get available messages
Clear messages
Add a message to the data page
Write a message in a log file
Send an email

if the returned error is temporary
	may give the user the option to retry the connector
	configure the data page refresh strategy:
Create a when condition that returns true when there are no error messages.
Set the Do not reload when setting so the data page does not reload if there are no error messages.

When the response is not immediately needed:
	consider using an error handler flow
		configured in the service tab for the connector

connectors
	use the standard ConnectionProblem flow
		can be copied and customized
		may also choose to create an alternative error handler
			flow

When an error occurs, the original flow execution is paused. Control is handed over to the error handler flow.

FlowProblems
	the flow that processes the case if there is no transient error,
		and the connector is retried
	either routes the work item to a problem flow workbasket or
		notifies an operator about the issue.
	The operator may:
Retry the connector
Resume the flow without retrying the connector
Restart the initial flow
Cancel the error handling flow

two most common ways to expose your application as a service:
	create a web service
	leverage the Pega API

work the same way
	a request is made to a URL
	a response is returned

difference:
	how you communicate with the service.

The Pega API
	provides a standard set of services
		new case creation
		assignment processing
		access to data pages
		get documentation
	built-in REST/JSON services
	call services using standard HTTP methods:
		GET, POST, or PUT


exposing your application
	create a SOAP web service
		communicates using the SOAP protocol
		passes XML messages
	converts XML messages to Pega objects
	processes them
	converts those Pega objects back to XML
	uses a combination of rules to process request:


how Pega processes a service request
A client application sends a request to your application.
The service listener listens for incoming requests. This functionality is provided by either the Web Server, Application Server, or Pega Listener.
The service listener receives the request and instantiates the Service API to provide communication with Pega. Then, the Service API hands control over to Pega.
Pega looks up the service package and related service rule, using the access group specified in the service package.
Pega then establishes the service requestor and optionally performs authentication based on security credentials that are passed in the request. Once authenticated, service processing continues using the authenticated user’s access group, not the access group that is contained in the service package.
The request is mapped, using the instance of an XML Parser rule, onto the clipboard according to the specifications contained in the service rule.
Control is passed to the service activity, which provides the logic for the service.
The service rule maps the clipboard data to form the response data, using the XML Stream rule.
The service listener receives the response from the Service API.
The service listener sends the response back to the application that made the request.
The client application receives the request.

CreateNewWorkResponse
	an XML parse rule generated by the SOAP Service Wizard
	used to add properties to the SOAP service (or something)

Integrating with external systems
	additional problems
		network errors
			firewalls
			incorrect authentication or credentials
			system failures
		can be anticipated at design time
		addressed with specific actions
	unexpected errors
		may still occur
		just as important to address promptly


Best practice
	configure clipboard property values to communicate service
		errors to the calling application

when service encounters a processing error
	a condition evaluates to true
	application returns a defined error message

conditions for defining error response messages:



if the mapping, security, and service errors are not defined
	returns standard exceptions: 		
		AuthenticationException
			supplied credentials are not valid

when you create reports
	Pega uses
		the Pega class organization
			to find and retrieve information from tables
		class mappings


any class that has instances
	can be mapped to a database table

when you generate reports
	you are retrieving data from rows in database tables

When designing reports
	need to know which table has the data
	how the data is mapped

information for different types of information may be stored in
	separate tables

to combine the information in a report
	use class names to identify in which tables the information is
		stored

Data-Admin-Workbasket
	where the assignment routing data is contained
	(not workqueue or worklist!)


two records to identify the database table a class is mapped to:
	Database
		identifies how Pega connects to a specific database for
			the named database
		contains connection information so Pega can access
			the database
		establishes an alias that can be referenced elsewhere, 	
		can be configured to use either JNDI or JDBC url for
			the database connection
		standard databases in a database record:
PegaRULES maps to a database where all Pega rules and system data are stored.
PegaDATA maps to a database where data and work instances are saved.
	Database Table
		identifies a specific table in a specific database
		specifies the corresponding Pega class
		used to identify which table to write case data when a
			user creates or updates a case.

class group
	a designation for a class
	multiple classes store data in the same table
	also called a work pool
	cause the system to store instances of similar or related
		case types together in a single database table
	create a report in the class group to return all instances 		
		of the classes of the class group
	class group mappings
		displayed in the Database Class Mappings landing
			page




three common reports
work
assignment
history
	use properties from a variety data tables

work reports:
when a case is created
	standard properties in the Work- base class define the case
	properties:
pyID, a case identifier
pyWorkParty, the work parties participating in a case
pyCustomer, customer identifier (an account number)
pyStatusWork, case status

assignment reports:
Cases requiring user interaction are assigned to a user during processing. Each time a case is assigned, Pega creates an assignment object. When the case is completed and advances to the next assignment, Pega creates another object. If the assignment is routed to an operator, Pega saves the object to the database table named pc_assign_worklist. If the assignment is routed to a workbasket, Pega saves the object in a database table named pc_assign_workbasket.
Some commonly used properties that are specific to assignments include the operator who has the assignment (pxAssignedOperatorID) or the name of the flow rule for the assignment (pxFlowName).
When creating assignment reports, you often use pxRefObjectKey — this is mapped to pzInsKey. The pxRefObjectKey property allows you to relate the assignment to the case.
For descriptions of many standard properties used in assignment reports, see the Help topic Standard properties in the Assign- base class.

history reports:
history classes
	contains audit trail data
			automatically captured during case processing
	use properties in the History- and History-Work- classes
		pyHistory
			identifies the event that caused the history event
		pyPerformer
			identifies the operator who completed the event
				recorded in the history instance
		can be used to design performance-based reports

can relate properties in multiple…
	database tables
	classes to combine data in a single report
Use case and subcase relationships to show subcase data along with the parent case data
Use case and assignment relationships to show how the system processes assignments for a specific case or a subcase
Use case and history relationships to monitor performance

class or database table relationships
	are created in a report definition
	don’t specify database tables to define joins
	can either configure class joins or you can reference
		association rules



class join
	a class relationship built in a report definition

steps to create a class join:
Determine the class to which you are joining.
Create a prefix that in combination with the class name serves as an alias for the joined class.
Decide whether you want to include or exclude instances that do not match.
Create a filter that describes how you relate the classes.

specify a class as the primary join
	in the report definition form
determine whether the join is
	to an implementation class or to a framework class
specify the class you are joining
	on the Data Access tab
	on a report definition form
	in the Class name field you
the prefix
	combined with the class name
		serves as an alias for the joined class and its properties
	helps you identify the properties in the joined class

In the Type field, you specify how you want the system to join the data by selecting one of the following options:


create a filter condition
	defines the relationship between the classes
	uses one or more properties to establish the relationship

cannot join to a class in a different database than the Applies To class of the report

association rules
	join multiple classes
	can be reused in any report (unlike a class join)

the association rule prefix
	appears on the Data Access tab in the Associations section

report on records in multiple classes mapped to one or more data tables
choose whether to:
reference an association rule
configure a class join
 Subreports
	enable you to reference results from any report definition in a
		main report
	can be run like any other report
	a way of combining data using IN, HAVING, and WITH
		clauses.
	can be defined in classes different from the main report
	can access data in different classes similar to the way you
		would use a class join or an association
	can satisfy complex reporting requirements
	can filter results
		include or exclude data
	can display aggregate calculations on specific rows in a
		main report.
	two different methods to create a subreport:
join filters
aggregation

binary large object (BLOB)
stores case data
	a field in a Pega relational database
	accessed when a user opens a case
	three advantages:
Unlimited storage size
Flexibility
High performance
	penalizes performance for reporting
		must decompress the BLOB to extract the required data = slow






To improve report performance:
	a hybrid data storage model
	store data both in
dedicated indexed columns
in a BLOB field
	must optimize the property for reporting to use indexed columns
		called "exposing" the property
	Pega writes data to both the property field and the BLOB field
	default optimized properties:
The creation date of a case
The status of a case
The case ID

keyed data pages

save information from an outside server / database onto a data page in the application in a [key:value] pair

good for information that doesn’t change frequently and is accessed frequently.

keyed data page
	an alternative to having two separate data pages
allows you to specify keys

to configure keyed data pages:
Define the data page Structure as a List.
Select Access pages with user defined keys.
If you want the data page to return more than one instance, select Allow multiple pages per key to filter a large list to create a smaller list.
Specify the Page list keys used to access the list entry or list entries. To specify multiple keys, select Add key.

Data access patterns
	simple mechanisms to manage data
impacts the storage and refreshing of data in a case
	three types:
system of record
always references the system of record
data is always current
data is not stored in the property
does not contain a copy of the data
Data Access section
Refer to a data page option
reloads according to the refresh strategy specified
	on the data page
			a data page parameter is updated:
				a new data page is created
snapshot
copies data
only current as of when data was copied
when need to copy data to a case at a specific
	point in time
			not retrieved from the source again unless the
				request parameters change.
				impacted data is copied to the property and
					overwrites the existing data
Data Access section
Copy data from a data page option
			may also choose to specify a data transform for
				data mapping in Optional data mapping
reference
use data without adding that data to the data
	model for the application
used often to populate UI controls, such as drop-
	down lists
			To implement:
				reference a data page from a record other
					than a property
			the data reloads according to the refresh strategy
					specified on the data page

With the reference pattern,. The control always points to the current version of the data page.

https://academy.pega.com/topic/database-updates/v1/in/2866/5306

pegarules vs pegadata database

each case => own row
case data stored in the blob

px,py,pz not in blob. pegasystem maintains this

external classes do not belong to a class group

an external class maps Pega properties to database columns.

(do not have instances, or pxObjClass properties)

4 types of Obj methods. used with activities (…and databases?)

SQL connect rules => literally writign sql



querying database commands.

“symbolic indexes”

Current keyword => tells you where are as you are looping through a list

“First” does not exist as a symbolic index because “First” is always index 1.

Obj- methods using activities
	allows for advanced processing to a database
	a series of steps: operations on the database

	Obj-Open or Obj-Open-By-Handle
		loads and instance of a class stored in externally
		creates a clipboard page of the opened instance
	Obj-Browse
		searches the database
		retrieves multiple records
		copies them to the clipboard as an array of embedded
			pages
	Obj-Refresh-and-Lock
		tests if a clipboard page is current if a lock is held
		acquires a lock if unlocked
		refreshes data page if stale
	Obj-Save
		if the WriteNow parameter is selected
			saves contents of a clipboard to the database only
			used for immediately rereading an instance before
				a commit
		if the WriteNow parameter is NOT selected
			operation becomes a deferred save.
	Obj-Save-Cancel
		cancels the most recent uncommitted Obj-Save method
			so that the instance is not written as part of a later
			Commit operation.
	Rollback method
		cancels or withdraws any previous uncommitted
			changes to the PegaRules database (and to
			external databases accessed from an external
			class) from the current thread.
	Obj-Delete
		deletes a database row identified by a page on the
			clipboard
		removes an instance from the database
	Obj-Delete-By-Handle
		deletes an instance using its unique ID without requiring
			a page on the clipboard
		removes an instance from the database

Symbolic indexes
	used to access items in a page list without using explicit
		index number
	<APPEND>
		adds an element to the end of a value list or page list
			property
	<PREPEND>
		inserts a new element into a value list or page list
			property as the first element; all existing elements
			are “pushed down” by one
	<INSERT>
		inserts a new element into a value list or page list at a
			numeric index position; any elements with the
			same or higher index value are “pushed down”
			one
	<LAST>
		Sets or retrieves an element value from the end of a
			value list or page list property
	<CURRENT>
		Use differs depending on where it is used




SQL Connect Rules
	allows you to execute a SQL command or stored procedure
	invoked from an activity or using RDB methods
	SQL Connect rules present in your application
		listed in the Application Explorer
	all SQL Connect rules
		listed in the Records Explorer
	four tabs to enter statements:
		Open
		Delete
		Save
		Browse
	History tab
		see rule history
Security (3%)
Securing an application: Access control
the Access Manager
	simplifies the configuration of security records
	an easy-to-use interface for managing application security
	In Dev Studio > Configure menu
		Org & Security > Access Manager
	three tabs for configuring security settings in an application.
Work & Process tab
control access to instances of a specific case type
			Access Deny
				overrides an Access of Role to Object record
					applied to the same class and role
Tools tab
control access to tools such like the Clipboard and
	Live UI for end users
Privileges tab
control access to records like flow actions and
	correspondence records.

levels of access:
		Full Access
		Conditional Access
		No Access

Access of Role to Object and Access Deny records to
	automatically revoke access to actions and tools as the
	application advances towards production.
An Access of Role to Object record grants access for action on a
	scale of 0 to 5. A zero means the action is denied. The
	remaining ratings are compared to the production level value
	of your system. If the privilege level is equal to or greater
	than the production level value of the system, Pega allows
	the action. If not, Pega denies the action.
An Access Deny record denies access for an action on the same
	0 to 5 scale. A zero means the action is allowed. If the
	privilege level is equal to or greater than that the production
	level value of the system, Pega denies the action. If not,
	Pega allows the action.
Production level values follow the software development life cycle. The greater the production level value, the closer the system is to a production environment.


Access When record
	conditionally allow access to an action, tool, or privilege
	not tested against the production level of the system
		(unlike numerical access control values)
	returns true/false, if access is granted

three access processing roles:
	users, managers, and administrators
	may divide these roles into more distinct roles
	extend the access control model by
		adding roles, then configure the roles

an Access Role Name record
	defines an access role
	a label that describes a specific set of application users with
		a unique job function

Access of Role to Object (ARO) records
+
Access Deny records
	identify the actions allowed or denied to users assigned the
		role.

create a new access role,
	must identify the appropriate permissions

an Access Role Name record
	simplifies the configuration and management of permissions
		by making other roles dependent on its configuration
	roles inherit the most permissive permission settings
	references at least one standard Pega Platform access role
		as a dependent role.
	permissions configured on an Access Role Name record
		override the permissions configured for all the
		dependent roles
	two options to customize:
If you need to customize a small number of classes for an access role, manually add the impacted classes to the Access Role Name record and specify the necessary permissions.
If you need to configure changes over many classes, clone the appropriate dependent role to override all the inherited permissions, and update each class as needed.

a Privilege record
	controls user access to a rule
	add a privilege to a rule, users can access the rule only if
		they are assigned a role that has been granted the
		privilege

user access to an application is determined by
	the access group to which a user belongs

When you create a new access group, enter the access group name in the format ApplicationName:JobDescription.

Access group records are listed in the Records Explorer, under the Security category.

each access group can only reference one application

switch between access groups
	In Dev Studio, from the Application menu
need to migrate all members of an access group to a new
	application version:
		update the application version on the Definition tab of
			the access group record

An access group
	specifies the portal or portals that members of the access
		group use to perform work
	identifies a default portal to present to users upon login
		remaining portals are available from the Operator menu
	identifies the access roles granted to members of the group
	identifies the types of cases that members of the group can
		create and process

A work pool
	a set of case types a user can work on in an application
	corresponds to a class group defined in the application or a
		built-on application
	represent the only case types that an access group can work
		on

two application elements cannot be configured in the Access
	Manager:
		work queues and attachment categories.

access control for work queues
	role-based

default@pega.com
	last resort for routing
	used when no other more specific or local work queue can
		be found


two levels of access control for attachments…
	a privilege
	when condition
	…to an attachment category to allow or deny attachment
		actions to users.
	restrict access to the attachment itself


To enable attachment-level access control
	select the Enable attachment-level security check box on
		the Security tab of the Attachment category record

Access Control Policy rule form
	configured after you configure the Access Control Policy
		Condition rule form
	choose from one of the following actions that limit what the
		user is allowed to do when accessing an object:
Read
Update
Discover
Delete
PropertyRead
PropertyEncrypt
Deployments (13%)
Creating a new application version
Configuring and validating application rulesets
Parallel development
Migrating an application
Application versioning
	a way to differentiate current and past application
	configurations.
two methods for creating new versions of an application
	lock and roll and skimming.
	both preserve prior application versions.
the application ruleset stack
	contains the rules and data types used by the application.
Rule resolution
	looks through all the minor and patch versions for the current
	major ruleset.

The act of using a version method begins a release cycle.

Every major version, minor version, and patch version represents a release cycle.

Lock and roll
	best for incrementing patch versions.
for small changes or patches
usually involve updating rules
HOW:
	create a new empty ruleset version.
	copy the necessary rules into the new ruleset version.
	the rule in the higher ruleset version overrides the rule
		in the lower version.
specify the new version number and whether to update the
		application record and access groups to reflect the
		ruleset version.
	three choices for updating the application rule:
You use Do not update my application when you update the patch version number of a ruleset without updating the application ruleset list. By default, the application rule only lists the major and minor version numbers for a ruleset, so incrementing the patch version number does not require a change to the application rule.
You use Update my Application to include the new Ruleset Versions when you are rolling out an application and updating the minor version or when the application rule lists the ruleset patch version number. You may enter a new application description. The default application description is current. If the current application is locked, enter the application password.
You use Create a new version of my application when:
You want to lock and roll the version and create a new application rule. You may enter a new application version, if different than the default one increment higher. You may enter a new application description. The default application description is current. If the current application is locked, enter the application password.
You want to allow people access to more than one version of the application (for example, during a phased roll-out or a test period).
You must select the appropriate ruleset versions for the lock and roll before proceeding. Most selections will be the most recent version. However, an earlier version of a ruleset might be appropriate. Application requirements dictate this decision.
You can view the rulesets in the current application version on the Ruleset Stack page. You can select the appropriate ruleset versions, enter the ruleset passwords, and select the update option in the Lock & Roll window.

Minor and major versions require application record and access group updates. Patches usually do not need the updates.
rule resolution will not find a rule that is only in a previous major version.

lock and roll wizard creates an empty ruleset.
the developer adds the appropriate rules to configure the new version.

above graphic:
an SSA ran lock and roll to create an empty 01-01-02 version. Then, an SA updated rule A in this version. When a user runs the application, they use the updated rule A and rules B and C from the 01-01-01 ruleset.
Then, an SSA ran lock and roll to create the 01-01-03 version. An SA copied rules B and C to this version to update them. Now, when a user runs the application, they use updated rules B and C from the 01-01-03 version and rule A from the 01-01-02 version. The copies of A, B, and C in 01-01-01 are all overridden.
Finally, the SSA ran lock and roll to create 01-01-04. An SA copied rule B to this version to update that rule again. So, when a user runs the application now, they use rule B from the 01-01-04 version, rule C from the 01-01-03 version, and rule A from the 01-01-02 version. The copies of A, B, and C in 01-01-01 are all overridden.

In a production environment, makes sense to reserve some space between the patch versions e.g. to roll from version 01-01-01 to version 01-01-05. The three free versions could be later used for patches if needed. In the meantime the development could continue on version 01-01-05 and 01-01-02 , 01-01-03 or 01-01-04 could be used for urgent patches.

Skimming
	better for minor and major versions.
	the process of saving the highest version of a rule into a
		new, higher ruleset version.
	applies mainly to resolved rules.
	useful when rule changes follow a logical sequence.
	two types of skims
		minor and major.
		correspond with the update types (major or minor/
			patch).
	a minor skim
		rules are stored in a higher minor version
	a major skim
	rules are stored in a higher major version.
	streamlines applications versions where rule changes follow
		a logical progression.

A rule's availability status determines if the rule is carried forward.


Blocked rules are carried forward because a blocked rule can block rules in other rulesets. You should maintain blocking relationships. ?

The key to skimming
	start at a major version and skim all minor and patch
		numbers into a new version, or start at some minor
		version and work up from there.



the skimming wizard
	identifies the highest-numbered version for each rule
		instance in a specified ruleset, and creates a copy with
		the number you specify.

best practice
	confirming the rules for the new version are checked in.
	locking all but the highest ruleset versions.

can run a search for checked out rules from the Checked Out
	Rules page.

In Dev Studio, navigate to the Configure > System >Refactor > RuleSets page to access the link to the Skim a RuleSet page. Indicate whether the update is to be a major version (NN-01-01) or a minor version (NN-MM-01), the rulesets to skim, and the version number to be created. Click Skim to begin the process.
The system creates a new ruleset version and begins copying rules. A status area shows progress and the results of the skim. The actual duration of the skim could be several minutes.
If errors occur, select the Total Number of Errors link in the lower right corner of the display form to view error messages. The error list is difficult to access after the results form closes. Print the list if you wish to research and address the errors after closing the form.
You must update application rules, the Requires RuleSets and Versions prerequisites array in RuleSet version rules, and access groups to reference the new major version after the skim completes. Log out and log in to access the new version.
Skimming only copies the rules in the major version you select. For example, if you skim 02-ZZ-ZZ into 03-01-01, rules in version 01-ZZ-ZZ are ignored.

You must have the zipMoveSkim privilege to perform the skim. Pega provides a default role for system architects which includes zipMoveSkim. SysAdm4 is the default system role for system architects and includes the zipMoveSkim privilege. When an application is in production, the SysAdm4 role becomes the Administrator role.

Application rulesets
An application contains a set of rulesets. The New Application wizard creates the initial application rulesets
When an application is generated
	the created rulesets include two rulesets for the application
		itself and two organizational rulesets
example:
	HRApps and HRAppsInt contain application configuration. 			TGB and TGBInt contain organizational rulesets, such as data
		structures.

rulesets ending in Int:
	integration rules



production rulesets
	have at least one unlocked ruleset version in the production
		environment
	include rules that are updated in the production environment
	most common: delegated rules
	configured in the Advanced tab on the application record
	needs to be specified in the access group

Ruleset validation
	performed every time a rule is saved
	guarantees that referenced rules are available on the target
		system when the ruleset is promoted
	does not affect rule resolution at run time
	applied only at design time.
	two options for the validation mode:
Application Validation
Ruleset Validation
	selected validation mode applies to all versions of the ruleset

The New Application wizard
	creates rulesets that are set to both Application Validation
	(AV) and Ruleset Validation (RV) modes

rulesets containing application rules
	set to AV mode
	reduces the difference between design and run time
rulesets containing organizational rules
	set to RV mode
	ensures strict validation on prerequisite rulesets when
		migrated.




AV mode
	rules:
		can reference all rules in the rulesets defined in the:
Same application
Rulesets belonging to any built-on application
		cannot reference rules outside the current application
			stack or above the defining application.
 	allows for codependent rulesets within the same application
	the Validation tool (Dev Studio > Configure > Application
		>Tools > Validation) quickly identifies invalid rules in
		the application

RV mode
	each ruleset version:
		defines one or more ruleset versions on which the r
			ruleset version depends
	only rules in the ruleset versions that are specified as
		prerequisites (and their prerequisites) can be referenced
		from the ruleset
	need to specify the base product ruleset Pega
		ProcessCommander as a prerequisite if your ruleset
		version does not have any prerequisite ruleset versions.

Pega-ProcessCommander ruleset
	lists all product rulesets
	do not need to list any product rulesets below Pega-
		ProcessCommander
	use the 99 patch version of the Pega-
		ProcessCommander ruleset as a prerequisite to avoid
		having to update the ruleset after product updates
	ruleset prerequisites cannot be cyclic



You can mix rulesets that use AV and RV.
MyCoPL [MyCo]
	ruleset in brackets is the prerequisite ruleset
rulesets with brackets use RV
rulesets without brackets use AV
with RV, you cannot call AV rulesets that are not in the prerequisites.

when configuring rulesets:
Only use RV for rulesets that are designed to be used across multiple applications, such as organizational rulesets, to make them easily portable and prevent the introduction of dependencies on a specific application.
Create applications for common rulesets; use the built-on functionality to include common rulesets in the application.
Include unlocked AV rulesets in one application only. Doing so prevents AV rulesets from referring to rules that may not exist in applications that do not contain the ruleset.
Run the Validation tool after implementation of critical changes or milestones (for example, changes to the application ruleset list or built-on application as well as changes made before lock/export).

ruleset validation
	governs rule development and import
 enforced during development
ruleset list
	sometimes called the ruleset stack
	governs rule execution at run time
	indicates the rulesets that are available to the application for a
		given operator session
	available in the operator profile Operator > Profile.
	order of the rulesets = important
	rulesets at the top of the list
		take higher precedence.
	assembled by Pega when an operator logs
	begins by locating the versioned application rule referenced
		on the access group of the operator
			sometimes the access group is provided as part of
				the requestor definition, organization, or
				division record
	consists of rulesets referenced on the application form
	built by stepping through the built-on applications until the
		PegaRULES application is located
	once located:
the PegaRULES ruleset list is added to the ruleset list
the built-on applications are processed recursively adding each application’s ruleset to the ruleset list on top of the previously added rulesets.
	If allowed to check out rules:
		a personal ruleset is added to the top of the list
			has the name of the operator ID
			contains the rules checked out by the operator.
	can be viewed:
		Dev Studio > Configure > Application > Structure >
									RuleSet Stack

Lock and Save button
	locks a ruleset to prevent changes
	cannot add or update rules in a locked ruleset.

when you check out a rule:
	you are creating a private copy to modify and test
	no one else may check the rule out until it is checked back in

two things to do to allow rules to be checked out:
	on the Security tab on the ruleset, select Use check-out? to
		enable checkout.
On the Operator record Security tab, operators need to have the Allow Rule Check out selected in order to update rules in rulesets that require checkout.

the private edit button
	displayed when a rule is in a locked ruleset version
	a special case of the standard checkout
	a copy of the rule is placed in the personal ruleset

can view checkouts and private edits:
	in the Private Explorer
	by using the check mark icon in the header.


branches
	help teams manage parallel development in distributed
		environments
branch
	a container for rulesets with records that are undergoing
		rapid change and development
	a branch for each team
	create and update rules without impacting other teams
allow each team to work within an isolated space

branch rulesets
	rulesets associated with a branch
based on (branched from) another ruleset
Contains rules that are in active development in the
	associated branch

when updates are complete
	each team resolves conflicts the system detects between the
		branch rules and other instances of the rules
	the system merges the updated branch rules into the original
		application

To develop rules in parallel using branched rulesets, each team follows these steps:
Creates a team application built on the main application
Creates one or more development branches in the team application
Grants access to the team application
Creates or configures rules using the branch
Merges each branch into the application rulesets when development in branches is complete and stable

Merge Branch Rulesets wizard
	moves branch contents into the base rulesets:
		makes the newest updates available to the wider
			development team
	helps identify potential conflicts so that you can address
		them before moving your changes.
	can either delete the branch or maintain it
	the Branch quality tab
		shows possible rule conflicts, guardrail warnings, and
			unit test coverage, on the branch rule
	for each ruleset, select the ruleset version into which to copy
		the edited branch rules you wish to merge
	defaults to the highest unlocked version of the ruleset in the
		base application
	displays a confirmation page when merged
	deleting the branch from the application after merging helps
		to avoid accidental duplicate merges





Applications
	consist of
		rulesets
		application data
		system data,
		other objects
			e.g. database schemas.
	move toward production
	must migrate (along with its components) among Pega
		systems
		e.g. have completed development:
			migrate the application:
				from dev env to a QA env
	may want to migrate only specific application components
		e.g. the updated rulesets or data objects included in a
			patch release

migration = like moving from one house to another house

create a manifest to keep track of items being moved.
some items like cabinets, plumbing, or wiring:
	not being moved.
	already built into the new house.
load the items on the manifest into a van
the items are:
	taken out of the van
	unpacked in the new house







a product rule
	the “moving” manifest
	identifies the application components you want to move to a
		destination Pega system
	lists the rulesets, data, and other objects that make up an
		application
	usually does not include standard rulesets and data
		those components are built into all Pega systems
	an instance of the Rule-Admin-Product class (RAP)
	can find product rules in the SysAdmin category in the
		Records Explorer
	put the contents of the product rule into a ZIP archive file
		(sometimes called a RAP file)
			the zip file consists entirely of:
				XML documents in Unicode characters
	copy the archive file to the destination system
	import the contents of the file into the system
	can create a product rule directly in the rule form
	can create a product rule in the Application Packaging
		wizard:
			guides you through the creation of a product rule
				in a series of steps
	both approaches generate the archive file

To create an application archive file:
	create a product rule:
		identifies the components you want to include in the
			archive file
	create an archive file:
		contains the application components


can create a product rule in two ways:
Create the rule instance manually and add the information to the fields on the rule form
greater flexibility than the wizard:
can set minimum or maximum ruleset versions to include in the archive rule
can also include rulesets that are not in the application
can be time-consuming and error-prone due to:
manually entering information
Use the Application Packaging wizard
guides you through a series of steps
populates and create a product rule
includes the rulesets in your application
presents an inventory of components that are in your application
is easier and more accurate
enters your selections automatically on the form
can modify the product rule after you have created it in the wizard.

To make sure everything is complete and correct for migration, before you create an archive file:
	Do not lock delegated rulesets
		Locking the rulesets prevents users from updating the
			rules in the destination system.
	Associate your data records with rulesets.
		ensures all the data records required by your
			application are included in the archive file.
	All rules are checked in so that the rulesets are complete
		and current
	Lock the application rulesets included in the package
		ensure that the migrated application and its rulesets are
			synchronized among the source and destination
			systems.
	Merge branched rulesets
	Remove branches from the application if you are exporting
		the application to a production system

can create an archive file using buttons on the product rule form
-or-
on the landing page that contains the wizard

Associating data instances to a ruleset:
	simplifies application migration and maintenance

When you package an application for migration:
	you include an application's rulesets



A ruleset corresponds to:
	a collection of rules
	not to data instances such as operator IDs, access groups,
		database tables, and databases

To help make packaging and migration of data instances easier, 	
	you associate data instances with rulesets:
		do not need to specify each data instance in the
			product rule
		system automatically adds the data instances to the
			archive file automatically.
	As a best practice:
		associate data instances with rulesets
	the system automatically associates the instance with one of
		the application's rulesets as you create data instances
		of certain classes, either manually or with a wizard.
	appears in the rule header

	can change the associated ruleset by clicking Edit


can remove the ruleset so that the data instance is not associated
with any ruleset (results in a guardrail warning)

associating a data instance with a ruleset:
	does not affect or restrict any run-time behavior
	allows the instance to remain available to all applications
		regardless of the associated ruleset

define the application components you want to package in a product rule
put the product rule in the same ruleset as the work class for the application.

the Contents tab of a product rule
	where you specify the components you want to export
	includes the following sections:
Applications to include
Rulesets to include
Class instances to include
Individual instances to include
JAR files to include
File details

Specify the application rules that identify the rulesets and versions to include in the archive file
	eliminates the need to specify the individual rulesets and
		versions in the RuleSets to include section
	allows you to select the application in
		the Name and Version fields
	the order of applications is unimportant



Rulesets included in the archive:
	must have all the prerequisite rulesets included either in the
		product rule or on the destination system
	the wizard will warn you if any are missing on the destination
		system thanks to the archive, which contains
		information about all the rulesets associated with the
		application
	a ruleset using Application Validation (AV) mode:
		no prerequisites
	rules within a ruleset using AV mode can refer to rules in any
		rulesets in the application and its built-on application.
	an AV ruleset, therefore, should be exported within the
		context of an application

Below settings allow you to automatically include specific components or patch ruleset versions in the archive:
Select Include associated data to export any data instances associated with the application ruleset automatically. Instances selected in the Individual instances to include section are not used. Typically, these data instances are derived from the Data- class and include operator ID, access group, database table, and database records.
Select Custom/Production rulesets to include the production rulesets listed on the application rule automatically. Select this check box if you are using delegated or localization rulesets (these are production rulesets).
Select Include rule history to include the instances of History-Rule class. The instances are rows in the standard history rule table. These instances in the History tab of a rule include the date, time, operator, and comments that are added when a developer checks in a rule. This information can be useful for auditing purposes when migrating applications to another development or testing environment.
Select Include data types to include the instances of the custom data types (classes) that you have created for your application. For example, you may have created a Customer data type to manage customer contact information. This data type might include information such as the customer name, email, or phone number. The data types are exported even if they are not associated with a ruleset.
Select Delta mode to include only the current version of the application's rulesets in the archive file. For example, if your application references OrderEntry:02-03-05, the archive file produced from the product rule includes only rules in OrderEntry:02-03-05. This feature is useful when you are migrating a patch update. 

Specify rulesets that are not part of an application
	can be entered in any order
	system determines a valid order to load the rules
	prerequisites must be included in the list or already exist on
		the target system
	if not present on the target system, some rules may be
		unavailable.

Use the Minimum version and Maximum version fields to define a range within a major version that you want to include in the product. Leave both fields blank to include all versions.
Select Exclude non-versioned rules to exclude rule types that are associated with a ruleset but not with a version, such as class and application rules.
Select the Include associated data check box to include data instances associated with the selected rulesets.

can include all instances from any class by:
	entering a class name
can enter an abstract class that has concrete subclasses
	useful for specifying data classes (derived from the Data-
		base class) that are required for an application to run
		correctly on the destination system
if you have selected:
	the Include associated data check box in the Applications
		to include section
	RuleSets to include section
all data instances associated with the rulesets are exported by
default

note any dependencies:
	among data instances
	between data instances and your rules

data instances already present are by default not overwritten
	during import to the destination system
		(may require adjustment after import)

When filter field allows you to use a when rule to filter the class
	instances that you want to include in the ZIP file
ListView filter column is included for backward compatibility

Include descendants? option:
	includes all the subclass instances are included
	ignores ListView filter and When filter values

Exclude classes field:
	allows you to enter the names of descendant classes you do
		not want to include
	can enter more than one class using a comma (,) to delimit
		the names

Include associated data in the Applications to include section or
RuleSets to include section
your selections are ignored if the instances are associated with 	
	application rulesets

Instances are processed in the order listed on the product rule.
	important if your application includes views that reference
		each other
	instances in the wrong order can create dependency tree
		errors
	Drag instances onto a different row on the list to change the
		order.


best practice:
	when selecting large numbers of instances:
		use a filter in the Class instance to include section.

Pega:
	allows you to extend the Java code built into the Pega
		Platform with your own code
	code can be used:
		with activities (Rule-Obj-Activity rule type)
		user interfaces
		system interfaces
	if your application uses JAR files:
		complete the array in the Jar files to include section to
		include JAR files in the product archive

To locate available JAR files:
	enter a class name in the Search jar files field
	click Query jars

the File Details section prepares the product rule for packaging in
	a ZIP archive file.
the Creation Date field allows you to enter a date that will be 		
	displayed in the destination system before the archive file is
	imported.
	date value entered persists even when the file is copied or
		renamed
the Short Description field allows you to enter a text description
	of the contents of this file
	the description appears on the destination system before the
		archive file is imported

best practice:
	lock the ruleset versions you want to include in the archive
		file
	prevents updates to the rulesets after they have been
		packaged in the archive file
	Select Allow unlocked ruleset versions? if you want to
		include unlocked ruleset versions like a delegated
		ruleset

the HTML rule on the Installation tab allows you to add post-
	import instructions such as a Read-Me text
	The file is displayed at the end of the import operation for
		this product rule.



the Preview Product File button:
	lets you review the items that will be included in the archive
	file
	best practice:
		review the contents before you create the archive file

Create Product File button:
	creates an archive file on your local computer

The Application Packaging wizard:
	simplifies the process of exporting an application
	guides you through the steps to create a product rule to add
		the application components that you want to include
	creates the product rule after you complete the steps You 			allows you to review the product rule contents
	generates the archive file.

Steps to create a product rule and generate an archive file:
Dev Studio, start the wizard:
		 Configure > Application > Distribution > Package
On the Application step:
Application drop-down:
select the application you want to package
contains the applications you have access to on the
		current system.
Ruleset Name and RuleSet version fields:
select the ruleset and unlocked version that contains the product rule
specify a locked ruleset = receive an error message
Optional:
Click Check to display only Application Rulesets:
display the rulesets specified in the rule form of the selected application
If left clear, only rulesets in your ruleset stack, as shown on your operator profile, are displayed.
  		system automatically lists the components that are
		available in your application with a check box
components used by your application are selected by default
exclude a component =  clear the check box.
Application Stack step:
identify the chain of built-on applications ending with the base PegaRULES application
may not need to include the entire stack in your package. 
Application Dependencies step:
identify the products on which many Pega-supplied applications are dependent. Pega Platform™ verifies that these dependencies are installed on the destination system before importing the Pega-supplied applications. If required products for your Pega-supplied applications are unnecessary, skip this task.











Organizational Elements step:
identify the organization, divisions, and units associated with your application.
  
Access Groups step:
identify the access groups associated with your application
clear the check box next to the access group names to exclude access groups created for development or testing that are not part of the application.
 
Operators step:
identify the operators associated with the application
clear the check box next to the operator names to exclude operators created for the purpose of development or testing and are not part of the application.

 
Work Queues step:
identify the work queues associated with your application.

 
Work Groups step:
identify the work groups associated with your application
 

Data Tables step:
identify the local data storage data types used in the application
a connection issue is indicated by No Connection displayed in the Count column if arises
Click the No Connection link to open the rule, and click Test Connection to identify the issue.
 
Code Archives step:
identify the Java code archives used by your application.
 




Database Storage step:
identify the databases and database tables that are available to your application.
 
ntegration Resources step:
identify the integration resources available to your application
integration instances associated with your application are automatically selected. 


Click Finish
the product rule is created in the ruleset you specified
the product rule is named after the application you specified
The version is set to the date and time of creation.
  
A dialog is displayed on the package landing page.
Lets you perform various tasks.

Click Preview to show the content of the ZIP file that is created by the product file.
Click Modify to open the product rule so that you can manually add or remove instances or change default settings.
Click Migrate to start the Product Migration wizard. The Product Migration wizard lets you automatically archive, migrate, and import a Product rule to one or more destination systems. For more information on exporting an application with the Application Packaging Wizard, see the Help topic Product migration.
Click Export to create an archive file on your local computer. The system displays a Create Product File dialog in which you enter a file name.  Click OK. A progress indicator is displayed. When the export process is complete, the indicator displays a link to the archive file. Click the link to download the file.   After you have created your product rule, you can also create the archive file using the Export gadget. The gadget is available from the Configure menu in Dev Studio by selecting Application > Distribution > Export. In the gadget, provide the product information and click Export. You can also use the Export gadget to quickly package specific rulesets and data objects without having to create a product rule.

Updating the product rule after you use the wizard
To modify the product rule created by the wizard:
	Click Modify to open the rule and make your updates.




Use the Import gadget to import the contents of an archive on the destination system. You must have the @baseclass.zipMoveImport privilege to use the Import gadget. Rules, data, and other Pega system instances contained in the archive file are added to the rules already present in this system, optionally overwriting some existing rules.
On a destination system, open the Application Import wizard from Dev Studio Configuration > Application > Distribution > Import.
Select the archive to upload. Choose to import a local file, import a file from a repository, or specify a file that already exists on the server. If you choose to import a file from a repository, you must specify the Repository name, Artifact type, and artifact Name. By default, uploading a file larger than 1 GB is not possible. For larger files, use File Transfer Protocol (FTP) or another means to place the file into the ServiceExport directory.    
Optional: Click Show content details to show the details of the contents.
Optional: Select the Enable advanced mode to provide more granular control over the import process check box to include or ignore individual instances. If you do not select this option, continue to step 7.
Optional: Select the Do not set restore point or save metadata during the import check box. When you import an application archive, you can set a restore point to roll back the import to. Selecting this check box will limit import time, but means you cannot roll back to the current state of your system. For more information on restore points, see the Help topic Restore points.
Click Next and continue through the pages to review or edit instances that are skipped, inserted, replaced, or added. When you reach the last page, the import starts.
Click Next to start the import. The system attempts to upload the rules in an order that minimizes processing. When complete, the progress indicator displays 100.00%. 
After processing is complete, adjust access groups or application rules to provide access to the new rulesets, versions, and class groups as needed.
If you import rules in a ruleset that users can already access, the rules may begin executing immediately. These rules may execute before all the rules in the same archive have been imported. Similarly, declarative rules begin executing immediately. This means that the declarative processes might fail if the elements or properties they reference have not yet been uploaded. This needs to be planned for when an archive is imported on a system with active users.
Mobility (7%)
Mobile Apps for Pega applications and best practices
Offline processing for mobile apps

Offline processing
Offline processing
Offline-enabled mobile apps are useful for mobile users working in locations without network connectivity. Using offline-enabled apps, mobile users can create new cases for case types that developers enable for offline processing. Users can also process assignments within offline enabled cases while working offline. Data synchronization between the mobile device and the server occurs automatically when the mobile device is online.
App end users must complete an initial synchronization before using the offline capability.

Mobile users can perform various tasks while working offline. They can create a case, perform work on an assignment, return the completed assignment to the worklist, and begin working on the next available assignment.
Offline-enabled mobile apps save all work to a queue. A status indicator keeps track of the number of items added to a queue.
When the network connection state changes and the device comes back online, data synchronization is triggered automatically for the offline-enabled application, and any saved data is updated to the server. An indicator displays whether you are online, offline, or currently synchronizing with the server.
By default, the UI Kit available in Pega PlatformTM applications uses the following indicators: offline and failed. If you also want to use the online, synched/syncing, and items to sync indicators, you must use an older UI Kit version or create a user interface control in your application with the CSS classes for these additional indicators.
The Pega offline feature for mobile apps is designed so that the mobile app always functions in offline mode. All behavior and capabilities are the same whether the device is online or offline. When an offline-enabled application is online, data synchronization communicates all the necessary changes between the client and the server almost immediately. Data synchronization also occurs if the device is online and five minutes have passed since the last data synchronization operation, or when a user submits an assignment or creates a new case.

Enabling offline support
Offline configuration of a mobile app enables users to process assignments when the users' mobile devices cannot connect to the Pega application. To enable an offline mobile app, you perform two major tasks.
These tasks include:
Enabling offline support for users by configuring the appropriate access groups
Enabling the appropriate case types for offline processing
Before you begin, decide which users need to work while offline and which case types those users need to process.
Enable offline support for access groups
You grant offline capabilities to users by configuring their access group and then selecting the offline option when creating a new Mobile channel interface.
You use the Access groups tab on the Offline Configuration landing page to identify the access groups that are offline enabled. The following image shows only the ReserveIT:Administrator access group as offline enabled.

The tab displays only the access groups for the current user. If you want to include other access groups associated with your application, add the access groups to your operator record. You can view the status of other access groups associated with the application by navigating to Dev Studio> Application > Application > Structure > Access Groups and Users and opening the relevant access group.
To enable an access group for offline access, in the Access group column, click the access group link to open the record. In the Advanced tab of the record, select the Enable offline support check box.
After you enable the appropriate access groups for offline access, you need to confirm the access groups are offline enabled. In the Mobile channel interface, on the Configuration tab, under Offline access, select the Access groups have been configured to allow offline use of this mobile app check box as shown in the following image.

Use caching to improve performance
To improve performance for mobile app users, enable application rule caching for all users in the access group. Reusing the cache eliminates the need to generate the cache for each user. This option ensures a faster start of offline-enabled applications from the time of the last Pega Platform™ server start.
To enable caching for the access group, on the Advanced tab of the access group, in the Offline Configuration section, select the Enable caching check box. This option is displayed after you select the Enable offline support check box.
Use a default portal for case workers
On the Definition tab of the access group, in the Available portals section, set the default portal to a user portal such as pyCaseWorker.
The pyCaseWorker portal is part of the UIKit ruleset. Add the UIKit ruleset to the ruleset list for your application.
You can create your own portal for offline use. As a best practice, customize the pyCaseWorker portal. This portal contains design elements optimized for offline use with a Pega mobile app.
For more information about the settings on the Access Group record, see the Help topic Configuring advanced settings for access groups.
Enable offline processing for case types
For users to work on cases offline, you must enable the appropriate case type for offline processing. Use the Case types tab on the Offline Configuration landing page to see all the case types available in your application, and whether a case type is enabled for offline use.

To enable offline capability for a case type, in the Case type column, click a case type link to open the case type in the Case Designer. On the case type Settings tab, select General, and then select the Enable offline check box.
For more information, see the Help topic Enabling offline support for cases.
Case type considerations
Before you enable a case type for offline processing, confirm that the case type uses the starting flow pyStartCase to initialize processing and instantiate cases in a stage-based case life cycle. If you do not use pyStartCase, you must write custom JavaScript to perform the same functionality. If your case type does not satisfy this requirement, do not enable offline processing.
Unless otherwise required, use an optimistic locking strategy for case types enabled for offline processing. When a user opens a case in offline mode, the system cannot obtain a lock on the case. When the mobile app syncs back with the server, the system attempts to obtain a lock on updated cases. The optimistic locking strategy helps avoid conflicts if other users worked on updated cases.
To configure the optimistic locking strategy, on the Settings tab of the case type, under Locking, select the Allow multiple users check box.
For more information, see the Help topic Enabling offline support for cases.
Process design considerations
Offline mobile apps require specialized design considerations. Pega apps normally rely on the server for various UI and processing features. An unavailable server disrupts those features. For example, for routing that relies on business logic, the server must evaluate the logic to route an assignment correctly.
Pega Platform supports decision shape flow actions, question shape flow actions, field validation, and flows that create child cases. Certain when rules are supported in offline mode, such as conditional starting and skipping of a process and visibility and disable conditions for basic and advanced controls, except for the navigation rule. For more information about support for when rules in offline mode, see the Pega Community article Reduce implementation time with offline support for when rules and the Help topic When rule support in offline mode.
The list of rules and behavior supported in offline mode may expand with each new Pega Platform release. A best practice is to monitor the Pega Community for information on what is new for each release.
The synchronization process can also affect performance. For example, in a widely distributed mobile app, large numbers of users may be synchronizing their apps at any given time. This situation can strain server resources. There are two key design considerations you should keep in mind:
Make essential elements available offline for a consistent user experience.
Ensure that synchronizations are fast and efficient.
To help you enhance the user experience when working in offline mode, Pega has established a set of design guidelines to follow. To review the most current guidelines, see the Pega Community article Designing apps for offline mode
For information about designing processes, see the Help topic Flow processing in offline mode.
For a full list of controls that support offline use, see the Help topic Supported controls when working offline.
For a full list of actions that support offline use, see the Help topic Supported actions when working offline.

Creating a cache manifest for offline use
To enable users to continue interacting with mobile apps and documents even when their network connection is unavailable, you can provide a cache manifest that lists the files needed for the mobile app to work offline. The cache manifest is a simple text file defined using an HTML rule form named pyCustomAppCache. Each line in the cache manifest refers to a single static resource such as an HTML file, an image file, a CSS file, a font file, or a JS file.
Resources listed in the cache manifest constitute all static resources needed by a mobile app to run offline. You can use the app while a device is offline if the device has the resource cache.
The cache manifest is different from the application rules cache created when you enable offline support for an access group. The application rules cache includes common application rules used by all the operators in the access group. The cache manifest is a list of resource files referenced in the application rules.
To define the cache manifest, save a copy of the pyCustomAppCache record to your application ruleset.
Do not change the context of your copy of pyCustomAppCache. The record must be applied to Data-Portal.
Working from a clean mobile app, run the app through an HTTP proxy. Work through all the screens that are displayed and look for any HTTP requests.
Use your browser development tools to identify each of the resource files in the DOM.
Add requested resources to the cache manifest so that if the user only logs in and goes to the portal page but then goes offline, all static resources are correctly cached.
Cache manifest syntax
To add a resource file to the cache manifest record, add each resource file on a separate line.
To add a comment to the cache manifest, start the line with the # (octothorp) character.
If the name of the requested resource file uses a series of numbers in the src attribute such as webwb/filename_1234567890.xxx!!.xxx, use the <pega:binaryfile> element with the name and app attributes.
If the name of the requested resource file includes capital letters, use the keepCase attribute with a value of true. The keepCase attribute ensures that a case-sensitive name is read correctly. Otherwise, the name is assumed to be lowercase.
For example, upon inspecting the HTTP request in the Document Object Model (DOM), the requested resource is displayed, in part, as <img src="https://academy.pega.com/webwb/Custom-Logo_1662150348.svg%21%21.svg">. Add the resource file to the cache manifest using the <pega:binaryfile> element with the name, app, and keepCase attributes:
<pega:binaryfile  name="Custom-Logo.svg" app="webwb" keepCase="true" />.
The value you specify in the app attribute is the value specified in the App Name (Directory) field of the binary file record in Pega Platform. In the DOM, this value is the nnnn/ string preceding the file name.
If the name of the requested resource file is prefaced with an additional directory, preface the <pega:binaryfile> element in the cache manifest with the name of the additional directory.
For example, upon inspecting the HTTP request in the DOM, the requested resource is displayed, in part, as <img src="https://academy.pega.com/webwb/webwb/Custom-Logo.svg">. Add the resource file to the cache manifest using the <pega:binaryfile> element prefaced with webwb/:
webwb/<pega:binaryfile name="Custom-Logo.svg" app="webwb" keepCase="true" />.
If the name of the requested resource file is the name of the resource file, enter the path and name of the file as displayed in the DOM. For example, upon inspecting the HTTP request in the DOM, the requested resource is displayed, in part, as <img src="https://academy.pega.com/webwb/Custom-Logo.svg">. Add the resource file to the cache manifest using:
webwb/Custom-Logo.svg.

Managing data for offline use
A mobile app can access rules on the server only when it is online. Users need to access these mobile app rules to complete assignments. Data synchronization between the mobile app and Pega application supports rules access. You use whitelists and blacklists to identify and manage the rules specific to the mobile app.
A whitelist is a set of rules requiring synchronization between a mobile app and the server. A blacklist is a set of rules that are not synchronized between a mobile app and a Pega application. You update the whitelists and blacklists for an application on the Offline rules tab of the Mobile: Offline Configuration page. To access the Mobile: Offline Configuration page, in Dev Studio, from the Configure menu, select Mobile > Offline.
Manage whitelists to synchronize data rules
By default, offline mobile app synchronization includes the rules that are explicitly referenced in the UI or process and excludes rules with obscured references. The following table lists other rule types and if they are included in synchronizations.

Excluded rules may impact the functionality of the mobile app. To include rules in the synchronization, add the rules to a whitelist. Pega provides a set of five customizable whitelists for your applications. Each whitelist manages instances of a specific rule type: data page rules, field value rules, data transform rules, validate rules, and when rules. For more information on when rule support in offline mode, see the Help topic When rule support in offline mode.
To add or delete a rule from a whitelist, select the appropriate link to open an HTML record that lists the rules to include.

Copy each record to your application ruleset. The record must be applied to @baseclass.
In the HTML Source field, enter the rule value pxInsName to add a rule to a whitelist.

Add each rule in the whitelist on its own line. List only one rule on each line.
For more information about adding data transforms, see the Help topic Adding data transform rules to a whitelist for offline use.
Manage blacklists to exclude data pages from synchronizations
You use a blacklist to exclude specific data pages from mobile app and server synchronization. You can list data pages used on either the mobile app or the server only. Data pages on the blacklist do not require synchronization.
To update the blacklist, select the Modify blacklist link to open the HTML record that lists the data pages to include in the blacklist. Save a copy of the record to your application ruleset. The record must be applied to @baseclass.
You must enter each data page on its own line.
Data pages used on both the mobile app and the server require synchronization. Those data pages belong on the whitelist if appropriate.
Manage delta-sync blacklists
By default, a mobile app performs a full synchronization when users log in for the first time, and when an application developer forces a manual sync to push changes to mobile users. A full sync forces the mobile app to overwrite an entire rule or data record.
After an offline device comes back online, the mobile app performs a delta synchronization, or delta sync, with the server. A delta sync incrementally exchanges smaller amounts of data to reflect user activity, such as performing assignments or creating cases. Delta syncs improve the performance of the mobile app by reducing the data exchanged between the mobile app and the server.
You can further improve performance of the delta sync by exempting data pages that contain a large amount of data that changes infrequently. Use the delta sync blacklist when record to specify the data pages you want to exempt. Pega Platform™ skips analysis of blacklisted data pages during the sync.
For example, you may add a data page listing countries of the world to a delta sync blacklist.
To update the delta sync blacklist, select Modify delta-sync blacklist on the Offline rules tab to open the when record. Save a copy of the record to your application ruleset. The record must be applied to Embed-SIIP.
Add a condition for each data page to exclude from the delta sync on the Advanced tab of the when rule.
You can also choose to skip backward chaining to increase the sync speed. Select Skip backward chaining on the Advanced tab of the delta-sync blacklist when rule.
 
For more information about how to use the blacklist, whitelist, and delta sync blacklist settings, see the Help topic Offline configuration page.

Managing reference data with large data pages
Using large data pages to store reference data in your application can help improve the performance of a mobile app. Only individual records of the large data page that have changed are synced, not the entire set of records. Large data pages also enable more efficient memory management. Only records needed to render a specific screen on the mobile device are loaded to the device's memory, leaving the remaining parts of reference data in the device's permanent store.
Large data pages are created using the standard data page record type. After the data page is created, you declare it as a large data page by adding it to the pyDataPageWhiteListForOffline rule. Large data pages can be automatically sourced from report definitions. You can also source large data pages from a connector, an activity, or a data transform, but a custom JavaScript populator function is required.
Before you configure the data page, confirm the value of the datapages/addReportDefinitionToDatapage Dynamic System Setting on the system. To source the data page from a report definition, set the value to true. If the setting is not present on the system, Pega assumes the value is true. If the setting is false, create a custom JavaScript function to source the data page.
In the report definition used as the data page source, add the following two columns in addition to the columns needed to retrieve the reference data:
pyModificationDateTime – This column returns the time when the large data page was previously synchronized to the client. The data source uses it to return only the records that were modified after the last data synchronization.
pyIsRecordDeleted – This column returns true only for records that have been removed. Correct values for all key columns should also be returned for such removed records. The data source always maintains removed records tracking in order to return appropriate values. Manual removal of rows is still possible, but you force a full sync of all of the access groups that use the data source in offline-enabled apps.
After you create the data page, declare it as a large data page. To do this, edit the whitelist for the List of data pages that are available offline but are not referenced directly in the UI. Add the name of the data page followed by ;large. For example, to declare the data page D_FieldMappings as large, enter D_FieldMappings;large in the HTML source. Add additional large data pages on separate lines.
In the pyDataPageWhiteListForOffline rule, declare both the target large page as well as any source large data pages (if applicable). Each large data page is defined as a separate entry in this rule. Ensure that every large data page always contains at least one record.

Supporting multiple locales for offline users
Some offline mobile app users need to use the app in different languages. An example is a door-to-door survey of a population with individuals who may speak different languages. Survey takers use an offline mobile app to record responses. Survey takers need a consistent experience in their app, regardless of the app's network connection status. They must have the ability to change languages within the app as needed without loss of data.

Using the offline localization feature available in an offline-enabled mobile app, end users can switch languages by taping a language option in the language list.
You use the offline localization feature to create a locales list to package and make available offline.
Before you begin, determine the number of locales required for the app. Create or obtain the locale rules as needed.
You can add or delete locales for offline use by selecting Modify locales list from the Mobile Offline landing page. Selecting Modify locales list opens the pyLocalesListOffline rule. On the HTML tab, set the format to generate for, the supported browser, and accessibility. Then add the required locale rules.

Managing requestor pooling for a mobile app
Pega Platform provides a Service Package specifically for offline data synchronization. The Service Package contains settings that define the requestor pool. The requestor pool is a set of requestors reserved for use by the services in the Service Package. Requestor pooling often improves the performance of a service. Requestor pooling enables requestor reuse, shares allocated resources, and eliminates server wait time for requestor creation.
Requestors associated with a pool belong in one of two categories:
Idle requestors are currently in the pool, waiting for a service request.
Active requestors are currently out of the pool, managing service requests.
The Service Package contains pooling settings that let you adjust the maximum number of idle requestors, the maximum number of active requestors, and the maximum time the system waits for an idle requestor.
Update the pooling settings
Use the Settings tab of the Offline Configuration landing page in Dev Studio to quickly edit the pooling settings. Updating the settings updates the values on the Pooling tab of the Service Package.
Alternatively, you can directly edit the service package record and connection settings in the Service Package. On the Settings tab of the Offline Configuration landing page, click the OfflineServicePackage link to open the Service Package record.
On the record, you can also update the stateless/stateful processing mode in the Service Package. For more information about stateless processing and pooling, see the help topic About Service Package data instances.
Before you update the settings, determine the number of offline users you expect to be using your mobile app. In a small organization, the number can be relatively small. However, if the app is widely distributed among many thousands of users, you will likely need to increase the requestor numbers accordingly.
The Maximum idle requestors setting defines the size of the pool. To allow an unlimited number of idle requestors by keeping them until they time out, set Maximum idle requestors to -1.
The Maximum active requestors setting defines the maximum number of concurrent requestors to allocate to the service. To allow an unlimited number of active requestors, and eliminate wait time, set Maximum active requestors value to -1. If requestor pooling is disabled, set Maximum active requestors to 1.
The Maximum wait (in seconds) specifies how long the system waits for a requestor to return to the pool when a service request arrives and the number of active requestors has reached the Maximum active requestors value. If the time interval passes before any requestor returns to the pool, the request fails. The system sends a failure message to the external client system.
