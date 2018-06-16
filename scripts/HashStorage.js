"use strict"
class HashStorage {
    constructor (name) {
        this.name = name;
    }

    HashStorage.prototype.addValue(key,value) {
        key = this.key;
        value = this.value;
        this[key] = value;
        return this;
    }
    HashStorage.prototype.getValue(key) {
        
        return this.key;
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

var drinkStorage = new HashStorage(drinkStorage);

function drinkStorageElem() {
    HashStorage.call(this); 
    
    }
}