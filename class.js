class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      alert(this.name);
    }
  
  }
  

  let user = new User("John");
  user.sayHi();




function User1(name) {
    this.name = name;
  }
 
  User1.prototype.sayHi = function() {
    alert(this.name);
  };
  
  let user1 = new User("John");
  user.sayHi();


  class User2 {
    constructor() {}
  } 
  
  alert(User2);

  let User = class MyClass {
    sayHi() {
      alert(MyClass);
    }
  };
  
  new User().sayHi();
  
  alert(MyClass);

  function makeClass(phrase) {
 
    return class {
      sayHi() {
        alert(phrase);
      }
    };
  }

  let User = makeClass("Hello");
  
  new User().sayHi(); 


  class User {

    constructor(name) {
     
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user3 = new User("John");
  alert(user.name);
  
  user3 = new User3("");


  class User {

    ['say' + 'Hi']() {
      alert("Hello");
    }
  
  }
  
  new User4().sayHi();



  class User {
    name = "John";
  
    sayHi() {
      alert(`Hello, ${this.name}!`);
    }
  }
  
  new User().sayHi();


  class User {
    name = "John";
  }
  
  let user5 = new User();
  alert(user5.name);
  alert(User5.prototype.name);


  class Button {
    constructor(value) {
      this.value = value;
    }
  
    click() {
      alert(this.value);
    }
  }
  
  let button = new Button("hello");
  
  setTimeout(button.click, 1000);




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

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }

  stop() {
    super.stop();
    this.hide();
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5);
rabbit.stop();