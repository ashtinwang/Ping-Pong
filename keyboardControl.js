/**
 *  Keydown event listener runs every time ANY key is pressed!
 *
 */

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "ArrowUp":
      CONTROLS.paddle.up = true;
      break;
    case "ArrowDown":
      CONTROLS.paddle.down = true;
      break;
    default:
      break;
  }
});


document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case "ArrowUp":
      CONTROLS.paddle.up = false;
      break;
    case "ArrowDown":
      CONTROLS.paddle.down = false;
      break;
    default:
      break;
  }
});
