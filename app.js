setName();
function setName() {
  var name = 'Seth';
  console.log(name);
}

console.log('some text');
let avg = findAvg(2, 2);
console.log('some text', avg);
function findAvg(a, b) {
    console.log('some text');
    var answer = ( a + b) / 2;
    return answer;
}

let fruits = ['apple', 'orange', 'grape'];



function printFruit() {
  let favFruit = fruits[1];

  console.log(fruits[0]);
  function printFavFruit() {
    let leastFav = fruits[0];
    console.log(favFruit);
  }
  console.log(leastFav);
  printFavFruit();
}



printFruit();

randoFunc();

function randoFunc() {
  console.log('Hello Seth!');
}

let anotherFunc = function() {
  alert('I hope this works...');
}
anotherFunc();
