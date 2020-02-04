// import React, { useState } from "react";


// const Quiz2 = () => {

//     const [currentQuestion, setCurrentQuestion] = useState(0)
//     const [myAnswer, setMyAnswer] = useState()
//     const [options1, setOptions1] = useState()
//     const [score, setScore] = useState(0)
//     const [disabled, setDisabled] = useState(true)
//     const [isEnd, setIsEnd] = useState(false)
//     const answer;

//     loadQuizData = () => {
//         return {
//             disabled: true,
//             questions: quizData[currentQuestion].question,
//             options1: quizData[currentQuestion].options1,
//             answer: quizData[currentQuestion].answer
//         };
//     }

//     nextQuestionHandler = () => {

//         if (myAnswer === answer) {
//             return {
//                 setScore: (score + 1),
//                 setCurrentQuestion: currentQuestion + 1
//             }
//         }
//     }

//     componentDidUpdate = () => {

//         if (currentQuestion !== setCurrentQuestion) {
//             return {
//                 disabled: true,
//                 questions: quizData[currentQuestion].question,
//                 options1: quizData[currentQuestion].options1,
//                 answer: quizData[currentQuestion].answer
//             };
//         }
//     }

//     checkAnswer = answer => {
//         ({ setMyAnswer: answer, disabled: false });
//     };

//     finishHandler = () => {
//         if (currentQuestion === quizData.length - 1) {
//             return {
//                 setIsEnd: true
//             }
//         }
//     };

//     const { options1, myAnswer, currentQuestion, isEnd };

//     if (isEnd) {
//         return (
//             <div className="container-quiz1">
//                 <div className="App-quiz">
//                     <div className="result">
//                         <h3>Tu puntuacion final es... {score} points </h3>
//                         <p>
//                             Las opciones correctas eran las siguientes:
//                              <ul>
//                                 {quizData.map((item, index) => (
//                                     <li className="ui floating message options1" key={index}>
//                                         {item.answer}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </p>
//                     </div>
//                 </div>
//             </div >
//         );

//     } else {

//         return (
//             <div className="container-quiz1">
//                 <div className="App-quiz">
//                     <h1>{this.state.questions} </h1>
//                     <span>{`Questions ${currentQuestion}  out of ${quizData.length - 1} remaining `}</span>
//                     {options1.map(option => (
//                         <span className="optquiz">
//                             <p
//                                 key={option.id}
//                                 className={`ui floating message options1 ${myAnswer === option ? "selected1" : null}`}
//                                 onClick={() => checkAnswer(option)}  >
//                                 {option}
//                             </p>
//                         </span>
//                     ))}
//                     {currentQuestion < quizData.length - 1 && (
//                         <button className="ui inverted button" disabled={disabled} onClick={nextQuestionHandler} >
//                             Next
//             </button>
//                     )}
//                     {/* //adding a finish button */}
//                     {currentQuestion === quizData.length - 1 && (
//                         <button className="ui inverted button" onClick={finishHandler}>
//                             Finish
//             </button>
//                     )}
//                 </div>
//             </div>
//         );
//     }


// }

// export default Quiz2;