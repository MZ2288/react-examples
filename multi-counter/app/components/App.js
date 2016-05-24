import React, {Component, PropTypes} from 'react'

export default class App extends Component {
  static propTypes = {
    addCounter: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    sum: PropTypes.func.isRequired,
    counters: PropTypes.array.isRequired
  }

  renderCounters (counters) {
    return counters.map((c, i) => {
      return (
        <div key={i}>
          <span>{c.count}</span>
          <button onClick={c.inc}>Inc</button>
          <button onClick={c.dec}>Dec</button>
        </div>
      )
    })
  }

  render () {
    const {addCounter, reset, sum, counters} = this.props
    return (
      <div>
        <button onClick={addCounter}>Add Counter</button>
        {this.renderCounters(counters)}
        <div>Sum: {sum()}</div>
      </div>
    )
  }
}
