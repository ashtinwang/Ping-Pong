var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext('2d');

var ball = new Path2D();

function RenderNewObstacle(context) {
  //renders obstacles
}
function HandleObstacleAnimation(){
  RenderNewObstacle(context);
}

function RenderBall(context) {

    ball.moveTo(BALL.x, BALL.y);
    ball.arc(BALL.x, BALL.y, BALL.radius, 0, 2 * Math.PI);
    //context.fillStyle = "blue";
    //context.fill(ball);
    context.stroke(ball);
}
function HandleBallAnimation() {
  //when the paddle hits the ball, the ball gets a new positive speed
  RenderBall(context);
  if(BALL.x < 100){
    BALL.x += 1; //change in position
  }
}

function RenderPaddle(context) {
  context.fillStyle = 'black';
  context.fillRect(PADDLE.x, PADDLE.y, PADDLE.width, PADDLE.height);
}
function HandlePaddleAnimation() {
  RenderPaddle(context);
  var gap = 5;

  if(CONTROLS.paddle.up == true && PADDLE.y > gap){
    PADDLE.y -= PADDLE.v;
  }
  else if (CONTROLS.paddle.down == true && PADDLE.y < GAME.canvas.height - gap - PADDLE.height){
    PADDLE.y += PADDLE.v;
  }
}

function runGame() {
  if (GAME.started) {

  //  HandleObstacleAnimation();
    HandlePaddleAnimation();
    HandleBallAnimation();

    context.clearRect(0, 0, 600, 300);

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}
window.requestAnimationFrame(runGame);
