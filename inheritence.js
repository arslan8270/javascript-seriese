class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }
  }
  
  let animal = new Animal("My animal");


  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hides!`);
    }
  }
  
  let rabbit = new Rabbit("White Rabbit");
  
  rabbit.run(5);
  rabbit.hide();


  function f(phrase) {
    return class {
      sayHi() { alert(phrase); }
    };
  }
  
  class User extends f("Hello") {}
  
  new User().sayHi();



  class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    // ...
  }
  
  class Rabbit extends Animal {
  
    constructor(name, earLength) {
      super(name);
      this.earLength = earLength;
    }
  
  
  } 
  

  let rabbit1 = new Rabbit("White Rabbit", 10);
  alert(rabbit.name); 
  alert(rabbit.earLength)