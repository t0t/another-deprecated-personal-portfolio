
(function() {
  // 'use strict';

  AOS.init({
    duration: 800
  });

  // Anime


  // Tilter
  var tiltSettings = [
			{},
			{
				movement: {
					imgWrapper : {
						translation : {x: 10, y: 10, z: 30},
						rotation : {x: 0, y: -10, z: 0},
						reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
					},
					lines : {
						translation : {x: 10, y: 10, z: [0,70]},
						rotation : {x: 0, y: 0, z: -2},
						reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
					},
					caption : {
						rotation : {x: 0, y: 0, z: 2},
						reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
					},
					overlay : {
						translation : {x: 10, y: -10, z: 0},
						rotation : {x: 0, y: 0, z: 2},
						reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
					},
					shine : {
						translation : {x: 100, y: 100, z: 0},
						reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
					}
				}
			}
			];

			var idx = 0;
			[].slice.call(document.querySelectorAll('.tilter')).forEach(function(el, pos) {
				idx = pos%2 === 0 ? idx+1 : idx;
				new TiltFx(el, tiltSettings[idx-1]);
			});

  // Scroll
  var s = document.querySelector(".masthead");

  var scrollEffect = function() {
    if(window.pageYOffset > 150) {
      s.classList.add("masthead--sticky");
    } else{
      s.classList.remove("masthead--sticky");
    }
  }

  window.addEventListener("scroll", scrollEffect);
  //

  // TABS
  // var btn = document.querySelectorAll(".btn");
  // console.log(btn[2]);
  // function action() {
  //   console.log('clickkkk');
  //   console.log(this);
  // }
  //
  // btn.addEventListener("click", action);

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
