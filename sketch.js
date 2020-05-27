const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var ground, paper_ball, bin, launcher;

function setup() {
	createCanvas(1600, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800, height, 1600, 20);
	paper_ball = new PaperBall(100, 200, 30);

	bin = new Bin(1200, 380);

	launcher = new Launcher(paper_ball.body, { x: 400, y: 75 });
}


function draw() {
	rectMode(CENTER);
	background("#DCAE96");

	ground.display();
	paper_ball.display();
	bin.display();
	launcher.display();


	Engine.update(engine);

	drawSprites();

}
/* function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(paper_ball.body, paper_ball.body.position, { x: 220, y: -220 });
	}
} */

function mouseDragged() {
	Matter.Body.setPosition(paper_ball.body, { x: mouseX, y: mouseY });
}
function mouseReleased() {
	launcher.fly();
}

