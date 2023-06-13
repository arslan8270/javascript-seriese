let user1 = {
    name: "john",
    age: 30
    
};
alert(user1.name);
alert(user1.age);

user1.isAdmin = true;
delete user1.age;


let user2 = {};


user2["likes birds"] = true;


alert(user2["likes birds"]);


delete user2["likes birds"];

let user3 = {
    name: "John",
    age: 30
  };
  
  let key = prompt("What do you want to know about the user?", "name");

  alert( user3[key] );


  let fruit = prompt("Which fruit to buy","banana");
  let bag = {
    [fruit] : 5,
  };
  alert(bag.banana);

  function makeUser(name,age){
    return{
        name:name,
            age:age
    };

  }


  let user4 = makeUser("John",30)
  alert(user4.name);

  function makeUser(name, age) {
    return {
      name, 
      age,  
     
    };
  }

  let obj = {
  for: 1,
  let: 2,
  return: 3
};

alert( obj.for + obj.let + obj.return );


let obj1 = {
    0: "test" // same as "0": "test"
  };
  
  // both alerts access the same property (the number 0 is converted to string "0")
  alert( obj1["0"] ); // test
  alert( obj1[0] );

  let user6 = {};

alert( user6.noSuchProperty === undefined );


let user7 = { name: "John", age: 30 };

alert( "age" in user7 ); 
alert( "blabla" in user7 );


let user8 = { age: 30 };

let key1 = "age";
alert( key1 in user8 );



let user9 = {
    name: "John",
    age: 30,
    isAdmin: true
  };

  
  for (let key2 in user9) {
  
    alert( key2 );  
   
    alert( user9[key2] );}


    let codes = {
        "49": "Germany",
        "41": "Switzerland",
        "44": "Great Britain",
      
        "1": "USA"
      };
      
      for (let code in codes) {
        alert(code);
      }

    
      let codes1 = {
        "+49": "Germany",
        "+41": "Switzerland",
        "+44": "Great Britain",
        // ..,
        "+1": "USA"
      };
      
      for (let code in codes1) {
        alert( +code ); // 49, 41, 44, 1
      }


      let user ={ };
      user.name = "john";
      user.surname = "smith";
      user.name = "Peter";
      delete user.name;

      function isEmpty(obj){
        for(let key in  obj){
          return false;
        }
        return true;
      }


      let salaries = {
        john:100,
        Ann:160,
        Peter:130
      };
      let sum =0;
      for(let key in salaries){
        sum += salaries[key];
      }
      alert(sum)


        function multiplyNumeric(obj){
          for(let key in obj){
            if(typeof obj[key] == 'number'){
              obj[key] *=2;
            }
        }
      }

