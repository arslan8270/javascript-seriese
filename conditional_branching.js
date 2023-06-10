let year = prompt("In which year ECMA script 2015 was published");
if(year==2015) alert("You are right!")
else
alert("You are wrong");


if(year==2015){
    alert("Thats correct!")
    alert("You are so smart!")
}

if(year<2015){
    alert("Too early")
}
else if(year>2015)
{
    alert("too late")
}
else{
    alert("exactly")
}

let accessedAllowed;
let age = prompt("How old are you",'');
if(age>=18){
    accessedAllowed = "bachy nhi rhy ho"
}
else{
    accessedAllowed= "abi tum bachy ho";
}
alert(accessedAllowed);

let accessAllowed = (age>18) ? true : false;

let age1 = prompt('age?',18);
let message = (age<3) ? 'Hi Baby':
(age <18) ? 'Hello':
(age<100) ? 'Greetings':
'What an unusual age!';
alert(message);

let company = prompt('whichcompany created javascript','');
(company =='Netscape') ?
alert('Right!') : alert('Wrong!')


if ("0") {
    alert( 'Hello' );
  }

let a = prompt('What is the official name of Javascript','');

if(a == 'Ecmascript')
{
    alert("Right");
}
else{
    alert('Wrong! EcmaSscript');
}

let number = prompt('Enter the number','');
if(number > 0)
{
    alert('1')
}
else if(number < 0)
{
    alert('-1')
}
else if(number == 0)
{
    alert('0')
}

let result;

(a+b <4) ?
alert(result='Below') :
alert(result='over');


let message1 = (login == 'Employee') ? 'Hello':
(login == 'director') ? 'Greeting':
(login == '') ? 'No Login':
'';





