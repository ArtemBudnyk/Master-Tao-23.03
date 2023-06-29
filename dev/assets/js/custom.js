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