"use strict";

var elems = document.getElementsByTagName('img');

for (var i = elems.length - 1; i >= 0; i--) {
  var elem = elems[i];
  elem.style.position = 'absolute';
  elem.style.left = elem.offsetLeft+"px";
  elem.style.top = elem.offsetTop+"px";
}

document.body.addEventListener('mousedown', dragging, false);

function dragging(EO) {
  EO = EO || window.event;
  var elem = EO.target;
  EO.preventDefault();  
  var shiftX = EO.pageX - elem.getBoundingClientRect().left;
  var shiftY = EO.pageY - elem.getBoundingClientRect().top;

  document.body.appendChild(elem);

  document.onmousemove = function (EO) {
    elem.style.left = EO.pageX - shiftX + "px";
    elem.style.top = EO.pageY - shiftY + "px";
  };

  elem.onmouseup = function() {
      document.onmousemove = null;
    }
  

  elem.ondragstart = function () {
    return false;
  };
}