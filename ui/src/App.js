import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';  //, useSelector,
import { createStore, applyMiddleware } from 'redux';
import { save, load } from "redux-localstorage-simple";
import rootReducer from './reducers';
import Inicio from './Inicio';
import Home from './Home';
import Error from './components/Error'
import User from './components/User';
import Nv2 from './nv2/components/Nv2'
import Edituser from './components/Edituser';

const store = createStore(rootReducer, load(), applyMiddleware(save()))
// const Content = () => {  
//   const user = useSelector(s => s.user)
//   return (
//     <div className="App">
//       {!user && <Inicio />}
//     </div>
//   )
// }

const App = () => {
  return (
    < Provider store={store} >
      <Router>
        {/* <Content /> */}
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
          <Route exact path="/nv2">
            <Nv2 />
          </Route>
          <Route exact path="/edit">
            <Edituser />
          </Route>
          <Route path="*" component={Error} />
        </Switch>
      </Router>

    </Provider >
  )
}

export default App
