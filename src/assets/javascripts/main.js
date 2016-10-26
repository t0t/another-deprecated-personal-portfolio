var buttonStep1 = document.getElementById("buttonStep1");
var buttonStep2 = document.getElementById("buttonStep2");
var buttonStep3 = document.getElementById("buttonStep3");

//event
buttonStep1.addEventListener("click", goToStep2);
buttonStep2.addEventListener("click", goToStep3);
buttonStep3.addEventListener("click", goToStep1);

//function
function goToStep2() {
  document.getElementById("step1").classList.toggle("hide");
  document.getElementById("step2").classList.toggle("hide");
}

function goToStep3() {
  document.getElementById("step2").classList.toggle("hide");
  document.getElementById("step3").classList.toggle("hide");
}

function goToStep1() {
  document.getElementById("step3").classList.toggle("hide");
  document.getElementById("step1").classList.toggle("hide");
}




var menuItem = document.getElementsByClassName('masthead__menu-item');
console.log(menuItem);
