var message = "Hi";
alert(message);

if (true) {
    var test = true;
  }
  
  alert(test);

  if (true) {
    var test = true;
  }
  
  alert(test);


  if (true) {
    let test = true;
  }
  
  alert(test);


  for (var i = 0; i < 10; i++) {
    var one = 1;
  
  }
  
  alert(i);
  alert(one);


  function sayHi() {
    if (true) {
      var phrase = "Hello";
    }
  
    alert(phrase); 
  }
  
  sayHi();
  alert(phrase); 


  var user = "Pete";

var user = "John";


alert(user);




function sayHi() {
    phrase = "Hello";
  
    alert(phrase);
  
    var phrase;
  }
  sayHi();


  function sayHi() {
    var phrase;
  
    phrase = "Hello";
  
    alert(phrase);
  }
  sayHi();


 // Ways to create IIFE

(function() {
    alert("Parentheses around the function");
  })();
  
  (function() {
    alert("Parentheses around the whole thing");
  }());
  
  !function() {
    alert("Bitwise NOT operator starts the expression");
  }();
  
  +function() {
    alert("Unary plus starts the expression");
  }();