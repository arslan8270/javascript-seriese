

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "You agreed." );
  }
  
  function showCancel() {
    alert( "You canceled the execution." );
  }
  

  ask("Do you agree?", showOk, showCancel);


  let age = prompt("What is your age?", 18);
if (age < 18) {

  function welcome() {
    alert("Hello!");
  }

} else {

  function welcome() {
    alert("Greetings!");
  }

}

welcome(); 



let age2 = prompt("What is your age?", 18);

let welcome;

if (age2 < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); 


let age3 = prompt("What is your age?", 18);

let welcome = (age3 < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome();




