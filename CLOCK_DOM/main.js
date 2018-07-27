
"use strict";
//функция создания внешнего вида часов
function createDOMClock() {
    //устанавливаем значения для основных цветов и размеров 
    var colorBlack = "#000"; // чёрный цвет
    var colorBG = "#fcca66"; // цвет циферблата
    var colorRounds = "#48b382"; // цвет кружков
    var clockRadius = 120; // радиус часов
    var hourWidth = clockRadius * 2 / 7; // ширина большой стрелки

    //контейнер часов
    var clock = document.getElementById("clock");
       
    //циферблат
    var clockFace = document.createElement("div");

    clockFace.style.position = "relative";	
    clockFace.style.width = clockRadius * 2 + "px";
	clockFace.style.height = clockRadius * 2 + "px";
    clockFace.style.backgroundColor = colorBG;
	clockFace.style.border = "solid 2px" + colorBG;
    clockFace.style.borderRadius = "50%";
    
    clock.appendChild(clockFace);

    //электронные часы
    var digitalClock = document.createElement("p");
    
    digitalClock.id = "digitalClock";

    digitalClock.style.marginTop = 0.2 * clockRadius * 2  + "px";
    digitalClock.style.fontSize = 0.1 * clockRadius * 2  + "px";
    digitalClock.style.color = colorBlack;
    digitalClock.style.textAlign = "center";

    clockFace.appendChild(digitalClock);

    //контейнер для чисел аналоговых часов
    var numberContainer = document.createElement("div");
    numberContainer.style.position = "absolute";
    numberContainer.style.top = 0;
    numberContainer.style.left = clockRadius - hourWidth/2 + "px";
    
    clockFace.appendChild(numberContainer);

    //числа
    for (var i = 0; i < 12; i++) {
        var numHours = document.createElement("div");
        numHours.id = "numHours";
        numHours.style.position = "absolute";
        numHours.style.height = clockRadius * 2  + "px";
        numHours.style.fontSize = clockRadius * 2 /12   + "px";
        numHours.style.textAlign = "center";
        numHours.style.transform = "rotate(" + 360 / 12 * (i + 1) + "deg)";

        numberContainer.appendChild(numHours);

        //кружки
        var numCircles = document.createElement("div");
        numCircles.style.borderRadius = "50%";
        numCircles.style.backgroundColor = colorRounds;
        numCircles.style.width = hourWidth + "px";
        numCircles.style.height = hourWidth + "px";
        numCircles.style.transform = "rotate(" + -360 / 12 * (i + 1) + "deg)";
        numCircles.style.marginTop = 5 + "px";
        numHours.appendChild(numCircles);

        //числа
        var numbers = document.createElement("div");
        numbers.innerHTML = i + 1;
        numbers.style.position = "absolute";
        numbers.style.paddingTop = hourWidth / 5 + "px";
        numbers.style.textAlign = "center";
        numbers.style.width = "100%";
        
        numCircles.appendChild(numbers);        
    }
    // Стрелки

    //Часовая
    var hourHand = document.createElement("div");
    var hourHandWidth = clockRadius/10;
    var hourTop = clockRadius * 0.5 - (hourHandWidth * 0.5);
    var hourLeft = clockRadius - (hourHandWidth * 0.5);
    
    hourHand.style.position = "absolute";
    hourHand.style.borderRadius = hourHandWidth + "px";
    hourHand.id = "hourHand";
    hourHand.style.width = hourHandWidth + "px";
    hourHand.style.height = hourHandWidth * 6 + "px";
    hourHand.style.backgroundColor = colorBlack;
    hourHand.style.opacity = 0.7;
    hourHand.style.left = hourLeft + "px";
    hourHand.style.top = hourTop + "px";
    hourHand.style.transformOrigin = "55% 90%";

    clockFace.appendChild(hourHand);

    //минутная
    var minHand = document.createElement("div");
    var minHandWidth = hourHandWidth / 2;
	var minTop = clockRadius * 0.2 - (minHandWidth * 0.5);
    var minleft = clockRadius - (minHandWidth * 0.5);
    
    minHand.id = "minHand";
    minHand.style.position = "absolute";
    minHand.style.width = minHandWidth + "px";
    minHand.style.height = 0.9 * clockRadius + "px";
    minHand.style.left = minleft + "px";
    minHand.style.top = minTop + "px";
    minHand.style.border = "solid 0px";
    minHand.borderTop = "solid " + (clockRadius - minTop) + "px";
    minHand.borderBottomWidth = (clockRadius - minTop) + "px";
    minHand.style.borderRadius = hourWidth + "px";
    minHand.style.backgroundColor = colorBlack;
    minHand.style.opacity = 0.7;
    minHand.style.transformOrigin = "55% 90%";

    clockFace.appendChild(minHand);

    // секундная
    var secHand = document.createElement("div");
	var secHandWidth = minHandWidth/2;
    var secHandTop = clockRadius * 0.1;
    secHand.id = "secHand";
    secHand.style.width = secHandWidth + "px";
    secHand.style.height = clockRadius + "px";
    secHand.style.backgroundColor = colorBlack;
    secHand.style.opacity = 0.7;
    secHand.style.position = "absolute";
    secHand.style.border = "solid 0px";
    secHand.style.left = (clockRadius - secHandWidth/2) + "px";
    secHand.style.top = secHandTop + "px";
    
    secHand.style.borderRadius = 2 + "px";
    secHand.style.transformOrigin = "55% 90%";

    clockFace.appendChild(secHand);

}
createDOMClock();
setInterval(funClock, 1000);
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
//функция часов
function funClock() {
    var currentTime = new Date();
	document.getElementById('digitalClock').innerHTML = timeFormat(currentTime);
	

	var rotateSecondHand = 360 / 60 * currentTime.getSeconds();
	var rotateMinuteHand = 360 / 60 * currentTime.getMinutes();
	var rotateHourHand = 360 / 12 * currentTime.getHours() + 360 / 12 * (currentTime.getMinutes() / 60);

	document.getElementById('secHand').style.transform = 'rotate(' + rotateSecondHand + 'deg)';
	document.getElementById('minHand').style.transform = 'rotate(' + rotateMinuteHand + 'deg)';
	document.getElementById('hourHand').style.transform = 'rotate(' + rotateHourHand + 'deg)';
}
