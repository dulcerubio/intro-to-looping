function setup() {
  createCanvas(500,400);
}
var color1 =  fill(random(0,255))
var color2 = fill(random(0,255))
function draw() {
  var x = 5;

  background(0);
  fill(250);
  
 // for ( var count = 0; count < 30; count +=1) {
//  ellipse (x + ( 50 *count), height/2, 40,40)
//   ellipse (x + ( 50 *count), height/2 + 50, 40,40)
//}
for (var row = 0; row < 10; row += 1){
    if (row % 2 === 0) {
    var firstColor = 'black'
    var secondColor = 'white'
} else {
     var firstColor = 'white'
    var secondColor = 'black'
}
for ( var count = 0; count < 10; count += 1 ) {
    if (count % 2 === 0) {
    fill(firstColor)
} else {
     fill(secondColor)
}
   rect(x + (50 * count), 50 * row, 50, 50)
   
  
     }
}
}


  

  