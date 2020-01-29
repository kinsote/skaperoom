import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import { Provider, useSelector, } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { save, load } from "redux-localstorage-simple";
import rootReducer from './reducers';
import Inicio from './Inicio';
import Home from './Home';
import Error from './components/Error';




const store = createStore(rootReducer, load(), applyMiddleware(save()))
const Content = () => {
  const user = useSelector(s => s.user)

  return (
    <div className="App">
      {!user && <Inicio />}      
    </div>
  )
}

const App = () => {
  return (
    < Provider store={store} >

      <Switch>
        <Content />
        <Route exact path="/">
          <Inicio />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route component={Error} />
      </Switch>
    </Provider >
  )
}

export default App
