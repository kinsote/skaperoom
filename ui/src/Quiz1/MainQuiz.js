import React from "react";
import { quizData } from "./quizData";
import '../assets/css/Quiz1.css'



//function Temporizador (){}

class MainQuiz extends React.Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options1: [],
    score: 0,
    disabled: true,
    isEnd: false
  };

  loadQuizData = () => {
    // console.log(quizData[0].question)
    this.setState(() => {
      return {
        questions: quizData[this.state.currentQuestion].question,
        answer: quizData[this.state.currentQuestion].answer,
        options1: quizData[this.state.currentQuestion].options1
      };
    });
  };

  componentDidMount() {
    this.loadQuizData();
  }
  nextQuestionHandler = () => {
    // console.log('test')
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: quizData[this.state.currentQuestion].question,
          options1: quizData[this.state.currentQuestion].options1,
          answer: quizData[this.state.currentQuestion].answer
        };
      });
    }
  }
  //check answer
  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === quizData.length - 1) {
      this.setState({
        isEnd: true
      });
    }
  };
  render() {
    const { options1, myAnswer, currentQuestion, isEnd } = this.state;

    if (isEnd) {
      return (
        <div className="container-quiz1">
          <div className="App-quiz">
          <div className="result">
            <h3>Tu puntuacion final es de  ...        {this.state.score} points </h3>
            <p>
              Las opciones correctas eran las siguientes:
            <ul>
                {quizData.map((item, index) => (
                  <li className="ui floating message options1" key={index}>
                    {item.answer}
                  </li>
                ))}
              </ul>
            </p>
          </div>
        </div>
        </div >
      );
    } else {
      return (
        <div className="container-quiz1">
          <div className="App-quiz">
            <h1>{this.state.questions} </h1>
            <span>{`Questions ${currentQuestion}  out of ${quizData.length -
              1} remaining `}</span>
            {options1.map(option => (
              <span className="optquiz">
                <p
                  key={option.id}
                  className={`ui floating message options1 ${myAnswer === option ? "selected1" : null}`}
                  onClick={() => this.checkAnswer(option)}
                >
                  {option}
                </p>
              </span>
            ))}
            {currentQuestion < quizData.length - 1 && (
              <button
                className="ui inverted button"
                disabled={this.state.disabled}
                onClick={this.nextQuestionHandler}
              >
                Next
            </button>
            )}
            {/* //adding a finish button */}
            {currentQuestion === quizData.length - 1 && (
              <button className="ui inverted button" onClick={this.finishHandler}>
                Finalizar
            </button>
            )}
          </div>
        </div>
      );
    }
  }
}

export default MainQuiz;