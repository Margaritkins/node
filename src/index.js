// require core module;
// require node module;


const _ = require('lodash')

// require own module;
const Component = require('./Component')
require ('./style.css');
console.log(_.random(1,10));

console.log('hello');
const resultSummTwoNumb = 5+2;
console.log(resultSummTwoNumb);

const component = new Component;
component.render()