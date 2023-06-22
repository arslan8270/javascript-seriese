let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };
  
  let json = JSON.stringify(student);
  
  alert(typeof json);
  
  alert(json);


  let meetup = {
    title: "Conference",
    room: {
      number: 23,
      participants: ["john", "ann"]
    }
  };
  
  alert( JSON.stringify(meetup) );


  let room = {
    number: 23
  };
  
  let meetup1 = {
    title: "Conference",
    participants: ["john", "ann"]
  };
  
  meetup.place = room;
  room.occupiedBy = meetup;
  
  JSON.stringify(meetup);



  let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room
  };
  
  room.occupiedBy = meetup;
  
  alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );



  let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room 
  };
  
  room.occupiedBy = meetup;
  
  alert( JSON.stringify(meetup, function replacer(key, value) {
    alert(`${key}: ${value}`);
    return (key == 'occupiedBy') ? undefined : value;
  }));


  let user = {
    name: "John",
    age: 25,
    roles: {
      isAdmin: false,
      isEditor: true
    }
  };
  
  alert(JSON.stringify(user, null, 2));


  let room = {
    number: 23,
    toJSON() {
      return this.number;
    }
  };
  
  let meetup = {
    title: "Conference",
    room
  };
  
  alert( JSON.stringify(room) );
  
  alert( JSON.stringify(meetup) );



  let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

alert( numbers[1] );


let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user3 = JSON.parse(userData);

alert( user3.friends[1] );



let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };
  
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
  }));
  