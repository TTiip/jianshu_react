import React from 'react'
import { connect } from 'react-redux'
import {
  RecommendWrapper,
  RecommendItem
} from '../style'

class Recommend extends React.PureComponent {
  render () {
    const {
      recommendList
    } = this.props
    return (
      <RecommendWrapper>
        {
          recommendList.map(item => <RecommendItem key={ item.get('id') } imgUrl={ item.get('imgUrl') } />)
        }
      </RecommendWrapper>
    )
  }
}

const mapSatateToProps = (state) => ({
  recommendList: state.get('homeReducer').get('recommendList')
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapSatateToProps, mapDispatchToProps)(Recommend)
