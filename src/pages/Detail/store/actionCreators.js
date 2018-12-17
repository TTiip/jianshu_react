import * as actionTypes from './actionTypes'
import axios from 'axios'

const getInitDataAction = (data) => ({
  type: actionTypes.GET_INIT_DATA,
  data
})

export const getInitData = (id) => (async (dispatch) => {
  try {
    const res = await axios.get(`/api/detail.json?id=${id}`)
    let { ret_code, data } = res.data
    if (ret_code === 0) {
      dispatch(getInitDataAction(data))
    }
  } catch (e) {
    console.log(e)
  }
})
