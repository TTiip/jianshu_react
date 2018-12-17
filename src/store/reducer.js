import { combineReducers } from 'redux-immutable'
import { reducer as headerRecucer } from '../common/Header/store'
import { reducer as homeReducer } from '../pages/Home/store'
import { reducer as detailReducer } from '../pages/Detail/store'

const reducer =  combineReducers({
  headerRecucer,
  homeReducer,
  detailReducer
})

export default reducer
