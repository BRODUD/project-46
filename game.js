class Game{
    constructor(){
    
    }
    
    getState(){
        var gameStateRef= database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    
    update(state){
        database.ref('/').update({
            gameState:state 
        })
    }
    
     async start(){
        if(gameState===0){
    
    
    
    player=new Player();
    var playerCountRef = await database.ref('playerCount').once("value");
    if(playerCountRef.exists()){
      playerCount = playerCountRef.val();
      player.getCount();
    }
    
    
    form=new Form();
    form.display();
    
    }
    airplane1 = createSprite(200,400);
    airplane1.addImage(airplaneimg);
    airplane1.scale = 0.17;
    airplane2 = createSprite(1200,400);
    airplane2.addImage(airplaneimg);
    airplane2.scale = 0.17;
    airplane = [airplane1,airplane2];
    }
    
    play(){
        form.hide();
       // textSize(30);
       // text("Game Start",200,100);
        Player.getPlayerInfo();
        console.log(allPlayers);
    
        if(allPlayers!==undefined){
         
            //index of the array
                var index=0;
               
                //storing x and y position of the airplane
                var x=100;
               var y=400;
            for(var plr in allPlayers){ 
                    x=500-allPlayers[plr].xDistance;
                    y=400;
                index=index+1;
                airplane[index-1].x=x;  
                airplane[index-1].y=y;
    
                if(index===player.index){

                          if(keyIsDown(LEFT_ARROW) || keyIsDown("D") ){
                            player.xDistance+=12
                           
                            player.update()
                                
                            }
                            if(keyIsDown(RIGHT_ARROW || keyIsDown("D")) ){
                                player.xDistance-=12
                           
                                player.update()
                             
                              }
                             if (keyWentDown("space")) {
                                  laser = createSprite(x-5,y-50);
                                  laser.addImage(laserimg);
                                  laser.velocityY = -6;     
                                  laser.scale = 0.07
                              }
                              
                    /*textSize(15);
                    fill("red");
                    text(player.name, airplane[index-1].x, airplane[index-1].y+20)*/
                }
                if (frameCount%70===0){
                    
                    asteroids=createSprite(random(windowWidth-1000,windowWidth-200),-15);
                    asteroids.velocityY = 6;
                    var rand = Math.round(random(1,5));
                    switch(rand){
                        case 1: asteroids.addImage("asteroid1",asteroid1);
                        break;
                        case 2: asteroids.addImage("asteroid2", asteroid2);
                        break;
                        case 3: asteroids.addImage("asteroid3", asteroid3);
                        break;
                        case 4: asteroids.addImage("asteroid4", asteroid4);
                        break;
                        case 5: asteroids.addImage("asteroid5", asteroid5);
                        break;
                    }
                   asteroids.scale = 0.3
                    asteroidGroup.add(asteroids);
                }
              x=x+500;
              for(var i=0; i < asteroidGroup.length; i++){
                if(asteroidGroup.get(i).isTouching(laser)){
                    asteroidGroup.get(i).destroy();

               
                }
            }
            if(asteroidGroup.isTouching(earthimg)){
                earthLife-=1;
            }
            if (asteroidGroup.isTouching(airplaneimg)){
                yourLife-=1;
                teammateLife-=1;
            }
            }   
        }
    
        drawSprites();
    }
      
   
    
    }