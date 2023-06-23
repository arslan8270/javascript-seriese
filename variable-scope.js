{
    // do some job with local variables that should not be seen outside
  
    let message = "Hello"; // only visible in this block
  
    alert(message); // Hello
  }
  
  alert(message); 


  {
   
    let message = "Hello";
    alert(message);
  }
  
  {
   
    let message = "Goodbye";
    alert(message);
  }


  if (true) {
    let phrase = "Hello!";
  
    alert(phrase);
  }
  
  alert(phrase);


  for (let i = 0; i < 3; i++) {
    alert(i);
  }
  
  alert(i);

  function sayHiBye(firstName, lastName) {

    function getFullName() {
      return firstName + " " + lastName;
    }
  
    alert( "Hello, " + getFullName() );
    alert( "Bye, " + getFullName() );
  
  }


  function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  
  alert( counter() );
  alert( counter() );
  alert( counter() );


  function f() {
    let value = 123;
  
    return function() {
      alert(value);
    }
  }
  
  let g = f();


  let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi();



function Counter1() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
  
    this.down = function() {
      return --count;
    };
  }
  
  let counter1 = new Counter1();
  
  alert( counter1.up() );
  alert( counter1.up() ); 
  alert( counter1.down() );


  let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();


function sum(a) {

    return function(b) {
      return a + b;
    };
  
  }
  
  alert( sum(1)(2) );
  alert( sum(5)(-1) );


  function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
  }
  
  let arr1 = [1, 2, 3, 4, 5, 6, 7];
  alert( arr1.filter(inBetween(3, 6)) );


  function inArray(arr1) {
    return function(x) {
      return arr1.includes(x);
    };
  }
  
  let arr2 = [1, 2, 3, 4, 5, 6, 7];
  alert( arr2.filter(inArray([1, 2, 10])) );


  