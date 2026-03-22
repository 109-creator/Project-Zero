"use strict";

const array = [];

for (let n = 0; n < 100; n++) {
    const value = Math.random();
    array.push(value);
}

for (let n = 0; n < 100; n++) {
    console.log(array[n]);  
}