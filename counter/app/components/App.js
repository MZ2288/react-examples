import React, {Component, PropTypes} from 'react'

export default class App extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    inc: PropTypes.func.isRequired,
    dec: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
  }
  
  render () {
    const {count, inc, dec, reset} = this.props
    return (
      <div>
        <div>count: {count}</div>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    )
  }
}
