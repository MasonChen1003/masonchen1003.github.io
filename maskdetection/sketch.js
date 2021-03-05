// Train model using https://teachablemachine.withgoogle.com/
// By Mason 2021/3/4

  // Classifier Variable
let classifier;
  // Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/_nD0V-gFn/';
  // The video
let video;
  // To store the classification
let label = "";

  // Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(640, 520);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

  // no flip 
  //flippedVideo = ml5.flipImage(video);  
  
  // Start classifying
  classifyVideo();
}

function draw() {
  background(0);
  
  // Draw the video
  image(video, 0, 0);

  // Draw the label
  textSize(64);
  textAlign(CENTER);
 // text(label, width / 2, height - 20);

  let show_state = "";
  if (label == "Class 1") {
    show_state = "🚫";
    fill(255,0,0);  // color : red 
    text("請帶上口罩", width / 2, height-70);
  } else if (label == "Class 2") {
    show_state = "✔️";
    fill(0,255,0);  // color : green 
    text("通過", width / 2, height-70);
  } else if (label == "Class 3") {
    show_state = "";
    text("", width / 2, 20);
  }

  // Draw the show_state
    textSize(256);
    text(show_state, width / 2, height / 2);
}

// Get a prediction for the current video frame
function classifyVideo() {
 //  flippedVideo = ml5.flipImage(video)
    classifier.classify(video, gotResults);
 //   classifier.classify(flippedVideo, gotResult);
 //   flippedVideo.remove();
}

// When we get a result
function gotResults(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
   // The results are in an array ordered by confidence.
    // console.log(results[0]);
    label = results[0].label;
    // Classifiy again!
    classifyVideo();
 }

