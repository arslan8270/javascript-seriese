let user;

alert(user ?? "Anonymous");

let user1 = "John";

alert(user1 ?? "Anonymous");

let firstName = null;
let lastName = null;
let nickName = "Supercoder";


alert(firstName ?? lastName ?? nickName ?? "Anonymous");


let firstName2 = null;
let lastName2 = null;
let nickName2 = "Supercoder";


alert(firstName2 || lastName2 || nickName2 || "Anonymous");

let height = 0;

alert(height || 100);
alert(height ?? 100);

let height3 = null;
let width = null;


let area = (height3 ?? 100) * (width ?? 50);

alert(area);


