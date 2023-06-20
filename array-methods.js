let arr = ["I", "go", "home"];

delete arr[1];

alert( arr[1] );

alert( arr.length ); 

let arr2 = ["I", "study", "JavaScript"];

arr2.splice(1, 1);

alert( arr2 );


let arr3 = ["I", "study", "JavaScript", "right", "now"];
arr3.splice(0, 3, "Let's", "dance");
alert( arr3 )


let arr4 = ["I", "study", "JavaScript", "right", "now"];
let removed = arr4.splice(0, 2);

alert( removed );

let arr5 = ["I", "study", "JavaScript"];

arr5.splice(2, 0, "complex", "language");

alert( arr5 );



let arr6 = ["t", "e", "s", "t"];
alert( arr6.slice(1, 3) );
alert( arr6.slice(-2) );



let arr7 = [1, 2];
alert( arr7.concat([3, 4]) ); 
alert( arr7.concat([3, 4], [5, 6]) );
alert( arr7.concat([3, 4], 5, 6) ); 

["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
  });

  let arr8 = [1, 0, false];

  alert( arr8.indexOf(0) );
  alert( arr8.indexOf(false) );
  alert( arr8.indexOf(null) );
  
  alert( arr8.includes(1) );


const arr9 = [NaN];
alert( arr9.indexOf(NaN) ); 
alert( arr9.includes(NaN) );


let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
let user = users.find(item => item.id == 1);
alert(user.name);


let users2 = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];




alert(users2.findIndex(user => user.name == 'John'));


alert(users2.findLastIndex(user => user.name == 'John'));


let users3 = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length);


let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths);

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr1 = [ 1, 2, 15 ];

arr.sort(compareNumeric);

alert(arr1); 



let names1 = 'Bilbo, Gandalf, Nazgul';

let arr10 = names.split(', ');

for (let name of arr10) {
  alert( `A message to ${name}.` );
}


let str = "test";

alert( str.split('') ); 


let arr11 = [];
arr.reduce((sum, current) => sum + current);


alert(typeof {});
alert(typeof []); 


alert(Array.isArray({}));
alert(Array.isArray([]));


function camelize(str) {
  return str
    .split('-')
    .map(
     
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}


function filterRange(arr, a, b) {
 
  return arr.filter(item => (a <= item && item <= b));
}

let arr12 = [5, 3, 8, 1];

let filtered = filterRange(arr12, 1, 4);

alert( filtered );

alert( arr12 );


function filterRangeInPlace(arr13, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr13[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr13.splice(i, 1);
      i--;
    }
  }

}

let arr14 = [5, 3, 8, 1];

filterRangeInPlace(arr14, 1, 4); // removed the numbers except from 1 to 4

alert( arr14 );


let arr15 = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert( arr15 );


function copySorted(arr) {
  return arr.slice().sort();
}

let arr16 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr16);
alert( sorted );
alert( arr16 );


let john1 = { name: "John", age: 25 };
let pete1 = { name: "Pete", age: 30 };
let mary1 = { name: "Mary", age: 28 };
let users1 = [ john, pete, mary ];
let names2 = users.map(item => item.name);
alert( names2 );


let john2 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };

let users4 = [ john, pete, mary ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

alert( usersMapped[0].id );
alert( usersMapped[0].fullName );


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr17 = [1, 2, 3];
shuffle(arr17);
alert(arr17);


function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let arr18 = [ john, pete, mary ];

alert( getAverageAge(arr18) );



function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
alert( unique(strings) ); 

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
} 


