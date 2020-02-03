import React, {Component} from 'react';
import Cronometro from './cronometro'
export  class Button extends Component {
  render() {

    
    return (
      
      <div className="buttonGame">

        <button onClick= {this.props.onClick} className={this.props.className} >
          {this.props.text}

        </button>
      </div>
      
       

      
     
    );
  }
}
