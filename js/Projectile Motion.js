var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 15;
canvas.height = window.innerHeight / 1.1;

ctx.fillStyle='black';
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.font = '20px Roboto Condensed'
ctx.save();

ctx.translate(0, canvas.height);
ctx.scale(1, -1);

var calculate = function() {		
	var velocity = parseFloat(document.getElementById('Velocity').value);
	var angle = parseFloat(document.getElementById('Angle').value);
	var initialHeight = parseFloat(document.getElementById('Height').value) || 0;
	var vertPlane = parseFloat(document.getElementById('Vertical').value);
	var landPlane =  parseFloat(document.getElementById('Final-Height').value) || 0;

	if (angle > 90 || angle < 0 || angle === NaN) {
		ctx.restore();
		ctx.save();
		ctx.fillStyle = 'red';
		ctx.fillText("Please pick an angle between 0 and 90 degrees", canvas.width / 1.5, canvas.height / 2);
		ctx.translate(0, canvas.height);
		ctx.scale(1, -1);
		
	}
}