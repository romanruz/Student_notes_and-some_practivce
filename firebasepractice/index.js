let text = document.getElementById("text");
let btn = document.getElementById('btn');


function setBase(text) {
    let dataRef = firebase.database().ref();
    dataRef.child("ok!").set(text.value)
    console.log(text.value);
}