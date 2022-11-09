"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
let nevPattern = /[a-zA-Z, ]{1,}$/;
(_a = document.getElementById('gomb')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    let titlenull = false;
    let title = document.getElementById('title');
    if (nevPattern.test(title.value)) {
        notnull(title);
        titlenull = true;
        document.getElementById('error').textContent = "";
    }
    else {
        nulll(title);
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
        notnull(price);
        pricenull = true;
        document.getElementById('error').textContent = "";
    }
    else {
        nulll(price);
        pricenull = false;
        document.getElementById('error').textContent = "minimum 1 Ft legyen!";
    }
    function nulll(adat) {
        adat.style.border = "1px solid red";
    }
    function notnull(adat) {
        adat.style.border = "1px solid #ced4da";
    }
});
