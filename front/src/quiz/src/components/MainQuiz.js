import React from 'react';
import {quiData} from './quizData'

class MainQuiz extends React.Component {
    state = {
        currentQuestion :0,
        myAnswer: null,
        options: [],
        score: 0,
        disabled: true,
        isEnd: false
    };

    loadQuizData = () => {

        this.setState(() => {
            return{
                questions: quizData[this.state.currentQuestion].question,
                answer: quizData[this.state.currentQuestion].answer,
                options: quizData[this.state.currentQuestion].options
            };
        });
    };

    componentDidMount() {
        this.loadQuizData();
    }
    nextQuestionHandler = () => {

        const { myAnswer, answer, score } = this.state;

        if(myAnswer === answer) {
            this.setState({
                score: score + 1
            });
        }

        this.setState({
            currentQuestion: this.state.currentQuestion +1
        });
        console.log(this.state.currentQuestion)
    };

    componentDidUpdate(prevProps, prevState) {
        if(this.state.currentQuestion !== prevState) {
            this.state(() =>{
                return{
                    disabled: true,
                    questions: quizData[this.state.currentQuestion].question,
                    answer: quizData[this.state.currentQuestion].answer,
                    options: quizData[this.state.currentQuestion].options
                };

            })
        }
    }

    
}