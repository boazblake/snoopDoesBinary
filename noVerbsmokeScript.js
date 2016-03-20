var particles = [];
 
var particleCount = 1;

var maxVelocity = 1;

var targetFPS = 60;

var canvasWidth = 400;
var canvasHeight = 400;

var imageObj = new Image();

imageObj.onload = function() {
    particles.forEach(function(particle) {
            particle.setImage(imageObj);
    });
};

imageObj.src = "http://www.blog.jonnycornwell.com/wp-content/uploads/2012/07/Smoke10.png";

function Particle(context) {

    this.x = 0;
    this.y = 0;

    this.xVelocity = 0;
    this.yVelocity = 0;

    this.radius = 1;

    this.context = context;

    this.draw = function() {
        
        if(this.image){
            this.context.drawImage(this.image, this.x-128, this.y-128);         
            return;
        }
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        this.context.fillStyle = "rgba(0, 255, 255, 1)";
        this.context.fill();
        this.context.closePath();
    };

    this.update = function() {
        this.x += this.xVelocity;
        this.y += this.yVelocity;

        if (this.x >= canvasWidth) {
            this.xVelocity = -this.xVelocity;
            this.x = canvasWidth;
        }
        else if (this.x <= 0) {
            this.xVelocity = -this.xVelocity;
            this.x = 0;
        }

        if (this.y >= canvasHeight) {
            this.yVelocity = -this.yVelocity;
            this.y = canvasHeight;
        }
        
        else if (this.y <= 0) {
            this.yVelocity = -this.yVelocity;
            this.y = 0;
        }
    };

    this.setPosition = function(x, y) {
        this.x = x;
        this.y = y;
    };

    this.setVelocity = function(x, y) {
        this.xVelocity = x;
        this.yVelocity = y;
    };
    
    this.setImage = function(image){
        this.image = image;
    }
}

function generateRandom(min, max){
    return Math.random() * (max - min) + min;
}

var context;

function init() {
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {

        context = canvas.getContext('2d');

        for(var i=0; i < particleCount; ++i){
            var particle = new Particle(context);
            
            particle.setPosition(generateRandom(0, canvasWidth), generateRandom(0, canvasHeight));
            
            particle.setVelocity(generateRandom(-maxVelocity, maxVelocity), generateRandom(-maxVelocity, maxVelocity));
            particles.push(particle);            
        }
    }
    else {
        alert("ya gats-izzle to gats-izzle a better browser-izzle homie");
    }
}

function draw() {
    context.fillStyle = "rgba(0, 0, 0, 0.5)";
    context.fillRect(0, 0, 400, 400);

    particles.forEach(function(particle) {
        particle.draw();
    });
}

function update() {
    particles.forEach(function(particle) {
        particle.update();
    });
}

init();

if (context) {
    setInterval(function() {
        update();

        draw();
    }, 1000 / targetFPS);
}