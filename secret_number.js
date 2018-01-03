'use strict';
module.exports = function() {
 var secretNumber = Math.random();

 return function(){
     return secretNumber;
 }

};