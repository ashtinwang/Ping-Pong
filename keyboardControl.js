/**
 *  Keydown event listener runs every time ANY key is pressed!
 *
 */
 var CONTROLS = {
  paddle : {
    up : false,
    down : false,
  }
};

document.addEventListener('arrows', function(event) {
  switch (event.keydown) {
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
