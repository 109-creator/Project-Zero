"use strict";

const obj = {
    re: 3,
    im: -10,

    toString: function () {
        if (this.im < 0) {
            return `${re}-${im}`;
        } else {
            return `${re}+${im}`;
        }
    }
};

console.log(obj.toString());