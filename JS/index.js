const App = {
  $:{
    menu: document.querySelector('[data-id="menu"]'),
    menuItems: document.querySelector('[data-id="menu-items"]'),
    resetBtn: document.querySelector('[data-id="reset-btn"]'),
    newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
    squares: document.querySelectorAll('[data-id="square"]')
  },

  state:{  
    moves: [],
  },

  getGameStatus(moves) {
    const p1Moves = moves.filter(move => move.playerId === 1);
    const p2Moves = moves.filter(move => move.playerId === 2);

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

    let winner = null;
    winningPatterns.forEach(pattern => {
      const p1win = pattern.every(v => p1Moves.includes(v));
      const p2win = pattern.every(v => p2Moves.includes(v));

      if (p1win) winner = 1;
      if (p2win) winner = 2;
    })
    
    return {
      status: moves.length === 9 || winner != null ? 'complete' : 'in-progress' , // in-progress || complete
      winner // 1 || 2 || null
    }
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

            const existingMove = App.state.moves.find(
              (move) => move.squareId === squareId
            );
            return existingMove !== undefined;
          };

           if(hasMoves(+square.id)){
            return;
           }

           const lastMove = App.state.moves.at(-1);

           const getOppositePlayer = (playerId) => (playerId === 1 ? 2 : 1)

           const currentPlayer = 
           App.state.moves.length === 0
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
            squareId: +square.id,
            playerId: currentPlayer,
           })          

           square.replaceChildren(icon);

           const status = App.getGameStatus(App.state.moves);

           console.log(status);
           

        });
    });
  }
}
     

window.addEventListener('load', App.init)
