export let settings = {
  dots: false,
  lazyLoad: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        autoplay: true,
      },
    },
  ],
};
