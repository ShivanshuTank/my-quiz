class Form{
    constructor(){
         this.Input=createInput("Type Your Name Here")
         this.Button=createButton("PLAY")
         this.greeting=createElement("h3")
    }
    display(){
        var Title=createElement("h2")
        Title.html("Welcome TO QUIZ")
        Title.position(130,0)
        
        this.Input.position(130,160)
        
        this.Button.position(250,200);
        
        this.Button.mousePressed(()=>{
            this.Input.hide();
            this.Button.hide();
            player.name=this.Input.value();
            contestantount=contestantcount+1;
            player.update()
            player.updatecount(contestantcount);
            this.greeting.html("Hello "+player.name+"!")
            this.greeting.position(130,160);
        })
    }
    hide(){
        this.Input.hide();
        this.Button.hide();
        this.greeting.hide();
    }
}