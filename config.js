var GAME = {
  canvas : {
    width : 600,
    height : 300
  },
  started : true,
  level : 1
};

var CONTROLS = {
 paddle : {
   up : false,
   down : false,
 }
};


var PADDLE = {
  x: 10, //x coord of paddle
  y: GAME.canvas.height / 2 - 50,  //y coord of paddle, changes
  v: 5, //speed of paddle when arrow key pressed
  width: 10, //width of paddle
  height: 100 //height of paddle
  //could use an image
};

var BALL = {
  radius: 40, //radius of ball
  y: 0, //y coord of ball, changes
  v: 0, //vertical speed of BALL
  g: 5, //gravitational acceleration
  x: PADDLE.x + PADDLE.width/2 //x coord of ball, should be in middle of paddle
}
