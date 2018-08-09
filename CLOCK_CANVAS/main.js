"use strict"
//функция формата выводимой даты
function timeFormat(time) {
    return zeroes(time.getHours(), 2) + ":" + zeroes(time.getMinutes(), 2) + ":" + zeroes(time.getSeconds(), 2);
}
//функция полного формата с нулями
function zeroes(val, len) {
    var timeVal = val.toString();
	while (timeVal.length < len)
    timeVal = '0' + timeVal;
	return timeVal;
}
    //размеры и цвета
    var colorBlack = "#000"; // чёрный цвет
    var colorHands = "rgba(0,0,0,0.7)" // полупрозрачный чёрный для стрелок
    var colorBG = "#fcca66"; // цвет циферблата
    var colorRounds = "#48b382"; // цвет кружков
    var colorWhite = "#fff"; // белый цвет для очистки canvas
    var clockRadius = 120; // радиус часов
    var colorRoundsRadius = 0.15*clockRadius // радиус кружков
    var numbersFont = clockRadius*0.175 + "px Arial"; //шрифт
    var numberPosition = 20; //расстояние от края часов до центра кружков

var clock = document.getElementById("clock").getContext("2d");
clock.canvas.width = clockRadius*2;
clock.canvas.height = clockRadius*2;
//функция отрисовки круга
function drawCircle(x, y, radius, color) {
    clock.beginPath();
	clock.arc(x, y, radius, 0, 2 * Math.PI, false);
	clock.fillStyle = color;
	clock.fill();
	
}
//функция отрисовки стрелок
function drawLine(x1, y1, lengthHand, angle, width, color) {
    var x2 = clockRadius + lengthHand * Math.cos(angle);
    var y2 = clockRadius + lengthHand * Math.sin(angle); 
    clock.beginPath();
	clock.strokeStyle = color;
	clock.lineWidth = width;
	clock.moveTo(x1, y1);
	clock.lineTo(x2, y2);
	clock.lineCap = 'round';
	clock.stroke();
}

//функция отрисовки часов
function createCanvasClock() {
    
    //размеры стрелок
    var hourLength = clockRadius * 0.55;
    var hourHandWidth = clockRadius/10;
    var minHandWidth = hourHandWidth / 2;
    var minLength = clockRadius * 0.75;
    var secHandWidth = minHandWidth/2;
    var secLength = clockRadius * 0.9;
    var ang = 0; // вспомогательная переменная для расчёта углов
    var angHand = 0;// угол поворота стрелки
    var currentTime = new Date();
    clock.fillStyle = colorWhite;

    //циферблат
    drawCircle(clockRadius, clockRadius, clockRadius, colorBG);

    //числа + кружки
    for (var i = 0; i < 12; i++) {
        
        ang= 360 / 12 * (i + 1);
        var x = clockRadius + (clockRadius - numberPosition) * Math.cos((ang - 90) / 180 * Math.PI);
        var y = clockRadius + (clockRadius - numberPosition) * Math.sin((ang - 90) / 180 * Math.PI);
        drawCircle(x, y, colorRoundsRadius, colorRounds);
        clock.font = numbersFont;
        clock.fillStyle = colorBlack;
        clock.textAlign = 'center';
        clock.fillText((i+1), x, (y+ numberPosition/4));
    }
    //электронные часы
    clock.font = numbersFont;
    clock.fillStyle = colorBlack;
    clock.fillText(timeFormat(currentTime), clockRadius, 0.8*clockRadius); 
    
    //Часовая
    ang = 360 / 720 * ((currentTime.getHours() * 60) + currentTime.getMinutes());
    angHand = ((ang - 90) / 180 * Math.PI);
    drawLine(clockRadius, clockRadius, hourLength, angHand, hourHandWidth, colorHands);

    //минутная
    ang = 360 / 3600 * ((currentTime.getMinutes() * 60) + currentTime.getSeconds());
    angHand = ((ang - 90) / 180 * Math.PI);
    drawLine(clockRadius, clockRadius, minLength, angHand, minHandWidth, colorHands);

    // секундная
    ang = 360 / (60 * 1000) * ((currentTime.getSeconds() * 1000) + currentTime.getMilliseconds());
    angHand = ((ang - 90) / 180 * Math.PI);
    drawLine(clockRadius, clockRadius, secLength, angHand, secHandWidth, colorHands);
}
createCanvasClock();
setInterval(createCanvasClock, 1000);