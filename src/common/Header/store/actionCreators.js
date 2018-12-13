import * as actionTypes from './actionTypes'
import axios from 'axios'

export const getSearchFocusAction = () => ({
  type: actionTypes.SEARCH_FOCUSED
})

export const getSearchBlurAction = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const getList = () => (async (dispath) => {
  try {
    const res = await axios.get('/api/headerlist.json')
    console.log(res)
  } catch (e) {
    console.log(e)
  }
})
