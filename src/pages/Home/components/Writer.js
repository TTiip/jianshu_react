import React from 'react'
import { connect } from "react-redux"
import {
  WriterWrapper
} from '../style'

class Writer extends React.PureComponent {
  render () {
    return (
      <WriterWrapper>Writer</WriterWrapper>
    )
  }
}

const mapSatateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapSatateToProps, mapDispatchToProps)(Writer)
