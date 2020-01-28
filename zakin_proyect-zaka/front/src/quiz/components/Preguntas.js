import React  from 'react';
import '../css/quiz.css'


const ul = document.getElementById('ul');
const btn = document.getElementById('button');
const scoreCard = document.getElementById('scoreCard');
const quizBox = document.getElementById('questionBox');
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');



let app = {
    questions: [
        {
            q: 'Donde se desarrolla Zombies Nazis?',
            options: ['Belgica', 'Alemania', 'Francia', 'Noruega'],
            answer: 2
        },

        {
            q: 'Que actor hacia de si mismo en bienvenidos a Zombieland?',
            options: ['Bill Murray', 'Woody Harrelson', 'Jesse Eisenberg', 'Emma Stone'],
            answer: 1
        },

        {
            q: 'De que año es Zombie el regreso de los muertos vivientes?',
            options: ['1973', '1968', '1983', '1978'],
            answer: 4
        },

       
    ],
    index:0,
    load:function(){
           if(this.index<=this.questions.length-1){
            quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
            op1.innerHTML=this.questions[this.index].options[0];
            op2.innerHTML=this.questions[this.index].options[1];
            op3.innerHTML=this.questions[this.index].options[2];
            op4.innerHTML=this.questions[this.index].options[3];
               this.scoreCard();
            }
            else{

            quizBox.innerHTML="Bastante Bien!!!"      
            op1.style.display="none";
            op2.style.display="none";
            op3.style.display="none";
            op4.style.display="none";
            btn.style.display="none";
            }
    },
     next:function(){
        this.index++;
        this.load();
     },
    check:function(ele){
       
             var id=ele.id.split('');
             
             if(id[id.length-1]==this.questions[this.index].answer){
                 this.score++;
                 ele.className="correct";
                 ele.innerHTML="Correct";
                 this.scoreCard();
             }
             else{
                 ele.className="wrong";
                 ele.innerHTML="Wrong";
             }
    },
    notClickAble:function(){
           for(let i=0;i<ul.children.length;i++){
                   ul.children[i].style.pointerEvents="none";
           }
    },

    clickAble:function(){
           for(let i=0;i<ul.children.length;i++){
                   ul.children[i].style.pointerEvents="auto";
                   ul.children[i].className=''

           }
    },
    score:0,
    scoreCard:function(){
        scoreCard.innerHTML=this.score +"/"+this.questions.length;
    }

}


window.onload=app.load();

function button(ele){
        app.check(ele);
        app.notClickAble();
}

function  next(){
  app.next();
  app.clickAble();
} 
