"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statue = void 0;
class Statue {
    constructor(title, year, price, height) {
        this.title = title;
        this.year = year;
        this.price = price;
        this.height = height;
    }
    kiir() {
        console.log(this.title, this.year, this.price, this.height);
    }
    toString() {
        return this.title + " " + this.year + " " + this.price + " Forint";
    }
}
exports.Statue = Statue;
