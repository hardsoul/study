/*
var i = 10;
while(i--){
  console.log(i);
}
*/

/*
for(var i = 10; i; i--) {
  console.log(i);
}
for(var j = 0; j < 10; j++) {
  console.log(j);
}*/

function gugudan(dan, max) {
  for(var i = 1; i <= (max ? max : 9); i++) {
    console.log(
      dan + ' * ' + i + ' = ' + dan * i
    );
  }
}

gugudan(3, 5);














