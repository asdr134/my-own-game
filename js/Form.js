class Form {
    constructor() {
        this.input = createInput("").attribute("placeholder", "Enter your name");
        this.playButton = createButton("Play");
        this.titleImg = createImg("Bullet blaze.png", "game title")
        this.greeting = createElement("h2");
    }

    hide() {
        this.playButton.hide();
        this.input.hide();
    }

    setElementPosition() {
        this.titleImg.position(180, 160)
        this.input.position(width / 2 - 120, height / 2)
        this.playButton.position(width / 2 - 110, height / 2 + 120)

    }

    setElementStyle(){
        this.titleImg.class('gameTitle')
        this.input.class('customInput')
        this.playButton.class('customButton')
        this.greeting.class('greeting')
      }


      handleMousePressed(){
        this.playButton.mousePressed(()=>{
          this.input.hide()
          this.playButton.hide()
          this.titleImg.hide()
          var message = `
          Hello ${this.input.value()}
          </br>wait for another player to join...`;
          this.greeting.html(message)
          playerCount += 1
          player.name = this.input.value()
          player.index = playerCount
          player.addPlayer()
          console.log("count",playerCount)
          player.updateCount(playerCount)
    
        })
      }

    display(){
        this.setElementPosition()
        this.setElementStyle()
        this.handleMousePressed()
        
    }
}