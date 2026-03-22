"use strict";

const obj = {
    re: 3,
    im: -10,

    toString: function () {
        if (this.im < 0) {
            return `${this.re}-${this.im}`;
        } else {
            return `${this.re}+${this.im}`;
        }
    }
};

console.log(obj.toString());