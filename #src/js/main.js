// accordeon
document.addEventListener("DOMContentLoaded", () => {
  const accordeons = document.querySelectorAll(".accordeon");

  accordeons.forEach((el) => {
    el.addEventListener("click", (e) => {
      const self = e.currentTarget;
      const title = self.querySelector(".course__name");
      const content = self.querySelector(".course__decription");

      self.classList.toggle("active");
    });
  });
});

//
var reviewsSlider = new Swiper(".reviews__sliders", {
  loop: true,
  // autoplay: {
  //   //delay: 7000,
  // },
  navigation: {
    nextEl: ".reviews-button--right",
    prevEl: ".reviews-button--left",
    clickable: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  // отключение прокрутки при наведении мыши
  // on: {
  //   init() {
  //     this.el.addEventListener("mouseenter", () => {
  //       this.autoplay.stop();
  //     });

  //     this.el.addEventListener("mouseleave", () => {
  //       this.autoplay.start();
  //     });
  //   },
  // },
});
//-----
