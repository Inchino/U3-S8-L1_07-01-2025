import { Component } from 'react'

class ClassComponent extends Component {
  render(props) {

    return (
      <>
      <img src={this.props.img} alt={this.props.alt}></img>
      </>
    )
  }
}

export default ClassComponent