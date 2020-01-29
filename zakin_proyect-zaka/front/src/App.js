import Nv2 from './nv2/components/Nv2';
// import React from 'react';
// import Textomove from './nv2/components/Textomove';
// import {BrowserRouter , Route} from 'react-router-dom';
// import Home from '.components/Home'
// import Quizinstructions from './components/quiz/instructions';
// import Play from './components/quiz/Play'
// import QuizSummary from './components/quiz/QuizSummary';





function  App() {
  return(
    <div className="App">
     {/* <React.Fragment>
      <BrowserRouter>
      <route exact path="/" component={Home}/>
      <route exact path="/play/instructions" component={Quizinstructions}/>
      <route exact path="/play" component={Play}/>
      <route exact path="/play/quizsummary" component={QuizSummary}/>
      
      
      
      
      
      </BrowserRouter>
     </React.Fragment> */}
     
     <Nv2/>
     

    </div>
  )
}




export default App; 