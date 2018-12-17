import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
})

const changeHomeData = (state, action) => {
  const {
    topicList,
    articleList,
    recommendList
  } = action.data
  return state.merge({
    topicList: fromJS(topicList),
    articleList: fromJS(articleList),
    recommendList: fromJS(recommendList)
  })
}

const getMoreList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(fromJS(action.data)),
    articlePage: action.nextPage
  })
}

const toggelTopShow = (state, action) => {
  return state.merge({
    showScroll: action.show,
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case actionTypes.GET_MORE_LIST:
      return getMoreList(state, action)
    case actionTypes.TOGGLE_TOP_SHOW:
      return toggelTopShow(state, action)
    default:
      return state
  }
}
