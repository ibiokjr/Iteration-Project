import React, { Component } from 'react'

 class ButtonCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardItem:0,
    }
  }

  handleIncrement = () => {
    if (this.state.cardItem < 5) {
          this.setState((prevState)=> ({ cardItem: prevState.cardItem +1 }));
          document.title = `card Item: ${this.state.cardItem + 1}`;
          document.title = `card Items: ${this.state.cardItem + 1}`;
      }
    
  };
  render() {
    const buttonText = `Card item: ${this.state.cardItem}`;
    return (
      <div>
        <h1> Card Item: {this.state.cardItem}</h1>
        <button
         type= "button"
         className='btn btn-primary'
         onClick={this.handleIncrement}
         >
          {buttonText}
         </button>
      </div>
    )
  }
}
export default ButtonCounter