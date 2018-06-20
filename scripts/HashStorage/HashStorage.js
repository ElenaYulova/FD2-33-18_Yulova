"use strict"
class HashStorage {
    constructor (name) {
        this.storage = {};
    }

    HashStorage.prototype.addValue(key,value) {
        key = this.key;
        value = this.value;
        this.storage[key] = value;
        
    }
    HashStorage.prototype.getValue(key) {
        
         this.key;
    }
    HashStorage.prototype.deleteValue(key) {
        key = this.key;
        if (key in this) {
            delete this.key;
            return true;
        } else {
            return false;
        }
    }
    HashStorage.prototype.getKeys() {
        return Object.keys(this);
    }
}

var drinkStorage = new HashStorage;


function drinkAddValue() {
    i=0;
    j=0;
    do {
        var key = prompt("Введите название напитка");
        i++;
    } while (typeof key != "string" || i > 5);
    
    var alcohol = confirm("Напиток алкогольный? /n Нажмите ОК для алкогольного, отмена для безалкогольного");
    if (alcohol) {
        alcohol = "да";
    } else {
        alcohol = "нет";
    }
    do {
        var recipe = prompt("Введите рецепт приготовления напитка");
        j++;
    } while (typeof recipe != "string" || j > 5);
    
    
    var value = {
        "напиток: " : key,
        "алкогольный напиток: " : alcohol,
        "рецепт приготовления: " : recipe
    };
    drinkStorage.addValue(key, value);
    }
}

drinkStorage.drinkAddValue();
console.log(drinkStorage);