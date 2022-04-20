function preload()
{

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
}
}
function draw()
{
image(video,0,0,400,400);
}
function snapshot()
{
save("myfilterimage.png");
}
