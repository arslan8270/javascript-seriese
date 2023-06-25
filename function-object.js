function sayHi() {
    alert("Hi");
  }
  
  alert(sayHi.name);


  let sayHi = function() {
    alert("Hi");
  };
  
  alert(sayHi.name);


  function f(sayHi = function() {}) {
    alert(sayHi.name);
  }
  
  f();


  function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

alert(f1.length); 
alert(f2.length); 
alert(many.length);


function ask(question, ...handlers) {
  let isYes = confirm(question);

  for(let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }

}

ask("Question?", () => alert('You said yes'), result => alert(result));


function sayHi() {
  alert("Hi");


  sayHi.counter++;
}
sayHi.counter = 0;

sayHi();
sayHi(); 

alert( `Called ${sayHi.counter} times` );

function makeCounter() {
  

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  return counter;
}

let counter = makeCounter();
alert( counter() );
alert( counter() );


function makeCounter() {

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  return counter1;
}

let counter1 = makeCounter();

counter.count = 10;
alert( counter() );


let sayHi = function(who) {
  alert(`Hello, ${who}`);
};


let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest");
  }
};

sayHi();

func();


let sayHi = function(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    sayHi("Guest");
  }
};

let welcome = sayHi;
sayHi = null;

welcome();


function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = value => count = value;

  counter.decrease = () => count--;

  return counter;
}


function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

alert( sum(1)(2) );
alert( sum(5)(-1)(2) ); 
alert( sum(6)(-1)(-2)(-3) );
alert( sum(0)(1)(2)(3)(4)(5) );