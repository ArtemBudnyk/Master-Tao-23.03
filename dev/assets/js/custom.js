
// first screen slider 

$(document).ready(function(){
      $('.first-screen-slider').slick({
        dots: true,
        Infinity: true,
        appendArrows:'.first-screen-slider__arrows',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              arrows: false,
            }
          },
        ]
      });
});


// form

const checkbox = document.querySelectorAll('[type="checkbox"]');
console.log(checkbox);
checkbox.forEach(item => {
  item.closest('.input-box').classList.add('checkbox-mar');
})

document.getElementById('myfile').onchange = function () {
  document.getElementById('file-name').innerHTML = this.value;
}


// advantage

mobileOnlySlider(".advantages-slider", true, false, 991);

function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
  var slider = $($slidername);
  var settings = {
    mobileFirst: true,
    dots: $dots,
    arrows: $arrows,
    responsive: [
      {
        breakpoint: $breakpoint,
        settings: "unslick"
      }
    ]
  };

  slider.slick(settings);

  $(window).on("resize", function () {
    if ($(window).width() > $breakpoint) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
} // Mobile Only Slider


//delivery

$('.slider-template').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: false,
      }
    },
  ]
});


$('.multiple-items').slick ({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  appendArrows: '.containerSelector'
});