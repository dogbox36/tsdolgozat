"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Artwork;
let nevPattern = /[a-zA-Z, ]{1,}$/;
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = document.getElementById('button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        let titlenull = false;
        let title = document.getElementById('title');
        if (nevPattern.test(title.value)) {
            alert(title);
            titlenull = true;
            document.getElementById('error').textContent = "";
        }
        else {
            alert(title + "rossz adat!");
            titlenull = false;
            if (!title.value) {
                document.getElementById('error').textContent = "Nem lehet üres a mező";
            }
            else {
                document.getElementById('error').textContent = "Nem tartalmazhat speciális karaktereket!";
            }
        }
        let pricenull = false;
        let price = document.getElementById('price');
        if (parseInt(price.value) > 0) {
            alert(price);
            pricenull = true;
            document.getElementById('error').textContent = "";
        }
        else {
            alert(price + "rossz adat!");
            pricenull = false;
            document.getElementById('error').textContent = "minimum 1 Ft legyen!";
        }
        let yearnull = false;
        let year = document.getElementById('year');
        if (parseInt(year.value) < 2023) {
            alert(year);
            yearnull = true;
            document.getElementById('error').textContent = "";
        }
        else {
            alert(year + "rossz adat!");
            yearnull = false;
            if (year.value = "") {
                document.getElementById('error').textContent = "Nem lehet üres a mező";
            }
            else
                document.getElementById('error').textContent = "Az idei évet lehet kiírni";
        }
        let heightnull = false;
        let height = document.getElementById('height');
        if (parseInt(height.value) > 9) {
            alert(height);
            heightnull = true;
            document.getElementById('error').textContent = "";
        }
        else {
            alert(height + "rossz adat!");
            heightnull = false;
            document.getElementById('error').textContent = "minimum 10 cm legyen a magasság!";
        }
    });
});
