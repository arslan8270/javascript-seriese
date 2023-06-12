


let userName = 'Johan';
function showMessage()
{
    let userName = 'bob';

    let message = 'Hello' + userName;
    alert(message)
}
showMessage();

alert(userName);


function showMessage(from, text) { 
    alert(from + ': ' + text);
  }
  
  showMessage('Ann', 'Hello!'); 
  showMessage('Ann', "What's up?"); 


  function showMessage(from, text) {

    from = '*' + from + '*'; 
  
    alert( from + ': ' + text );
  }
  
  let from = "Ann";
  
  showMessage(from, "Hello"); 
  

  alert( from ); 



  function showMessage(from, text) {
  if (text === undefined) {
    text = text || 'no text given';
  }

  alert( from + ": " + text );
}



function showMessage(text) {
    
  
    if (text === undefined) { 
      text = 'empty message';
    }
  
    alert(text);
  }
  
  showMessage();


  function showCount(count) {
  
    alert(count ?? "unknown");
  }
  
  showCount(0);
  showCount(null);
  showCount(); 



  function sum(a, b) {
    return a + b;
  }
  
  let result = sum(12, 22);
  alert( result );


  function checkAge(age)
  {
    if(age >=18)
    {
        return true;
    }
    else
    {
        return confirm('Ddo  you have permissson from your parents');
    }
  }

  let age = prompt('how old are you',18);

  if(checkAge(age))
  {
    alert('Access guaranted')
  }else
  {
    alert('Acces denied')
  }

  function showPrimes(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
  
      alert(i);  // a prime
    }
  }
  
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if ( n % i == 0) return false;
    }
    return true;
  }


  function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
     
      return confirm('Did parents allow you?');
    }
  }

  function checkAge(age) {
    if (age > 18) {
      return true;
    }
  
    return confirm('Did parents allow you?');
  }

  //Both above shows the same result

  function checkAge(age)
  {
    return (age>18) ? true : confirm('Did parents allow you?');
  }

  function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }


  function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }







