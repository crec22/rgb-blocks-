//import stylesheets
import './style.css';

let canvas = document.getElementById("canvas");
let ctx = canvas .getContext("2d");

canvas.width = 400;
canvas.height = 400;

ctx.fillStyle = "blue";	
ctx.fillRect(175 , 280, 60, 40)
ctx.strokeStyle = "blue";
ctx.strokeRect(175, 280, 60, 40);

ctx.fillStyle = "green";	
ctx.fillRect(175 , 320, 60, 40)
ctx.strokeStyle = "blue";
ctx.strokeRect(175, 320, 60, 40);

ctx.fillStyle = "red";	
ctx.fillRect(175 , 360, 60, 40)
ctx.strokeStyle = "blue";
ctx.strokeRect(175, 360, 60, 40);