let img = [];
let names = [
  "images/prof_red.jpg",
  "images/prof_orange.jpg",
  "images/prof_yellow.jpg",
  "images/prof_green.jpg",
  "images/prof_blue.jpg",
  "images/prof_purple.jpg",
  "images/prof_pink.jpg"
];

let backColor = 0;
let cHeight = window.innerHeight;
let cWidth = window.innerWidth;
let x, y;
let h = cHeight*.16, w = h; 
let xspeed, yspeed;
let colorImage;
let paused = false;
let uploadedImg = null; // Changed from timg to uploadedImg
let useUploaded = false; // Track whether to use uploaded image

window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          // Load the file as a p5.Image
          loadImage(URL.createObjectURL(this.files[0]), 
              (loadedImage) => {
                  uploadedImg = loadedImage;
                  useUploaded = true;
              },
           //   (err) => {
            //      console.error("Error loading image:", err);
            //  }
          );
      }
  });
});

function preload() {
  for (let i = 0; i < names.length; i++) {
    img[i] = loadImage(names[i]);
  }
}

function setup() {

  createCanvas(cWidth, cHeight-60);
  
  colorImage = floor(random(0, names.length));
  x = random(width - w);
  y = random(height - h);
  xspeed = 2;
  yspeed = 2;
}

function draw() {
  background(backColor); //10k makes it white needs implementation
  
  // Only update position if not paused
  if (!paused) {
    x += xspeed;
    y += yspeed;
    edgeHandling();
  }
  
  // Always draw the image at current position
  if (useUploaded && uploadedImg) {
    // Use the uploaded image
    image(uploadedImg, x, y, w, h);
  } else {
    // Use one of the preloaded images
    image(img[colorImage], x, y, w, h);
  }
}

// Rest of your functions remain the same...
function flipSwitch() {
  paused = !paused; // Toggle pause state
  console.log("Paused:", paused);
}

function edgeHandling() {
  if (x + w >= width) {
    xspeed = xspeed * -1;
    x = width - w;
  } else if (x <= 0) {
    xspeed = xspeed * -1;
    x = 0;
  }
  
  if (y + h >= height) {
    yspeed = yspeed * -1;
    y = height - h;
  } else if (y <= 0) {
    yspeed = yspeed * -1;
    y = 0;
  }
}

function keyPressed() {
  // Handle number keys for speed
  if (key >= '1' && key <= '9') {
    let speed = parseInt(key);
    
    // Preserve direction, just change magnitude
    xspeed = abs(xspeed) / xspeed * speed;
    yspeed = abs(yspeed) / yspeed * speed;
  }
  
  // Add spacebar to pause/unpause
  if (key === ' ') {
    flipSwitch();
    return false; // Prevent default behavior
  }

  if (key === 'c'){
    if(backColor === 0){
      backColor = 10000
    } 
    else{
      backColor = 0
    }
  }
}
