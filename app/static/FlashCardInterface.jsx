'use strict';

const e = React.createElement;

class FlashCardInterface extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
              cards:[[]],
              cardIndex:0,
              definitionIndex:1,
              windowWidth: window.innerWidth,
              windowHeight: window.innerHeight,
              isMobile: window.innerWidth<450 && window.innerHeight<800,
           };
        this.handleResize = this.handleResize.bind(this);
        this.incrementCardIndex = this.incrementCardIndex.bind(this);
        this.decrementCardIndex = this.decrementCardIndex.bind(this);
        this.incrementDefinitionIndex =
            this.incrementDefinitionIndex.bind(this);
        this.decrementDefinitionIndex =
            this.decrementDefinitionIndex.bind(this);
     }
    incrementCardIndex(){
        if ( this.state.definitionIndex < this.state.cards.length){
            this.setState({ cardIndex: this.state.cardIndex+1 })
            this.setState({ definitionIndex: 1 })
        }
    }
    decrementCardIndex(){
        if ( this.state.cardIndex > 0){
            this.setState({ cardIndex: this.state.cardIndex-1 })
            this.setState({ definitionIndex: 1 })
        }
    }
    incrementDefinitionIndex(){
        if ( this.state.definitionIndex
                < this.state.cards[this.state.cardIndex].length){
            this.setState(
                            { definitionIndex:
                                this.state.definitionIndex + 1
                            }
                         )
        }
    }
    decrementDefinitionIndex(){
        if ( this.state.definitionIndex > 1){
            this.setState(
                            { definitionIndex:
                                this.state.definitionIndex - 1
                            }
                          )
        }
    }
    handleResize(e){
     this.setState({ windowWidth: window.innerWidth });
     this.setState({ windowHeight: window.innerHeight });
     this.setState({ isMobile: this.state.windowWidth < 450
                                 && this.state.windowHeight < 800 });
    };
    componentDidMount() {
     window.addEventListener("resize", this.handleResize);
     const flashCards =
         document.getElementById("flashCardContent").innerHTML;
     let cards = flashCards.split("*")
     let terms;
     let sanitizedCards = []
     // iterate through the cards and parse the terms of each card into
         // an array.
     // remove cards with only one term
         // (a vocab word with no definition or
         // a question with no answer)
     for (let i=0; i< cards.length;i++){
         terms = cards[i].split("\t")
         if (terms.length > 1){
             sanitizedCards.push(terms)
         }
     }
     // shuffle cards
     // https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
     for(let i = sanitizedCards.length - 1; i > 0; i--){
          const j = Math.floor(Math.random() * i)
          const temp = sanitizedCards[i]
          sanitizedCards[i] = sanitizedCards[j]
          sanitizedCards[j] = temp
        }
    // set the react component's state 'cards' to the
        // shuffled and sanitized cards
     this.setState({cards:sanitizedCards})
    }
    componentWillUnMount() {
     window.addEventListener("resize", this.handleResize);
    }
  render() {
    let buttonStyle, termAndUiDivStyle, termAndUiDivChildren, term,
        elements, color, topPercentageOfCardStats, fontSize;
    let terms = []
    // landscape mode - > determines the flashcard / button layout and
        // styling.
    fontSize = this.state.isMobile ? "8vw" : "4vw";
    if (this.state.windowWidth>this.state.windowHeight) {
        termAndUiDivStyle = { style:
                        {
                            display:"flex",
                            justifyContent:"space-around",
                            width:"95%",
                            height:"70%",
                            marginLeft:"2.5%",
                            marginTop:"10vh",
                        }
                    }
        buttonStyle = {
                        color: "black",
                        backgroundColor: "transparent",
                        borderStyle:"none",
                        width:"5vw",
                        height:"5vw",
                        minWidth:"100px",
                        minHeight:"100px",
                        alignSelf:"center",
                        borderRadius:"10px",
                        fontSize:"5vw",
                    }
        for (let i = 0; i < this.state.definitionIndex;i++){
            color = i%2?"grey":"white";
            term = e(
                    'h3',
                    { style:
                        {
                            marginTop:"1vh",
                            backgroundColor:color,
                            fontSize:fontSize,
                            paddingLeft:"3vw",
                            paddingRight:"3vw",
                        }
                    },
                    // the flashcard defintion(s) or answer(s)
                    this.state.cards[this.state.cardIndex][i]
                    )
            terms.push(term)
        }
        termAndUiDivChildren = [
            // buttons for decrementing the flashcard index
                // and term index
                e(
                    // type
                    'div',
                    // props
                    {
                    style:
                        {
                            display:"flex",
                            justifyContent:"space-around",
                            flexDirection:"column"
                        }
                    },
                    // children
                    e(
                        'button',
                        {
                            style: buttonStyle,
                            onClick: this.decrementDefinitionIndex
                        },
                        String.fromCharCode(0x2296)//"-"
                    ),
                    e(
                        'button',
                        {
                            style:buttonStyle,
                            onClick: this.decrementCardIndex
                        },
                        String.fromCharCode(0x2190)//"<-"
                    )
                ),
                // div for the current flashcard content
                e(
                    // type
                    'div',
                    // props
                    {
                    style:
                        {
                            margin:"1vw",
                            width:"100%",
                            height:"100%",
                            overflow:"scroll",
                            borderStyle:"dashed",
                        }
                    },
                    // children
                    terms
                ),
                // buttons for incrementing the flashcard index
                    // and term index
                e(
                    // type
                    'div',
                    // props
                    {
                        style:
                            {
                                display:"flex",
                                justifyContent:"space-around",
                                flexDirection:"column"
                            }
                    },
                    // children
                    e(
                        'button',
                        {
                            style:buttonStyle,
                            onClick: this.incrementDefinitionIndex
                        },
                        String.fromCharCode(0x2295)//"+"
                    ),
                    e(
                        'button',
                        {
                            style:buttonStyle,
                            onClick: this.incrementCardIndex
                        },
                        String.fromCharCode(0x2192)//"->"
                    )
                ),
            ];
        topPercentageOfCardStats = "90%"
    // portrait mode or square -> determines the flashcard / button
        // layout and styling.
    } else if (this.state.windowWidth <= this.state.windowHeight) {
        termAndUiDivStyle = { style:
                        {
                            flexDirection:"column",
                            display:"flex",
                            justifyContent:"space-around",
                            width:"96%",
                            height:"90%",
                            margin:"2%",
                            marginTop:"5vh",
                            marginBottom:"5vh"
                        }
                    }
        buttonStyle = {
                        color: "black",
                        backgroundColor: "transparent",
                        borderStyle:"none",
                        width:"5vw",
                        height:"5vw",
                        alignSelf:"center",
                        minWidth:"100px",
                        minHeight:"100px",
                        margin:"2vh",
                        borderRadius:"10px",
                        fontSize:"8vw"
                    }
        for (let i = 0; i < this.state.definitionIndex;i++){
            color = i%2?"grey":"white";
            term = e(
                        'h3',
                        {
                            style:
                                {
                                    fontSize:fontSize,
                                    backgroundColor:color,
                                    paddingLeft:"3vw",
                                    paddingRight:"3vw",
                                    paddingTop:"1vh",
                                    paddingBottom:"1vh"
                                }
                        },
                        this.state.cards[this.state.cardIndex][i]
                    )
            terms.push(term)
        }
        termAndUiDivChildren = [
            // div for current flashcard content
             e(
                 'div',
                 {
                     style:
                         {
                             width:"100%",
                             height:"100%",
                             overflow:"scroll",
                             paddingTop:"3vh",
                             marginBottom:"3vh",
                             borderStyle:"dashed"
                         }
                  },
                  terms
              ),
              // buttons for cycling through the current
                  // flashcard's defintions
             e(
                 // type
                 'div',
                 // props
                 {
                     style:
                         {
                             display:"flex",
                             justifyContent:"center"
                         }
                 },
                 // children
                 e(
                     'button',
                     {
                         style:buttonStyle,
                         onClick: this.decrementDefinitionIndex
                     },
                     String.fromCharCode(0x2296)//"-"
                 ),
                 e(
                     'button',
                     {
                         style:buttonStyle,
                         onClick: this.incrementDefinitionIndex
                     },
                     String.fromCharCode(0x2295)//"+"
                 )
             ),
             // buttons for cycling through the flashcards
                 // in this.state.cards buttons
             e(
                 // type
                 'div',
                 // props
                 {
                     style:
                         {
                             display:"flex",
                             justifyContent:"space-around"
                         }
                 },
                 // children
                 e(
                     'button',
                     {
                         style: buttonStyle,
                         onClick: this.decrementCardIndex
                     },
                     String.fromCharCode(0x2190)//"<-"
                 ),
                 e(
                     'button',
                     {
                         style: buttonStyle,
                         onClick: this.incrementCardIndex
                     },
                     String.fromCharCode(0x2192)//"->"
                 )
             ),
        ];
        topPercentageOfCardStats = "95%"
    }
    // top-level page elements
    elements = [
              // STATS: the number of the current flashcard's terms
                e(
                    'div',
                    { style:
                        {
                            position:"absolute",
                            top:topPercentageOfCardStats,
                            left:this.state.windowWidth<this.state.windowHeight?"2%":"3%",
                            fontSize:"3vw",
                            color:"black"
                        }
                    },
                    (this.state.definitionIndex - 1)
                        + '/' +
                    (this.state.cards[this.state.cardIndex].length - 1)
                ),
                // STATS: the number of flashcards
                e(
                    'div',
                    { style:
                        {
                            position:"absolute",
                            top:topPercentageOfCardStats,
                            left: "85%",
                            fontSize:"3vw",
                            color:"black"
                        }
                    },
                    this.state.cardIndex + 1
                        + '/' +
                    this.state.cards.length
                ),
                // TERM AND UI: flashcard content with buttons.
                e( 'div', termAndUiDivStyle, ...termAndUiDivChildren )
            ]
    // React component body
    return e(
                'div',
                { style:
                    {
                        margin:"auto",
                        maxWidth:"1000px"
                    }
                },
                ...elements
            );
  }
}
const domContainer = document.querySelector('#reactHolder');
ReactDOM.render(e(FlashCardInterface), domContainer);
