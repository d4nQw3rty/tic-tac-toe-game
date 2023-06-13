export default class Store {
  #state = { moves: [] };
  constructor() {}

  #getState() {
    return this.#state;
  }

  #saveState(stateOrFn) {
    const prevState = this.#getState();
    let newState;
    switch (typeof stateOrFn) {
      case "function":
        newState = stateOrFn(prevState);
        break;

      case "object":
        newState = stateOrFn;
        break;

      default:
        throw new Error("Invalid argument passed to saveState");

        break;
    }

    this.#state = newState;
  }
}
