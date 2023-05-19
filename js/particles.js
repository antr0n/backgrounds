// Get the canvas element
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Set canvas dimensions to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an array to store particles
var particles = [];

// Function to create a particle
function createParticle(x, y) {
    var particle = {
        x: x,
        y: y,
        radius: Math.random() * 30 + 1, // Random radius between 1 and 6
        color: "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")",
        speedX: Math.random() * 3 - 1.5, // Random horizontal speed between -1.5 and 1.5
        speedY: Math.random() * 3 - 1.5 // Random vertical speed between -1.5 and 1.5
    };
    particles.push(particle);
}

// Function to update and draw particles
function updateParticles() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw each particle
    particles.forEach(function (particle) {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Draw the particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Check if particle is out of bounds, and remove it if it is
        if (particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
            particles.splice(particles.indexOf(particle), 1);
        }
    });

    // Create new particles at random positions
    for (var i = 0; i < 5; i++) {
        createParticle(Math.random() * canvas.width, Math.random() * canvas.height);
    }

    // Repeat the animation loop
    requestAnimationFrame(updateParticles);
}

// Create initial particles
for (var i = 0; i < 100; i++) {
    createParticle(Math.random() * canvas.width, Math.random() * canvas.height);
}

// Start the animation loop
updateParticles();