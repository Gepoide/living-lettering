let shapes = [];
let swt = 1;
let font1 = "FormaDJRBanner-Regular.otf";
let font2 = "SuisseIntl-Book.otf";
let font3 = "SuisseIntl-BookItalic.otf";
let m, k;
let count;
let icon;

function setup() {
  createCanvas(windowWidth, windowHeight);
  formaRegular = loadFont(font1);
  suisseBook = loadFont(font2);
  suisseBookItalic = loadFont(font3);
}
function mousePressed() {
  if (width > 660) {
    if (
      mouseX > (width / 3) * 2 - 130 / 2 &&
      mouseX < (width / 3) * 2 + 130 / 2 &&
      mouseY < height - 10 &&
      mouseY > height - 25
    ) {
      swt = (swt + 1) % 3;
    }
  } else if (width <= 660) {
    if (
      mouseX > width - 140 &&
      mouseX < width &&
      mouseY < height - 10 &&
      mouseY > height - 25
    ) {
      swt = (swt + 1) % 3;
    }
  }
}

function mouseDragged() {
  let b = new Shapes(mouseX, mouseY, 50, swt);
  shapes.push(b);
}

function draw() {
  background(220);
  textFont(suisseBook);
  textSize(34);
  textLeading(32);
  textAlign(LEFT,TOP);
  text("Meta-experience simulation of a conscious Singularity",10,35,width-20,300)
  

  if (shapes.length < 10) {
    count = "00" + shapes.length;
  } else if (shapes.length < 100) {
    count = "0" + shapes.length;
  } else {
    count = shapes.length;
  }

  for (let i = 0; i < shapes.length; i += 2) {
    shapes[i].display(255, BLEND, 0);
    shapes[i].pulse();
  }
  push();

  blendMode(EXCLUSION);
  fill(255);
  noStroke();
  textSize(20);
  
  if (width > 660) {
    textAlign(LEFT, CENTER);
    textFont(suisseBookItalic);
    text("Living Lettering", 10, height - 30);
textFont(suisseBook);
    textAlign(CENTER, CENTER);
    text(count, width / 3, height - 30);
    text("Change shape", (width / 3) * 2, height - 30);
    textAlign(RIGHT, CENTER);
    textFont(suisseBookItalic);
    text("01/01", width - 18, height - 30);
    icon = new Shapes((width / 3) * 2 + 80, height - 27, 15, swt);
    icon.display(255, EXCLUSION, 255);
  } else if (width <= 660) {
    textAlign(LEFT, CENTER);
    textFont(suisseBookItalic);
    text("Living Lettering", 10, 20);
    textFont(suisseBook);
    text(count, 10, height - 30);
    textAlign(RIGHT, CENTER);
    text("Change shape", width - 18, height - 30);
    text("01/01", width - 18, 20);
    textFont(suisseBookItalic);
    icon = new Shapes(width - 164, height - 27, 15, swt);
    icon.display(255, EXCLUSION, 255);
  }
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
