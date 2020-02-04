import React, {useState} from 'react';
import '../assets/css/game1.css';
import Timer from './Timer'

 function Game1() {
  const [valor, setValor] = useState(7)
  return (
    <div className="Nv2">
    
      <h1 className="title"> Nivel 1</h1>
      
  
      
      <Timer valor={valor} setValor={setValor} />
 
 
 
      <div className="root">  <input type="radio" name="vista" id="left" />
        <input type="radio" name="vista" id="center" defaultChecked />
        <input type="radio" name="vista" id="right" />   
        <input type="radio" name="vista" id="box" />   
        <input type="radio" name="vista" id="door" />
        <input type="checkbox" id="luz" checked={valor === 0} />
        <input type="checkbox" id="cuadro" checked={valor === 0} />
        <input type="checkbox" id="hammer" checked={valor === 44} />
        <input type="checkbox" id="pass_1" checked={valor === 0} />
        <input type="checkbox" id="pass_2" checked={valor === 0} />
        <input type="checkbox" id="pass_3" checked={valor === 0} />
        <input type="checkbox" id="pass_4" checked={valor === 0} />
        <input type="checkbox" id="pass_5" checked={valor === 0} />
        <input type="checkbox" id="box_open" cheked={valor === 0}/>
        <input type="checkbox" id="key" checked={valor === 44} />
        <input type="checkbox" id="cerradura" checked={valor === 44} />
        <div className="screen">
          <input type="text" className="icon hammer" autoComplete="off" />
          <input type="text" className="icon key" autoComplete="off" />
          <div className="room">
            <div className="pared_left">
              <label className="box" htmlFor="box">
                <div className="box_door">
                  <label className="pass_1" htmlFor="pass_1" />
                  <label className="pass_2" htmlFor="pass_2" />
                  <label className="pass_3" htmlFor="pass_3" />
                  <label className="pass_4" htmlFor="pass_4" />
                  <label className="pass_5" htmlFor="pass_5" />
                  <label className="box_open" htmlFor="box_open" />
                </div>
                <label className="key" htmlFor="key" />
              </label>
              <label className="left" htmlFor="left"> </label>
              <label className="luz" htmlFor="luz" /> 
            </div>
            <div className="pared_front">
              <label className="center" htmlFor="center" />
              <label className="hammer" htmlFor="hammer" />
              <label className="door" htmlFor="door"> 
                <label className="cerradura" htmlFor="cerradura" />
              </label>
            </div>
            <div className="pared_right">
              <label className="right" htmlFor="right" />
              <label className="cuadro" htmlFor="cuadro"> </label>
            </div>
            <div className="floor" />

            
            
          </div>
        </div>
      </div>
    </div>
    );
  }








  
export default Game1;











