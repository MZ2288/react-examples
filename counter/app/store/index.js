class Store {
  constructor () {
    this.state = {
      count: 0
    }
  }

  observe (o) {
    if (this.observer) {
      console.log('multiple observers not supported')
    }
    this.observer = o
    this.emitChange()
  }

  emitChange () {
    this.observer()
  }

  changeCount (count) {
    this.state.count = count
    this.emitChange()
  }

  inc = () => {
    this.changeCount(this.state.count + 1)
  }

  dec = () => {
    this.changeCount(this.state.count - 1)
  }

  reset = () => {
    this.changeCount(0)
  }
}

function createStore () {
  let store
  if (store) {
    return store
  }
  store = new Store()
  return store
}

export default createStore
