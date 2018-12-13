import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem, Addition, Button } from './style'

class Header extends React.Component {
  render () {
    const {
      focused,
      mouseIn,
      list,
      page,
      totalPage,
      handleMouseEnter,
      handleMouseLeave,
      handleInputFocus,
      handleChangePage,
      handleInputBlus
    } = this.props

    let pageList = []
    pageList = [...list.toJS().slice((page - 1) * 10, page * 10)]

    // for (let i = page * 10; i < (page + 1) * 10; i++) {
    //   pageList = [...pageList, <SearchInfoItem key={ item }>{ item }</SearchInfoItem>]
    // }

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
              <i className={ focused ? 'focused iconfont zoom' : 'iconfont zoom' }>&#xe62b;</i>
              <CSSTransition
                in={ !!((focused || mouseIn) && pageList.length) }
                timeout={ 300 }
                classNames="fade"
              >
                <SearchInfo
                  onMouseEnter={ handleMouseEnter }
                  onMouseLeave={ handleMouseLeave }
                >
                  <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch
                      onClick={ () => handleChangePage(page, totalPage, this.spinIcon) }
                    >
                      <i ref={(icon) => this.spinIcon = icon} className="iconfont spin">&#xe851;</i>
                      换一批
                    </SearchInfoSwitch>
                  </SearchInfoTitle>
                  <SearchInfoList>
                    {
                      pageList.map(item => <SearchInfoItem key={ item }>{ item }</SearchInfoItem>)
                    }
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
    focused: state.get('headerRecucer').get('focused'),
    mouseIn: state.get('headerRecucer').get('mouseIn'),
    list: state.get('headerRecucer').get('list'),
    page: state.get('headerRecucer').get('page'),
    totalPage: state.get('headerRecucer').get('totalPage')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleMouseEnter () {
      dispatch(actionCreators.getMouseEnter())
    },
    handleMouseLeave () {
      dispatch(actionCreators.getMouseLeave())
    },
    handleInputFocus () {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.getSearchFocusAction())
    },
    handleInputBlus() {
      dispatch(actionCreators.getSearchBlurAction())
    },
    handleChangePage (page, totalPage, spin) {
      const originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      console.log(originAngle)
      spin.style.transform = 'rotate(360deg)'
      if (page < totalPage) {
        dispatch(actionCreators.getChangePageAction(page + 1))
      } else {
        dispatch(actionCreators.getChangePageAction(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
