import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style'

class List extends React.PureComponent {
  render () {
    const {
      articleList,
      articlePage,
      getMoreList
    } = this.props
    return (
      <div>
        {
          articleList.map((item, index) => (
            <Link key={ index } to='/detail'>
              <ListItem>
                <img className='pic' src={ item.get('imgUrl') } alt=""/>
                <ListInfo>
                  <h3 className='title'>{ item.get('title') }</h3>
                  <p className='desc'>{ item.get('desc') }</p>
                </ListInfo>
              </ListItem>
            </Link>
          ))
        }
        <LoadMore onClick={ () => getMoreList(articlePage) }>更多文字</LoadMore>
      </div>
    )
  }
}

const mapSatateToProps = (state) => ({
  articleList: state.get('homeReducer').get('articleList'),
  articlePage: state.get('homeReducer').get('articlePage')
})

const mapDispatchToProps = (dispatch) => ({
  getMoreList (articlePage) {
    dispatch(actionCreators.getMoreList(articlePage))
  }
})

export default connect(mapSatateToProps, mapDispatchToProps)(List)
