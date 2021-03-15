class Quiz{
    constructor(){
     this.state=0;
     this.count=0;
    }

    getState(){
        var gameStateRef= database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState= data.val()
        })
        }
    
        update(state){
       database.ref("/").update({gameState: state})
        }
    async start(){
        if(gameState===0){
             contestant= new Contestant()
            var contestantCountRef= await database.ref('contestantCount').once('value')
             if(contestantCountRef.exists()){
                contestantCount= contestantCountRef.val()
             contestant.getCount();
             this.count= contestantCount
             contestant.updateCount(this.count)
            }
             question= new Question();
           question.display();
        }
       
    }
    play(){
       background(255,255,0)
       question.hide();
       textAlign(CENTER)
       fill(0)
      stroke(0)
       text("The Participants whose answers Are Correct Are Displayed Below",width/2,300);
       Contestant.getContestantInfo()
      if(allContestants !== undefined){
           var displayPosition= 330;
           for(var plr in allContestants){
               if(allContestants[plr].option==='C'){
                   noStroke()
                   fill(0,255,0)
               }else {
                   noStroke();
                   fill(255,0,0)
               }
               displayPosition+=20;
               textSize(15)
               text(allContestants[plr].name+':'+ allContestants[plr].option,300,displayPosition)
            }
        }
           
    }
       }