'use strict'
const {MyMath} = require('./MyMath');
const {Component} = require('./Component');

console.log('hello, node');
console.log(MyMath);
const res = MyMath.mult(2,4);
console.log('res =' ,res);

const component = new Component();
component.render();
// const module = false