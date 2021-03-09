class Player{
    constructor(){
this.index = null;
this.name = null;
this.xDistance=0;
    }
   getCount(){
       var plyrcountrf = database.ref('playerCount');
       plyrcountrf.on("value",function(data){
           playerCount = data.val();
       });
       

   }
   updateCount(count){
       database.ref('/').update({
           playerCount:count
       })
   }
   update(){
       
    var playerIndex="players/player"+this.index;
    database.ref(playerIndex).set({
        name:this.name,
        xDistance:this.xDistance
 
    })
 
   }

   static getPlayerInfo(){
       var playerInfoRef=database.ref('players');
       playerInfoRef.on("value",(data)=>{
           allPlayers = data.val();
       })
   }


}   
