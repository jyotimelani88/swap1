var a = prompt("Enter the first no : ");
var b = prompt("Enter the second no : ")
var b2

function setup() {
  createCanvas(400, 400);
  b2 = createButton("Swap the numbers");
  b2.mousePressed(swap)

}

function draw() {
  background(220);
}

function swap()
{
  [a,b] = [b,a];
  console.log("the value of a is: " +a);
  console.log("the value of b is: " +b); 
}