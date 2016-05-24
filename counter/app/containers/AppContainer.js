import React, {Component, PropTypes} from 'react'
import App from '../components/App'

export default class AppContainer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }
  render () {
    const {inc, dec, reset} = this.props.store
    const {count} = this.props.store.state
    const props = {count, inc, dec, reset}
    return (
      <App {...props} />
    )
  }
}
