let user = {}; 

alert(user.address.street);

let html = document.querySelector('.elem').innerHTML; 

let user2 = {};

alert(user2.address ? user2.address.street : undefined);

let html2 = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;

let user3 = null;

alert( user3?.address ); 
alert( user3?.address.street );




let userAdmin = {
    admin() {
      alert("I am admin");
    }
  };
  
  let userGuest = {};
  
  userAdmin.admin?.();
  
  userGuest.admin?.();




  let key = "firstName";

let user1 = {
  firstName: "John"
};

let user5 = null;

alert( user5?.[key] ); // John
alert( user5?.[key] ); 




let user4 = null;
let x = 0;

user4?.sayHi(x++); 

alert(x);