class Game{
    constructor(){
    
    }
    getState(){
        var gameStateref=database.ref("gamestate");
        gameStateref.on("value",function(data){
            gamestate=data.val();
        })

    }
    update(state){
        database.ref("/").update({gamestate:state})
    }
    start(){
        if(gameState==0){
            player=new Player();
            player.getCount();
            form= new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        textSize(30)
        text("WHAT IS THE NAME OF HARRY'S OWL IN HARRY POTTER",120,100);
        Player.getPlayerInfo();
        if(allplayer!==undefined){
            var position=130;
            for(var plr in allplayer){
               if(plr==="A"+player.index){
                   fill("red")
               } else{
                   fill("black")
               }
            
                text("a:hedwig",100,100)
                text("b:scabus",100,120)
                text("c:fang",100,120)
                text("d:croocshansh",100,120)
                
            }
            if(keyIsDown(UP_ARROW)&&player.index!==null){
                player.distance+=50
                player.update();
                
            }
        }
    }
}