import { combineReducers } from 'redux-immutable'
import { reducer as headerRecucer } from '../common/Header/store'
import { reducer as homeReducer } from '../pages/Home/store'
import { reducer as detailReducer } from '../pages/Detail/store'
import { reducer as loginReducer } from '../pages/Login/store'

const reducer =  combineReducers({
  headerRecucer,
  homeReducer,
  detailReducer,
  loginReducer
})

export default reducer
