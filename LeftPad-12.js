var name = 'Max';
var num = 5;

function leftPad(name, num) {
   if (name.length === num) {
        console.log(name);
   } else if (name.length < num) {
        var newName = name.padStart(num);
        console.log('"' + newName + '"');
   } else if (name.length > num) {
        console.log('Please, enter correct text');

   } else if (name.length === 0) {
        console.log('Please, enter your name!');
   }
}

