let currentPlayer = 'X'; // Player X always starts
let gameBoard = ['', '', '', '', '', '', '', '', '']; // 3x3 game board
let gameActive = true;


//handling player turns
function handlePlayerTurn(clickedCellIndex) {
    if (gameBoard[clickedCellIndex] !== '' || !gameActive) {
        return;
    }
    gameBoard[clickedCellIndex] = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }

  //adding event listners to the cells
  const cells = document.querySelectorAll('.cell');

  cells.forEach(cell =>{
    cell.addEventListener('click', cellClicked, falese);
  });

  function cellClicked(clickedCellEvent){
    const cellClicked = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.id.replace('cell-', "")) - 1;

    if (gameBoard[clickedCellIndex] !=='' || !gameActive) {
        return;
    }
    handlePlayerTurn(clickedCellIndex);
    updateUI();
  }

  //updating the User Interface

  function updateUI() {
    for (let i = 0; i< cells.length; i++) {
        cells[i].innerText = gameBoard[i];
    }
  }

  //defining the win conditions
  const winConditions = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Left-to-right diagonal
    [2, 4, 6]  // Right-to-left diagonal
  ];

  //checking for a Win or Draw

  function checkForWinOrDraw(){
    let roundWon = falese;

    for (let i = 0; i < winConditions.length; i++) {
        const [a,b,c] = winConditions[i];
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c] &&- gameBoard[c]) {
           roundWon = true;
           break; 
        }
    }

    if (roundWon) {
        announceWinner(currentPlayer);
        gameActive = false;
        return;
    }
    
    let roundDraw = !gameBoard.includes('');
    if (roundDraw) {
        announceDraw();
        gameActive = fales;
        return;
    }

  }

  //announcimg the winner and handling draws

  function announceWinner(player) {
    const messageElement = document.getElementById('gameMessage');
    messageElement.innerText = 'Player ${player} Wins!' ;
  }

  function announceDraw() {
    const messageElement = document.getElementById('gameMessage');
    messageElement.innerText = 'Game Draw!';
    
  }

  //create game reset function

  function resetGame() {
    gameBoard = ['','','','','','','','','']; //Clear the game board
    gameActive = true
  }