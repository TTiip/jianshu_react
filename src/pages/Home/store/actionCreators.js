import * as actionTypes from './actionTypes'
import axios from 'axios'

const changeHomeDataAction = (data) =>({
  type: actionTypes.CHANGE_HOME_DATA,
  data
})

const getMoreListAction = (data, nextPage) => ({
  type: actionTypes.GET_MORE_LIST,
  data,
  nextPage
})

export const getMoreList = (articlePage) => (async (dispatch) => {
  try {
    const res = await axios.get(`/api/homeList.json?page=${articlePage}`)
    let { ret_code, data } = res.data
    if (ret_code === 0) {
      dispatch(getMoreListAction(data, articlePage + 1))
    }
  } catch (e) {
    console.log(e)
  }
})

export const toggleTopShow = (show) => ({
  type: actionTypes.TOGGLE_TOP_SHOW,
  show
})

export const getInitData = () => (async (dispatch) => {
  try {
    const res = await axios.get('/api/home.json')
    let { ret_code, data } = res.data
    if (ret_code === 0) {
      dispatch(changeHomeDataAction(data))
    }
  } catch (e) {
    console.log(e)
  }
})
