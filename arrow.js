let sum =(a,b)=>a+b;

alert(sum(3,2));


let double = n =>n*2;
alert(double(3));

let sayHi = () => alert("Hello!")
sayHi();


let age = prompt("What is your age")
let welcome = (age<18) ?

() =>alert('Hello'):
() =>alert('Greeting');

welcome();


let sum2 = (a,b) =>{
    let result = a+b;
    return result;

};
alert(sum(1,2))



function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );