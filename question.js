class Question{
    constructor(){
        this.input1= createInput("Enter Your Name Here")
        this.input2= createInput("Enter The Correct Option No.")
        this.element1= createElement('h3')
        this.option1= createElement('h3')
        this.option2= createElement('h3')
        this.option3= createElement('h3')
        this.option4= createElement('h3')
        this.message= createElement('h2')
        this.button= createButton('Submit')
        this.greeting= createElement('h4')
    }
    hide(){
      this.input1.hide()
      this.input2.hide()
      this.message.hide()
      this.button.hide()
      this.greeting.hide()
    }
    display(){
        stroke(0)
        fill(0)
        textSize(20)
    
  this.option1.html('Option A: cls',100,80)
  this.option2.html('Option B: clear',100,100)
  this.option3.html('Option C: CLS',100,120)
 this.option4.html('Option D: clrscr();',100,140)
  this.element1.html('Question : Which keyWord is used in QBasic to clear The Screen ?')
  this.element1.position(100,40)
  this.input1.position(200,300)
  this.input2.position(400,300)
  this.option1.position(100,80)
  this.option2.position(100,120)
  this.option3.position(100,160)
  this.option4.position(100,200)
  this.message.html('Waiting For Others---')
  this.message.position(300,350)
  this.button.position(330,330)
  this.button.mousePressed(()=>{
    this.input1.hide()
    this.input2.hide();
    this.button.hide()
    contestant.name= this.input1.value();
    contestant.option= this.input2.value();
    contestantCount++;
    contestant.index=contestantCount;
    contestant.update()
    contestant.updateCount(contestantCount);   
    this.greeting.html("Hello! "+contestant.name)
    this.greeting.position(10,300);
 
  })
    }
}