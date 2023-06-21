let user = {
    name: "John",
    age: 30
  };
  

  for (let value of Object.values(user)) {
    alert(value); 
  }



  let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
  
  let doublePrices = Object.fromEntries(
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
  );
  
  alert(doublePrices.meat);



  function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
  
    return sum;
  }
  
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  alert( sumSalaries(salaries) );


  function count(obj) {
    return Object.keys(obj).length;
  }


  