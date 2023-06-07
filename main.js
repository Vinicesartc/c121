function preload() {

}

function setup() {
  canvas = createCanvas(700, 640);
  canvas.position(600, 400);
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet", modelLoaded)
}

function draw() {
  image(video, 0, 0, 700, 640);
  classifier.classify(video, gotResult);
}

function modelLoaded() {
  console.log("Modelo Carregado!")
}

resultado = "";

function gotResult(error, results) {
  if(error){
    console.error(error)
  }
  else{
    if((results[0].confidence>0.5)&&(resultado!=results[0].label)){
    console.log(results)
    resultado = results[0].label;
    document.getElementById("objeto").innerHTML = results[0].label;
    document.getElementById("precisão").innerHTML = Math.floor(results[0].confidence*100) + " %"
    }
  }

}



