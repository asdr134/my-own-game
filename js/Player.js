class Player{
    constructor(){
        this.name = null
        this.index = null
        this.positionX = 0
        this.positionY = 300
        this.score = 0
    }

    getCount(){
        //.ref() gives the path from where we have to read the data in the database.
        var playerCountRef = database.ref("playerCount")
        // .on() is used to read the data continously from the database.
        playerCountRef.on("value",data=>{
          playerCount = data.val()
          console.log(playerCount)
         //.val() is used to extact the data in a readable format.
        })
    }

    //write the playerCount into the database
  updateCount(count){
    database.ref("/").update({
      playerCount:count
    })
  }

  //write the value into the database
  addPlayer(){
    var playerIndex = "players/player" + this.index
    if(this.index == 1){
      this.positionX = width / 2 - 500
    }
    else{
      this.positionX = width / 2 + 500
    }
    database.ref(playerIndex).set({
      name:this.name,
      positionX:this.positionX,
      positionY:this.positionY,
      score:this.score

    })

  }



  static getPlayersInfo(){
    var playerInfoRef = database.ref("players")

    playerInfoRef.on("value",data=>{
      allPlayers = data.val()
      //console.log(allPlayers)
    })
    
  }


  update(){
    var playerIndex = "players/player" + this.index

    database.ref(playerIndex).update({
      positionX:this.positionX,
      positionY:this.positionY,
      score:this.score


    })

    
    
  }



   
  
}