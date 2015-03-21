var Game = function() {
  this.gameOver = false;
  this.board = this.makeBoard(this.generateStartBoard());
  this.cells = $('.square').toArray();
  this.respawnIsOn = true;
};

Game.prototype.generateStartBoard = function() {
return _.shuffle(["0", "0","0","0","0","0", "0", "0", "0","0","0","2","0","2","0", "0"]).join("");
}


// Game.prototype.loop = function(direction) {
//   var self = this;
//   if (!this.gameOver) {
//     switch(direction) {
//       case 'left':
//         self.moveLeft()
//         break;
//       case 'right':
//         self.moveRight();
//         break;
//       case 'up':
//         self.moveUp();
//         break;
//       case 'down':
//         self.moveDown();
//         break;
//       }
//     self.spawn();
//     self.updateBoard();
//     self.checkGameOver();
//   }
// };

Game.prototype.makeBoard = function(stringBoard){
  if (stringBoard.length !== 16){
    alert("Starting boards must be 16 digits long, you silly hobbit!");
    return false
  } else {
    var board = [];
    for (var i = 0; i < stringBoard.length; i+=4) {
      var array = [];
      for (var j = i; j < i+4; j++) {
      array.push(parseInt(stringBoard[j]));
      }
    board.push(array);
    }
  }
  return board;
};

Game.prototype.logBoard = function(){
  this.board.forEach(function(ele){
    console.log(ele.join(" "));
  });
};

Game.prototype.moveLeft = function(){
  var self = this;
  var board = this.board;
  var old_board = this.board.toString(); //string

  for (var i = 0; i < board.length; i++) {
    var row = board[i];
    var zeroless = row.filter(function(i) { return i !== 0}) // creates row without 0s

    for (var j = 0; j < zeroless.length; j++) {
      if (zeroless[j] === zeroless[j+1]) {
        zeroless[j] = zeroless[j] * 2;
        zeroless.splice(j+1, 1);
      } else {
        zeroless[j] = zeroless[j]
      } // (no change)
    }
    var counter = row.length - zeroless.length; //add 0s until row appropriate length
    for (var k = 0; k < counter; k++) {
      zeroless.push(0);
      }
      self.board[i] = zeroless; //replace row
    }

    if (old_board === self.board.toString()) {
      self.respawnIsOn = false;
    } else {
      self.respawnIsOn = true;
    }
};

Game.prototype.moveRight = function(){
  var self = this;
  var board = this.board;
  var old_board = board.toString();
  for (var i = 0; i < board.length; i++) {
    var row = board[i];
    var zeroless = row.filter(function(i) { return i !== 0} ); // creates row without 0s
    for (var j = zeroless.length - 1; j >= 0; j--) {
     if (zeroless[j] === zeroless[(j-1)]) {
        zeroless[j] = zeroless[j] * 2;
        zeroless.splice(j-1, 1);
      } else {
        zeroless[j] = zeroless[j]
      } // (no change)
    }
    var counter = row.length - zeroless.length;
    for (var k = 0; k < counter; k++) {
      zeroless.unshift(0);
    }
    self.board[i] = zeroless;
  }
  old_board === self.board.toString() ? self.respawnIsOn = false : self.respawnIsOn = true;
};

Game.prototype.moveUp = function(){
  var self = this;
  var board = this.board;
  var old_board = board.toString();

  // var old_board = this.toBoardString(self.board)
  self.board = _.zip.apply(null, self.board);
  self.moveLeft();
  self.board = _.zip.apply(null, self.board);
  old_board === self.board.toString() ? self.respawnIsOn = false : self.respawnIsOn = true;
};

Game.prototype.moveDown = function(){

  var self = this;
  var board= this.board;
  var old_board = board.toString();
  self.board = _.zip.apply(null, self.board);
  self.moveRight();
  self.board = _.zip.apply(null, self.board);
  old_board === self.board.toString() ? self.respawnIsOn = false : self.respawnIsOn = true;
};

Game.prototype.spawn = function() {
  var self = this;
  if (this.respawnIsOn) {
    var board = self.board;
    var newCell = (Math.floor(Math.random()*9+1) > 2) ? 2 : 4;
    var zeroIndices = [];
    for (var i =0; i < board.length; i++) {
      for (var j=0; j < board[i].length; j++) {
        if (board[i][j] === 0) {
            zeroIndices.push([i,j]);
            console.log("zeroIndices =" + zeroIndices);
        }
      }
    }
    if (zeroIndices.length >= 1) {
      var pos = zeroIndices[Math.floor(Math.random()*zeroIndices.length)] // sampl
      self.board[pos[0]][pos[1]] = newCell;
    }
  }
};

Game.prototype.updateBoard = function() {
  var self = this;
  console.log('updating board');
  console.log(this.cells);
  var merged = [];
  merged = merged.concat.apply(merged, self.board);
  for (i in self.cells){
    if (merged[i] !== 0) {
      $(self.cells[i]).html(merged[i]);
      var num = (merged[i]).toString();
      $(self.cells[i]).removeAttr('class').addClass('square').addClass("S"+num);
    } else {
      $(self.cells[i]).html('&nbsp;')
      $(self.cells[i]).removeAttr('class').addClass('square').addClass("0");
    }
  }
};

// Game.prototype.moveMattered = function(moveDirection) {
//   var self = this;
//   var old_board = self.board;
//   self.moveDirection();
//   if (self.board.toString() === old_board.toString()){
//     self.board = old_board;
//     return false;
//   } else {
//     self.board = old_board;
//     return true;
//   }
// }



Game.prototype.checkGameOver = function() {
  var self = this;
  if (self.cantMoveLeft() && self.cantMoveRight() && self.cantMoveDown() && self.cantMoveUp()) {
    self.gameOver = true;
    alert("Sorry, GAMEOVER. PLEASE PLAY AGAIN!")
  }
}

Game.prototype.cantMoveLeft = function() {
  var self = this;
  var old_board = self.board;
  self.moveLeft();
  if (self.board.toString() === old_board.toString()){
    self.board = old_board;
    return true;
  } else {
    self.board = old_board;
    return false;
  }
}

Game.prototype.cantMoveRight = function() {
  var self = this;
  var old_board = self.board;
  self.moveRight();
  if (self.board.toString() === old_board.toString()){
    self.board = old_board;
    return true;
  } else {
    self.board = old_board;
    return false;
  }
}

Game.prototype.cantMoveUp = function() {
  var self = this;
  var old_board = self.board;
  self.moveUp();
  if (self.board.toString() === old_board.toString()){
    self.board = old_board;
    return true;
  } else {
    self.board = old_board;
    return false;
  }
}

Game.prototype.cantMoveDown = function() {
  var self = this;
  var old_board = self.board;
  self.moveDown();
  if (self.board.toString() === old_board.toString()){
    self.board = old_board;
    return true;
  } else {
    self.board = old_board;
    return false;
  }
};








