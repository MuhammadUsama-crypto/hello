// let x = "Some of the most-used operations on strings are to check their length";





// function colorChange() {
//     document.getElementById('para').innerHTML = x;
//     document.getElementById('para').style.color = "blue";
//     document.getElementById('para').style.backgroundColor = "aqua";
// }


function focusEvent() {
    document.getElementById('form').style.backgroundColor= "red";
}
function blurEvent() {
    document.getElementById('form').style.backgroundColor= "";
}

function changeEvent()  {
    let x = document.getElementById('form').value;
    document.getElementById('output').innerHTML = x;
}
function inputEvent()  {
    let x = document.getElementById('form').value;
    document.getElementById('output').innerHTML = x;
}
function selectEvent()  {
    let x = document.getElementById('form').value;
    document.getElementById('output').innerHTML = x;
}