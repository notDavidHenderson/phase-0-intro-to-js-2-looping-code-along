// Code your solutions in this file

let names = ['david','josh', 'anna'];

function writeCards(names,event){
  for (var i = 0; i < names.length; i++) {
    console.log(`thank you, ${names[i]}, for the wonderful ${event} gift!`);

  }
}
writeCards(names,`birthday`);

function countDown(int){
  while (int >= 0 ) {
    console.log(int);
    int--;
  }
}
countDown(10);
