import React, { Component } from 'react';
import {Button} from './buton.js'
import Game from './buton'

export class Cronometro extends Component {
  constructor (){
    super();
    this.state={
      contador:0,
      estado:"Iniciar"
    }
    this.handleContadorplus= this.handleContadorplus.bind(this);
    this.handleContadorminus= this.handleContadorminus.bind(this);
    this.aumentar= this.aumentar.bind(this);
  }

  handleContadorplus(){
    if (this.state.estado==="Iniciar"){
      this.setState({
        estado: "Pausa"
      });
      this._interval=setInterval(this.aumentar,1000);
      }
    else if (this.state.estado==="Pausa"){
        this.setState({
          estado: "Iniciar"
      });
      clearInterval(this._interval);
    }

  }
  aumentar(){
    if(this.state.estado==="Pausa"){
      this.setState({
        contador: this.state.contador+1
      });
    }
  }
  handleContadorminus(){
    this.setState({
      contador: 0,
      estado:"Iniciar"
    });
    clearInterval(this._interval);
  }
  render() {
    return (
      <div className=" text-center">

        <h1>{this.state.contador}</h1>
        <Button text={this.state.estado}  className="btn btn-success" onClick={this.handleContadorplus}/>
        <Button text="Detener"  className="btn btn-danger" onClick={this.handleContadorminus}/>

      </div>
    );
  }
}

export default Cronometro