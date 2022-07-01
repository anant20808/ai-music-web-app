rightwristx="";
rightwristy="";
leftwristx="";
leftwristy="";
leftWristscore=0;
Song_status="";
function preload(){
song1=loadSound("music.mp3");
song2=loadSound("music2.mp3");

}
song1="";
song2="";
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();

    Posenet=ml5.poseNet(video,Model_loaded);
    Posenet.on('pose',gotposes);
}
function draw(){
  image(video,0,0,600,500);
  
 Song_status = song1.isPlaying()
  
 if(leftWristscore > 0.2){
  circle(leftwristx,leftwristy,20)
  stroke("#FF0000")
  song2.stop()

 }
  if(Song_status = false){
    song1.play()
    document.getElementById("songname").innerHTML="Harry potter theme"
  }

}
function Model_loaded(){
  console.log("Model is loaded")
}
function gotposes(result,error){
  if(result.length>0){
    console.log(result);
    rightwristx=result[0].pose.rightWrist.x;
    rightwristy=result[0].pose.rightWrist.y;
    leftwristx=result[0].pose.leftWrist.x;
    leftwristy=result[0].pose.leftWrist.y;
    console.log(rightwristx,rightwristy,leftwristx,leftwristy);
    leftWristscore=result[0].pose.keypoints[9].score;
  }
  else{console.log(error)}
}

