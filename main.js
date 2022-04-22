nosex = 0;
nosey = 0;
function preload()
{
clownnose=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}
function setup()
{
Canvas=createCanvas(400,400);
Canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotposes);
}
function modelloaded()
{
console.log("posenet is initialized");
}
function gotposes(results)
{
if(results.length>0)
{
console.log(results);
nosex=results[0].pose.nose.x+20;
nosey=results[0].pose.nose.y+60;
}
}
function draw()
{
image(video,0,0,400,400);
image(clownnose,nosex,nosey,80,30);
}
function snapshot()
{
save("myfilterimage.png");
}
