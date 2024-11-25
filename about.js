new Splide(".referenceSlider", {
  type: "loop",
  perPage: 4,
  rewind: true,
  arrows: false,
  pagination: false,
  autoScroll: {
    speed: 0.5,
  },
  breakpoints: {
    1000: {
      perPage: 2,
    },
    500: {
      perPage: 1,
    },
  },
}).mount(window.splide.Extensions);
