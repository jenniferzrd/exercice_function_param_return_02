/*jshint esversion: 6 */

window.onload = function start() {
   /*******exo 01**********/
   var elem = document.querySelectorAll('p');
   function deleteNodes(list) {
    for (var i = 0; i < list.length; i++) {
      console.log(list[i]);
      list[i].remove();
    }
   }
   deleteNodes(elem);


/**********exo 2**************/

var n = 1;
var x = isOdd(n);

function isOdd(n) {
  if(typeof n !== "number") {
    throw "erreur";
  } else if (n % 2 === 0 ) {
    return true;
  } else if (n % 2 === 1 ) {
    return false;
  } else {
    console.log("LOL");
  }
}
console.log(x);
console.log(1 % 2);



/**********exo 3**************/

var tableau = [1, 2, 3, 4, "non numérique"];
function sum(a) {
for (var i = 0; i < tableau.length; i++) {
      if (tableau.includes("number") === true) {
        throw "erreur";
      } else {
        var sum2 = tableau.reduce((a, b) => a + b, 0);
        console.log(sum2);
      }
}
}
sum();
};
