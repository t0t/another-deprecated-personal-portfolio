// const x = "blu";
// console.log(x);


// import AOS from 'aos';
// AOS.init();

// var AOS = require('aos');
// AOS.init();

// require(['./node_modules/aos/dist/aos.js'], function(AOS){
//       });
// import AOS from './bower_components/aos/src/js/aos.js';



AOS.init({
 duration: 800
});

(function() {
  'use strict';
  // Scroll
  var s= document.querySelector(".masthead");

  var scrollEffect = function() {
    if(window.pageYOffset > 15) {
      s.classList.add("masthead--sticky");
    } else{
      s.classList.remove("masthead--sticky");
    }
  }

  window.addEventListener("scroll", scrollEffect);
  //


  // TABS
  // var tBtn = document.querySelectorAll('.btn--tabs');
  // console.log(tBtn);
  //
  // for (i = 0; i < tBtn.length; ++i) {
  //   console.log(tBtn[i]);
  //   // tBtn[i].style.color = "green";
  //   tBtn[i].addEventListener("click", showTab);
  // }
  //
  // function showTab() {
  //   // console.log(this);
  //   var tab = document.getElementsByClassName('TabsPanel__tab');
  //   // this.tab.classList.toggle("hide");
  // }


  // Steps
  // var buttonStep1 = document.getElementById("buttonStep1");
  // var buttonStep2 = document.getElementById("buttonStep2");
  // var buttonStep3 = document.getElementById("buttonStep3");
  //
  // //event
  // buttonStep1.addEventListener("click", goToStep2);
  // buttonStep2.addEventListener("click", goToStep3);
  // buttonStep3.addEventListener("click", goToStep1);
  //
  // //function
  // function goToStep2() {
  //   document.getElementById("step1").classList.toggle("hide");
  //   document.getElementById("step2").classList.toggle("hide");
  // }
  //
  // function goToStep3() {
  //   document.getElementById("step2").classList.toggle("hide");
  //   document.getElementById("step3").classList.toggle("hide");
  // }
  //
  // function goToStep1() {
  //   document.getElementById("step3").classList.toggle("hide");
  //   document.getElementById("step1").classList.toggle("hide");
  // }

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






})();
