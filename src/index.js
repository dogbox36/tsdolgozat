"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Statue_title, _Statue_year, _Statue_price, _Statue_height;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statue = void 0;
class Statue {
    constructor(title, year, price, height) {
        _Statue_title.set(this, void 0);
        _Statue_year.set(this, void 0);
        _Statue_price.set(this, void 0);
        _Statue_height.set(this, void 0);
        __classPrivateFieldSet(this, _Statue_title, title, "f");
        __classPrivateFieldSet(this, _Statue_year, year, "f");
        __classPrivateFieldSet(this, _Statue_price, price, "f");
        __classPrivateFieldSet(this, _Statue_height, height, "f");
    }
    kiir() {
        console.log(__classPrivateFieldGet(this, _Statue_title, "f"), __classPrivateFieldGet(this, _Statue_year, "f"), __classPrivateFieldGet(this, _Statue_price, "f"), __classPrivateFieldGet(this, _Statue_height, "f"));
    }
}
exports.Statue = Statue;
_Statue_title = new WeakMap(), _Statue_year = new WeakMap(), _Statue_price = new WeakMap(), _Statue_height = new WeakMap();
