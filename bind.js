let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };
  
  setTimeout(user.sayHi, 1000);


  let f = user.sayHi;
setTimeout(f, 1000);


let user1 = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };
  
  setTimeout(function() {
    user1.sayHi(); 
  }, 1000);


  let user2 = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };
  
  setTimeout(() => user2.sayHi(), 1000);
  
  user = {
    sayHi() { alert("Another user in setTimeout!"); }
  };


  let user3 = {
    firstName: "John"
  };
  
  function func() {
    alert(this.firstName);
  }
  
  let funcUser = func.bind(user);
  funcUser();

  let user4 = {
    firstName: "John"
  };
  
  function func(phrase) {
    alert(phrase + ', ' + this.firstName);
  }

  let funcUser1 = func.bind(user);
  
  funcUser("Hello");


  let user5 = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };
  
  let sayHi = user5.sayHi.bind(user);
 
  sayHi();
  
  setTimeout(sayHi, 1000);


  let user6 = {
    firstName: "John",
    say(phrase) {
      alert(`${phrase}, ${this.firstName}!`);
    }
  };
  
  let say = user6.say.bind(user6);
  
  say("Hello");
  say("Bye");
  

  user6 = {
    sayHi() { alert("Another user in setTimeout!"); }
  };



  function mul(a, b) {
    return a * b;
  }
  
  let double = mul.bind(null, 2);
  
  alert( double(3) ); 
  alert( double(4) ); 
  alert( double(5) );


  function f() {
    alert( this );
  }
  
  let user7 = {
    g: f.bind(null)
  };
  
  user7.g();


  function f() {
    alert(this.name);
  }
  
  f = f.bind( {name: "John"} ).bind( {name: "Pete"} );
  
  f();


  function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user8 = {
    name: 'John',
  
    loginOk() {
      alert(`${this.name} logged in`);
    },
  
    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  
  };
  
  askPassword(user8.loginOk.bind(user), user.loginFail.bind(user));


  