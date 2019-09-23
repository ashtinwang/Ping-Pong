/**
 *  Keydown event listener runs every time ANY key is pressed!
 *
 */

document.addEventListener('arrows', function(event) {
  switch (event.keydown) {
    case "ArrowUp":
      PADDLE.y += PADDLE.v; //arrow keys move paddle up and down
      break;
    case "ArrowDown":
      PADDLE.y -= PADDLE.v;
      break;
    default:
      break;
  }
});
