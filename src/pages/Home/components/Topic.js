import React from 'react'
import { connect } from 'react-redux'
import {
  TopicWrapper,
  TopicItem
} from '../style'

class Topic extends React.PureComponent {
  render () {
    const {
      topicList
    } = this.props
    return (
      <TopicWrapper>
        {
          topicList.map(item => <TopicItem key={item.get('id')}><img className="topic-pic" src={ item.get('imgUrl') } alt=""/>{ item.get('title') }</TopicItem>)
        }
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    topicList: state.get('homeReducer').get('topicList')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic)
