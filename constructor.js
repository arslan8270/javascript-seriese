function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let user = new User("Jack");
  
  alert(user.name); 
  alert(user.isAdmin); 
  
  


  function BigUser() {

    this.name = "John";
  
    return { name: "Godzilla" };
  }
  
  alert( new BigUser().name );


  let user1 = new User;

let user2 = new User();


let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() );




function Calculator() {

    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
    this.sub = function() {
        return this.a - this.b;
      };  this.mul = function() {
        return this.a * this.b;
      };
  
    this.div = function() {
      return this.a / this.b;
    };
  }
  
  let calculator = new Calculator();
  calculator.read();
  
  alert( "Sum=" + calculator.sum() );
  alert( "Sub=" + calculator.sub() );
  alert( "Mul=" + calculator.mul() );
  alert( "Div=" + calculator.div() );


  function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt('How much to add?', 0);
    };
  
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);



