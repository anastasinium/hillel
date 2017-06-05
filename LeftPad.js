window.onload = function loadPage() {

//
//function leftPad() {
//var text = document.getElementById('text').value;
//
//if (text.length === 5) {
//    return text;
//}


//}

var add = document.getElementById('add');

add.addEventListener('click', function() {
    var text = document.getElementById('text').value;
    var save = document.getElementById('save');
    var num = text.length;
    console.log(num);


    if (num === 5) {
        save.innerHTML = text;

    } else if (num < 5) {
        var newText = text.padStart(5);
        console.log('"' + newText + '"');
    }

//     save.innerHTML = text;

});

}