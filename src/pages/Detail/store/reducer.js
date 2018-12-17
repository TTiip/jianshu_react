import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  title: '',
  content: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_INIT_DATA:
      const {
        title,
        content
      } = action.data
      return state.merge({
        title: fromJS(title),
        content: fromJS(content)
      })
    default:
      return state
  }
}
