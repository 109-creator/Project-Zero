"use strict";

function f1(i) {
    return i * 10;
}

const v1 = f1(10);  //50
window.alert(v1);

//alert 50


function f2(i) {
    window.alert(i * 10)
}

const v2 = f2(5);  //undefined
window.alert(v2);

//alert 50
//alert undefined