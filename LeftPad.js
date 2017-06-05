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
    console.log(text.length);


    if (text.length === 5) {
        return text;
    } else if (text.length < 5) {

    }

     save.innerHTML = text;

});

}