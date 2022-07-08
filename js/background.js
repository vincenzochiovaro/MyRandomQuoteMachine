// in this function gonna make a var thats gonna call another function 
//  function "Makecolor"

function changeColor() {
var newColor = makeColor();
// I also  gonna make a  var "box" this basically gonna be use
// to catch the body of my page and access the style.background and assign to it the newcolor variable.
var box = document.getElementById('body').style.backgroundColor = newColor;
}



function makeColor() {
    // first created a var called arr which holds an empty array
    var arr = []; 
    for(var i = 0; i < 3; i++) {   // then i made this foor loop that gonna count till 3 that because in rgb colors we need 3 differents numbers to make our colors (red,green,blue)
        var num = Math.floor(Math.random() *256); // this var num holds a function inbuilt js called mathfloor which remove any decimal points, inside that i call mathrandom and give me any number between 0 and 256 
        arr.push(num); // and then push whatever number comes out into the array 
    }
    // so what I ve done here is start making a string  called rgb and put the value of cell 0+ 1+2
    // and then return the newrgb and gonna be returned into  var newColor
    var newRgb = 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ')';
    return newRgb;
}