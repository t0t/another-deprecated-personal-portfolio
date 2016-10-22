$(document).ready(function(){

  $("body").addClass("js");


  // move table of contents from post body to sidebar
  $(".post__body .js-toc").hide().appendTo($(".toc--sidebar")).fadeIn(400);


  // sticky sidebar
  $(".sticky").Stickyfill();

// slider
  $(".slider").slick({

    // normal options...
    infinite: false,
    speed: 1000,

    // the magic
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: false
        }
      }
    ]
  });

  // FitVids init
  $(".main").fitVids();


  // smooth scroll init
  $("a").smoothScroll({offset: -20});


  // lazy load settings
  $("img.load").show().lazyload({
  	effect: "fadeIn",
  	skip_invisible: false
  });


});


// Static comments
(function ($) {
  var $comments = $('.js-comments');

  $('#comment-form').submit(function () {
    var form = this;

    $(form).addClass('disabled');
    $('#comment-form-submit').html('<svg class="icon spin"><use xlink:href="#icon-loading"></use></svg> Loading...');

    $.ajax({
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: $(this).serialize(),
      contentType: 'application/x-www-form-urlencoded',
      success: function (data) {
        $('#comment-form-submit').html('Submitted');
        $('.post__comments-form .js-notice').removeClass('notice--danger').addClass('notice--success');
        showAlert('<strong>Thanks for your comment!</strong> It will show on the site once it has been approved.');
      },
      error: function (err) {
        console.log(err);
        $('#comment-form-submit').html('Submit Comment');
        $('.post__comments-form .js-notice').removeClass('notice--success').addClass('notice--danger');
        showAlert('<strong>Sorry, there was an error with your submission.</strong> Please make sure all required fields have been completed and try again.');
        $(form).removeClass('disabled');
      }
    });

    return false;
  });

  function showAlert(message) {
    $('.post__comments-form .js-notice').removeClass('hidden');
    $('.post__comments-form .js-notice-text').html(message);
  }
})(jQuery);



var menuItem = document.getElementsByClassName('masthead__menu-item');
console.log(menuItem);
