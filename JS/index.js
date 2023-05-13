const App = {
  $:{
    menu: document.querySelector('[data-id="menu"]'),
    menuItems: document.querySelector('[data-id="menu-items"]'),
    resetBtn: document.querySelector('[data-id="reset-btn"]'),
    newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
    squares: document.querySelectorAll('[data-id="square"]')
  },

  state:{  
    moves: []
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

    App.$.squares.forEach((square) => {
        square.addEventListener('click', (event) => {

          const hasMoves = (squareId) => {

            const existingMove = App.state.
          }

           if(square.hasChildNodes()){
            return;
           }

           const lastMove = App.state.moves.at(-1);
           const getOppositePlayer = ( playerId ) => playerId === 1 ? 2 : 1;
           const currentPlayer = App.state.moves.length === 0 
           ? 1
           : getOppositePlayer( lastMove.playerId );

           const icon = document.createElement('i');
   
           if (currentPlayer === 1) {          
             icon.classList.add('fa-solid', 'fa-x', 'turquoise');
           }
           else {
             icon.classList.add('fa-solid', 'fa-o', 'yellow')
           }

           App.state.moves.push({
            squareId: +square,
            playerId: currentPlayer
           })
   
           App.state.currentPlayer = currentPlayer === 1 ? 2 : 1;

           console.log(App.state)

           square.replaceChildren(icon);
           
           const winningPatterns = [
            [1, 2, 3],
            [1, 5, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 5, 7],
            [3, 6, 9],
            [4, 5, 6],
            [7, 8, 9],
          ];
        });
    });
  }
}
     

window.addEventListener('load', App.init)
