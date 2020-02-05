import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';  //, useSelector,
import { createStore, applyMiddleware } from 'redux';
import { save, load } from "redux-localstorage-simple";
import rootReducer from './reducers';
import Inicio from './Inicio';
import Home from './Home';
import Error from './components/Error';
import User from './User';
import Juego from './Juego'
import Edit from './Edituser';
import Gameq1 from './Quiz';
import Gameq2 from './Quiz2';

const store = createStore(rootReducer, load(), applyMiddleware(save()))

const App = () => {
  return (
    < Provider store={store} >
      <Router>       
        <Switch>

          <Route exact path="/">
            <Inicio />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/user">
            <User />
          </Route>

          <Route exact path="/home/game">
            <Juego />
          </Route>
          
          <Route exact path="/home/game2">
            <Gameq1 />
          </Route>
          
          <Route exact path="/home/game3">
            <Gameq2 />
          </Route>

          <Route exact path="/user/edit">
            <Edit />
          </Route>

          <Route path="*" component={Error} />

        </Switch>
      </Router>
    </Provider >
  )
}

export default App
