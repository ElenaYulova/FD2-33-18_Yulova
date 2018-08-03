"use strict"
//функция создания внешнего вида часов
function createSVGClock() {
   //устанавливаем значения для основных цветов и размеров 
   var colorBlack = "#000"; // чёрный цвет
   var colorBG = "#fcca66"; // цвет циферблата
   var colorRounds = "#48b382"; // цвет кружков
   var clockRadius = 120; // радиус часов
   

   
   var clock = document.getElementById('clock');
   clock.style.width = 2 * clockRadius + "px";
   clock.style.height = 2 * clockRadius + "px";

    //контейнер часов
    var clockContainer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    clockContainer.setAttribute("width", (2 * clockRadius + "px"));
    clockContainer.setAttribute("height", (2 * clockRadius + "px"));
    clockContainer.setAttribute("id", "clockSVG");

    //циферблат
    var clockFace = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    clockFace.setAttribute('cx', clockRadius);
    clockFace.setAttribute('cy', clockRadius);
    clockFace.setAttribute('r', clockRadius);
    clockFace.setAttribute('style', 'fill:' + colorBG + '; stroke:none;');

    clockContainer.appendChild(clockFace);

    //электронные часы
    var digitalClock = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    digitalClock.setAttribute("id", "digitalClock")
    digitalClock.setAttribute('font-family', 'arial');
	digitalClock.setAttribute('text-anchor', 'middle');
    digitalClock.setAttribute('font-size', clockRadius*0.175);
    digitalClock.setAttribute('y', clockRadius*0.6);
    digitalClock.setAttribute('x', clockRadius);
    digitalClock.textContent = "20:20:20";

    clockContainer.appendChild(digitalClock);

    //числа + кружки
    for (var i = 0; i < 12; i++) {

        //кружки
        var numCircles = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        var degreeRound = 2 * Math.PI / 12 * (i + 1);
        numCircles.setAttribute("cx", clockRadius + 7 *clockRadius*0.12 * Math.sin(degreeRound));
        numCircles.setAttribute('cy', clockRadius + 7 *clockRadius*0.12 * Math.cos(degreeRound));
        numCircles.setAttribute('r', clockRadius*0.12);
        numCircles.setAttribute('style', 'fill:' + colorRounds + '; stroke:none;'); 
       
        //числа
        var hourNumbers = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        hourNumbers.setAttribute("x", clockRadius + 7 *clockRadius*0.12 * Math.sin(degreeRound));
        hourNumbers.setAttribute('y', clockRadius*1.05 + 7 *clockRadius*0.12 * Math.cos(degreeRound));//дополнительное смещение по оси y, как аналог margin-top
        hourNumbers.setAttribute('font-family', 'arial');
        hourNumbers.setAttribute('text-anchor', 'middle');
        hourNumbers.setAttribute('font-size', clockRadius*0.175);
        hourNumbers.textContent = i + 1;

        clockContainer.appendChild(numCircles);
        clockContainer.appendChild(hourNumbers);  
        
    }
    //Часовая
    var hourHand = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    var hourHandWidth = clockRadius/10;
    var hourLength = clockRadius * 0.55;
    hourHand.setAttribute("id", "hourHand")
    hourHand.setAttribute("x1", clockRadius);
    hourHand.setAttribute("y1", 1.1*clockRadius);
    hourHand.setAttribute("x2", clockRadius);
    hourHand.setAttribute("y2", (clockRadius-hourLength));
    hourHand.setAttribute("style", "stroke:" + colorBlack + "; stroke-width:" + hourHandWidth + ";stroke-linecap:round; stroke-opacity: 0.7");
    hourHand.style.transformOrigin = "50% 50%";
    
    clockContainer.appendChild(hourHand);
    
    //минутная
    var minHand = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    var minHandWidth = hourHandWidth / 2;
    var minLength = clockRadius * 0.75;
    minHand.setAttribute("id", "minHand")
    minHand.setAttribute("x1", clockRadius);
    minHand.setAttribute("y1", 1.1*clockRadius);
    minHand.setAttribute("x2", clockRadius);
    minHand.setAttribute("y2", (clockRadius-minLength));
    minHand.setAttribute("style", "stroke:" + colorBlack + "; stroke-width:" + minHandWidth + ";stroke-linecap:round; stroke-opacity: 0.7");
    minHand.style.transformOrigin = "50% 50%";

    clockContainer.appendChild(minHand);

    // секундная
    var secHand = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    var secHandWidth = minHandWidth/2;
    var secLength = clockRadius * 0.9;
    secHand.setAttribute("id", "secHand")
    secHand.setAttribute("x1", clockRadius);
    secHand.setAttribute("y1", 1.1*clockRadius);
    secHand.setAttribute("x2", clockRadius);
    secHand.setAttribute("y2", (clockRadius-secLength));
    secHand.setAttribute("style", "stroke:" + colorBlack + "; stroke-width:" + secHandWidth + ";stroke-linecap:round; stroke-opacity: 0.7");
    secHand.style.transformOrigin = "50% 50%";

    clockContainer.appendChild(secHand);


clock.appendChild(clockContainer);
}

createSVGClock();
funClock();
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
    var myClock = document.getElementById("clockSVG");
    var currentTime = new Date();
    document.getElementById('digitalClock').innerHTML = timeFormat(currentTime);
	
    var rotateSecondHand = 360 / 60 * currentTime.getSeconds();
	var rotateMinuteHand = 360 / 60 * currentTime.getMinutes();
	var rotateHourHand = 360 / 12 * currentTime.getHours() + 360 / 12 * (currentTime.getMinutes() / 60);

	document.getElementById('secHand').style.transform = 'rotate(' + rotateSecondHand + 'deg)';
	document.getElementById('minHand').style.transform = 'rotate(' + rotateMinuteHand + 'deg)';
	document.getElementById('hourHand').style.transform = 'rotate(' + rotateHourHand + 'deg)';
} 
