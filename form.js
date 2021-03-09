class Form{
    constructor(){
        this.title=createElement('h1');
        this.input=createInput("Name");
        this.button=createButton('Play');
        this.greeting=createElement('h2');
        this.info=createElement('h3');
        this.button2=createButton('Ok');
        this.info2=createElement('h3');
        this.reset=createButton('Reset');
        
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.info.hide();

        
    }

    display(){
        // creating the form elements
        this.title.html("SAVE THE EARTH");
        this.title.position(windowWidth-800,windowHeight-600);
        this.input.position(windowWidth-800,windowHeight-450);
        this.button.position(windowWidth-650,windowHeight-400); 
        this.reset.position(10,10);
        this.button.mousePressed(()=>{
// hiding the input and button and switching to greeting
            this.input.hide();
           this.button.hide();

           

            //Increasing the player count by 1
            playerCount++;
           player.updateCount(playerCount);
           player.index = playerCount;
            // making the greeting
            player.name=this.input.value();
            player.update();
          
            this.greeting.html("Hello "+player.name);
            this.info.html("The aliens are attacking your planet by throwing asteroids and their troops. You and your friend are this planet’s only hope! use the arrow keys to destroy all asteroids and alien spaceships to save your planet! But look out for med kits and other supplies to make your spaceship better. Beat the final boss level (alien mothership) to win the game and become a general of a military base. Good luck.....");
            this.greeting.position(windowWidth-800,windowHeight-500);
            this.info.position(windowWidth-1300,windowHeight-300);
            this.button2.position(windowWidth-750,windowHeight-100);
            this.button2.mousePressed(()=>{
                this.info.hide();
                this.greeting.hide();
                this.button2.hide();
                this.title.hide();
              
                gameState=1;
               
this.info2.html("Waiting for team mate to join");
this.info2.position(windowWidth-830,windowHeight-400);
                
                
            })

        })

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            
        })

    
        }
     hideInfo(){
         this.info2.hide();
     }
}