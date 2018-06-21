"use strict"
function HashStorage() {
          
    this.storage = {};
    

HashStorage.prototype.addValue = function(key,value) {
        
        this.storage[key] = value;
        return this;
        
    }
    HashStorage.prototype.getValue = function(key)  {
        
        return this.storage[key];
    }
    HashStorage.prototype.deleteValue = function(key)  {
        if (key in this.storage) {
            delete this.storage[key];
            return true;
        } else {
            return false;
        }
    }
    HashStorage.prototype.getKeys = function()  {
        return Object.keys(this.storage);
    }

}

var drinkStorage = new HashStorage;


var drinkAddValue = function() {
   
    var i=0;
    var j=0;
    do {
        var drink = prompt("Введите название напитка");
        i++;
    } while (typeof drink != "string" || i > 5);
    
    var alcohol = confirm("Напиток алкогольный? \n Нажмите ОК для алкогольного, отмена для безалкогольного");
    if (alcohol) {
        alcohol = "да";
    } else {
        alcohol = "нет";
    }
    do {
        var recipe = prompt("Введите рецепт приготовления напитка");
        j++;
    } while (typeof recipe != "string" || j > 5);
    
    
    var descr = {
        "напиток: " : drink,
        "алкогольный напиток: " : alcohol,
        "рецепт приготовления: " : recipe
    };
    return drinkStorage.addValue(drink, descr);
}

var drinkValue = function() {
    var i=0;
    do {
        var drink = prompt("Введите название напитка");
        i++;
    } while (typeof drink != "string" || i > 5);
    var descr = drinkStorage.getValue(drink);
    if (drink in drinkStorage.storage){
        console.log("Информация о напитке:");
        for (var key in descr) {
            console.log(key + ": " + descr[key]);
        }
    } else {
        console.log("Нет такого напитка");
    }

}

var deleteDrink = function () {
    var i=0;
    do {
        var drink = prompt("Введите название напитка");
        i++;
    } while (typeof drink != "string" || i > 5);
    if (drink in drinkStorage.storage) {
        drinkStorage.deleteValue(drink);
        console.log("Напиток успешно удалён");
        
    } else {
        console.log("Нет такого напитка");
    }
    

}
var allDrinks = function () {
    console.log("Перечень напитков: \n" + drinkStorage.getKeys());
}

drinkStorage.addValue("Кофе", {
    "напиток: " : "Кофе",
    "алкогольный напиток: " : "нет",
    "рецепт приготовления: " : "Насыпать чайную ложку порошка кофе в турку, добавить сахар и специи по вкусу, залить водой, довести до кипения"
});

drinkStorage.addValue("Пиво", {
    "напиток: " : "Пиво",
    "алкогольный напиток: " : "да",
    "рецепт приготовления: " : "Открыть бутылку, налить в бокал, пить с удовольствием"
});