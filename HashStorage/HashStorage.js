"use strict"
class HashStorage {
    constructor()
{        
    this.storage = {};
    

    this.addValue = function(key,value) {
        var key = this.key;
        var value = this.value;
        this.storage[key] = value;
        return this;
        
    }
    this.getValue = function(key)  {
        
         this.key;
    }
    this.deleteValue = function(key)  {
        var key = this.key;
        if (key in this) {
            delete this.key;
            return true;
        } else {
            return false;
        }
    }
    this.getKeys = function()  {
        return Object.keys(this);
    }
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


drinkAddValue();
