import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem, Addition, Button } from './style'

class Header extends React.Component {
  render () {
    const {
      focused,
      handleInputFocus,
      handleInputBlus,
      handleSearchIconClick
    } = this.props
    return (
      <div>
        <HeaderWrapper>
          <Logo />
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载App</NavItem>
            <NavItem className='right'>登陆</NavItem>
            <NavItem className='right'>
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                in={ focused }
                timeout={ 300 }
                classNames="slide"
              >
                <NavSearch
                  onFocus={ handleInputFocus }
                  onBlur={ handleInputBlus }
                  className={ focused ? 'focused' : '' }
                />
              </CSSTransition>
              <i onClick={ handleSearchIconClick } className={ focused ? 'focused iconfont' : 'iconfont' }>&#xe62b;</i>
              <CSSTransition
                in={ focused }
                timeout={ 300 }
                classNames="fade"
              >
                <SearchInfo>
                  <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                  </SearchInfoTitle>
                  <SearchInfoList>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                  </SearchInfoList>
                </SearchInfo>
              </CSSTransition>
            </SearchWrapper>
          </Nav>
          <Addition>
            <Button className='reg'>注册</Button>
            <Button className='weitting'>
              <i className="iconfont">&#xe615;</i>
              写文章
            </Button>
          </Addition>
        </HeaderWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // focused: state.getIn(['headerRecucer', 'focused'])
    focused: state.get('headerRecucer').get('focused')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.getSearchFocusAction())
    },
    handleInputBlus() {
      setTimeout(() => {
        dispatch(actionCreators.getSearchBlurAction())
      }, 200)
    },
    handleSearchIconClick () {
      console.log(11)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
