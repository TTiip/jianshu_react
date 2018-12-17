import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  DetailWrapper,
  Header,
  Content
} from "./style";

class Detail extends React.Component {
  componentDidMount () {
    this.props.getInitData()
  }

  render () {
    const {
      title,
      content
    } = this.props
    return (
      <div>
        <DetailWrapper>
          <Header>
            { title }
          </Header>
          <Content dangerouslySetInnerHTML={{ __html: content }} />
        </DetailWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  title: state.get('detailReducer').get('title'),
  content: state.get('detailReducer').get('content')
})

const mapDispatchToProps = (dispatch) => ({
  getInitData () {
    dispatch(actionCreators.getInitData())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
