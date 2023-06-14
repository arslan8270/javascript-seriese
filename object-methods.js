


  let user1 = {
    name: "John",
    age: 30,
  
    sayHi() {
      alert(this.name );
    }
  
  };
  
  
  let admin = user1;
  user1 = null;
  
  admin.sayHi();

  let user2 = {name:"John"};
  let admin1 = {name: "Admin"};
  function sayHi(){
    alert(this.name)
  }
  user1.f = sayHi;
  admin1.f = sayHi;

  user1.f();
  admin1.f();


  let user3 = {
    firstName: "Ilya",
    sayHi() {
      let arrow = () => alert(this.firstName);
      arrow();
    }
  };
  
  user3.sayHi();


  function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name );




  let calculator = {
    sum() {
      return this.a + this.b;
    },
    sub() {
      return this.a - this.b;
    },
    
    mul() {
      return this.a * this.b;
    },
    div() {
      return this.a / this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.sub() );
  alert( calculator.mul() );
  alert( calculator.div() );


  let ladder = {
    step: 3,
    up()
    {
      this.step++;
    },
    down(){
      this.step--;
    },
    showStep: function(){
      alert(this.step);
    }
  }