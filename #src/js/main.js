//мобильное меню
const iconMenu = document.querySelector(".nav__icon");
const menuBody = document.querySelector(".nav__menu");
// для телефона
const phone = document.querySelector(".header__contact");
const menuLink = $(".nav__link");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    phone.classList.toggle("_active");
  });
}

menuLink.on("click", closeMenu);
function closeMenu(event) {
  // закрытие при клике
  document.body.classList.remove("_lock");
  iconMenu.classList.remove("_active");
  menuBody.classList.remove("_active");
  phone.classList.remove("_active");
}
//-----

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

// слайдер отзывов
var reviewsSlider = new Swiper(".reviews__sliders", {
  loop: true,
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
});
//-----
