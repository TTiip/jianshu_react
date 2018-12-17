import React from 'react'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import List from './components/List'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'

class Home extends React.PureComponent {
  async componentDidMount () {
    this.props.getInitData()
    this.bindEvents()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  render () {
    const {
      handleScrollTop,
      showScroll
    } = this.props
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4581/29a8ad23f5e09954e694954c91a42fa9e29df7f9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
            <Topic/>
            <List/>
          </HomeLeft>
          <HomeRight>
            <Recommend/>
            <Writer/>
          </HomeRight>
        </HomeWrapper>
        {
          showScroll ?
            <BackTop onClick={ handleScrollTop }>
              <i className='iconfont'>&#xe616;</i>
            </BackTop> : null
        }
      </div>
    )
  }

  bindEvents () {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.get('homeReducer').get('showScroll')
})

const mapDispatchToProps = (dispatch) => ({
  getInitData () {
    dispatch(actionCreators.getInitData())
  },
  handleScrollTop () {
    const fn = () => {
      let oTop = document.body.scrollTop || document.documentElement.scrollTop;
      if(oTop > 0){
        document.body.scrollTop = document.documentElement.scrollTop = oTop - 40;
        timer = requestAnimationFrame(fn);
      } else {
        cancelAnimationFrame(timer);
      }
    }
    let timer = requestAnimationFrame(fn);
  },
  changeScrollTopShow () {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
