// import React, {useState} from 'react';
// import PropTypes from 'prop-types';
// import '../assets/css/Quiz2.css';
// import Question from './Question';
// import QuestionCount from './QuestionCount';
// import AnswerOption from './AnswerOption';

// const [ counter, setCounter] = useState(0);
// const [ questionId, setQuestionId] = useState(1);
// const [ question, setQuestion] = useState('');
// const [ answerOptions, setAnswerOptions] = useState();
// const [ answer, setnAswer] = useState('');
// const [ answersCount, setAnswersCount] = useState();
// const [ result, setResult] = useState('');

// // constructor(props) {
// //     super(props);

// //     this.state = {
// //         counter: 0,
// //         questionId: 1,
// //         question: '',
// //         answerOptions: [],
// //         answer: '',
// //         answersCount: {},
// //         result: ''
// //     };
// // }



// const Quiz2 = (props) => {

//     function renderAnswerOptions(key) {
//         return (
//             <AnswerOption
//                 key={key.content}
//                 answerContent={key.content}
//                 answerType={key.type}
//                 answer={props.answer}
//                 questionId={props.questionId}
//                 onAnswerSelected={props.onAnswerSelected}
//             />
//         );
//     }
//     return (

//         <div className="conten-quiz2">
//             <h1 className="h1-quiz2">Este es el quiz2</h1>
//             <Question content="que es tu comida favorita?" />
//             <QuestionCount counter={props.questionId} total={props.questionTotal} />
//             <Question content={props.question} />
//             <ul className="answerOptions">
//                 {props.answerOptions.map(renderAnswerOptions)}
//             </ul>
//         </div>
//     );
// }

// Quiz2.propTypes = {
//     answer: PropTypes.string.isRequired,
//     answerOptions: PropTypes.array.isRequired,
//     counter: PropTypes.number.isRequired,
//     question: PropTypes.string.isRequired,
//     questionId: PropTypes.number.isRequired,
//     questionTotal: PropTypes.number.isRequired,
//     onAnswerSelected: PropTypes.func.isRequired
// };


// export default Quiz2;