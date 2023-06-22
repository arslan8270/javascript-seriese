let arr = ["John","smith"];
let [firstName,surname] = arr;


alert(firstName);
alert(surname);


let [firstName1, surname1] = "John Smith".split(' ');
alert(firstName);
alert(surname);


let [firstName2, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert( title );


let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);


let user = {
    name: "John",
    age: 30
  };
  for (let [key, value] of Object.entries(user)) {
    alert(`${key}:${value}`);
  }


  let user1 = new Map();
user.set("name", "John");
user.set("age", "30");

for (let [key, value] of user) {
  alert(`${key}:${value}`);
}


let guest = "Jane";
let admin = "Pete";
[guest, admin] = [admin, guest];
alert(`${guest} ${admin}`);


let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1);
alert(name2);


let [name3, name4, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];


alert(rest[0]);
alert(rest[1]);
alert(rest.length);


let [firstName3, surname3] = [];

alert(firstName);
alert(surname);


let [name = "Guest", surname2 = "Anonymous"] = ["Julius"];

alert(name);
alert(surname2);



let options = {
    title1: "Menu",
    width: 100,
    height: 200
  };
  
  let {title1, width, height} = options;
  
  alert(title);  
  alert(width);  
  alert(height);


  let options1 = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  
 
  let {
    size: { 
      width1,
      height1
    },
    items: [item1, item2],
    title2 = "Menu"
  } = options;
  
  alert(title); 
  alert(width);  
  alert(height); 
  alert(item1);  
  alert(item2);


  showMenu("My Menu", undefined, undefined, ["Item1", "Item2"])


  let options3 = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };

  function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {

    alert( `${title} ${width} ${height}` ); }

    let user2 = {
        name: "John",
        years: 30
      };
      
      let {name5, years: age, isAdmin = false} = user2;
      
      alert( name5 );
      alert( age ); 
      alert( isAdmin );


      function topSalary(salaries) {

        let maxSalary = 0;
        let maxName = null;
      
        for(const [name, salary] of Object.entries(salaries)) {
          if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
          }
        }
      
        return maxName;
      }

      