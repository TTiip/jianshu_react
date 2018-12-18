import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import {
  DetailWrapper,
  Header,
  Content
} from "./style";

class Detail extends React.PureComponent {
  componentDidMount (id) {
    this.props.getInitData(this.props.match.params.id)
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
  getInitData (id) {
    dispatch(actionCreators.getInitData(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))
