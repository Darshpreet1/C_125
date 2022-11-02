noseX = 0;
noseY = 0;

function preload(){
    img = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}

function setup(){
    Canvas = createCanvas(300,300);
    Canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide()

    poseNet = ml5.poseNet(video,modelLoded);
    poseNet.on("pose",Gotposes);
}

function draw(){
  image(video,0,0,300,300);
  image(img,noseX,noseY,20,20)
}

function take_snapshot(){
    save("Myfilterimg.jpg");
}

function modelLoded(){
    console.log("model Loded");
}

function Gotposes(resultes)
{
    if(resultes.length >0 ){
        console.log( resultes );
        noseX = resultes[0].pose.nose.x;
        noseY = resultes[0].pose.nose.y;
        console.log( "nose x = "+ noseX);
        console.log( "nose y = "+ noseY);
    }
}