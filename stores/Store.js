class Store {
  // Your implementation here.
  // Hint: Our <App /> component won't directly use this store, but instead the
  // CounterStore is going to inherit from it.
  constructor (initialState) {
    this.state = initialState;
    this.listeners = [];
  }

  addListener (listener) {
    this.listeners.push(listener);
    const removeListener = () => {
      this.listeners = this.listeners
        .filter(l => listener !== l);
    };
    return removeListener;
  }

  setState (state) {
    this.state = state;
    for (const listener of this.listeners) {
      listener.call(this, state);
    }
  }

  getState () {
    return this.state;
  }
}

export default Store;
