window.onload = init();

function init(){
    var button = document.getElementById("addButton");
    button.onclick = handleButtonClick();
}

function handleButtonClick() {
    alert("Button was clicked!");
}

