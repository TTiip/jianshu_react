import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeLogin = () => ({
  type: actionTypes.CHANGE_LOGIN,
  value: true
})

export const logout = () => ({
  type: actionTypes.LOGOUT,
  value: false
})

export const login = (accout, password) => (async (dispatch) => {
    try {
      let res = await axios.get(`/api/login.json?account=${accout}&password=${password}`)
      const {
        ret_code,
        data
      } = res.data;
      if (ret_code === 0) {
        dispatch(changeLogin())
      }else {
        alert('登陆失败')
      }
    } catch (e) {
      console.log(e)
    }
  })
