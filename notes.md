Low-code environments usually employ what techniques instead of writing code?
	Visual, declarative techniques.
Pega is “Software That Writes
	Your Software”
Pega Express delivers a
	Minimum Loveable Product (MLP) …love immediately rather than simply functional (minimum viable product).
Pega Express breaks the customer journey into
	microjourneys that drive the organization to achieve a given customer goal
The three pillars of a great application are
	microjourneys,
	cases, and
	strategies
What are personas?
	who interacts with the application
What are channels?
	how they interact with it
What is data in a microjourney?
	the information that the microjourney interacts with
What are microjourney interfaces?
	where the data comes from/where it persists.
A workspace is
	an environment that provides specific tools and features. Pega four role-based workspaces, known as studios:
	App Studio
	Dev Studio
	Prediction Studio
	Admin Studio
Each Studio consists of three areas:
	header
	center space
	navigation panel
Pega Platform applications are made up of instructions, called
	rules, that govern
	application behavior.
The App Studio overview displays an Application Layers section, which is a visual representation of what?
	The rules that make up the application.
Layers define
	where rules reside and
	where rules are maintained.
App Studio provides
	core features for application development, such as
	case design,
	data management, and
	user experience.
A case type is
	an abstract model of a business transaction.
Case types model
	repeatable business transactions.
A case is a
	specific transaction instance.
The case life cycle design modeling technique enables business users to
	see and interact with a case the same way they think about it: stages -> processes -> steps.
A step is
	an action or task performed by the system or users.
Parallel processes are
	processes that are part of the same stage and can be done in any order and/or at the same time.
Change stage steps
	manually change the stage the user is on to a specific stage.
Primary stages make up the
	happy path and are
	the stages a typical case takes towards the expected outcome.
A multi-step form represents a single
	assignment completed by a single user. It is a guided, linear
	workflow using related UI screens.
The case status indicates
	the case progress towards resolution. You can set the case status on
	any stage and any step in the case life cycle.
Standard case status values include:
	Open,
	Pending-Approval, and
	Resolved-Completed. You can also add
	custom status values.
Step instructions identify
	what users must accomplish in that assignment. Add instructions to steps that
	require users to enter information.
A service-level agreement (SLA) establishes
	a work completion deadline. Organizations often establish service-level agreements to
	enforce on-time performance.
	SLAs -> [start,goal,deadline], past-deadline
Urgency is
	a numeric value that brings visibility to
	unresolved work in your application.
An assignment SLA has a default urgency of
	10. For each interval, you define a value between 10 and 100 by which to increase the initial urgency.
The maximum urgency for an SLA is
	100.
The Pega Platform Get Next Work functionality assigns high-urgency
	tasks before low-urgency tasks to ensure that assignments finish on time.
Escalation actions are
	actions that your application takes to facilitate faster resolution times, based on a
	specified service-level agreement.
When you create a data element, you assign it to
	a field type.
Simple field types are
	Text (single line),
	Text (paragraph),
	Boolean,
	Currency,
	Date & time,
	Decimal,
	Integer,
More complicated field types are called
	fancy fields. 
Fancy field types include
	Attachment,
	Location,
	User Reference.
Views, also referred to as
	forms, display
	the fields necessary to
	complete the current assignment.
An application can make stored data available for editing or present the data as
	read-only in the View.
Data types are
	collections of case data and provide a way for developers to
	group a set of fields to
	describe a single object.
The collection of case types and data types in your application holistically
	defines your data model.
A data type consists of
	one or more single-value fields,
	lists, or
	groups of fields.
Data types can group objects, such as
	views and other rules that are created by more advanced developers.
True or false? Data types can reference other data types.
	True
Data types are
	templates that you can use anywhere in your application.
You can create data types to
	reuse assets from an existing data type through inheritance.
You can source data types
	locally from a Pega Platform system of record, or from
	an external system of record.
If a data type only partially meets your needs, you can
	extend that data type.
Field groups and field group lists can be used to create
	relationships between single-value data objects.
A field group is a
	single entity that contains multiple fields.
A field group does not
	store data itself but instead acts as a container to associate a set of related fields.
A field group list is
	a list of field groups, or grouped values.
A data type defines
	the fields in a field group or field group list and serves as
	the template for creating the field group or field group list.
A calculation expresses a
	relationship between fields by setting the value of a calculated field based on one or more input fields. Calculation occurs whenever users
	update the value of an input field.
Defining a field calculation reduces
	the chance for error and improves
	process efficiency by eliminating the need for manual calculation.
App Studio allows two types of calculations:
	functions and
	custom calculations.
Functions operate on field group lists. There are four functions:
	sum of
	average of
	maximum of
	minimum of
Custom calculations calculate the field value by
	using any number of other simple or fancy field values.
When you configure a custom calculation, you reference fields by name using
	the period character (“.").
To identify the relationships between fields, Pega Platform establishes and updates a
	network of calculations for an application. When you define a field calculation, Pega Platform adds
	that calculation to the calculation network.
Data records provide
	values for
	the fields associated with a particular
	data type and can be stored
	outside the case.
Data records define permissible values for
	data fields. Limiting the input values to valid options reduces
	errors and allows for
	automation.
Generally, a change to data record values does not need an
	associated change in the business process to support the change. Whereas, a change in the data type fields represents
	a change in the business processes.
A local data storage lets you
	store data records for a data type, without
	having to create or maintain database tables. Data records stored using a local system of record can be
	packaged and distributed as part of an application.
You can retrieve data from external database storage by using
	connectors.
Data views represent
	instances of how your application uses
	data and defines
	the data associated with a data type. They provide links between
	data records and your application. It allows an application to
	populate a data reference with source data without the developer knowing
	anything about how or where the data is stored.
Pega Platform provides three data views for any data type configured to connect to a system of record:
	List _ data view displays all the data records
	the _ data view returns a single record
	the Savable _ data view allows a case to save a single record to the system of record
Simulated data views do not have
	an associated data source.
You must configure the connection to a data source before the data view is ready for
	production however you can use
	a simulated data source during application development.
use the Pega Robotic Process Automation (RPA) when an external system does not have
	an API for sharing data, or has
	an API that you cannot access, or has an API that is
	insufficient
Pega Robotic Process Automation in attended mode.
	Attended RPA refers to automation that works alongside
	a human involved in the process.
unattended RPA mode uses a queue for processing later and offers the advantage of
	optimizing system resources and reduces peak loads.
Pega Robot Manager is a
	control tower application for the Pega Robotic Process Automation that
	helps manage and provides insight into robot performance, providing performance analytics for all robots and allowing you to
	monitor and schedule RPA robots
Case assignments should go
	to the individual or group of individuals most capable of completing a specific assignment.
You use assignment routing to
	assign work to the most appropriate user. You can route a step to
	a single user or to a team of users.
A worklist is
	a list of all open assignments, in order of importance, for a specific user.
A work queue is
	a list of all open assignments, in order of importance, for a group of users.
Assignments stay in a work queue until
	a user associated with the work queue selects the assignment, or
	a manager sends an assignment in the work queue to a specific user.
A work group identifies
	a cross-functional team that contains a manager, users (operators), and a work queue.
Pega refers to work groups as
	teams and operators as
	team members.
You can also use business logic routing when you want to
	route work based on certain conditions.
Case approvals are
	decision points at which one or more users decide whether to approve or reject a case.
You configure approvals in Pega Platform by using
	the Approve/Reject step. To configure an Approve/Reject step, you define
	who is assigned the approval
	how the case proceeds if the case is approved or rejected. You configure the
	Approve/Reject step routing and flow.
By default when the assignment is rejected, the case status changes to
	Resolved-Rejected.
Case participants are
	people, businesses, and organizations that are involved in a case. Default participants:
	Owner,
	Customer,
	Participants
user reference fields are
	defined in the case type and the associated data types.
With a send email step, you automatically send
	and email to the selected parties. Another option is
	to configure email notifications at the case level. This allows you to automatically send a notification when
	an assignment in the case is routed to a user worklist.
Use Agile Workbench to
	create and update
	user stories,
	bugs, and
	feedback items
The Agile Workbench captures
	real-time feedback about your application and tracks
	feature development
Direct Capture of Objectives (DCO) is
	the process of defining and managing business objectives in your application. Makes development more
	efficient
In the Agile workbench work items have a status of either
	To do, Doing, or Done
In the Agile workbench, The Project Overview displays
	all the features and work items, as well as their status, in your application
Optional actions are
	actions that users optionally perform during case processing. May also be
	common case processing actions that may be
	invoked at varying times during the case
You can make optional actions that are available only during
	a designated stage, or
	throughout the entire case.
An optional action requiring a series of steps is
	an optional process.
Built-in case wide optional actions include
	Change Stage and
	Transfer Assignment
Optional actions allow customer service representatives (CSRs) to perform
	out-of-sequence tasks that do not influence
	the main events in the case life cycle
Automating decisions based on business logic allows application users to
	focus on more nuanced decisions that require
	human expertise.
A flow is
	a sequence of events that models a business process. You create flows to
	support the different paths that users can take through a case life cycle.
You define paths in a flow by
	using graphical shapes and connectors. The shapes and settings that you choose depend on
	the types of decisions that users make, and the order in which the events occur.
Use a Decision shape to
	add a conditional path to a flow or model
	more complex use cases. By defining the events that cause your flow to follow different paths, you can create cases that support
	more than one outcome.
Decision shapes are configured to
	advance a workflow automatically. An automated decision evaluates
	business logic or a set of one or more conditions
You can define conditions that control whether a process or stage runs in a case. A condition consists of
	a field,
	comparator, and
	value. Processes and stages are either
	executed or
	skipped if
	the case run-time values match the conditional logic defined
True or false? You can add more than one condition to a stage or process.
	True
multiple cases are good for when you have
	complex business transactions
you can model case relationships with
	a case hierarchy that contains
	top-level cases and
	child cases
A parent case that creates multiple child cases allows for
	work to be processed in parallel. Different
	parties with different
	expertise can handle each child case. When processing child cases in parallel, the parent case may need to wait until a child case is complete before the parent case can be resolved.
Child cases are beneficial in situations where you want to: 
	Model work that different parties perform
	Model work that follows different reporting options 
	Model work that follows different time frames
	Model work that is common to multiple case types
Implementing a business process in a separate case type allows you to
	reuse the case type as needed.
To add a child case to a case type, add a
	Create Case automation step to the case life cycle. When encountering the Create Case step, Pega Platform creates
	an instance of the specified case type.
A child case cannot be
	a temporary case, because the parent case
	refers to the child case by its case ID. Temporary cases are not assigned a case ID.
When creating a child case, you can specify
	the information to copy from the parent case to the child case through a process known as
	propagation where you
	identify the fields in the parent case to copy from and copy the values to fields identified in the child case. This is performed
	on the Create Case step.
In child case creation, data propagation is appropriate if
	the data in the child case should represent the data at the time of the child case creation.
In child case creation, if the information should remain synchronized with the parent case, and the data may change on the parent case, then it is more appropriate to
	reference the data in the parent case.
The Wait step allows you to
	pause and resume case processing when the case meets conditions that you define
The Wait step can be configured to pause case processing based on
	Wait type:
	Case Dependency or
	Timer.
The Wait step Case Dependency wait type pauses case processing of
	a parent case until
	the child case dependency resolves.
In a child case creation a dependency is created when you add
	a Wait step to the parent case. When a parent case reaches the Wait step, the case pauses until
	all child cases or
	any child case of a given type reach a defined status.
For a wait step to be effective, there must exist
	a hierarchical relationship between cases, such as parent and child cases.
For a wait step, the Timer wait type pauses a case until
	the Set date/time interval expires or until
	a Reference date/time is reached.
The Integration Designer is
	a single location in
	App Studio for viewing
	all the data objects,
	data views,
	object dependencies, and
	external systems in an application and allows you to see how
	these entities are connected.
The Visual Data Model is a diagram that provides visibility into the application's
	data model and how the entities are
	related.
The Integration Landscape is a diagram of
	the data objects,
	cases, and
	systems of record in the application and where they are
	sourced.
Business logic validations are separate from
	the fields that capture data
Configure business logic validations on
	a form. validation is triggered when
	users submit the form.
True or false. You can use business logic validation on a stage.
	True. This checks that all the correct data has been entered or generated before
	the case enters a specific stage
The Report Browser
	is a tool to create
	new reports,
	organize, run, and share reports as well as
	manage report categories.
Reports in the Report Browser are organized by
	category.
In the Report Browser a category is
	an organizational framework
	a label and an owner type that exposes the category to
	a specific audience:
	an individual user,
	a group of users, or
	all users.
Can configure a report to specify
	the data from each record that you want to include in the report. The report retrieves the data from a
	database and returns
	the results in a
	table of
	columns and rows.
The Columns of a report define
	the content of the report.
In a report you cannot display what in a column?
	a field group
What can you use in columns to make reports more useful?
	calculations, also known as
	functions
Calculations (or functions) in reports enable you to
	calculate results derived from data in the database.
By default, report queries return
	all the records that contain data from all the columns, because of this you may want to use a
	filter.
In reports, a filter defines
	a test applied to each
	record to determine
	whether the record contains
	data your users need.
In reports, filters compare a
	data value in the record against a
	defined condition. If the comparison result is true,
	the report includes the record. If the comparison result is false,
	the record is omitted.
In a filtering condition, the comparison can be
	an explicit value or
	the value of a property or field.
In a report filter, testing values that are greater than a specified threshold, like a date is an example of a
	more complex conditions such as.
In report filters, symbolic dates let you
	select time periods or dates without having to build functions.
You can create a complex filter to capture multiple filtering conditions in a report by adding
	AND/OR conditions.
Customers interact with organizations through a variety of
	channels. A channel is
	a messaging service,
	voice service,
	web portal or
	mobile portal.
Channels are created from
	templates that include
	predefined layouts and
	navigation for use in your application.
True or false? Users can use Pega Intelligent Virtual Assistant and Pega Email Bot to interact with your application, provided you construct the correct channels?
	True
The Channels landing page allows you to
	create, view, and, edit all types of channel interfaces. You can download new components from the
	Pega Marketplace as well.
The Lock icon on a channel indicates
	that the channel component is not yet added to the application.
A portal is
	a web channel in use by your application. End users experience the portal through
	a browser, regardless of device type (such as a
	desktop or
	mobile device).
A portal allows
	simple and intuitive authoring of an application web channel.
Pega Platform has two portals for
	the two most common roles:
	case manager and case worker.
The Case Manager portal provides a
	standard user interface for
	viewing and working on cases.
The Case Manager portal displays a
	case and all nested subcases and tasks, as well as the
	associated users and roles.
The Case Worker portal is intended to be used by
	end users on desktop and mobile devices.
A portal is made up of
	pages that consolidate
	information for easy access.
To build an application that matches your users' needs, you create pages with
	fields, controls, and resources presented as images and text.
Pages added to a portal are also added to
	the portal's navigation menu.
By managing a portal’s list of pages, you can customize the
	primary navigation menu, and improve
	navigation and user experience.
What are the two types of portal pages:
	dashboards and standard pages.
Dashboards are
	pages that are customizable by end users.
Dashboards are made up of
	widgets that consolidate
	summary information and (KPIs)
	Key Performance Indicators from different sources and present it in an
	actionable format.
Standard pages are
	pages built as part of the application and are not
	customizable by end users.
Standard pages are typically built as a
	landing page to navigate to listed objects.
By default, Pega Platform includes what pages on a navigation menu?
	the Documents,
	Pulse, and
	Reports pages.
The layout of a dashboard is defined by a
	template that divides the workspace into
	slots. Slots are
	containers for one or more
	widgets, which are
	elements of the user interface that display information about the application and KPIs.
Use roles to
	organize the users of an application to manage
	application security and
	assignments.
A user’s role defines
	how the user
	interacts with the application.
Associate users with a role to determine
	the user interface,
	page permissions, and
	routing available to users to perform the tasks needed to process a case
User interfaces are also referred to as
	channel interfaces.
Work queues are lists of
	all open assignments for
	a group of users.
Assignments are
	tasks that users perform.
A persona is the
	business representation of a role. Unlike a role, which only contains the technical details of how a typical user, such as a customer, interacts with an application, a persona provides
	a holistic view of that typical user
Organizations may create multiple personas for
	a single role, such as Customer, to reflect
	different marketing approaches that may not impact
	application or case design.
Pega Platform provides one default persona:
	Users.
The user persona represents what?
	case participants that are responsible for
	creating and resolving cases.
When you create a new persona, Pega Platform creates
	a set of default permissions and
	a work queue for the persona.
True or false? Multiple personas can share a channel interface.
	True.
A user is an individual who
	interacts with an application.
If multiple users are associated with the same role, they
	interact with the application in the same way.
True or false? By default, a persona has access to all pages in your application.
	True.
Pega Platform™ applications depend on cooperation between two key groups of application developers. They are:
	Domain experts and
	implementation experts
Domain experts include
	business analysts,
	citizen developers, and
	front-end developers
Domain experts provide
	valuable insight into processes and
	user needs.
Implementation experts include
	system architects,
	full-stack developers,
	database administrators, and
	security administrators
Implementation experts provide
	the expertise needed to address critical use cases that require complex configurations.
In Dev Studio, implementation experts access rule forms directly to address
	complex or less-common configuration requirements.
In App Studio, developers configure rules such as
	processes,
	views,
	correspondence, and
	service levels for a single
	case type.
In Dev Studio, developers access
	all the layers of an application and can extend the rule scope from
	a single case type to
	an application,
	division, or even
	the entire organization to create
	a library of standardized, reusable rules.
In App Studio: a field. In Dev Studio:
	a property.
In Dev Studio: a property. In App Studio:
	a field.
In App Studio: a goal and deadline. In Dev Studio:
	a Service Level Agreement (SLA).
In Dev Studio: a Service Level Agreement (SLA). In App Studio:
	a goal and deadline.
In App Studio: a process. In Dev Studio:
	a flow.
In Dev Studio: a flow. In App Studio:
	a process.
In App Studio: a data object. In Dev Studio:
	a data type.
In Dev Studio: a data type. In App Studio:
	a data object.
A data type in Dev Studio correlates to a
	data object in App Studio.
Data objects represent the
	business perspective and are exposed in the
	case life cycle; data types are the
	technical implementation.
Data types are the objects that developers manipulate in
	Dev Studio.
Pega Platform generates application code in the background by using
	the rules that you create.
In Dev Studio, you can manage how a rule is
	created, reused, and updated to help maintain the
	integrity of the rule.
When you model a case type in a Pega Platform application, you configure the application with instructions to
	create, process, and resolve a case. These instructions are
	rules. Rules describe the behavior for
	individual cases, such as how the user interface is
	displayed and when work urgency
	increases.
Each rule is an instance of a
	rule type.
Pega Platform provides many rule types to use as
	templates for creating a rule.
The rule type determines the type of
	behavior modeled by the rule.
Each rule type models a specific type of
	behavior, such as automated decisions or UI design.
A process is modeled by what type of rule?
	a flow rule
The use of individual rules makes your application
	modular. By describing case behavior with modular, task-
	focused rules, you can combine and
	reuse rules as needed.
Versioning is
	creating a new version of a rule whenever
	case behavior needs to change.
True or False? Pega Platform maintains a history of changes to a rule, allowing developers to review the change history and undo changes if needed.
	True.
Rule delegation is
	allowing business users to update
	case behavior as
	business conditions change.
A ruleset is
	a container for rules
	identifies, stores, and manages the
	set of rules that define an application or
	a significant portion of an application.
A ruleset version is
	an instance of a ruleset
Best practice says you should do what to older versions of a ruleset?
	lock them.
You identify rulesets by
	name and
	version numbers:
	Expense: 01-02-03
A version number consists of
	three segments:
	a major version,
	a minor version, and a
	patch version.
The range of numbers for a version number segment runs from
	01 to
	99
When you create an entirely new rule, what is the version number?
	01-01-01.
A ruleset stack is
	a sequence of rulesets.
A ruleset stack determines
	the order in which Pega Platform looks through
	rulesets to find
	the rule that is in use.
When you create a rule in Dev Studio, the New Record form prompts you to provide four pieces of information:
	rule type,
	identifier,
	class, and
	ruleset.
Developers often secure rulesets to prevent
	unauthorized or unintended changes to rules.
Securing a ruleset in Pega Platform helps to
	maintain the integrity of rules,
	adds an audit trail, and relies on
	an explicit action to add and update rules.
True or false? Deleting rules is possible.
	True, but you should only delete rules from
	the current version of an application or ruleset
The check-out feature is used to manage
	changes to rules
The check-out feature is good for for when you have
	multiple developers working on an application
The check-out feature allows developers to
	change a rule while
	preventing updates from other developers.
The check-out feature creates a
	copy of a rule in a ruleset that is
	visible only to you, called
	a personal ruleset.
A personal ruleset contains
	the rules you have checked out and occupies the
	top spot in
	the ruleset stack.
A personal ruleset overrides
	rules in the rest of the application.
A personal ruleset allows you to
	test your changes to rules without
	affecting other developers.
Checking in a rule updates
	the application ruleset with
	a new version of the rule.
When checking in a rule what is sometimes required?
	Approval. If approval is not required, your changes
	immediately affect application behavior.
When updating a rule in App Studio, App Studio automatically manages the
	check-out / check-in process for you.
A private edit is
	a nonexclusive check out of a rule.
A private edit allows
	other developers to edit a rule at the same time.
What appears on the rule form for rules in a locked ruleset
	a lock icon
You can discard multiple rules at once by performing a
	bulk action.
Pega groups rules into classes according to their capacity for
	reuse. Each grouping is a class. Each application consists of three class types:
	Work
	Integration,
	Data
The Work class contains
	the rules that describe how to
	process a case or cases, such as
	processes,
	data elements, and
	user interfaces.
The Integration class contains
	the rules that describe
	how the application interacts with other systems, such as
	the integration assets that connect the application to a customer database or a third-party web server.
The Data class contains
	the rules that describe
	the data objects used in the application, such as
	a customer data type or order items data type.
A class can also contain other
	classes. A class that contains another class is a
	parent class.
A class that is contained by another class is a
	child class.
A child class can
	reuse or inherit any of the rules defined for its parent class.
Classes are organized from
	most-specific to
	least-specific in the class hierarchy.
The class hierarchy determines how
	developers can reuse rules within the application.
An application can leverage any rule that is available to an application through the
	class hierarchy.
When attempting to identify the rule to use at run time, Pega Platform starts with the most-specific class and expands the search to increasingly
	general classes.
TGB-Orientation-Work is a child of the class
	TGB-Orientation, which is a child of the class
	TGB.
Pega Platform™ provides two methods for rule inheritance:
	pattern inheritance and
	directed inheritance.
Pattern inheritance is
	automatic.
Pattern inheritance uses
	the class name structure to determine
	rules available for reuse.
Pattern inheritance searches for the rule of interest by following
	the class hierarchy
Pattern inheritance searches classes that share
	a class name prefix.
Directed inheritance is
	inheritance between classes where the parent class is
	explicitly specified.
You apply directed inheritance to reuse
	standard Pega Platform rules and rules from
	other applications
	outside the business class hierarchy.
Unlike the automatic use of pattern inheritance, directed inheritance is
	explicit. You list directed inheritance on the class rule form
When attempting to reuse rules through inheritance, Pega Platform first searches through the parent classes indicated by
	pattern inheritance. If unsuccessful, Pega then searches the parent class indicated by
	directed inheritance as the basis for
	another pattern inheritance search. This process
	repeats until Pega reaches the last class in the class hierarchy, called the
	ultimate base class or
	@baseclass.
If a rule cannot be found after searching @baseclass, Pega does what?
	Returns an error.
The passed deadline interval defines
	when to take further action because the step or case is
	past the deadline. The interval measures
	the time that has passed since
	the deadline for a
	still-open assignment.
Where is the only place where you can configure the passed deadline interval?
	in Dev Studio.
You can configure the passed deadline interval to
	repeat a fixed number of times, or
	repeat indefinitely until
	the user completes the assignment. You can continue to increase
	the assignment urgency and
	send an escalation action each
	time the passed deadline elapses.
The Create PDF automation does what?
	Attaches a screenshot of a view to the case in PDF format.
A cascading approval process configures
	a series of approvals.
Two cascading approval models are
	reporting structure and
	authority matrix.
Cascading approvals based on reporting structure require the approval of
	a user's direct manager and higher.
Can you configure a cascading approval with a reporting structure to require a specific number of approvals?
	Yes, you can also configure business logic to set thresholds to determine the number of required approvals.
If you need to test the values of multiple properties to answer questions such as “What promotional offer should the company offer?”, you can use
	a decision table.
Decision tables resemble
	a spreadsheet with rows and columns.
Decision tables are a good approach when you use
	a set of properties or expressions to arrive at a decision.
The decision table and decision tree rule forms include the ability to test for
	conflicts and
	completeness.
Checking for conflicts in a decision table or a decision tree identifies
	if your decision rule
	prevents one or more of its
	rows or branches from
	ever being used.
Show completeness identifies
	a decision table that has
	missing conditions or a decision tree that has
	missing branches. The system adds
	rows to indicate
	tests that are missing in the original decision rule
You can use decision trees to
	handle logic that returns a result from
	a set of test conditions.
Decision trees can evaluate against different
	test conditions and properties.
Decision trees contain
	condition branches, which contain
	a comparison value,
	a comparison operator, and an
	action.
A decision tree condition action can
	return a result,
	continue the evaluation, or
	stop the evaluation.
The branches of a decision tree is organized in
	a hierarchical tree structure.
In a decision tree, common conditions and results are placed
	at the trunk of the tree.
In a decision tree, more-specific conditions and their actions are placed
	farther down or “at the branches” of a decision tree.
While processing the rows of a decision tree or table, if the system does not reach a returned result, the system returns
	the final otherwise value.
While decision tables evaluate against
	the same set of properties or conditions, decision trees evaluate against
	different properties or conditions.
Developers can use a decision table when they have to evaluate
	many combinations of
	the same set of properties or conditions to return
	one value or property.
Each branch in a decision tree evaluates the property/operator pair against
	a single value to perform an action, such as
	return a value or
	evaluate a nested condition.
Developers can use a decision tree when they must evaluate
	conditions on different properties that may be
	dependent on other conditions.
You can reference a decision table or decision tree on
	flow rules,
	declare expressions,
	activities, and
	routers.
Two cascading approval models:
	reporting structure and
	authority matrix
A cascading approval based on an authority matrix is more
	flexible than a reporting structure.
You use the authority matrix model when configuring a process that requires
	approvals from multiple entities, with at least one entity
	outside of the reporting structure.
A work group identifies a
	cross-functional team that contains a
	manager and a
	work queue.
A work group identifies one
	operator who is the
	work group manager.
The Case Manager portal refers to work groups as
	teams.
Work groups can contain Authorized managers to help
	transfer assignments.
Cases are collections of
	data.
Sources of case data include
	user input,
	calculations,
	system actions, and
	integrations to external systems.
Each data element in a Pega Platform application is a pairing of two pieces of information:
	the name of the data element (determined by a property rule) and
	the value assigned to the data element or property.
While processing a case, data elements remain in memory for use by one or more users. Each data element is stored in memory on
	a page.
A page (for case processing / data elements) is
	a structure for organizing data elements in an application.
During case processing, each page remains
	in memory in a structure known as the clipboard.
The clipboard is
	the portion of memory on the server reserved by Pega Platform for the data generated by applications.
The clipboard consists of
	all of the pages used to track the property-value pairs that represent
	case and session data.
The clipboard receives its name because
	pages can be
	added to or removed from
	memory as needed to track
	case or session data.
When a value is assigned to a data element, the data element and its value are
	on the clipboard.
As you run a process, your application uses the clipboard to
	populate fields on UI forms,
	perform calculations, and
	evaluate decisions.
Pega Platform provides the Clipboard tool to
	display data in memory.
The Clipboard tool organizes and presents
	all the pages in memory, listing all the properties on each page and the value of each property.
The Clipboard tool is accessible from
	the Developer toolbar and contains three areas:
	the header,
	the left pane, and
	the right pane.
pyWorkPage stores
	data that is generated during
	case creation and processing.
pyWorkPage is
	a specific page on the clipboard and stores
	data such as the case creation date and the case ID.
Embedded pages within pyWorkPage store
	sets of case data as defined by a data type.
pyWorkCover contains
	the case data for the parent case.
pyWorkCover enables you to
	copy data between the parent case and the child case and
	confirm that any data mapped from the parent case to the child case is correct.
What page on the clipboard does a child case always have?
	pyWorkCover
Each page on the clipboard is
	an instance of a specific class
When you configure a rule that references a page, you indicate
	the class of the referenced page.
Indicating the class of a page allows Pega Platform to resolve
	references to rules within that class, such as properties.
When you attempt to save a rule that contains references to other rules,
	Pega Platform attempts to resolve those references.
If the rule contains one or more unresolved references,
	Pega Platform cancels the save operation and informs you of the unresolved references.
To indicate the class of a page used by a rule, use the
	Pages & Classes tab of the rule to list
	the referenced page and the
	class of that page.
An edit validate rule is used to perform validation based on
	data format.
You call an edit validate rule as part of
	the validation logic for a specific property.
What type of validate rule should you use if you want to check whether the input that your user provides is relevant.
	edit validate rules, by verifying character patterns
Data transforms do what?
	copy selected data from one source to another and manipulate the data as needed
When should you use a data transform?
	when a data reference is insufficient for your business need
The purpose of a data transform is to
	manipulate data in an application.
True or False? You cannot use data transforms to iterate over entire page lists or page groups and copy entire pages at a time.
	False. You can use data transforms to iterate over entire page lists or page groups and copy entire pages.
You should reference data from a parent case when you want to avoid
	synchronization issues if data changes on the parent case.
Setting default property values reduces what?
	testing time and increases
	data entry efficiency.
Data transforms can be used to automatically
	set default property values for
	test data,
	common values, and
	known information.
What are two data transforms that are used automatically by Pega to set default property values and page properties when you create a case?
	pyDefault and
	pySetFieldDefaults
Use pySetFieldDefaults to
	set values for UI fields.
Use pyDefault to
	set values for properties not referenced in the UI.
The first time you create a view for your case type, Pega Platform creates the pyDefault and pySetFieldDefaults data transforms. You can also create them manually. When a new case is created, the pyDefault data transform is invoked by the pyStartCase process. PyDefault then invokes the pySetFieldDefaults data transform.
Developers can make data transforms more modular by using
	a superclass.
A data transform superclass allows you to
	combine several data transforms using the superclass feature to set values at
	multiple levels of the class hierarchy.
When the superclass feature is enabled on data transforms, Pega:
	Identifies the parent of the current class
	Identifies the next level parent until the highest parent class is located
	Finds the data transform
	Invokes data transforms
To configure the superclass feature for data transforms, from the Dev Studio workspace:
	create a data transform with the same class name at each level and
	ensure the Call superclass data transform option is selected on the desired data transform.
If properties are specified in both the parent and subclasses of a superclassed data transform, the data transform in the subclass does what to the data transform of the parent class?
	overwrites the data transform in the parent class.
The standard Work- pyDefault data transform sets property values that are used
	in all case types. The properties include
	work status,
	work urgency, and
	operator organization information.
A data page retrieves
	data from
	a specified data source and
	caches that data in memory.
A data page manages the
	integration to the data source, separating business processes from
	any integration details.
Applications only attempt to populate the contents of a data page when
	the page is accessed
Due to only being populated when they are accessed data pages are considered what type of rule?
	a type of declarative rule.
Pega Platform automatically prepends what characters to the name of a data page?
	the characters D_
When creating a data page, a developer must provide four key pieces of information:
	The structure of the page contents
	The object type represented by the contents of the data page
	The edit mode supported by the page
	The scope of the data page
In App Studio, Pega Platform automatically creates three data views for a data object when you specify a data source:
	a data view containing a single item,
	a data view containing a list of items, and
	a data view configured to push changes back to the data source.
The structure of a data page determines
	whether the data page can contain one item or many items.
When using a list structure for a data page, the data page embeds the list items in an ordered array named
	pxResults.
To access a specific record within the list, use the syntax
	DataPageName.pxResults(n), where n is the index of the ordered array that corresponds to the record.
Pega is indexed starting with
	one (not 0)
The object type of a data page identifies
	the information contained by the data page (a class)
The edit mode of a data page indicates
	how — or if — an application can manipulate the information on a data page. The edit modes are:
	Read-Only
	Editable
	Savable
If the data page mode is Editable, the Clipboard tool lists the data page in
	the User Pages category.
The scope of a data page determines
	the visibility of the page contents within the application. The options are:
	Thread,
	Requestor, or
	Node.
Use the Data sources section of the data page form to specify
	how Pega Platform populates the contents of a data page when an application references the page. The options for data sources include:
	Data transform
	Activity
	Connector
	Report definition
	Database lookup
	Robotic automation
	Robotic desktop automation
For which data sources must you configure a data transform to map the response to the data model? When…
	Using a report definition to source a page structure
	Using a lookup to source a list structure
	Using a robotic automation
	Using a robotic desktop automation
the Aggregate sources option on a data page allows you to
	combine data from multiple sources to populate the data page
True or false? A data page must specify at least one data source.
	True.
When should you use parameters on a data page?
	When you want to limit or filter the contents of a data page
Out-of-date data page data is called
	stale data
When a user first accesses a data page, Pega does what?
	populates the page with up-to-date information.
The Reload once per interaction data page option updates the contents of the data page
	each time a user accesses the page in memory. This option is available only for pages with the scope set to
	Thread or
	Requestor and cannot be
	combined with any other refresh option.
Do not reload when data page option uses
	a when condition to test whether the data page is considered stale. If the condition returns a result of true, the contents of the data page are considered
	current and Pega Platform does not attempt to update the data page.
Reload if older than data page option uses
	a fixed interval of time to determine whether a data page is stale. After the interval ends, the data page contents are
	considered stale, and
	the next attempt to access the data page causes Pega to update the data page.
Pega Platform never refreshes a data page more than one time per
	interaction, regardless of how the data page refresh options are configured.
When you always need the most current data from an external system or application for a data page use the
	“Refer to the data page” data page option. This option does not copy the data. Instead, the application refers to the data from the
	source when needed.
When you need data from a specific point in time, use
	“Copy data from the data page” data page.
When using “Copy data from the data page” data page options, and the data has been copied, when would the application copy the data again?
	if the request parameters change. But when the parameter changes, what happens to the data page?
	a new data page is created and impacted data is copied to the property and overwrites the existing data.
When you copy data from a data page, the data is stored where?
	in the property. And the data page is not accessed again unless
	a parameter changes.
When you populate a list or UI element with data from a data page, the items update according to
	the refresh strategy specified on the data page.
The Primary keyword can be used to explicitly set
	the context for the step to the data page that called the data transform.
A table layout is for
	simple text entry controls, such as
	input fields or
	calendar controls. The textual data is presented in a series of
	columns and rows. Like a spreadsheet
What is a downside of a table layout?
	It has limited responsive capabilities.
Simulating an external data source is useful in situations when
	the external system is unavailable and also when
	you want to unit test since you can dictate the returned response
You can simulate any external data source as long as you know
	what data the source is expecting and returning.
A connection between systems consists of two parts:
	a connector (sometimes referred to as a
	service connector) to initiate a request, and a
	service to fulfill the request. The connector on the requesting system establishes
	a link to a service on the responding system to exchange data between the two systems.
A connector defines
	an outbound request for information.
SOAP stands for
Simple Object Access Protocol
REST stands for
	Representational State Transfer
REST and SOAP are what?
	agreed-upon frameworks for passing data
In Pega Platform, you implement a connector with a
	connector rule.
When you use a connector to request information from a data source, you can call the connector from
	a data page.
When you use a connector to send information to a data source, you can call the connector from
	an activity.
You can call a connector from
	a data page or
	an activity
A service processes an inbound request and responds to the requesting system. Services define parameters for passing data needed to fulfill the request and the structure and format of the response, such as eXtensible Markup Language (XML) or JavaScript Object Notation (JSON). The requesting system parses the response to map the returned data to its data structure.
XML stands for?
	eXtensible Markup Language
JSON stands for?
	JavaScript Object Notation
What are the primary uses for XML and JSON in regards to services?
	Services respond by sending their data in XML or JSON format.
What does a listener do in regards to a service?
	calls service rules and runs in the background, waiting for requests
What does RBAC stand for?
	role-based access control. What can they prevent if used correctly?
	risks of customer loss,
	data breaches, and
	legal and financial penalties
Access control depends on two factors:
	authentication and
	authorization.
Authentication
	confirms the identity of a user and
	verifies that the user is allowed access to an application.
In Pega, what allows for the authentication of a user?
	the record for the operator ID
Authorization
	determines what data the user can view and
	what actions the user can perform.
In Pega, what determines the authorization of a user?
	The record for the access group and
	the records of the application
How do you achieve different levels of access control?
	You create multiple access groups for the same application.
An access role in Dev Studio categorizes users according to
	their job function.
Each access role represents
	how a set of users interacts with an application to create and process cases.
Access roles are associated with
	a set of permissions.
The Access Manager does what?
	Simplifies the configuration of security records. You can can quickly
	set or remove permissions for basic tasks, such as creating a case, deleting a case, or running reports.
In the Access Manager you set permission for what?
	the access roles associated with a particular access group.
What happens when an access group lists more than one access role?
	the most permissive settings are applied for the group
Field-level auditing enables you to
	monitor changes to important data values in your cases. From a security perspective, it is useful to track modifications when sensitive data is involved.
Which class captures field-level tracking, and changes made in an instance of a rule?
	the History- class.
A declare expression is
	a field with a value that is computed based on an expression
Tracer color code of Gray indicates what?
	Activity processing
Tracer color code of Orange indicates what?
	Events from flow, decision, or declarative rules
Tracer color code of Light Blue indicates what?
	PegaRULES database and cache operations
What is a step page?
	the current context that we’re are running in.
DevOps is
	a set of practices that bridge application development and operational behavior to
	reduce time to market without compromising on
	quality and operational effectiveness.
DevOps allows application developers and business owners to
	quickly respond to customer needs, and develop
	a quicker feedback cycle.
The practices of continuous integration, continuous delivery, and continuous deployment create a
	standardized deployment process so that you can deploy predictable, high-quality releases.
A continuous integration and continuous delivery (CI/CD) pipeline is
	an automated process to quickly move applications from development through testing to deployment.
With continuous integration, application developers frequently
	check in changes to the source environment and use
	an automated build process to automatically verify these changes. They ensure that
	all the necessary critical tests are run before
	integrating and publishing changes to
	a development repository.
With continuous delivery, application changes run through
	rigorous automated regression testing and are deployed to
	a staging environment for
	further testing to ensure that
	the application is ready to deploy on the production system.
In Pega what tool supports DevOps?
	the Deployment Manager
Use Deployment Manager to
	configure and run continuous integration and delivery (CI/CD) workflows for your Pega applications from within Pega Platform™.
With the Deployment Manager you can
	create a standardized deployment process to deploy predictable, high-quality releases without using third-party tools and fully automate your
	CI/CD workflows, including
	branch merging,
	application package generation,
	artifact management, and
	package promotion to different stages in the workflow.
Agile development best practices include:
	Frequent development iterations that are small in scope
	Continuous application testing to identify issues early
	Branched development that ensures only quality configurations are introduced
Agile development allows for
	continuous, iterative application development based on
	small scope business requirements.
In Agile development when the requirements change, you can
	quickly capture feedback, and then
	make smaller but more
	frequent in-app changes to incorporate feedback in real time.
DevOps tightens the integration between
	development teams,
	test teams, and
	post-go-live support teams to provide
	a more streamlined and automated
	build, test, and deploy process.
The most basic form of application testing is
	unit testing individual rules.
An enterprise
	a complex organization structure
	many locations
	needs a way to manage their channels, products, and customers.
	different countries: regulations for each jurisdiction.
Enterprise Class Structure (ECS)
	a class hierarchy
	organizes your application by using the same dimensions as your business
	shares any rule placed in an ECS layer across multiple applications.
	adjust existing ECS layers as business operations change
	enforces best practices around reuse and standardization as the system expands to other lines of business.
Pega Platform layer contains the built-in assets used for
	processing cases and other work.
Organization layer
	contains the assets used on an enterprise-wide basis
	rules for enterprise-wide business logic
	standard properties, decision tables, and service level rules
	applications used across the enterprise can use the rules from this layer
	contains enterprise-wide data assets
	classes and rules for data stored in the system
	classes and rules for access to data in external systems, via connectors.
Division layer
	contains the assets used on a division-wide basis.
	the middle level of the three (Org-Div-Unit)
	available for use in every application
	apply to a line of business, region, or brand
	an optional layer
Framework layer
	contains assets that can be extended in specific implementations
	may be comprised of one or more generalized applications
Implementation layer
	defines an application customized for a specific division or line of business
	may extend one or more framework layer applications
	“brand-specific” assets, such as styling and policies
Rule resolution is a search...
	algorithm used to find the most
	appropriate instance of a rule. It occurs whenever
	a rule is needed to accomplish processing of a case (at runtime)
Rule resolution applies to most rules that are instances of classes derived from the abstract
	Rule- base class.
Instances of the abstract Rule- base class
	Case types (Rule-Obj-CaseType )
	Properties (Rule-Obj-Property )
	UI rules such as Sections (Rule-HTML-Section) and Harnesses (Rule-HTML-Harness)
	Declare expressions (Rule-Declare-Expression)
	Data pages (Rule-Declare-Pages)
Rule resolution does not apply to
	instances of classes derived from Data-, System-, or Work-
A rule's type is defined by
	the class from which the rule is derived
The Rules Cache helps ensure
	rule resolution operates efficiently and is populated by
	a multiple-step process.
The Rules Cache is part of
	the rule resolution algorithm
Rule resolution algorithm creates
	a list of all rules that match the purpose of the rule in question to populate
	the rules cache
During the rule resolution algorithm, what rules are instantly discarded?
	all rule candidates marked as Not Available
	all rule candidates not in the operator's Ruleset list
	all rule candidates not defined in a class in the ancestor tree
If a rule is blocked
	execution is halted, and an error message is added to the log file.
If a user does not have the privileges required to run a rule
	Pega sends a message: “the rule is not authorized for execution.”
Availability of a rule is visible where?
	on the rule form next to the rule name or description
The availability of a rule is used to determine
	if a rule is available for use during rule resolution and if a rule can be
	viewed, copied, or edited in Dev Studio.
Rule Availability: Available
	may be used
	the default
	can view, copy, edit, and execute
Rule Availability: Final
	may be used
	can view and execute
	cannot be edited or copied
	indicates may be changed in subsequent releases
Rule Availability: Not Available
	may not be used
	indicates to the algorithm to use the next-highest version
	can view, copy, edit
	cannot execute
	good for initial development: “allows you to save a rule without validation” (?)
Rule Availability: Blocked
	may be used
	can view, copy, edit
	does not execute (is available)
	if executed, execution is halted, and an error message is added to the log file.
Rule Availability: Withdrawn
	may not be used
	can view, copy, edit
	does not execute
	all rules that are in the same ruleset with an equal or lower
	version number and the same rule type and Apply to: class are hidden and no longer considered after Availability is checked during the rule resolution process.
Circumstancing is a way of modeling
	complex exceptions by creating a variant of a rule
Circumstancing allows you to
	customize the behavior of your application to address
	each exception condition you identify using a collection of
	targeted rules rather than
	one complex, difficult-to-maintain rule
Circumstancing establishes what before specializing?
	A baseline rule for expected case behavior and then adds variants to address exceptions to the behavior
The goal of circumstancing is to create
	a variant for each anticipated situation.
To circumstance a rule start by creating
	a base rule to define the expected behavior then, then
	identify any exceptions to the expected behavior.
The base rule is used if
	a circumstanced version that is more appropriate can’t be found.
The circumstance template is
	the rule that defines the properties used to determine if the circumstance is applicable.
A circumstance definition defines the values for
	the circumstance template.
Queue processors do what?
	Queue objects and then process them in background processing.
If a queued process fails, the queue entry goes into
	failure status. This indicates the process is
	broken. What happens to any any changes the process initiated?
	They are reversed.
The Queue processor landing page in Admin Studio does what
	traces and monitors Queue Processor rules
Users with the SysAdmin4 role can do what and examine what
	can troubleshoot errors in the Queue processor landing page and examine
	items in the Broken queue.
The job scheduler triggers what?
	the processing of items at pre-configured times. It does not what?
	Queue items.
The Performance tool manages
	statistic aggregation for job scheduler rules.
You can configure the ASYNCPROCESSOR requestor type to include
	an access group with access to the application.
The Queue processors page is used to
	trace, start and stop queue processors
Tracing processes on the Queue processors page:
	enables you to examine issues only when?
	While processes are running
To start a processor trace: In Admin Studio, click
	Resources > Queue processors
	On the row of the queue processor you want to trace, click
	the Actions menu icon to open the actions menu.
	On the Actions menu, click
	Trace to begin the trace.
What is written to log files?
	errors
	warnings
	and other debug items
Logs track:
	exceptions
	events that impact your application
	provide valuable insight into their cause
An appender manages what?
	Each log and determines what?
	The type of events written to the log file.
Where is the appender configuration stored?
	In the prlog4j2.xml file, used for the entire node.
Logs can be found where
	In Dev Studio, from the Configure > System > Operations landing page.
What are the different types of logs?
	PEGA log
	ALERT log
	ALERTSECURITY log
	BIX log
	SERVICES-PAL log
	CLUSTER log
The PEGA log contains
	warnings
	errors
	information messages about internal operations
The PEGA log is also referred to as
	the Console log
	the System log
The PEGA log is used for
	debugging an application
By default the PEGA log filters based on what
	the current operator ID
The ALERT log contains
	performance-related alerts
You can use the PLA tool with the ALERT log to do what?
	parse and summarize the ALERT log into a Microsoft Excel spreadsheet
The ALERTSECURITY log contains
	internet / URL- related alerts (identified by the prefix SECU)
The BIX log created by the Business Intelligence Exchange during extract operations and provides
	provides the extract functions of an ETL (extract, transform, and load) utility
	optional
The SERVICES-PAL log contains
	performance data saved from services
The CLUSTER log contains
	information about the setup and run-time behavior of the cluster
Pega displays a log file for whom
	for you / your own Operator ID on the node
Logging Level Settings tool 
	controls which logging events appear in the PEGA log.
prlog4j2.xml configuration file
	defines the levels of logging events
You can create separate prlog4j2.xml files for
	each node
In terms are of logging are rulesets and the Pega class hierarchy important?
	no, they are irrelevant to logging.
PegaRULES Log Analyzer (PLA) is a standalone...
	web application that developers and system administrators can use to view summaries of
	console logs.
Use the PegaRULES Log Analyzer (PLA) to:
	test new or reconfigured Pega applications during user acceptance testing (UAT)
	do performance and stress testing
the PegaRULES Log Analyzer (PLA) consolidates and summarizes which three logs?
	ALERT log (performance)
	PEGA log (stability)
	Garbage Collection log (memory)
Performance, stability, and scaling issues are most likely to occur when
	during performance testing
	right after deployment
The Tracer allows you to
	view events such as how a case is processed and identifies
	the processing steps that lead to an error.
Is the Tracer resource intensive?
	Yes! it dramatically slows application performance
What two designations does the Tracer log give to steps:
	a status of Good
	a status of Fail
The Tracer log displays each event on a separate row. what are the colors and what do they mean?
	Gray – Activity processing
	Orange – Events from flow, decision, or declarative rules
	Light blue – PegaRULES database and cache operations
the Tracer log shows each event by
	thread
	event type
	status
when should you start logging events with the the Tracer
	when you are ready to run the application section you want to troubleshoot.
the Settings, Breakpoints, Watch, and Remote Tracer buttons
	on the Tracer toolbar allow you to refine what you need to
	capture by indicating the types of events and break
	conditions to log by using
Tracer Settings allow you to
	reduce the information captured
	filter results by event, event type, ruleset, and break conditions.
Breakpoints
	stop the Tracer and the processing on your thread
After a breakpoint, when does tracing resume?
	when you click Play
	after an hour elapses … whichever comes first
Watch functions
	similar to breakpoints, but monitor a specific property value or values
	shows if or when these properties change
which three performance tools can be found on the Performance landing page:
	Performance Analyzer (PAL)
	Database Trace
	Performance Profiler
the Performance Analyzer (PAL)
	shows the system resources consumed by processing a single requestor session
	works on existing data
	does not degrade processing
The Database Trace tool is useful to tune the application for
	database performance.
When PAL indicates performance issues in the database, you should use what to find the issue?
	The Database Trace tool.
The Database Trace tool can trace
	all the SQL operations like queries or commits that are performed.
The Performance Profiler shows a detailed trace of performance information about what three things?
	the execution of activities
	when condition rules
	data transforms …executed by your requestor session.
The Performance Profiler should be run in conjunction with
	the Performance Analyzer.
Pega Predictive Diagnostic Cloud (PDC) runs where
	on Pega Cloud
Pega Predictive Diagnostic Cloud (PDC) is a
	SaaS tool
Pega Predictive Diagnostic Cloud (PDC) does what gathers, monitors, and analyzes real-time performance and health indicators for what
	all active Pega Platform applications
Pega Predictive Diagnostic Cloud (PDC) gathers, aggregates, and analyzes what things about your applications?
	alerts
	system health pulses
	guardrail violations
Pega Predictive Diagnostic Cloud (PDC) allows users to predict:
	potential system performance issues
	business logic issues
Does the Pega Predictive Diagnostic Cloud (PDC) provide suggestions to fix any issues it predicts?
	yes.
True or False? Systems running on Pega Cloud are already integrated with the PDC.
	True
True or False? Pega applications send data to PDC. PDC does not request data from Pega applications.
	True
The Performance Profiler is useful when and for?
	when determining which part of the process might be having performance issues
where do you find the Performance Profiler?
	Dev Studio > System > Performance >Performance Profiler
True or False? the Performance Profiler requires substantial processing overhead?
	True
the Database Trace produces what:
	a text file containing:
	the SQL statements
	rule cache hit statistics
	timings
	other data related to your requestor session with the Pega Platform™ database or other relational databases
To find the Database Trace:
	Dev Studio > System > Performance > Database Trace) 	
The Performance Analyzer (PAL) provides
	a view of all the performance statistics that Pega Platform captures
Use the Performance Analyzer (PAL) to
	understand the system resources consumed by processing a single requestor session
To find PAL in Dev Studio:
	Dev Studio > System > Performance
The INIT row in PAL data displays
	the totals from the first reading
The DELTA rows in PAL data indicates the changes from
	a previous reading.
The FULL row in PAL data displays
	the total sum of all the statistics from the last time the data was reset
PAL readings are in what measurement.
	seconds. All values are in seconds.
RA Elapsed value in PAL represents the time spent in
	rule assembly and can skew
	performance readings.
First Use Assembly (FUA) is what happens when
	you run through a process the first time.
When using PAL, run through the process once to ensure
	all rules have been assembled before taking any measurements
Relevant records
	items that define and are most likely to be reused for a case or data type
What can you configure as a relevant record?
	Fields / properties
	Views / sections
	Processes / flows
	User actions / flow actions
	Correspondences
a record is automatically marked as relevant when
	you create them by using Data Designer or Case Designer
duplicate case is ?
	a case that has many of the same data values as another case already in the system.
	matching data is not an issue. it’s a specific combination of data values
search duplicate cases process
	helps users identify and resolve duplicate cases
	uses basic conditions and weighted conditions to compare specific property values with cases already present in the system.
search duplicate case steps first
	evaluate basic conditions
weighted conditions of a duplicate case step receive
	a weight value between 1 and 100
	determines the relative importance of a condition
if the sum of the weights in a duplicate case step exceed a specified threshold value
	the current case is flagged as a potential duplicate
Temporary cases are stored where
	in memory on the clipboard
Temporary cases do not have
	case IDs
Temporary cases save what and improve what?
	save storage and improve system performance
Temporary cases can only be processed by
	a single operator
Temporary cases cannot be
	routed
Temporary cases can be
	“persisted” -> changed into a permanent case
Temporary cases are persisted with a
	Persist Case automation step to the case life cycle
Parallel processing allows you to run
	multiple processes in parallel
Parallel processes are good for processes that can be
	started and completed independently.
What are the three flow shapes / options for complex parallel processing:
	the Split Join shape
	the Split For Each shape
	the spinoff option in the Subprocess shape
Split Join
	calls multiple independent processes that operate in parallel and then later rejoin
Split For Each shape
	allows you to run one subprocess multiple times by iterating through a set of records stored in a page list or page group
when using a Split For Each shape make sure…
	that the flow and the page list used in the iteration are in the same class
what special join condition can be used with a Split For Each shape?
	an Iterate join condition
	starts flows for items on the Page Group or Page List property one by one, testing an optional when condition to determine whether to start the flow for a given iteration
spinoff option in the Subprocess shape
	allows you to run the subprocess in parallel with the main flow.
True or False? The main process of a spinoff subprocess does not wait for the subprocess to complete before proceeding.
	True.
a join condition controls
	when the main flow resumes
which flow shapes can use a join condition?
	Split For Each
	Split Join
what are the 3 types of join conditions?
	any
	all
	some
any join condition
	main flow resumes after any one subprocesses completes
	other subprocesses are stopped
	open assignments of these subprocesses are cancelled
all join condition
	want the main flow to resume after all of the subprocesses complete
some join condition
	a when rule or a count controls when the main process continues
where do you configure case locking?
	the Settings tab of the Case Designer in either App Studio or Dev Studio.
pessimistic locking strategy
	an application applies an exclusive lock when opening an item, such as a case
	Pega’s default strategy
optimistic locking strategy
	application does not apply an exclusive lock when opening an item.
	the application checks whether the item has changed before committing any changes.
Allow one user is what type of locking strategy?
	a pessimistic locking strategy
Allow one user locking strategy does what when a user opens a case,
	locks the case to prevent other users from applying any changes.
After the time-out period lapses on a locked case, what happens?
	The case can be accessed by another user.
What is the default time-out period for a lock?
	30 minutes.
Allow multiple users
	an optimistic locking strategy
	Pega Platform checks for changes to the case when a user attempts to save their updates
If a case, with an Allow multiple users locking strategy, has changed what happens?
	Pega Platform prompts the user to either:
	reload the case and reapply any change or
	close the case without saving their changes.
do child cases inherit the locking strategy from their parent case?
	Yes.
if Allow one user is selected for the parent case, what happens to the parent case when the child case is opened?
	Pega Platform locks the parent case whenever a user opens a child case.
To allow a second user to update a parent case while the child case is open, select the
	Allow other users to access parent case when the child case is opened check box on the parent or child case?
	the child case.
If you configure a child case to override the locking strategy of the parent case, configure the time-out value of the child case to be
	less than the time-out value of the parent
When working with a case type hierarchy
	set locking on the top parent case.
	settings cascade down to each child case when it is instantiated
If a child case is instantiated as a standalone case, it does not inherit what?
	the locking settings of the parent
pre-processing and post-processing actions on a flow action allow you to
	perform a set-up or wrap-up action in conjunction with the flow action
a when rule is
	a yes / no question to automate a decision
a decision table:
	tests multiple values to answer a question
	resembles a spreadsheet with rows and columns
a decision table can be referenced in:
	decision shapes
	declare expressions
	activities
	routers
the otherwise row of a decision table returns if
	none of the conditions evaluate to true.
the Evaluate all rows option of a decision table enables
	the decision table to evaluate all rows, returning
	an array of results
use decision trees to
	handle logic that returns a result from a set of test conditions
decision trees can be referenced in:
	flow rules
	declare expressions
	activities
	routers
unit testing
	testing something on its own before testing it in the context of the entire application
you can test decision tables and trees with
	Show Conflicts
	test for conflicts in the logic (logic that will never evaluate)
	Show completeness
	check for completeness (missing logic)
a cascading approval step with an authority matrix is used when a decision requires
	multiple approvals from different parts of the organization (not a direct line of authority)
a cascading approval step with an authority matrix requires what things to make?
	a page list property to hold the list of approvers
	a single-value property as an element of the page list to identify each approver in the list
	a decision table to determine the conditions for populating the page list with the Evaluate all rows option enabled
what three things can be used instead of a decision table to populate the rows?
	a data page
	data transform or
	activity
To configure a cascading approval step with an authority matrix
	add an approval step to a stage
	specify Cascading as the type
	specify Authority matrix as the model
what are the two types of cascading approvals?
	reporting structure
	authority matrix
when do you use a reporting structure cascading approval
	when approvals always move up the reporting structure of the submitter or another defined list
when do you use an authority matrix cascading approval
	when a set of rules directs the approval chain to individuals both inside and outside the organization of the submitter
what are the three-levels of the Pega organizational hierarchy
	organization
	division
	unit
In an application how many organizations are you allowed?
	only one
What does the organization level of the Pega organizational hierarchy represent?
	the enterprise
In an application how many divisions are you allowed?
	one or more (or none! it’s optional.)
What does the division level of the Pega organizational hierarchy represent?
	business units such as a region, a brand, or a department
Can you have subdivisions in the the Pega organizational hierarchy?
	No!
What does the unit level of the Pega organizational hierarchy represent?
	units of operators who do work specific to their organization
Can you have child units in the the Pega organizational hierarchy?
	Yes!
organization records are
	standard data instances the structure is built with
organization records can be found
	in the Records Explorer in the Organization
a work group identifies
	a cross-functional team that contains a manager, a set of operators, and a work queue
how many work queues can a work group have?
	only one.
where is a user is associated to a work group?
	their operator record
work groups allow
	individuals to share work without affecting the organizational hierarchy
a work group can have how many managers?
	one
Authorized managers of a work group can…
	transfer assignments
Authorized managers of a work group are not…
	required to be part of the work group
	not allowed to perform approvals or complete assignments
to add a new unit to an organizational structure:
	Add a new unit to the hierarchy.
	Create a new work group.
	Create a new work queue.
	Associate the work queue with the work group.
	Associate the unit and work group with an operator.
When adding a new unit to an organizational structure you cannot create what two things at the same time?
	Both the work queue and the work group at the same time as they are mutually dependent. You should use an existing
	work queue then go back and update the work group to the correct work queue.
where do you create new organization records like units, work groups, and work queues?
	the Records Explorer
organization names in the Records Explorer are
	unique and cannot be used in more than one hierarchy
work group name records should end with…
	an at sign (@)
ToDefaultwork is used by
	the standard router activity queue to locate a work queue
	(it is based on the work group associated with the current operator.)
creating a local list on the property record for the list of allowed values for a specific property is good when the list is
	short, mostly static, and common for all case types in the application.
using field values for the list of allowed values for a specific property is good when the list is
	large, expected to change frequently, or may be specific for each case type
When using field values you can manage the list of allowed values separately from
	the property.
Field values enable reuse and customization based on
	the context.
.pyStatusWork is
	a field value in the Work- context
field values support localization of
	words, phrases, and sentences that appear on
	portal displays
	reports
	user forms
to create field values:
	organize a list of allowed values you want to display in the list for the property
	create a Field Value record for each allowed value. In the record, enter the value you want to display
	identify the appropriate Apply to: class of the property where you want to display the list
	associate each Field Value record to the property where you want to display the allowed value. Create a new Field Value record for each allowed value.
a user portal is the user’s
	view into an application
True or False? Pega has ootb, default portals that can be customized.
	True. They are the Case Worker and the Case Manager
harness records
	organize the structure of a portion of the user display
what are the four standard harnesses?
	New - Supports the creation of new cases.
	Perform - Enables users to select a flow action to perform to complete an assignment.
	Review - Presents an assignment in read-only mode, preventing data entry.
	Confirm - Presents a read-only confirmation of completion of an assignment if the next assignment is not performed by the user.
You can customize the default end-user portals provided in Pega if the customization is complex enough, you can also
	create a custom application portal.
a portal is represented with
	a portal rule.
a portal rule identifies:
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
Portal records are listed in
	the User Interface category in both the Records Explorer and the Create menu.
Portal records are classless and do not appear
	in the App Explorer
User portals are intended for users who do not routinely need to
	update rules.
User portals require less
	memory on the user's workstation than developer portals
User portals can be used to configure
	delegated rules
Developer portals are intended for
	system architects and business architects who routinely update rules.
where can you select the user role and portal type
	on the Details tab of the portal record
Default user portals are organized with what three things?
	a header
	a left navigation pane
	a content pane
How do you modify the contents of a section you are viewing?
	Use Live UI to identify and open the section to change it.
to create a new layout for a portal you should create a new harness in the Data-Portal class and add a section layout to the portal. But what must you reference on the Details tab of the portal record after doing this?
	the new harness
Skins contain instructions for
	formatting UI elements
Where do you go to apply a skin to a portal, rather than reusing the application skin?
	on the Details tab of the portal record, select the Other skin option, then enter or select the skin to apply
you can add a menu to a portal by using a…
	navigation record
a navigation record defines:
	the entries in a menu
	the actions performed when a user selects the menu item
where can you find Navigation records
	in the User Interface category in the Records Explorer and in the Create menu.
a binary file record acts as a…
	wrapper for the file, providing the security, inheritance, versioning, and deployment benefits of rule resolution.
To update the icon displayed in a portal go where in App Studio
	to Settings > Theme, and upload a new logo.
where can you find binary files?
	in the Technical category in the Records Explorer and in the Create menu.
dashboard widgets provide
	insight into the status and progress of open cases.
To customize the dashboard,
	determine the dashboard template to use to organize the dashboard, then
	add widgets to each slot
how do you provide users with access to a user portal?
	add the portal to the list of available portals in the Available portals section of the Definition tab of the access group record
How do users access their non-default portals?
	from either the Operator menu or the Launch menu, depending on the portal.
a skin defines
	the responsive behavior and formatting of
	colors,
	fonts,
	images, and
	layouts
a skin applies formatting through the use of
	mixins and formats
mixins define
	a set of style attributes that can be reused
mixins allow for
	defining efficient and clean style repetitions
what are the four categories of mixin?
	Typography: Allows you to configure anything related to text, like font, font size, or color
	Background: Allows you to configure background colors of elements
	Border: Allows you to configure borders and gradient effects
	Combination: Allows users to create complex mixins that incorporate multiple mixin types
mixins should be applied at what organizational level?
	the application level
	can also be applied to a portal (?)
mixins should be the first…
	point of customization as they are the most reusable
a format defines
	the styling of a specific UI component
how do you configure a format?
	by setting the properties or inheriting styles from a mixin
a UI component is styled within
	a skin
True or False? a UI component can have multiple formats defined for it?
	True.
What are the four categories of UI components:
	General: Modal Dialogs, Errors
	Layouts: Dynamic Layouts, Trees and Grids
	Controls: Buttons, Dropdowns, Labels
	Reports: List View, Paging Bar
Starting with a control UI component, what is the the relationship between mixins, formats, skins? a Control specifies…
	a format, which is defined in
	a skin, where the styles of
	the mixin are loaded
WAI-ARIA stands for?
	Web Accessibility Initiative-Accessible Rich Internet Applications
What is WAI-ARIA?
	defines ways to make Web content and Web applications more accessible to people with disabilities
accessibility roles are
	unique roles that apply specific attributes to user interface elements that enable communication between assistive devices and Pega applications about UI elements
PegaWAI ruleset contains
	rules that include the WAI-ARIA role settings
What are some ways of enabling accessibility without the PegaWAI ruleset?
	Set tooltips on controls, buttons, links, icons, and input fields.
	Configure a high-contrast color scheme.
	Set the enter event on a control when you set a click event on the control (for example, configuring the up and down keys to support navigating through a list and set focus on an item).
	Include links with icons.
	Use a button or a link to dismiss an overlay.
	Mark a dynamic container as the main content area by default.
	Use a drop-down list of options instead of text entry for fields with predictable answers (for example, a series of numbers or colors).
Accessibility Inspector tool allows you
	to identify and rectify accessibility issues with your application
Accessibility Inspector tool is opened by clicking
	the Accessibility icon in the Developer toolbar
What are the two main features of the Accessibility Inspector tool
	Disability preview
	Audit your UI by category
The Disability preview of the Accessibility Inspector tool allows you to view your app with what visual disabilities?
	None
	Achromatopsia (Absence of color)
	Deuteranopia (Red Green confusion)
	Protanopia (Red Green confusion)
	Tritanopia (Yellow Blue confusion)
What are the categories for the the Accessibility Inspector tool audit your UI by category feature?
	Content – For example, an icon is missing helper text or a label.
	Structural – For example, the heading level hierarchy is out of order, which can potentially confuse screen readers.
	Interactivity – For example, the skip to content navigation is missing on the harness, which prevents users from using the Enter key to navigate to the main content easily.
	Compatibility – For example, a tab group layout, which is deprecated, is used instead of a layout group.
To implement the PegaWAI ruleset
	add and save the ruleset to the list of production rulesets in the Advanced section of the application Definition page
	add and save the ruleset to the Production rulesets list under Run Time Configuration on the Advanced tab of the
	select the Enable accessibility add-on check box.
How does Dynamic UI differ from responsive UI?
	Dynamic UI is
	what elements appear on the form, while Responsive UI:
	how form elements align and shift
Where do you configure Dynamic UI
	in the section rules
To configure Dynamic UI
	identify the UI element target that you want to dynamically show, hide, or disable
	decide at which level (section, layout, or field) to apply the condition
What are the two types of events for the event-action model?
	property-based events: occur when a data value changes or when a value meets specific criteria.
	user event: occurs when an end user takes some action (event types often overlap)
Run visibility condition on client option reduces
	the number of server trips and avoids page refreshes
Run visibility condition on client option is displayed when
	you use the If not blank, If not zero, or Condition (expression) visibility options
Run visibility condition on client option causes the clipboard page to
	include all the possible data it can display
Run visibility condition on client option causes the application to
	refresh the section based on the visibility condition
action sets consist of
	an event: a trigger performed by users
	an action: a response performed by the system
	(optionally) conditions: restrictions such as when rules
action sets require at least…
	one event and one action
True or False? You can create multiple action sets for a single control or layout?
	True.
the Localization wizard automates
	the steps to create language-specific versions of your application
the Localization wizard identifies
	field values and text strings that are used in
	harness,
	section,
	list view,
	summary view,
	message, and
	portal rules.
What rules are are automatically configured to be selected for localization?
	harness
	section
	navigation rules
To ensure you design your application for localization:
	create field value rules for capturing labels and notes
	paragraph rules for instructions and messages
	correspondence rules for emails and other correspondence.
Language packs are collections of
	language-specific rulesets that support localization
Pega Web Mashup are used to
	embed a Pega application in a web page or application
to generate a Pega Web Mashup:
	create a Mashup channel from Channels and Interfaces landing page
	customize the code as necessary
	embed the code into the web page
	configure a list of approved sites for the site origin
Pega Web Mashup code consists of:
	an HTML SCRIPT tag that accesses Pega Platform
	an HTML code block
The Gadget of a Pega Web Mashup is
	the application view provided by the Mashup
How many DIVs or IFRAMEs can you have per gadget?
	one
Do single or double quotation marks encapsulate the value for each attribute in the DIV or IFRAME of a Pega Web Mashup
	single quotation marks
In a a Pega Web Mashup, the PegaGadget is
	an IFRAME/DIV attribute
	specifies the name of the gadget
To configure a mashup:
	Channels and Interfaces landing page
	create a Mashup channel in Channels and Interfaces
	enter a descriptive name, mashup description, and the URL of the system hosting the Pega Platform application (defaults to the current system URL)
	select the action performed by the mashup
For a Pega Web Mashup configure the application permissions of trusted domains where?
	on the Integration and Security tab of the application rule in the Mashup security section.
What are the three options for passing data to or from a Pega Web Mashup?
	data-pega-event-onpagedata attribute
	doAction() Javascript function call using pega.web.api.doAction([gadgetname],[action], [parameters])
	a script within the gadget DIV tag
can configure a Pega Web Mashup gadget to use the value of a DOM element set the data-pega-parameters attribute:
	data-pega-parameters=“{Customer:’[page\id\dom_element_name]’}”
In a Pega Web Mashup, getGadgetData and setGadgetData actions
	read and set property values in a mashup gadget
In a Pega Web Mashup the Firefox browser converts
	DIV attribute names to all lowercase letters
	to prevent this
	use object literal notation.
If you need to style a mashup to match a company web site apply the skin rule by configuring a portal for web mashup using a portal skin
What are the steps to configure a portal for web mashup:
	create a portal and assign the portal to the access group for web mashup users. A web mashup may be intended for unauthenticated users or customers who lack a Pega operator ID. In this situation, you can configure the access group created for mashup users to reference the portal
	create a portal skin to configure the application styling for web mashup users (who interact with the application using the portal). Pega identifies the skin rule associated with the portal rule, as well as the HTML that streams back to the mashup, and uses the styles specified by the skin rule. The portal skin can inherit from the application skin, minimizing the customization needed for the web mashup.
Internet Application Composer (IAC) Authentication is
	a standard authentication service
	web.xml
If you are not using a Pega Mashup, remove
	the IAC servlet from web.xml
Connectors
	facilitate integration
What can you invoke a connector from?
	a data pages and activity
what are the five components of a connector invocation?
Data page or activity
Data transforms
Connector rule
Mapping rules
External system
steps to execute connector invocation:
	The data page or activity executes a data transform to map the data from your application to the integration clipboard pages.
	The data page or activity invokes the connector:
	The connector is initialized based on its type. The type is the protocol the connector supports.
	The connector maps the request data to the protocol-specific format using the mapping rules specified for the connector. Do not confuse this mapping withdata transforms. This mapping is between the clipboard and the format required by the protocol.
	The application sends the request to the external system.
	The application receives the protocol-specific response. The response data is parsed using the mapping rules specified in the connector rule and placed onthe integration clipboard pages.
	The connector is finalized and returns control to the data page or activity.
	Finally, a data transform maps the response data from the integration clipboard data structure to your application.
The supported connector types are?
	SOAP
	REST
	SAP
	EJB
	JMS
	MQ
	File
	CMIS
services
	facilitate integration
	allow you to expose
	data
	functionality
for services you must provide
	data mapping for outbound and inbound content
service listener
	listens for incoming requests
	provide the Pega Platform with information the platform needs to route incoming messages to a specific service
	establishes a requestor
requestor
	the processing and data associated with the incoming request initiated by the external system
the procedure for processing a request from an external system:
	The service listener instantiates the protocol-specific service to provide communication with Pega and establish a requestor. The service listener optionally performs authentication.
	The service parses the incoming request and maps the request onto the clipboard. The service then invokes the service activity. The service activity provides the logic for the service.
	When your service activity is complete, control is returned to the service. The service builds the response using data on the clipboard, and the service listener sends the response to the external system.
What are the supported service types?
	SOAP, REST, EJB, JMS, MQ, and File.
the only thing a connector rule can touch is
	the data pages and mapping rules
What is the difference between a connector and a service?
	a connector is the role of client, requests data or services from another system
	service is the role of server, responds to requests from another system
You are updating a system of record using a SOAP connector. If the system of record is unavailable, you want to retry after an hour. If it is still unavailable after an hour, a notification should be sent to a system administrator. How do you implement this requirement?
	Implement the logic in the connector’s error handler flow.
Which two statements describe the role of the cache manifest in a mobile app? (Choose two.)
	Provides access to static resources such as HTML files, image files, or JS files.
	Enables users to continue interacting with mobile apps while offline.
To reduce training requirements for users, a company wants to utilize the existing front end of their application. How can a third-party application use Pega Platform?
	By using REST calls from the Pega API
Several development teams work on different enhancements. The release date for each enhancement is uncertain. Which two options allow each team to keep its work separate? (Choose two.)
	Set up branch ruleset for each team.
	Create a new ruleset version for each team.
A form must support accessibility. How do you enable a user to specify a date?
	Use a calendar control that displays an entire year.
In the first step in a case type, the user compares data on a form to the data on a customer account. If the data matches, the case is resolved. If the data does not match, the user advances the case to update the account. Management only wants a record of the cases that update an account. What two configuration options do you use to implement this requirement? (Choose two.)
	Apply a when condition to the first step to persist only cases requiring updates.
	Configure the first step to instantiate the case type as a temporary case.
You are analyzing application performance and notice one or more data transforms exceeding preferred performance parameters. Which of the following performance tools do you use to help troubleshoot the issue?
	Performance Profiler
You need to localize correspondence into a language that is unavailable in the Pega language pack. Which option satisfies the requirement?
	Run the Localization wizard and add translations to Translation.html.
A report needs to list the user ID of the manager of the operator who creates a time-off case. The report provides information from the MyCo-HR-SelfService-Work-TimeOff and Data-Admin Operator-ID classes. Which two options satisfy the business outcome? (Choose two.)
	Use an association rule to join operator information to each case.
	Configure a class join on the report definition to join operator information to each case.
The primary purpose of a production ruleset is to allow rules to be.
	updated in a production environment
Which two rule types can you mark as a relevant record? (Choose two.)
	Property
	Section
A requirement states that when a case is assigned to a user for review, its work status is set to Open-Review. Which two steps do you perform to implement this requirement? (Choose two.)
	Add Open-Review as an allowed status on the case type record.
	Apply the Open-Review status to the appropriate assignments.
Which two statements are valid regarding Pega Web Mashups. (Choose two.)
	A mashup display starts by calling either a flow or a harness from a Pega application.
A user can view their worklist in an external portal and select items to take action on.
A requirement states that the Users role cannot open a purchase request during the Audit stage of the case life cycle. How do you configure the case stage to satisfy this requirement?
	Apply an Access When record.
What are two consequences of exposing columns for reporting? (Choose two.)
	Backward chaining declare expressions cannot use exposed properties.
	Tables require additional space due to additional columns.
Timesheets require the following approvals: Regular 40 hours -> Supervisor of employee Any overtime -> Manager of Supervisor Worked on weekend -> VP Finance Negative time-off balance -> HR Director. Which two conditions require an authority matrix? (Choose two.)
	Negative time-off balance -> HR Director
	Worked on weekend -> VP Finance
A service receives a request to assign an office to a new employee. The service rejects the username and/or password provided. What type of fault condition do you configure to return an appropriate response?
	Security error
A class group is used to.
	store data from different child classes in a single table
How do you identify if a result in a decision rule cannot be returned?
	Test for conflicts
A duplicate case search contains two weighted conditions in which a property value in the current case is compared to the same property value in the existing case. After processing multiple cases that have two matching data values, duplicate case search does not identify any duplicates. What two approaches do you take to diagnose the cause? (Choose two.)
	Verify that there are no more than 4 maximum weighted conditions being tested.
	Verify that the total weights of the matching conditions match or exceed the threshold.
What are three valid ways to exchange data through a Pega Web Mashup? (Choose three.)
	Use the data-pega-event-onpagedata attribute to configure the default value for the gadget.
	Use an action object configured as a script to perform additional actions on a web mashup gadget.
	Use the Javascript function doAction() to set or read data values through the hosting web page.
Which two statements accurately describe the use of a symbolic index? (Choose two.)
	<LAST> sets or retrieves an element value from the end of a value list or page list property.
	<PREPEND> inserts a new element in a value list or page list property as the first element.
Users are spending excess time researching duplicate cases to determine whether to process or resolve the cases. Which two options allow you to reduce the number of potential duplicate cases? (Choose two.)
	Decrease the weights of the weighted conditions.
	Decrease the weighted condition sum threshold.
A flow action calls a pre-processing data transform to initiate values. There are several flow actions available for the assignment. You want to make sure that the values are only initiated once for each flow action. How do you implement a solution?
	Add logic to the pre-processing data transform to test if values were already initiated.
You want to allow users to use an application on a mobile device, even if the device is not connected to a network. Which configuration option supports this requirement?
	Source drop-down lists using data pages.
What is the difference between using the Call and Branch methods in an activity step to invoke other activities?
	Branch creates a new thread to allow asynchronous processing, while Call runs in the thread from it was invoked.
You want to create a new minor version of an application ruleset to add a new feature to your application. The new feature will be made available to users in a phased rollout. How do you update the application to add the new ruleset version?
	Lock and roll the existing ruleset, and update the existing application version.
You are troubleshooting a performance issue with a user interaction that exceeds the maximum time of five seconds. The elapsed time shown in the performance report indicates a total of two seconds. Which tool do you use to determine what is adding the additional three seconds to the performance measure?
	Performance Profiler
In which of the following situations would you configure global resource settings?
	Two SOAP connectors execute in parallel to improve performance.
You are preparing to create a new major version of an application ruleset in which there are multiple minor and patch versions. How do you create the new ruleset version?
	Use the Ruleset Maintenance wizard to skim the relevant ruleset versions to copy the highest version of existing rules to the new ruleset version.
In which situation do you configure branched rulesets?
	A team needs to work on the next version of an application while preparing to migrate the current version.
What two actions must you perform to create a class join in a report definition? (Choose two.)
	Create a prefix for the joined class.
	Add an association rule to match key values.
How do you ensure that only a manager can run a specific flow action?
	Add a privilege to the flow action form, then add the privilege to a role assigned to the access group for managers.
A global application with infrastructure nodes located throughout the world requires certain operations to start executing at midnight GMT.
	Use the Queue-For-Processing method in an activity and design a standard queue processor.
	Use the Run in background step in the case life cycle and design a standard queue processor.
You have identified an activity that does not perform well. You need to find out exactly what steps are causing the problem. Which tool do you use?
	Performance Analyzer (PAL)
Identify two options for passing data between a Pega application and a webpage containing a web mashup. (Choose two.)
	Use the attribute data-pega-event-onpagedata.
	Call the function pega.web.api.doAction().
Offline support requires which two configurations? (Choose two.)
	Access groups set up to allow offline access to users.
Appropriate case types configured for offline processing.
Items selected by a user need to be copied to a page list property when the user submits the form. How do you copy the items?
	Add a data transform to the flow action as a pre-processing action.
Identify the log you examine to view warnings, errors, and information messages about internal operations.
	Pega log
Which two ways can you combine data in the Assign-Worklist class for your report? (Choose Two)
	Use a class join to the Assign-Worklist class. Specify a join filter where the pxRefObjectKey in the
join class is equal to an object identifier in the work class.
	Use a Worklist Assignment association rule to join the Work class to the Assign-Worklist class.
When a process is configured to create temporary cases, which of the following occurs when a user creates a case?
	The case is stored in memory.
Which feature would you use to implement the System of Record (SoR) pattern?
	The refer to a data page option on a property
Which performance tool would you use to collect performance data for individual steps in a data transform?
	Performance Profiler
When creating a new ruleset version, what extra step must the system architect perform?
	There are no extra steps if the ruleset version is up-to-date.
The keyword Primary is a prefix to the value in the current case. You have added weighted conditions to duplicate case search in a case type. How do you configure the condition fields to differentiate between fields on the current case and fields on the existing case?
	Prefix the keyword Primary to the value used in the current case.
How is the signature stored in the application when using a Signature Capture control?
	An attachment
Sourcing a data page directly from a UI control is an example of which pattern?
	Reference pattern
An application contains the following rulesets. AccountManagement contains the rules for administering checking and savings accounts. AccountManagementint contains supporting rules for integrating with other applications. BankCorp contains rules shared across the entire organization. BankCorpInt contains supporting rules for integrations shared with other internal applications. CreditCheck contains rules for processing a credit check and is shared with another Pega application to administer loans. Which two rulesets can be configured to use application validation, according to best practices? (Choose Two)
	AccountManagement
	AccountManagementint
Which two of the following situations require an activity? (Choose Two)
	Calla connector from a flow
	Simulate a connector
In a prepare job offer process, you configured a Split For Each shape. The shape runs a compensation approval subprocess to a list containing four managers. The prepare job offer process resumes as soon as one manager completes the approval process. Which join condition in the Split For Each shape supports this requirement?
	An Any join condition
You have designed a decision tree that you want to unit test. You want to verify that every row can be evaluated regardless of the input values. How would you test your decision tree?
	Check the decision tree for conflicts.
Your application contains a top-level case type named Purchase Request and a Purchaser Order child case. The company has determined that only one user may open and work on a case at one time. However, users working on purchase orders should not lock out users working on the parent purchase request cases. How would you configure the lock settings among the case types?
	Set default locking on purchase requests and set the do not lock the parent option on purchase
orders.
You use the Application Import wizard to import an archive file on a destination system. When does the destination system begin executing the imported rules?
	Users can start executing rules as soon as the rules are imported.
Which record do you configure to add an item to the left-pane menu in the Case Manager portal?
	Navigation record
What advantage does skimming provide over lock and roll as a versioning option?
	Skimming is most efficient for major and minor updates. Lock and roll is most useful for patches.
An application change goes into effect on June 15, 2019. Due to this change, two fields are added to a user form to collect information for compliance purposes. Assuming that today is April 30, 2019, how should you configure circumstancing for the form?
	Circumstance the form by property and date; specify June 15, 2019, as the start date.
You are tasked with configuring the Get Next Work functionality for an application. The requirement states that the workbaskets a user is associated with must be checked first, and all eligible assignments must be consolidated into a single list before being filtered and sorted. Which two of the following options do you select on an Operator ID record to configure the Get Next Work functionality to meet this requirement? (Choose Two)
	Merge workbaskets
	Get from workbaskets first
Which rule availability setting can you use to force the system to look for an instance of the rule in the next highest class or ruleset?
	Withdrawn
What is the importance of application versioning?
	Application versioning preserves prior application versions.
Select two benefits of using Global Resource Settings. (Choose Two)
	Global Resource Settings allow you to manage settings without needing to unlock rulesets.
	Global Resource Settings allow you to manage settings in one place.
Your application requires a cascading approval for expense reports. Approvals must follow the submitter's reporting structure, with the following thresholds. A manager must approve expense reports up to USD500. A director must approve expense reports up to USD1500. A vice president must approve expense reports of USD1500 or greater. How do you configure the approval process?
	Select the reporting structure configuration with custom levels, then configure when rules to determine the number of levels.
Which requirement do you satisfy with an Access When record?
	Accountants can edit a purchase request only if the case was created by a member of their assigned department.
Which two steps do you perform to update the logo in a portal header? (Choose Two)
	Upload the new image to a binary file record.
	Update the portal header to reference the new image.
Which two of the following steps are needed to implement Global Resource Settings? (Choose Two)
	Create a data page
	Create a data transform
What task must you perform in order to persist a temporary case?
	Add a Persist Case SmartShape to the process.
	Add an object ID to the case
The reason you want to run a process immediately before taking performance readings is…
	to allow the rules to assemble
You have configured an agent to automatically send correspondence. The agent runs in standard mode using AQM. As of the last agent run, entries failed to commit and the correspondence was not sent. Which two approaches could you take to troubleshoot the issue? (Choose Two)
	Open the Requestor Management screen in SMA, select the requestor with a waiting message, and run the Tracer.
	Open the Broken Process queue, select the entry, and view the error message and stack trace
information.
You have added a cascading approval step that uses an authority matrix. You have specified a decision table to determine the approvers for each case. You have confirmed that the conditions in the decision table are configured correctly. You test the configuration by entering requests that require multiple approvers. However, the system routes all requests to only one approver. Which of the following actions would you take to correct this issue?
	Set the decision table to evaluate all rows.
Use the keyword to reference a parameter in the same rule in which the parameter is defined.
	Param
Select two record types that are involved when configuring a production ruleset. (Choose Two)
	Access group
	Application
An agent runs every day at 7:00 A.M. You have been asked to update the agent so that it runs once every 300 seconds. How would you modify the agent schedule to meet this requirement?
	Change the Recurring pattern to Periodic and enter the Interval value.
An error is generated as a connector invokes a remote service. What could be an example of a transient error?
	The service is running on a system that is temporarily not available.
Which of the following is not part of the organizational structure?
	Work Group
A branch ruleset is a ruleset that . (Choose Two)
	Is designed for large projects
	Is based off of another ruleset
A new system architect questions the value of allowing attachments to cases. What would be your best response?
	Attachments can provide additional information required to process a case.
You want to write all errors detected when loading a data page to a log file. How would you do that?
	Use an existing function in the error handling data transform.
Which two fields are required when adding a parameter to a rule?(Choose Two)
	Name
	Data type
To configure a global resource setting (GRS) for an integration
	create a class for the references to external systems
	place all GRS rules in the same ruleset as the integration rules
	determine which environment references to external systems will use the feature
	create a page property for each environment reference
	create a data transform to assign values to the environment properties using utility functions
	create a data page to tie these artifacts together.
To refer to the values on a data page with GRS use ...
	(Hint: =something.something.something)
	=DataPageName.IntegrationPropertyName.FieldPropertyName
order of events to determine the Endpoint URL for a SOAP connector:
	The SOAP Connector is invoked.
	A data page property is referenced.
	The data transform for the data page is executed if the page is not already available on the clipboard.
	The data transform invokes a utility function to obtain the value of, for example, a dynamic system setting.
	The value is used by the SOAP connector to invoke the service.
Connectors are used
	to read data from or
	write data to an external system.
What are the two types of errors that can occur when using a connector?
	Transient errors
	Permanent errors
What do you do with transient errors?
	post a note to alert the end user that the integration failed
	ask the user to retry at a later time or
	connection can be automatically retried.
What do you do with permanent errors?
	write the details to a log file so that errors can be investigated and fixed
	implement a process for the investigation and fixing
How are connector errors detected?
	depends on how the connector is invoked. Connectors can be invoked by
	data pages and
	activities.
pxErrorHandlingTemplate is…?
	a template data transform for handing errors
pxErrorHandlingTemplate is used to create
	a reusable error handling data transform
True or False? pxErrorHandlingTemplate can be used with both data pages and activities?
	True
What ruleset does pxErrorHandlingTemplate belong to?
	the base class
All connectors have what?
	an error handling flow that is automatically
	invoked if the error is not detected by another mechanism, and is always
	enabled
To handle errors from connectors used with data pages, use a
	response data transform to detect errors as part of the data page load. Use a
	when condition to check for any error messages on the page and if there are apply
	the reusable error handling data transform
If a connector error is not detected in the data page or the activity, then the
	error handler flow for the connector is
	invoked to detect the error.
If there is an immediate need for a response from a connector and there is an error, you should?
	Display an error message, and
	write the error to the log file
When an error occurs, the original flow execution is
	paused and control is handed over to
	the error handler flow.
The Pega API provides a
	standard set of services, like new case …
	creation, assignment…
	processing, access to
	data pages, and even get
	documentation
The Pega API uses built-in
	REST/JSON services
You called the Pega API REST/JSON services using
	standard HTTP methods:
	GET, POST, or PUT
To expose your application create a
	SOAP web service
CreateNewWorkResponse is an
	XML parse rule generated by the SOAP Service Wizard
CreateNewWorkResponse is used to
	add properties to the SOAP service (or something)
when you create reports Pega uses the Pega class organization to
	find and retrieve information from tables (class mappings)
(reports) any class that has instances can be…
	mapped to a database table.
(reports) when you generate reports you are
	retrieving data from rows in database tables
When designing reports you need to know what two things?
	which table has the data
	how the data is mapped
which ruleset contains assignment routing data?
	Data-Admin-Workbasket
What are the two records to identify the database table a class is mapped to?
	Database
	Database Table
In class mapping the Database records identify how
	Pega connects to a specific database for the named database
In class mapping the Database Table records identify
	a specific table in a specific database
what is a class group?
	a designation for a class
a class group is also called?
	a work pool
in a class group, multiple
	classes store data in the same table
What are the three most common reports?
	work
	assignment
	history
What standard properties in the Work- base class define a case?
	pyID, a case identifier
	pyWorkParty, the work parties participating in a case
	pyCustomer, customer identifier (an account number)
	pyStatusWork, case status
In history reports the property pyPerformer identifies what?
	the operator who completed the event
a class join is  a class relationship built where?
	in a report definition
steps to create a class join:
	Determine the class to which you are joining.
	Create a prefix that in combination with the class name serves as an alias for the joined class.
	Decide whether you want to include or exclude instances that do not match.
	Create a filter that describes how you relate the classes.
True or false? You can join to a class in a different database than the Applies To class of the report.
	False! You cannot join to a class in a different database than the Applies To class of the report.
association rules join
	multiple classes
association rules are great because they can…
	be reused in any report (unlike a class join)
Subreports enable you to
	reference results from any report definition in
	a main report
Subreports allows you to satisfy
	complex reporting requirements.
Subreports can be created in two ways. What are they?
	join filters
	aggregation
keyed data pages save
	information from
	an outside server / database onto
	a data page in the application in a [key:value] pair
keyed data pages are good for information that
	doesn’t change frequently and is accessed frequently.
To configure keyed data pages:
	Define the data page Structure as a List.
	Select Access pages with user defined keys.
	If you want the data page to return more than one instance, select Allow multiple pages per key to filter a large list to create a smaller list.
	Specify the Page list keys used to access the list entry or list entries. 	To specify multiple keys, select Add key.
Data access patterns are simple …?
	mechanisms to manage data
What are the three types of data access patterns?
	system of record
	-which option in the Data Access section?
	-Refer to a data page option
	snapshot
	-which option in the Data Access section?
	-Copy data from a data page option
	reference
	-which option in the Data Access section?
	-None! To implement reference a data page from a record other than a property. The data will reload according to the refresh strategy specified on the data page
The system of record data access pattern is always
	current and reloads
	according to the refresh strategy specified
The snapshot data access pattern is only
	current as of when data was copied
The reference data access pattern uses data without
	adding that data to the data model for the application.
The reference data access pattern is often used to
	populate UI controls, such as drop-down lists.
Obj- methods using activities allows for advanced processing to
	a database
Obj- methods using activities is basically a series of
	steps:
	operations on the database
Obj-Open or Obj-Open-By-Handle
	loads and instance of a class stored in externally
	creates a clipboard page of the opened instance
Obj-Browse
	searches the database
	retrieves multiple records
	copies them to the clipboard as an array of embedded pages
Obj-Refresh-and-Lock
	tests if a clipboard page is current if a lock is held
	acquires a lock if unlocked
	refreshes data page if stale
Obj-Save
	if the WriteNow parameter is selected
	saves contents of a clipboard to the database only used for immediately rereading an instance before a commit
	if the WriteNow parameter is NOT selected
	operation becomes a deferred save.
Obj-Save-Cancel
	cancels the most recent uncommitted Obj-Save method so that the instance is not written as part of a later Commit operation.
Rollback method
	cancels or withdraws any previous uncommitted changes to the PegaRules database (and to external databases accessed from an external class) from the current thread.
Obj-Delete
	deletes a database row identified by a page on the clipboard
	removes an instance from the database
Obj-Delete-By-Handle
	deletes an instance using its unique ID without requiring a page on the clipboard
	removes an instance from the database
Symbolic indexes are used to
	access items in a page list without using explicit indices.
Symbolic index: <APPEND>
adds an element to the end of a value list or page list property
Symbolic index: <PREPEND>
	inserts a new element into a value list or page list  property as the first element; all existing elements are “pushed down” by one
Symbolic index: <INSERT>
	inserts a new element into a value list or page list at a numeric index position; any elements with the same or higher index value are “pushed down” one
Symbolic index: <LAST>
	Sets or retrieves an element value from the end of a value list or page list property
Symbolic index: <CURRENT>
	Use differs depending on where it is used
SQL Connect Rules allows you to
	execute a SQL command or stored procedure
SQL Connect Rules are invoked from
	an activity or using RDB methods
What does the the Access Manager simplify?
	the configuration of security records
What are the three tabs in the Access Manager?
	Work & Process tab
	-controls access to instances of a specific case type
	Tools tab
	-controls access to tools such like the Clipboard and Live UI for end users
	Privileges tab
	-controls access to records like flow actions and correspondence records.
What are the three levels of access?
	Full Access
	Conditional Access
	No Access
Apply / Configure Access of Role to Object and Access Deny records to
	automatically revoke access to actions and tools as the application advances towards production.
An Access of Role to Object record grants
	access for action on a scale of
	0 to 5.
	A zero means
	the action is denied. The remaining ratings are compared to
	the production level value of your system.
An Access Deny record denies
	access for an action on a
	0 to 5 scale. A zero means the action is
	allowed.
Production level values follow the software development life cycle. The greater the production level value, the…
	closer the system is to a production environment.
An Access When record conditionally
	allows access to an action, tool, or privilege and returns
	true/false, if access is granted
What are the three access processing roles?
	users
	managers
	administrators
an Access Role Name record defines
	an access role, a specific set of
	application users with a unique job function
What two records identify the actions allowed or denied to users assigned a given role?
	Access of Role to Object (ARO)
	Access Deny
When you create a new access role, you must define what?
	the appropriate permissions for the role
an Access Role Name record simplifies what?
	the configuration and management of permissions by making other roles dependent on its configuration
a Privilege record controls what?
	user access to a rule
Where do you add a privilege record?
	on the rule you want to give access to. a privilege record identifies the roles that have access to the rule
user access to an application is determined by…?
	the access group to which a user belongs
What is the format for naming access groups (two parts)?
	ApplicationName:JobDescription.
Where are access group records listed?
	in the Records Explorer, under the Security category
each access group can only reference…?
	one application.
An access group
	specifies the portal or portals that members of the access
	group use to perform work
	identifies a default portal to present to users upon login
	remaining portals are available from the Operator menu
	identifies the access roles granted to members of the group
	identifies the types of cases that members of the group can
	create and process
A work pool is a set of
	case types a user can work on in an application
A work pool corresponds to
	a class group defined in the application
A work pool represents
	the only case types that an access group can work on
What two application elements cannot be configured in the Access Manager?
	work queues
	attachment categories
Access control for work queues are…?
	role-based
What is default@pega.com?
	the last resort for routing. used when
	no other more specific or local work queue can be found.
What are the two levels of access control for attachments?
	a privilege
	when condition
Application versioning is a way to
	differentiate current and past application configurations.
What are the two methods for creating new versions of an application?
	lock and roll
	skimming.
the application ruleset stack
	contains the rules and data types used by the application.
The act of using a version method begins
	a release cycle.
Lock and roll is best for
	incrementing patch versions, small changes or patches
How do you perform a lock and roll?
	create a new empty ruleset version.
	copy the necessary rules into the new ruleset version.
	the rule in the higher ruleset version overrides the rule in the lower version.
	specify the new version number and whether to update the application record and access groups to reflect the ruleset version.
What are the three choices for updating the application rule with lock and roll?
	Do not update my application
	Update my Application to include the new Ruleset Versions
	Create a new version of my application
New minor and major versions require application record and access group…
	updates.
Is there a wizard for lock and roll?
	Yes, the lock and roll wizard.
Skimming is best for
	minor and major versions.
Skimming is the process of
	saving the highest version of a rule into a new, higher ruleset version.
What are the two types of skimming?
	minor
	major
Which rule availabilities mark a rule as “not carried forward” during a minor skim?
	No (not available)
Which rule availabilities mark a rule as “not carried forward” during a major skim?
	Withdrawn
	No (not available)
The skimming wizard identifies the highest-numbered
	version for each rule instance in a specified
	ruleset, and creates a
	copy with the number you specify.
What are two best practices for skimming?
	confirming the rules for the new version are checked in.
	locking all but the highest ruleset versions.
When an application is generated the created rulesets include
	two rulesets for the application itself and
	two organizational rulesets
rulesets ending in Int are
	integration rules sets
production rulesets have at least one
	unlocked ruleset version in the production environment
Ruleset validation is performed
	every time a rule is saved
Ruleset validation guarantees that
	referenced rules are available on the target system when the ruleset is promoted
Ruleset validation does not affect
	rule resolution at run time. only applies to design time
What are the two options for Ruleset validation mode?
Application Validation
Ruleset Validation
Does the selected ruleset validation mode (AV/RV) apply to all versions of the ruleset?
	Yes.
The New Application wizard
	creates rulesets that are set to both Application Validation (AV) and Ruleset Validation (RV) modes
Which ruleset validation mode (AV/RV) is set for application rules?
	AV mode
Which ruleset validation mode (AV/RV) is set for organizational rules?
	RV mode
Rules with Application Validation mode can reference all rules in the rulesets defined in the
Same application
Rulesets belonging to any built-on application
Rules with Application Validation mode cannot reference rules
	outside the current application stack or above the defining application.
Rules with Application Validation mode can have
	codependent rulesets within the same application
Ruleset Validation mode defines one or more
	ruleset versions on which the…
	ruleset version depends
In Ruleset Validation mode only rules in
	the ruleset versions that are specified as
	prerequisites (and their prerequisites) can be
	referenced from the ruleset
In Ruleset Validation mode if your ruleset version does not have any prerequisite ruleset versions you need to specify the
	base product ruleset
	Pega ProcessCommander as
	a prerequisite
The Pega-ProcessCommander ruleset lists
	all product rulesets
In Ruleset Validation mode ruleset prerequisites cannot be
	cyclic
True or False? You can mix rulesets that use AV and RV.
	True
In Ruleset Validation mode the prerequisite ruleset is listed in
	brackets
	MyCoPL [MyCo]
rulesets with brackets use
	Ruleset Validation
rulesets without brackets use
	Application Validation
with Ruleset Validation, you cannot call Application Validation rulesets that are not in
	the prerequisites
Only use Ruleset Validation for rulesets that are designed to be
	used across multiple applications, such as organizational rulesets, to make them easily portable and prevent the introduction of dependencies on a specific application.
Ruleset Validation governs
	rule development and import
Ruleset Validation is enforced during
	development
a ruleset list is sometimes called
	the ruleset stack
a ruleset list governs
	rule execution at run time
a ruleset list indicates the rulesets that are
	available to the application for a given operator session
	available in the operator profile Operator > Profile.
True or False? The order of the rulesets in a ruleset list is important?
	True. Rulesets at the top of the list take higher precedence.
a ruleset list consists of
	rulesets referenced on the application form
if rules are checked out what appears at the top of a ruleset list?
	a personal ruleset. It has the name of the operator ID and contains the rules checked out by the operator.
What does the Lock and Save button do on a ruleset list?
	It locks a ruleset to prevent changes, stopping you from
	adding or updating rules in a locked ruleset.
when you check out a rule, you are create
	a private copy of the rule to modify and test
when is the the private edit button displayed?
	when a rule is in a locked ruleset version
Branches help teams manage parallel development in
	distributed environments.
branch
	a container for rulesets with records that are undergoing rapid change and development
	allow each team to work within an isolated space. create and update rules without impacting other teams
branch rulesets
	rulesets associated with a branch
based on another ruleset
To develop rules in parallel using branched rulesets, each team follows these steps:
	Creates a team application built on the main application
	Creates one or more development branches in the team application
	Grants access to the team application
	Creates or configures rules using the branch
	Merges each branch into the application rulesets when development in branches is complete and stable
Merge Branch Rulesets wizard
	moves branch contents into the base rulesets
	helps identify potential conflicts so that you can address them before moving your changes.
	can either delete the branch or maintain it
the Branch quality tab of the Merge Branch Rulesets wizard
	shows possible rule conflicts, guardrail warnings, and unit test coverage, on the branch rule
deleting a branch from the application after merging helps
	to avoid accidental duplicate merges
a product rule is
	the “moving” manifest
a product rule identifies
	the application components you want to move to a destination Pega system
a product rule lists
	the rulesets, data, and other objects that make up an application
a product rule lists usually does not include
	standard rulesets and data
a product rule is an instance of
	the Rule-Admin-Product class (RAP)
where can you find product rules?
	in the SysAdmin category in the Records Explorer
the contents of a product rule are put into a ZIP archive file called…
	a RAP file
a RAP file
	is a zip file that consists entirely of:
	XML documents in Unicode characters
To create a RAP file create
	a product rule that identifies the
	components you want to include in the archive file
To make sure everything is complete and correct for migration, before you create an archive file you should do what things?
	Do not lock delegated rulesets
	Associate your data records with rulesets.
	Check in all rules
	Lock the application rulesets included in the package
	Merge branched rulesets
	Remove branches from the application if you are exporting the application to a production system
Associating data instances to a ruleset:
	simplifies application migration and maintenance
To help make packaging and migration of data instances easier, you associate
	data instances with rulesets
how/where do you associate data instances with rulesets?
	as you create data instances they are automatically
App end users must complete
	an initial synchronization before using the offline capability.
Offline-enabled mobile apps save all work to
	a queue.
A status indicator keeps track of
	the number of items added to a queue.
When the network connection state changes and the device comes back online,
	data synchronization is triggered automatically for the offline-enabled application, and any saved data is updated to the server. In a Pega mobile-enabled app, an indicator displays whether you are
	online, offline, or currently synchronizing with the server.
the default indicators for mobile connectivity in the UI Kit are
	offline and failed.
If you also want to use the online, synched/syncing, and items to sync indicators for mobile connectivity, you must
	use an older UI Kit version or
	create a user interface control in your application with the CSS classes for these additional indicators.
The offline feature for mobile apps is designed so that
	the mobile app always functions in offline mode. All behavior and capabilities are the same whether the device is online or offline.
When an offline-enabled application is online, Data synchronization occurs if the device is online and
	five minutes have passed since the last data synchronization operation, or
	when a user submits an assignment or creates a new case.
To enable an offline mobile app, you perform two major tasks:
	Enabling offline support for users by configuring the appropriate access groups
	Enabling the appropriate case types for offline processing
Before you begin designing an off-line enabled mobile app, you must decide
	which users need to work while offline
	which case types those users need to process
You grant offline capabilities to users by configuring
	their access group and then
	selecting the offline option when creating a new Mobile channel interface.
where do you identify the access groups that are offline enabled?
	in the Access groups tab on the Offline Configuration landing page
To improve performance for mobile app users, enable
	application rule caching for all users in the access group.
for mobile app users with application rule caching, reusing the cache eliminates the need to
	generate the cache for each user. ensures a faster start of offline-enabled applications.
The pyCaseWorker portal is part of which ruleset?
	the UIKit ruleset.
Which default portal do subclass to create an offline mobile portal?
	the pyCaseWorker portal. it contains design elements optimized for offline use with a Pega mobile app.
For users to work on cases offline, you must enable the appropriate
	case type for offline processing.
Where do you configure a case for offline access?
	after opening the case type in Case Designer
	On the case type Settings tab, select General, and then select the Enable offline check box.
	to open a case type in the Case Designer, click a case type link in the Case types tab on the Offline Configuration landing page
to be offline-enabled a case type must use what starting flow?
pyStartCase
	to initialize processing and instantiate cases in a stage-based case life cycle
If you do not use pyStartCase in an offline-enabled a case type, you must…
	write custom JavaScript to perform the same functionality.
An offline enabled case type should use what type of locking strategy?
	an optimistic locking strategy as the system cannot obtain a lock on the case if it’s offline.
	has the Allow multiple users check box checked
What types of Pega features might be affected by an offline-enabled mobile app being offline?
	UI features
	processing features
	routing that relies on business logic
	when rules
	decision shape flow actions
	question shape flow actions
	field validation
	flows that create child cases
An offline-enabled mobile app’s synchronization process can affect
	performance and strain
	server resources.
What two things should you keep in mind when designing apps for offline mode?
	making essential elements available offline for a consistent user experience
	ensuring synchronizations are fast and efficient.
the cache manifest provides
	a list of the files needed for the mobile app to work offline
the cache manifest is
	a simple text file defined using an HTML rule form named
	pyCustomAppCache
Each line of a cache manifest refers to
	a single static resource such as an HTML file, an image file, a CSS file, a font file, or a JS file.
To define the cache manifest, save a copy of
	the pyCustomAppCache record to your application ruleset.
	Do not change the context of
	your copy of pyCustomAppCache. the pyCustomAppCache record must be applied to the Data-Portal context / ruleset.
To add a comment to the cache manifest, start the line with the
	# (octothorp) character.
Offline rule access is supported by
	data synchronization between the mobile app and Pega application.
A whitelist is
	a set of rules requiring synchronization between a mobile app and the server.
A blacklist is
	a set of rules that are not synchronized between a mobile app and a Pega application.
Where do update the whitelists and blacklists for a mobile application?
	on the Offline rules tab of the Mobile: Offline Configuration page. To access the Mobile: Offline Configuration page, in Dev Studio, from the Configure menu, select Mobile > Offline.
By default, offline mobile app synchronization includes the rules that are
	explicitly referenced in the UI or process and excludes rules
	with obscured references.
The following table lists other rule types and if they are included in synchronizations.
How many customizable whitelists does Pega provide?
	five
What are the five rule types managed by the customizable whitelists provided by Pega?
	data page rules
	field value rules
	data transform rules
	validate rules
	when rules
To copy a ruleset to a whitelist for offline synchronization, what apply to class must the rule have?
	@baseclass.
You use a blacklist to exclude
	specific data pages from mobile app and server synchronization.
By default, a mobile app performs a full synchronization when
	users log in for the first time, and when
	an application developer forces a manual sync to push changes to mobile users.
A full sync of an offline-enabled mobile app
	forces the mobile app to overwrite an entire rule or data record.
After an offline device comes back online, the mobile app performs
	a delta synchronization, or delta sync, with the server.
A delta sync of an offline-enabled mobile app incrementally
	exchanges smaller amounts of data to reflect user activity, such as performing assignments or creating cases.
a delta sync blacklist allows you to specify
	the data pages you want to exempt from synchronization during delta syncs.
What is one way to improve the performance of an offline-enabled application using data pages?
	using large data pages to store reference data
How do make a large data page?
	using the standard data page record type
	then declaring it as a large data page by
	adding it to the pyDataPageWhiteListForOffline rule
	add the name of the data page followed by ;large.
Using the offline localization feature available in an offline-enabled mobile app, end users can switch languages by tapping
	a language option in the language list.
You use the offline localization feature to create
	a locales list to package and make available offline.
The requestor pool is
	a set of requestors reserved for use by the services in the Service Package.
Requestor pooling improves
	the performance of a service.
Requestor pooling
	enables requestor reuse
	shares allocated resources
	eliminates server wait time for requestor creation.
What are the two categories for requestors associated with a pool
	Idle requestors
	currently in the pool, waiting for a service request.
	Active requestors
	currently out of the pool, managing service requests.
