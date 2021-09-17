var canvas= new fabric.canvas("mycanvas")

ball_x=0;
ball_y=0;
hole_x=800;
hole_y=400;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.image.fromURL("golf-h.png",function(img){
hole_object=img;
hole_object.scaleToWidth(50);
hole_object.scaleToheight(50);
hole_object.set({
	top:hole_y,
	top:hole_x
	});
	canvas.add(hole_object);

});
new_image();
}
function new_image()

{
	fabric.image.fromURL("ball.png",function(img){
		hole_object=img;
hole_object.scaleToWidth(50);
hole_object.scaleToheight(50);
hole_object.set({
	top:hole_y,
	top:hole_x
	});
	canvas.add(hole_object);
});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x == hole_y)&&(ball_y == hole_y)){
		canvas.remove(ball_object)
		document.getElementById("hd3"),innerHTML = "You have hit the GOAL!";
		document.getElementById("myCanvas").bordercolor = "red";
	}
	
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y >=0){
	ball_y = ball_y - block_image_height;
	console.log("block_image_height = "+block_image_height);
	console.log("key pressed x="+ball_x+",y = "+ball_y);
	canvas.remove(ball_object);
	new_image();
		}
	}

	function down()
	{
		if(ball_y >=450){
			ball_y = ball_y + block_image_height;
			console.log("block_image_height = "+block_image_height);
			console.log("key pressed x="+ball_x+",y = "+ball_y);
			canvas.remove(ball_object);
			new_image();
	}

	function left()
	{
		if(ball_x >=5){
			ball_x = ball_x + block_image_height;
			console.log("block_image_height = "+block_image_height);
			console.log("key pressed x="+ball_x+",y = "+ball_y);
			canvas.remove(ball_object);
			new_image();
}
		}
	function right()
	{
		if(ball_x <=1050)
		{
		
			ball_x = ball_x + block_image_height;
			console.log("block_image_height = "+block_image_height);
			console.log("key pressed x="+ball_x+",y = "+ball_y);
			canvas.remove(ball_object);
			new_image();
}
		}
	}

