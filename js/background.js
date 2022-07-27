function changeColor() {
  var newColor = makeColor();

  var box = (document.getElementById("body").style.backgroundColor = newColor);
}

function makeColor() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    var num = Math.floor(Math.random() * 256);
    arr.push(num);
  }

  var newRgb = "rgb(" + arr[0] + "," + arr[1] + "," + arr[2] + ")";
  return newRgb;
}
