let img = [];
let names = ["images/prof_red.jpg",
            "images/prof_orange.jpg",
            "images/prof_yellow.jpg",
            "images/prof_green.jpg",
            "images/prof_blue.jpg",
            "images/prof_purple.jpg",
            "images/prof_pink.jpg",];

let x; let y; 
let w = 75; let h = 75;
let xspeed; let yspeed;

let colorImage;


function preload() {
  for (let i = 0; i < names.length; i++) {
    img[i] = loadImage(names[i]);
  }
}

function setup() {
  createCanvas(800, 600);
  colorImage = floor(random(0, names.length));
  
  x = random(width);
  y = random(height);
  xspeed = 2;
  yspeed = 2;
  keyPressed();
  //getRandomColor();
}

function draw() {
  background(0);
  image(img[colorImage], x, y, 75, 75);
  x = x + xspeed;
  y = y + yspeed;
  
  //keyPressed();
  edgeHandling();
  
}

// Function to generate a random RGB color
function getRandomColor() {
    // Generate random numbers between 0 and 255 for Red, Green, and Blue
    const r = floor(random() * 256);
    const g = floor(random() * 256);
    const b = floor(random() * 256);

    // Return the color in the rgb() format
    return `rgb(${r}, ${g}, ${b})`;
}

function edgeHandling() {
  if (x + w >= width) {
    xspeed = xspeed * -1;
    x = width - w;
    colorImage = floor(random(0, names.length))
  } else if (x <= 0) {
     xspeed = xspeed * -1;
    x = 0; 
  }
  
  if (y + h >= height) {
    yspeed = yspeed * -1;
    y = height - h;
    colorImage = floor(random(0, names.length))
  } else if (y <= 0) {
    yspeed = yspeed * -1;
    y = 0;
  }
}

function keyPressed() {
  if (key == 1) {
    if (xspeed < 0) {
      xspeed = -1;
    } else {
      xspeed = 1;
    }
    if (yspeed < 0) {
      yspeed = -1;
    } else {
      yspeed = 1;
    }
  } else if (key == 2) {
    if (xspeed < 0) {
      xspeed = -2;
    } else {
      xspeed = 2;
    }
    if (yspeed < 0) {
      yspeed = -2;
    } else {
      yspeed = 2;
    }
  } else if (key == 3) {
    if (xspeed < 0) {
      xspeed = -3;
    } else {
      xspeed = 3;
    }
    if (yspeed < 0) {
      yspeed = -3;
    } else {
      yspeed = 3;
    }
  } else if (key == 4) {
    if (xspeed < 0) {
      xspeed = -4;
    } else {
      xspeed = 4;
    }
    if (yspeed < 0) {
      yspeed = -4;
    } else {
      yspeed = 4;
    }
  } else if (key == 5) {
    if (xspeed < 0) {
      xspeed = -5;
    } else {
      xspeed = 5;
    }
    if (yspeed < 0) {
      yspeed = -5;
    } else {
      yspeed = 5;
    }
  } else if (key == 6) {
    if (xspeed < 0) {
      xspeed = -6;
    } else {
      xspeed = 6;
    }
    if (yspeed < 0) {
      yspeed = -6;
    } else {
      yspeed = 6;
    }
  } else if (key == 7) {
    if (xspeed < 0) {
      xspeed = -7;
    } else {
      xspeed = 7;
    }
    if (yspeed < 0) {
      yspeed = -7;
    } else {
      yspeed = 7;
    }
  } else if (key == 8) {
    if (xspeed < 0) {
      xspeed = -8;
    } else {
      xspeed = 8;
    }
    if (yspeed < 0) {
      yspeed = -8;
    } else {
      yspeed = 8;
    }
  } else if (key == 9) {
    if (xspeed < 0) {
      xspeed = -9;
    } else {
      xspeed = 9;
    }
    if (yspeed < 0) {
      yspeed = -9;let img = [];
let names = [
  "images/prof_red.jpg",
  "images/prof_orange.jpg",
  "images/prof_yellow.jpg",
  "images/prof_green.jpg",
  "images/prof_blue.jpg",
  "images/prof_purple.jpg",
  "images/prof_pink.jpg"
];

let x, y;
let w = 75, h = 75;
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
              (err) => {
                  console.error("Error loading image:", err);
              }
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
  let cHeight = window.innerHeight;  //fits canvas to screen
  let cWidth = window.innerWidth;
  createCanvas(cWidth, cHeight-60);
  
  colorImage = floor(random(0, names.length));
  x = random(width - w);
  y = random(height - h);
  xspeed = 2;
  yspeed = 2;
}

function draw() {
  background(0);
  
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
}
    } else {
      yspeed = 9;
    }
  } else {
    if (xspeed < 0) {
      xspeed = -2;
    } else {
      xspeed = 2;
    }
    if (yspeed < 0) {
      yspeed = -2;
    } else {
      yspeed = 2;
    }
  }
}

