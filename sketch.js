var kills = 0
var gameState=play
var play=1
var end=0
var bg,bgImage,ss,ssImage,e1,e2,e3,e1Imgage,e2Image,e3Image,b1,b1Image


function preload() {
bgImage=loadImage("bg.jpg")
ssImage=loadImage("ss.png")
e1Image=loadImage("e1.png")
e2Image=loadImage("e2.png")
e3Image=loadImage("e3.png")
b1Image=loadImage("b1.png")
}

function setup() {
  createCanvas(1900,1310);
  
  ss=createSprite(980, 1100, 50, 50);
  ss.addImage(ssImage)
  ss.scale=2
  b1Group=new Group()
  e1Group=new Group()
  e2Group=new Group()
  e3Group=new Group()
  }
  
  function draw() {
    background(bgImage); 
  
    if (keyDown("space")) {
      shootb1();
    } 
  
  
    
    if (gameState===play) {
      ss.x=mouseX 
      edges=createEdgeSprites()
      ss.collide(edges)
      ss.x = World.mouseX;
  
      
     
     e1();
      e2();
    e3()
   
      if (b1Group.isTouching(e1Group)) {
        b1Group.destroy();
        e1Group.destroy();
       kills=kills+1
      }
      if (b1Group.isTouching(e2Group)) {
        b1Group.destroy();
        e2Group.destroy();
       kills=kills+1
      }
      if (b1Group.isTouching(e3Group)) {
        b1Group.destroy();
        e3Group.destroy();
       kills=kills+1
      }
       if (e1Group.isTouching(ss)||e2Group.isTouching(ss)||e3Group.isTouching(ss)) {
       gameState=end
      }
  
    }
      if (gameState===end){
       // ss.x=width/2;
   // ss.y=height/2;
       ss.scale=0.8;
         
        b1Group.destroyEach();
       e1Group.destroyEach();
       e2Group.destroyEach();
       e3Group.destroyEach();
        
         
      b1Group.setVelocityYEach(0);
       e1Group.setVelocityYEach(0);
      e2Group.setVelocityYEach(0);
      e3Group.setVelocityYEach(0);
       
        
       ss.visible=false
      }
       
   
      
       drawSprites();
       textSize(50);
       fill(255);
       text("kills: "+ kills,50,50);
      
    }
  
    function shootb1(){
      b1= createSprite(987,1060)
     // b1.y= ss.y+70
      b1.addImage(b1Image)
      b1.scale=1
      b1.velocityY= -50
      b1Group.add(b1)
    }
       
    function e1() {
       if (frameCount % 250 === 0) {
         e1 = createSprite(600,100,40,10);
        e1.y = Math.round(random(80,130));
        e1.addImage(e1Image);
       e1.scale = 0.5;
        e1.velocityY=3;
       e1.lifetime = 134;
       e1Group.add(e1);
        }
    }
    function e2() {
      if (frameCount % 320 === 0) {
        e2 = createSprite(600,100,40,10);
       e2.y = Math.round(random(80,130));
       e2.addImage(e2Image);
      e2.scale = 0.5;
       e2.velocityY=3;
      e2.lifetime = 134;
      e2Group.add(e2);
       }
   }
    
   function e3() {
    if (frameCount % 400 === 0) {
      e3 = createSprite(600,100,40,10);
     e3.y = Math.round(random(80,130));
     e3.addImage(e3Image);
    e3.scale = 0.5;
     e3.velocityY=3;
    e3.lifetime = 134;
    e3Group.add(e3);
     }
}
  
    
  
  
  
  