import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actionCreators } from './store'
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from "./style";

class Login extends React.PureComponent {
  render () {
    const {
      login,
      loginStatus
    } = this.props
    if (!loginStatus) {
      return (
        <div>
          <LoginWrapper>
            <LoginBox>
              <Input placeholder='账号' innerRef={input => this.account = input}/>
              <Input placeholder='密码' type='password' innerRef={input => this.password = input}/>
              <Button onClick={() => login(this.account, this.password)}>登陆</Button>
            </LoginBox>
          </LoginWrapper>
        </div>
      )
    } else {
      return <Redirect to='/' />
    }
  }
}

const mapStateToProps = (state) => ({
  loginStatus: state.get('loginReducer').get('login')
})

const mapDispatchToProps = (dispatch) => ({
  login(accountElem, passwordElem){
    dispatch(actionCreators.login(accountElem.value, passwordElem.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
