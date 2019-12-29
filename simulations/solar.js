// Copyright Aaron Seilis 2019

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Functions
function drawCelestialBody(context, x, y, radius, color) {
	context.fillStyle = color;
	context.beginPath();
	context.arc(x, y, radius, 0, Math.PI*2, false);
	context.fill();
}

function drawPlanet(context, orbitRadius, planetRadius, velocity, color, time, time_offset) {
	var x = Math.cos(time*2*Math.PI/1000*velocity)*orbitRadius;
	var y = Math.sin(time*2*Math.PI/1000*velocity)*orbitRadius;

	context.strokeStyle = 'gray';
	context.beginPath();
	context.arc(0,0, orbitRadius, 0, Math.PI*2, false);
	context.stroke();

	drawCelestialBody(context,x,y,planetRadius,color);
}

function erase() {
	ctx.clearRect(-canvas.width/2,-canvas.height/2,canvas.width,canvas.height);
}

function animate(time) {
	maxRadius = canvas.width/2*3;

	Er = 1/0.3829*2;
	AU = maxRadius/30.44125206;
	Ev = -0.5*0.5;

	erase();

	// Draw Sun
	drawCelestialBody(ctx,0,0,10,'yellow');

	// Draw Mercury
	drawPlanet(ctx,0.466697*AU,Er*0.3829,Ev/0.240846,'gray',time,0);

	// Draw Venus
	drawPlanet(ctx,0.72823128*AU,0.9499*Er,Ev/0.615197,'yellow',time,0);

	// Draw Earth
	drawPlanet(ctx,AU,Er,Ev,'blue',time,0);

	// Draw Mars
	drawPlanet(ctx,1.665861*AU,0.533*Er,Ev/1.8808,'red',time,0);

	// Draw Asteroid Belt
	// DO SOMETHING COOL TO GENERATE ASTEROIDS

	// Draw Jupiter
	drawPlanet(ctx,5.458104*AU,11.209*Er,Ev/11.8618,'red',time,0);

	// Draw Saturn
	drawPlanet(ctx,10.11595804*AU,9.4492*Er,Ev/29.4571,'yellow',time,0);

	// Draw Uranus
	drawPlanet(ctx,20.08330526*AU,4.007*Er,Ev/84.323326,'blue',time,0);

	// Draw Neptune
	drawPlanet(ctx,30.44125206*AU,3.883*Er,Ev/164.79,'blue',time,0);

	// Draw OTHER Solar bodies!!

	// Draw Ceres
	//drawPlanet(ctx,2.9858*AU,0.0765*Er,Ev/4.6,'blue',time,0);

	window.requestAnimationFrame(animate);
}


// Initialization
ctx.translate(canvas.width/2,canvas.height/2);


// Start Animation
window.requestAnimationFrame(animate);
