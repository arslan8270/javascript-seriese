alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

if (1 || 0) { // works just like if( true || false )
    alert( 'truthy!' );
  }


  let hour = 9;

  if (hour < 10 || hour > 18) {
    alert( 'The office is closed.' );
  }

  let hours = 12;
  let isWeekend = true;
  if(hours <10 || hours >18 || isWeekend){
    alert('The office is close')
  }