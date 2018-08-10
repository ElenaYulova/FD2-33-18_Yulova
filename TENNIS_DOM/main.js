"use strict"

    createTennisField();



function createTennisField() {
//основные цвета и размеры
    var colorBG = "#f0ee7e";
    var colorLeft = "#09aa57";
    var colorRight = "#191497";
    var colorButton = "#d9d9d3";
    var colorBall = "#f02137";
    var headSpaceHeight = 80;
    var headSpaceWidth = 600;
    var tennisFieldWidth = headSpaceWidth;
    var tennisFieldHeight = 400;
    var raquetHeight = 100;    
    var raquetWidth = 10;
    var ballRadius = 10;
    var buttonWidth = 60;
    var buttonHeight = 30;
    var counterFont = "40px Arial";


    var tennis = document.getElementById("tennis");

    var headSpace = document.createElement("div");
    headSpace.id = "headSpace";
    headSpace.style.width = headSpaceWidth + "px";
    headSpace.style.height = headSpaceHeight + "px";
    headSpace.style.position = "relative";

    tennis.appendChild(headSpace);

    var startButton = document.createElement("button");
    startButton.id = "startButton";
    startButton.style.outline = "none";
    startButton.innerHTML = "СТАРТ!";
    startButton.style.border = "none";
    startButton.style.borderRadius = 0;
    startButton.style.width = buttonWidth + "px";
    startButton.style.height = buttonHeight + "px";
    startButton.style.position = "absolute";
    startButton.style.top = headSpaceHeight/2 - buttonHeight/2 + "px";

    headSpace.appendChild(startButton);

    var counter = document.createElement("div");
    counter.id = "counter";
    counter.style.font = counterFont;
    counter.style.position = "absolute";
    counter.style.left = headSpaceWidth/2.2 + "px";
    counter.style.top = headSpaceHeight/3 + "px";
    counter.innerHTML = "0 : 0";

    headSpace.appendChild(counter);

    var tennisField = document.createElement("div");
    tennisField.id = "tennisField";
    tennisField.style.width = tennisFieldWidth + "px";
    tennisField.style.height = tennisFieldHeight + "px";
    tennisField.style.backgroundColor = colorBG;
    tennisField.style.position = "relative";

    tennis.appendChild(tennisField);

    var raquetRight = document.createElement("div");
    raquetRight.id = "raquetRight";
    raquetRight.style.width = raquetWidth + "px";
    raquetRight.style.height = raquetHeight + "px";
    raquetRight.style.backgroundColor = colorRight;
    raquetRight.style.position = "absolute";
    raquetRight.style.right = 0 + "px";
    raquetRight.style.top = tennisFieldHeight/2 - raquetHeight/2 + "px";

    tennisField.appendChild(raquetRight);

    var raquetLeft = document.createElement("div");
    raquetLeft.id = "raquetLeft";
    raquetLeft.style.width = raquetWidth + "px";
    raquetLeft.style.height = raquetHeight + "px";
    raquetLeft.style.backgroundColor = colorLeft;
    raquetLeft.style.position = "absolute";
    raquetLeft.style.left = 0 + "px";
    raquetLeft.style.top = tennisFieldHeight/2 - raquetHeight/2 + "px";

    tennisField.appendChild(raquetLeft); 

    var ball = document.createElement("div");
    ball.id = "ball";
    ball.style.width = ballRadius*2 + "px";
    ball.style.height = ballRadius*2 + "px";
    ball.style.backgroundColor = colorBall;
    ball.style.borderRadius = "50%";
    ball.style.position = "absolute";
    ball.style.left = tennisFieldWidth/2 - ballRadius + "px";
    ball.style.top = tennisFieldHeight/2 - ballRadius + "px";

    tennisField.appendChild(ball); 
}
//функция кроссбраузерности


//создаём основные переменные и хэши
    var tennis = document.getElementById("tennis");
    var startButton = document.getElementById("startButton");
    var counter = document.getElementById("counter");
    var tennisField = document.getElementById("tennisField");
    var raquetRight = document.getElementById("raquetRight");
    var raquetLeft = document.getElementById("raquetLeft");
    var ball = document.getElementById("ball");
    var ballSpeed = 5;
    var raquetSpeed = 10;
    var player1 = 0;
    var player2 = 0;

    
//рандомное направление мяча
    var randNum = function() {
        var scores = [-6, -5, -4, -3, 3, 4, 5, 6];
        var rand =  Math.floor(Math.random()*scores.length); 
        return scores[rand];
    }

    var tennisHash = {
        width: parseInt(tennis.style.width),
        height: parseInt(tennis.style.height)
    }

    var ballHash = {
        width: parseInt(ball.style.width),
        height: parseInt(ball.style.height),
        speedY: 0,
        speedX: 0,
        speedUp: 1.05,
        posX: (tennisHash.width/2 - ball.style.width/2 + "px"),
        posY: (tennisHash.height/2 - ball.style.height/2 + "px"),
        placing: function () {
            var self = this;
            ball.style.left = self.posX + "px";
            ball.style.top = self.posY + "px";

        }
    }
    var raquetLeftHash = {
        width: parseInt(raquetLeft.style.width),
        height: parseInt(raquetLeft.style.height), 
        posY:   parseInt(raquetLeft.style.top),
        speedY: raquetSpeed, 
        placing: function () {
            var self = this;
            raquetLeft.style.top = this.posY + 'px';
        },
        start: function (direction) {
            if (direction == "down") {
                self.speedY  =  raquetSpeed;    
            } else {
                self.speedY  =  -raquetSpeed; 
            }
        },
        stop: function () {
            self.speedY  =  0;
        }
    }
    var raquetRightHash = {
        width: parseInt(raquetRight.style.width),
        height: parseInt(raquetRight.style.height), 
        posY:   parseInt(raquetRight.style.top),
        speedY: raquetSpeed, 
        placing: function () {
            var self = this;
            raquetRight.style.top = this.posY + "px";
        },
        start: function (direction) {
            if (direction == "down") {
                self.speedY  =  raquetSpeed;    
            } else {
                self.speedY  =  -raquetSpeed; 
            }
        },
        stop: function () {
            self.speedY  =  0;
        }
    }


    //функция игры
    var game = function () {
        
        document.onkeydown = function (EO) {
            EO=EO||window.event;
            switch (EO.keyCode) {
                case 16:
                raquetLeftHash.start('up');
                break;
                case 17:
                raquetLeftHash.start('down');
                break;
                case 38:
                raquetRightHash.start('up');
                break;
                case 40:
                raquetRightHash.start('down');
                break;
            }
        }
        document.onkeyup = function (EO) {
            EO=EO||window.event;
            if (EO.keyCode == 16 || EO.keyCode == 17) {
                raquetLeftHash.stop();
            }
            if (EO.keyCode == 38 || EO.keyCode == 40) {
                raquetRightHash.stop();
            }
        }
        var startGame = function () {
            ballHash.placing();
            ballHash.speedY = (ballSpeed*randNum());
            ballHash.speedX = (ballSpeed*randNum());
        }
        startButton.onclick = startGame;
            //ограничиваем движение ракеток

            if (raquetLeftHash.posY + raquetLeftHash.speedY < 0) {
                raquetLeftHash.posY = 0;
            }
            if (raquetLeftHash.posY + raquetLeftHash.height + raquetLeftHash.speedY > tennisHash.height) {
                raquetLeftHash.posY = tennisHash.height - raquetLeftHash.height;
            }  

            if (raquetRightHash.posY + raquetRightHash.speedY < 0) {
                raquetRightHash.posY = 0;
            }
            if (raquetRightHash.posY + raquetRightHash.height + raquetRightHash.speedY > tennisHash.height) {
                raquetRightHash.posY = tennisHash.height - raquetRightHash.height;
            }     
        }
        //позиционируем и запускаем мяч
        ballHash.placing();
        ballHash.posX += ballHash.speedX;
        ballHash.posY += ballHash.speedY;

        //отскоки мяча от верхней и нижней стен
        if (ballHash.posY < 0) {
            ballHash.speedY = -ballHash.speedY;
            ballHash.posY = 0;
        }
        if ((ballHash.posY+ballHash.height) > tennisHash.height) {
            ballHash.speedY = -ballHash.speedY;
            ballHash.posY = tennisHash.height-ballHash.height;
        }

        //проверка на отбивание
        if ((ballHash.posX < raquetLeftHash.width) && ((ballHash.posY+ballHash.height/2) > raquetLeftHash.posY) && ((ballHash.posY+ballHash.height/2) < (raquetLeftHash.posY+raquetLeftHash.height))) {
            ballHash.posX = raquetLeftHash.width;
            ballHash.speedX = -ballHash.speedY*ballHash.speedUp;
        }

        if (((ballHash.posX + ballHash.width) > (tennisHash.width - raquetRightHash.width)) && ((ballHash.posY+ballHash.height/2) > raquetRightHash.posY) && ((ballHash.posY+ballHash.height/2) < (raquetRightHash.posY+raquetRightHash.height))) {
            ballHash.posX = tennisHash.width - raquetRightHash.width - ballHash.width;
            ballHash.speedX = -ballHash.speedX*ballHash.kick;
        }

        //проверка на гол
        if (ballHash.posX <= 0) {
            ballHash.posX = 0;
            ballHash.speedX = 0;
            ballHash.speedY =0;
            player1++;
            counter.innerHTML = player1 + " : " + player2
        }
        if ((ballHash.posX + ballHash.width)>= tennisHash.width) {
            ballHash.posX = 0;
            ballHash.speedX = 0;
            ballHash.speedY =0;
            player2++;
            counter.innerHTML = player1 + " : " + player2
        }
        requestAnimationFrame(game);

    

