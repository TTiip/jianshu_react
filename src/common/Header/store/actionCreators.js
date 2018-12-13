import * as actionTypes from './actionTypes'
import axios from 'axios'

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  totalPage: Math.ceil(data.length / 10),
  data
})

export const getMouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
})

export const getMouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
})

export const getSearchFocusAction = () => ({
  type: actionTypes.SEARCH_FOCUSED
})

export const getSearchBlurAction = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const getChangePageAction = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
})

export const getList = () => (async (dispath) => {
  try {
    const res = await axios.get('/api/headerList.json')
    let { ret_code, data } = res.data
    if (ret_code === 0) {
      dispath(changeList(data))
    }
  } catch (e) {
    console.log(e)
  }
})
