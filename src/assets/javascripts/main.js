

var s= document.querySelector(".masthead");

window.addEventListener("scroll", function() {
  if(window.pageYOffset > 50) {
    s.classList.add("masthead--sticky");
  } else{
    s.classList.remove("masthead--sticky");
  }
});

/* SHOW ELEMENT AFTER PAGE IS SCROLLED 100px */
// var win = window,
//     docEl = document.documentElement,
//     $logo = document.getElementById('logo-scroll');
//
// win.onscroll = function(){
//    var sTop = (this.pageYOffset || docEl.scrollTop)  - (docEl.clientTop || 0);
//    console.log(sTop);
//    $logo.style.display =  sTop > 100 ? "block":"none" ;
// };
  // var h = document.getElementById("header");
  // var readout = document.getElementById("readout");
  // var stuck = false;
  // var stickPoint = getDistance();
  //
  // function getDistance() {
  //   var topDist = h.offsetTop;
  //   return topDist;
  // }
  //
  // window.onscroll = function(e) {
  //   var distance = getDistance() - window.pageYOffset;
  //   var offset = window.pageYOffset;
  //   readout.innerHTML = stickPoint + '   ' + distance + '   ' + offset + '   ' + stuck;
  //   if ( (distance <= 0) && !stuck) {
  //     h.style.position = 'fixed';
  //     h.style.top = '0px';
  //     stuck = true;
  //   } else if (stuck && (offset <= stickPoint)){
  //     h.style.position = 'static';
  //     stuck = false;
  //   }
  // }



    // Steps
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
