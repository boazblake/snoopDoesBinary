// create an array to store the particles.
var particles = []

// How many particles to render:
var particleCount = 1

// verlocity of the particle:
var maxVelocity = 1

//frames per second to render
var targetFPS = 60

// set the dimensions of the canvas
var canvasWidth = 100
var canvasHeight = 100

//create an instance of the image object from the image constructor:
var imageObj = new Image()

//once the image has been downloaded - paint the image on the particles.
imageObj.onload() = function(){
	// The 'forEach()' method executes a provided function once per array element.
	particles.forEach(function(particle) {
		// the particvle image will be stored as a property/attribute on the particle
		particle.setImage(imageObj)
	})
}

// Once the callback has been arranged, set the source for the image as an attribute on the :
imageObj.src = 'http://www.blog.jonnycornwell.com/wp-content/uploads/2012/07/Smoke10.png'


// Particle constructor - takes in the context variable that I define below
// define the coordinates, positions.  velocty, trajectory arc, radius, draw and update methods for each particle as paramaters/attributes on each instance
//  in the update methodl; I create conditions that keep the particle on the canvas (using the velocity to determine the relationship to the sides of the canvas, first inverting the velocity and then setting the position to within the boundaries of the canvas)
function Particle(context){
	this.x = 0
	this.y = 0
	this.xVeloctiy = 0
	this.yVelocity = 0
	this.radius = 1
	this.context  = context
	this.draw = function() {
		if (this.image) {
			this.context.drawImage(this.image, this.x-100, this.y-100)
			return
		}

		this.context.beginPath()
		this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
		this.context.fillstyle = "rgba(200, 200, 200, 1)"
		this.context.fill()
		this.context.closePath()
	}

	this.update = function() {
		this.x += this.xVeloctiy
		this.y += this.yVelocity
	
		if (this.x >= canvasWidth) {
			this.xVeloctiy = -this.xVeloctiy
			this.x = canvasWidth
		}
		else if (this.x <= 0) {
			this.xVeloctiy = -this.xVeloctiy
			this.x = 0
		}

		if (this.yVelocity >= canvasHeight) {
			this.yVelocity = -this.yVelocity
			this.y = canvasWidth
		}
		else if (this.yVelocity <= 0) {
			this.yVelocity = -this.yVelocity
			this.yVelocity = 0
		}
	}

	this.setPosition(x, y) {
		this.x = x
		this.y = y
	}
	
	this.setVelocity(x, y) {
		this.xVeloctiy = x
		this.yVelocity = y
	}

	this.setimage = function(image) {
		this.image = image
	}
}	

// generate a random number to set the limits on the starting positions of the particle instances. The functions takes in a min and max value
function generateRandom(min, max){
	return Math.random() * (max-min) + min
}


// define the contaxt template variable:
var context = context

// define the initialize function. this function selects the canvas and then sets the random starting positions paramaters/attributes on each particle element.
// then push the new instances onto the particles array
function init(){
	var canvas = document.querySelector('#canvas')
	if (canvas.getContext) {
		context = canvas.getContext('2d')
		
		for (var i = 0; i < particleCount; i++) {
			var particle = new Particle(context)
			particle.setPosition(generateRandom(0, canvasWidth), generateRandom(0, canvasHeight))
			particle.setVelocity(generateRandom(-maxVelocity, maxVelocity), generateRandom(-maxVelocity, maxVelocity))
			particles.push(particle)
		}
	}
	else {
		alert('ya gats-izzle to gats-izzle a better browser-izzle homie')
	}
}

// defining he draw and update methods for each particle. Each of these methods has a callback to initiate themselves with a particle as input :
function draw(){
	context.fillstyle = 'rgba(0, 0, 0, 0.5)'
	context.fillRect(0, 0, 100, 100)

	particles.forEach(function(particle){
		particle.draw()
	})
}

function update() {
	particles.forEach(function(particle){
		particle.update()
	})
}

// begin the majik!!
init()

// create a set-time interval to refresh the page at the rate of the chosen refresh
if (context) {
	setInterval(function(){
		update()
		draw()
	}, 1000/targetFPS)
}


