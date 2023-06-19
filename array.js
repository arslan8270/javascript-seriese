let arr = new Array();
let arr1 = [];

let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] );
alert( fruits[1] );
alert( fruits[2] );

fruits[2] = 'Pear';
alert( fruits[0] );
alert( fruits[1] );
alert( fruits[2] );

fruits[3] = 'Lemon';
alert( fruits[0] );
alert( fruits[1] );
alert( fruits[2] );
alert( fruits[3] );


let fruits1 = ["Apple", "Orange", "Plum"];

alert( fruits1.length );


let fruits2 = ["Apple", "Orange", "Plum"];

alert( fruits2 );



let arr2 = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
alert( arr2[1].name );
arr2[3]();


let fruits3 = [
    "Apple",
    "Orange",
    "Plum",
  ];

let fruits4 = ["Apple", "Orange", "Plum"];
alert( fruits4[fruits.length-1] );


let fruits5 = ["Apple", "Orange", "Plum"];
alert( fruits5.at(-1) );

let fruits6 = ["Apple", "Orange", "Pear"];
alert( fruits6.pop() );
alert( fruits6 );

let fruits7 = ["Apple", "Orange"];

fruits7.push("Pear");

alert( fruits7 );

let fruits8 = ["Apple", "Orange", "Pear"];
alert( fruits8.shift() );
alert( fruits8 );


let fruits9 = ["Apple", "Orange", "Pear"];

alert( fruits9.shift() );

alert( fruits9 );


let fruits10 = ["Orange", "Pear"];

fruits10.unshift('Apple');

alert( fruits10 );


let fruits11 = ["Apple"];
fruits11.push("Orange", "Peach");
fruits11.unshift("Pineapple", "Lemon");
alert( fruits11 );


let fruits12 = ["Banana"]

let arr3 = fruits12;

alert( arr3 === fruits12 );

arr.push("Pear");

alert( fruits12 );


let fruits13 = [];
fruits13[99999] = 5;
fruits13.age = 25;


let arr4 = ["Apple", "Orange", "Pear"];
for (let i = 0; i < arr.length; i++) {
  alert( arr4[i] );
}


let fruits14 = ["Apple", "Orange", "Plum"];
for (let fruit of fruits14) {
  alert( fruit );
}



let arr5 = ["Apple", "Orange", "Pear"];

for (let key in arr) {
  alert( arr5[key] );
}


let fruits15 = [];
fruits15[123] = "Apple";
alert( fruits15.length );
let arr6 = [1, 2, 3, 4, 5];
arr6.length = 2; 
alert( arr6 );
arr6.length = 5;
alert( arr6[3] );


let arr7 = new Array("Apple", "Pear", "etc");



let arr8 = new Array(2);
alert( arr8[0] );
alert( arr8.length );


let arr9 = [1, 2, 3];
alert( arr9 );
alert( String(arr9) === '1,2,3' ); 


alert( [] + 1 );
alert( [1] + 1 );
alert( [1,2] + 1 );


alert( "" + 1 );
alert( "1" + 1 );
alert( "1,2" + 1 );


alert( [] == [] );
alert( [0] == [0] );


alert( 0 == [] ); 
alert('0' == [] );


let fruits16 = ["Apple","Pear","Orange"];
let shopingcart = fruits16;
shopingcart.push("Banana");
alert(fruits16.length);

let styles = ["Jazz","Blues"]
styles.push("Rock-n-Roll")
styles[Math.floor(styles.length -1)/2]="Classics";
alert(styles.shift());
styles.unshift("Rap","Raggae");


let arr10 = ["a", "b"];

arr10.push(function() {
  alert( this );
})

arr10[2](); 


function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // for each item of arr
      partialSum += item; // add it to partialSum
      maxSum = Math.max(maxSum, partialSum); // remember the maximum
      if (partialSum < 0) partialSum = 0; // zero if negative
    }
  
    return maxSum;
  }
  
  alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
  alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
  alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
  alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
  alert( getMaxSubSum([1, 2, 3]) ); // 6
  alert( getMaxSubSum([-1, -2, -3]) ); // 0