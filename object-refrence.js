

let user1 = { name: 'John' };

let admin1 = user1;

admin1.name = 'Pete';

alert(user1.name);
alert("This is user1")
alert(user1.name);


let a = {};
let b = a; 

alert( a == b ); 
alert( a === b );


let c = {};
let d ={};
alert(a == b);


const user = {
    name: "John"
  };
  
  user.name = "Pete"; 
  
  alert(user.name);


  let user3 = {
    name :"john",
    age :30
  };
  let clone = {};
  for (let key in user){
    clone[key] = user[key];
  }

  clone.name = "peter";
  alert(user.name);


let user4 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
Object.assign(user4, permissions1, permissions2);
alert(user.name);
alert(user.canView);
alert(user.canEdit);


let user5 = {name: "john"}
object.assign(user5, {name:"Pete"});
alert(user5.name);



  
  let user7 = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  alert( user7.sizes.height ); 


  let user9 = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone3 = structuredClone(user9);
  
  alert( user9.sizes === clone3.sizes ); 
  
 
  user9.sizes.width = 60;    
  alert(clone3.sizes.width);