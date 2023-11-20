class Game {
    constructor() {
        this.resetButton = createButton("Reset")
    }

    start() {
        form = new Form();
        form.display();
        player = new Player()
        player.getCount()
        player1 = createSprite(200, 650, 20, 20)
        player1.addImage(player1_Img)
        player2 = createSprite(1550, 650, 20, 20)
        player2.addImage(player2_Img)
        player1.scale = 1.2
        player2.scale = 1.2

        bullet1 = createSprite(455, 515, 10, 10)
        bullet2 = createSprite(1315, 505 , 10, 10)


        players = [player1, player2]


    }

    getState() {
        //.ref() gives the path from where we have to read the data in the database.
        var gameStateRef = database.ref("gameState")
        // .on() is used to read the data continously from the database.
        gameStateRef.on("value", data => {
            gameState = data.val()
            console.log(data.val())
            //.val() is used to extact the data in a readable format.
        })
    }

    //write the gameState into the database
    update(state) {
        database.ref("/").update({
            gameState: state

        })
    }


    handleElements() {
        this.resetButton.class("resetButton")
        this.resetButton.position(width / 2 + 200, 40)

    }


    play() {

        Player.getPlayersInfo()
        this.handleResetButton()
        this.handleElements()

        if (allPlayers !== undefined) {
            image(background_img, 0, 0, width, height)
            var index = 0
            for (var plr in allPlayers) {
                index = index + 1
                console.log("index", index)

                var x = allPlayers[plr].positionX
                var y = height - allPlayers[plr].positionY

                players[index - 1].position.x = x
                players[index - 1].position.y = y

            }


            this.handlePlayerControls()


        }
        drawSprites()
    }



    handleResetButton() {
        this.resetButton.mousePressed(() => {
            database.ref("/").set({
                playerCount: 0,
                gameState: 0,
                players: {}
            })
            window.location.reload()

        })
    }

    handlePlayerControls() {
        if (keyIsDown(LEFT_ARROW)) {
            player.positionX -= 5
            player.update()
        }
        if (keyIsDown(RIGHT_ARROW)) {
            player.positionX += 5
            player.update()
        }
        if (keyIsDown(32)) {
            bullet1.velocityX = 5

        }

        if(keyIsDown(UP_ARROW)){
            
        }
    }




}