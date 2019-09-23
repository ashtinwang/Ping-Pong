
function HandlePaddleAnimation() {
  //takes control of paddle moving
  //makes sure paddle doesnt go out of screen
  //maybe the paddle will accelerate when arrow pressed?
}

function HandleBallAnimation() {
  //when the paddle hits the ball, the ball gets a new positive speed
  BALL.v -= BALL.g; //gravity
  BALL.x += BALL.v; //change in position

  //checks if ball hits obstancle?
}

function HandleObstacleAnimation(){
}

function RenderNewObstacle(context) {
  //renders obstacles
}

function RenderBall(context) {
}

function RenderPaddle(context) {
}

function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {

    HandlePaddleAnimation();
    HandleBallAnimation();
    HandleObstacleAnimation();

    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 600, 300);

    // 3 - Draw new items
    RenderNewObstacle(context);
    RenderPaddle(context);
    RenderBall(context);

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
