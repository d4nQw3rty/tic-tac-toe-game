const App = {
  $:{
    menu: document.querySelector('[data-id="menu"]'),
    menuItems: document.querySelector('[data-id="menu-items"]'),
    resetBtn: document.querySelector('[data-id="reset-btn"]'),
    newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
    squares: document.querySelectorAll('[data-id="square"]')
  },

  init(){  
    App.registerEventsListeners();
  },

  registerEventsListeners() {

    App.$.menu.addEventListener('click', (event) => {
      App.$.menuItems.classList.toggle('hidden');
    });

    App.$.resetBtn.addEventListener('click', event => {
        console.log('reset the game');
    });

    App.$.newRoundBtn.addEventListener('click', event => {
        console.log('new game');
    });

    App.$.squares.forEach( square => {
        square.addEventListener('click', event => {
           console.log(`Square with id: ${event.target.id} was clicked`)
        })
    })

  }
}

window.addEventListener('load', App.init)
