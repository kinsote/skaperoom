import React from 'react'
import Rout from './Router';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { save, load } from "redux-localstorage-simple"
import rootReducer from './reducers'


const store = createStore(rootReducer, load(), applyMiddleware(save()))

const App = () => {
  return (
    < Provider store={store} >
      <Rout />
    </Provider >
  )
}

export default App
