export default class View {
  $ = {};
  $$ = {};
  constructor() {
    this.$.menu = this.#qs('[data-id="menu"]');
    this.$.menuBtn = this.#qs('[data-id="menu-btn"]');
    this.$.menuItems = this.#qs('[data-id="menu-items"]');
    this.$.resetBtn = this.#qs('[data-id="reset-btn"]');
    this.$.newRoundBtn = this.#qs('[data-id="new-round-btn"]');
    this.$.modal = this.#qs('[data-id="modal"]');
    this.$.modalText = this.#qs('[data-id="modal-text"]');
    this.$.modalBtn = this.#qs('[data-id="modal-btn"]');
    this.$.turn = this.#qs('[data-id="turn"]');
    this.$$.squares = this.#qsAll('[data-id="square"]');

    //UI-only event listener
    this.$.menuBtn.addEventListener("click", (event) => {
      this.#toggleMenu();
    });
  }

  // Register all event listeners

  bindGameResetEvent(handler) {
    this.$.resetBtn.addEventListener("click", handler);
  }

  binNewRoundEvent(handler) {
    this.$.newRoundBtn.addEventListener("click", handler);
  }

  binPlayerMoveEvent(handler) {
    this.$$.squares.forEach((square) => {
      square.addEventListener("click", handler);
    });
  }

  // DOM helper methods

  #toggleMenu() {
    this.$.menuItems.classList.toggle("hidden");
    this.$.menuBtn.classList.toggle("border");
    const icon = this.$.menuBtn.querySelector("i");
    icon.classList.toggle("fa-chevron-down");
    icon.classList.toggle("fa-chevron-up");
  }

  handlePlayerMove(squareElement, player) {
    const icon = document.createElement("i");
    icon.classList.add(
      "fa-solid",
      player.iconClass,
      player.colorClass,
    );
    squareElement.replaceChildren(icon);
  }

  //player = 1 | 2
  setTurnIndicator(player) {
    const icon = document.createElement("i");
    const label = document.createElement("p");
    
    icon.classList.add("fa-solid", player.colorClass, player.iconClass);

    label.classList.add(player.colorClass)
    label.innerText = `${player.name}, you're up!`;

    this.$.turn.replaceChildren(icon, label);

    }


  #qs(selector, parent) {
    const element = parent
      ? parent.querySelector(selector)
      : document.querySelector(selector);
    if (!element) throw new Error("could not find element");
    return element;
  }

  #qsAll(selector) {
    const elementList = document.querySelectorAll(selector);
    if (!elementList) throw new Error("could not find elements");
    return elementList;
  }
}
