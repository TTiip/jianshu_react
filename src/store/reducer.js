import { combineReducers } from 'redux-immutable'
import { reducer as headerRecucer } from '../common/Header/store'

const reducer =  combineReducers({
  headerRecucer
})

export default reducer
