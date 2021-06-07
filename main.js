canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;



rover_x=10;
rover_y=10;

var images=["image1.jpg","image2.jpg","image3.jpg","image4.jpg"];

random_num=Math.floor(Math.random()*4);
console.log(random_num);
rover_img="rover.png";
mars_img=images[random_num];

function add(){
    background_img=new Image();
    background_img.onload=uploadBackground;
    background_img.src=mars_img;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_img;
}

function uploadBackground(){
   ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    key_pressed=e.keyCode;
    console.log(key_pressed);
    if(key_pressed=="38"){
        up();
        console.log("Up");
    }
    if(key_pressed=="40"){
        down();
        console.log("Down");
    }
    if(key_pressed=="37"){
        left();
        console.log("Left");
    }
    if(key_pressed=="39"){
        right();
        console.log("Right");
    }
}

function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("When up arrow is pressed, x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}  
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("When down arrow is pressed, x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("When left arrow is pressed, x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("When right arrow is pressed, x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}
    




