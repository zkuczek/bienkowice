var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

var rectangles = [];

// Create an array of rectangles, each with random position, size, color, and speed
for (var i = 0; i < 50; i++) {
  const boxWidth = 1;
  const boxHeight = 6;
  const randomNum = Math.random(50, 100) * 50;

  rectangles.push({
    x: Math.random() * window.innerWidth,
    y: -(boxHeight * randomNum),
    width: boxWidth * randomNum,
    height: boxHeight * randomNum,
    color: "#" + Math.floor(Math.random() * 16777215).toString(16),
    speed: 1 + Math.random() * 3
  });
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

  // Update and draw each rectangle
  rectangles.forEach(function (rect) {
    rect.y += rect.speed; // Update position
    if (rect.y > canvas.height) rect.y = -rect.height; // Reset position if it goes beyond the canvas

    // Draw the rectangle
    ctx.fillStyle = rect.color;
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
  });

  // Request the next frame
  requestAnimationFrame(animate);
}

animate(); // Start the animation
