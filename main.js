canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

car_height = 194;
car_width = 110;
car_x = 0;
car_y = 10;
background_image = "park.jpg";
greencar_image = "car2.png";

function add(){
	background_imaTag = new Image();
	background_imaTag.onload = uploadBackground;
	background_imaTag.src = background_image;
    
	car_imgTag = new Image();
	car_imgTag.onload = uploadgreencar;
	car_imgTag.src = greencar_image;
}

function uploadBackground(){
	ctx.drawImage(background_imaTag, 0, 0, canvas.width, canvas.height);
}
function uploadgreencar(){
	ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
	keyPressed = e.keyCode;
	console.log(keyPressed);
	    if (keyPressed == '38'){
	    	up();
	    	console.log("up");
	    }
		if(keyPressed == '40'){
			down();
			console.log("down");
		}
		if(keyPressed == '37'){
			left();
			console.log("left");
		}
		if(keyPressed == '39'){
			right();
			console.log("right");
		}
}

function up(){
	if (car_y > 0) {
        car_y = car_y - 10;
        console.log("when up arrow is pressed , X = " + car_x + " Y = " + car_y);
        uploadBackground();
        uploadgreencar();
    }
}
function down(){
	if (car_y <= 390) {
        car_y = car_y + 10;
        console.log("when down arrow is pressed , X = " + car_x + " Y = " + car_y);
        uploadBackground();
        uploadgreencar();
    }
}
function left(){
	if (car_x > 0) {
		car_x = car_x - 10;
		console.log("when left arrow is pressed , X = " + car_x + " Y = " + car_y);
		uploadBackground();
		uploadgreencar();
	}
}
function right(){
	if (car_x <= 680) {
		car_x = car_x + 10;
		console.log("when right arrow is pressed , X = " + car_x + " Y = " + car_y);
		uploadBackground();
		uploadgreencar();
	}
}
