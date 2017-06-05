window.onload = function loadPage() {

var num = 5;
var save = document.getElementById('save');

function leftPad(name, num) {
   if (name.length === num) {
        console.log('"' + name + '"');
        save.innerHTML = '"' + name + '"';
   } else if (name.length === 0) {
        console.log('Please, enter text!');
        save.innerHTML = 'Please, enter text!';
   } else if (name.length < num) {
        var newName = name.padStart(num);
        console.log('"' + newName + '"');
        save.innerHTML = '"' + newName + '"';
   } else if (name.length > num) {
        console.log('Please, enter correct text');
        save.innerHTML = 'Please, enter correct text';
   }
}

var add = document.getElementById('add');

add.addEventListener('click', function() {
    var name = document.getElementById('text').value;
    leftPad(name, num);
});

}