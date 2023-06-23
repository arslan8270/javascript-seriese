function sum(a, b) {
    return a + b;
  }
  
  alert( sum(1, 2, 3, 4, 5) );




function sumAll(...args) {
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
  
  alert( sumAll(1) );
  alert( sumAll(1, 2) );
  alert( sumAll(1, 2, 3) );


  function showName(firstName, lastName, ...titles) {
    alert( firstName + ' ' + lastName );
  
  
    alert( titles[0] );
    alert( titles[1] );
    alert( titles.length );
  }
  
  showName("Julius", "Caesar", "Consul", "Imperator");


  function showName() {
    alert( arguments.length );
    alert( arguments[0] );
    alert( arguments[1] );  

  }  
 
  showName("Julius", "Caesar");

  showName("Ilya");


  function f() {
    let showArg = () => alert(arguments[0]);
    showArg();
  }
  
  f(1);


  alert( Math.max(3, 5, 1) );


  let arr = [3, 5, 1];

alert( Math.max(...arr) );


let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(...arr1, ...arr2) );


let arr3 = [3, 5, 1];
let arr4 = [8, 9, 15];

let merged = [0, ...arr3, 2, ...arr4];

alert(merged);




let arr5 = [1, 2, 3];

let arrCopy = [...arr5]; 


alert(JSON.stringify(arr5) === JSON.stringify(arrCopy));


alert(arr5 === arrCopy);


arr.push(4);
alert(arr5); 
alert(arrCopy);





