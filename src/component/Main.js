import React,{Component} from 'react'


export default class Main extends Component{
  constructor(){
    super()
    this.state = {
      guessed:"#",
      guess:undefined,
      numToGuess:undefined,
      newGame:true,
      begin:false,
      gameWon:false,
      hint:"Let's play ball!"
      }
  }


handleInput(input){
  if (this.state.newGame){
    let randomNum = Math.floor(Math.random()*100)
    this.setState({
      numToGuess:randomNum,
      newGame   : false
    })
  }


  this.setState({guess:input})
  }


handleGuess(){
  if(!this.state.guess){
    this.setState({hint:"hmm try entering a number please"})
    return
  }

    this.setState({begin:true})


    this.setState({guessed:this.state.guess})

    if(this.state.guess > this.state.numToGuess){
     this.setState({hint:"go lower!"})
   }

   if (this.state.guess < this.state.numToGuess) {
     this.setState({hint: "go higher!"})
    }

   if(this.state.guess == this.state.numToGuess){
    this.setState({gameWon:true})
    }
}

handleClear(){
  this.setState({guess:""})
}

handleReset(){
  this.setState({
    guess: "",
    numToGuess: undefined,
    newGame: true,
    gameWon: false,
    guessed: "#",
    hint   : "Let's play ball!",
    begin:false,

  })
}



  render(){
    let text = !this.state.begin?
     "Enter a Guess":"Your last guess was"
     if(this.state.gameWon){
       text  = "YOU WON!"
     }
    return (
      <main className="main-container">
        <div className ="input-container" >
          <input
          className = "text-input"
           value={this.state.guess}
           onChange={(e)=>{this.handleInput(e.target.value)}} type= "text" placeholder = "Enter your guess"/>
            <div className= "input-btn-container">
              <button onClick={this.handleGuess.bind(this)}>Guess</button>
              <button onClick={this.handleClear.bind(this)}>Clear</button>
            </div>
        </div>
        <h3>{text}</h3>
        <h3 className="guessed-container">{this.state.guessed}</h3>
        <div className="textHint">{this.state.hint}</div>
        <button className= "resetBtn" onClick={this.handleReset.bind(this)}>Reset</button>
      </main>

    )
  }


}
