class Store {

  constructor () {
    this.state = {
      counters: []
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

  addCounter = () => {
    const self = this
    this.state.counters.push(new function () {
      this.count = 0
      this.inc = () => {
        this.count++
        self.emitChange()
      }
      this.dec = () => {
        this.count--
        self.emitChange()
      }
    })
    self.emitChange()
  }

  reset = () => {
    this.state.counters.forEach((c) => {
      c.count = 0
    })
    this.emitChange()
  }

  sum = () => {
    return this.state.counters.reduce((acc, curr) => {
      return (acc + curr.count)
    }, 0)
  }

}

export default function createStore () {
  let store
  if (store) {
    return store
  }
  store = new Store()
  return store
}
