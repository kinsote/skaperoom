import { combineReducers } from 'redux'

const userReducer = (state, action) => {
  switch(action.type) {
    case 'registro': return action.user
    case 'login': return action.user
    case 'logout': return null
    default: return state || null
  }
}

const modalReducer = (state, action) => {
  switch(action.type) {
    case 'showModal': return { type: action.modalType } 
    case 'hideModal': return null
    default: return state || null
  }
}


  
const rootReducer = combineReducers({  
  user: userReducer,
  modal: modalReducer,  
})

export default rootReducer










