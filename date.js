let now = new Date();
alert( now );


let Jan01_1970 = new Date(0);
alert( Jan01_1970 );


let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );

let Dec31_1969 = new Date(-24 * 3600 * 1000);
alert( Dec31_1969 );

let date = new Date("2017-01-26");
alert(date);



let date1 = new Date();

alert( date1.getHours() );

alert( date1.getUTCHours() );


alert( new Date().getTimezoneOffset() );


let date2 = new Date(2016, 1, 28);
date2.setDate(date2.getDate() + 2);
alert( date2 );


let date3 = new Date();
date3.setSeconds(date3.getSeconds() + 70);
alert( date3 );


let date4 = new Date(2016, 0, 2);

date4.setDate(1);
alert( date4 );

date4.setDate(0);
alert( date4 );


let date5 = new Date();
alert(+date5);


let start = new Date();
for (let i = 0; i < 100000; i++){
  let doSomething = i * i * i;
}
let end = new Date();
alert( `The loop took ${end - start} ms` );




function diffSubtract(date1, date2) {
    return date2 - date1;
  }
  
  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
  }
  
  function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();
  
    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
  }
  
  alert( 'Time of diffSubtract: ' + bench(diffSubtract) + 'ms' );
  alert( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms' );


  let d1 = new Date(2012, 1, 20, 3, 12);
alert( d1 );

let d2 = new Date("2012-02-20T03:12");
alert( d2 );


function getWeekDay(date6) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date6.getDay()];
  }
  
  let date6 = new Date(2014, 0, 3);
  alert( getWeekDay(date6) );


  function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) {
      day = 7;
    }
  
    return day;
  }

  function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
  }

  
  function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
  
  alert( getLastDayOfMonth(2012, 0) );
  alert( getLastDayOfMonth(2012, 1) );
  alert( getLastDayOfMonth(2013, 1) );



  function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
  }
  
  alert( getSecondsToday() );


  function getSecondsToTomorrow() {
    let now = new Date();
  
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let diff = tomorrow - now;
    return Math.round(diff / 1000); 
  }
