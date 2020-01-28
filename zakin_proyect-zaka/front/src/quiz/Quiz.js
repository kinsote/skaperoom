import React from 'react';
import './css/quiz.css';
import './components/Preguntas';


 export default   function  quiz(){
    return (
        <div>
          <title>quiz</title>
          <link rel="stylesheet" href="css/quiz.css" />
          <h1>Kinsohack</h1>
          <div className="quiz_wrapper">
            <div className="question" id="questionBox">
            </div>
            <div className="options">
              <ul id="ul">
                <li id="op1" onclick="button(this)" />
                <li id="op2" onclick="button(this)" />
                <li id="op3" onclick="button(this)" />
                <li id="op4" onclick="button(this)" />
              </ul>
            </div>
            <div className="score">
              <div className="next">
                <button type="button" onclick="next()" id="button">Next</button>
              </div>
              <div className="score-card">
                Score : <span id="scoreCard">0</span>
              </div>
            </div>
          </div>
    </div>
    )
}