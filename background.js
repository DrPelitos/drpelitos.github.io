const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var mouse = [0,0];
var particles = [];

document.addEventListener("mousemove", (e) => {
    mouse = [e.clientX, e.clientY]
})

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

class Particle {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.xVel = Math.random() * 1 -0.5;
        this.yVel = Math.random() * 1 -0.5;
    }

    update(){
        this.x += this.xVel;
        this.y += this.yVel;

        if (this.x < 0 || this.x > canvas.width) {this.xVel *= -1}
        if (this.y < 0 || this.y > canvas.height) {this.yVel *= -1}
    }

    draw(){
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0,Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    for (let i = 0; i < canvas.width/2; i++) {
        particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
    }
}

function update(){
    ctx.fillStyle = "#6e9eeb";
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    })

    requestAnimationFrame(update);
}
init()
update()