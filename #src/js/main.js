// $(document).ready(function () {
//   // accordeon
//   $(".course__name").click(function (event) {
//     $(this).toggleClass("active").next().slideToggle(300);
//   });
//   // --- end accordeon
// });

document.addEventListener("DOMContentLoaded", () => {
  const accordeons = document.querySelectorAll(".accordeon");

  accordeons.forEach((el) => {
    el.addEventListener("click", (e) => {
      const self = e.currentTarget;
      const title = self.querySelector(".course__name");
      const content = self.querySelector(".course__decription");

      self.classList.toggle("active");

      // if (self.classList.contains("active")) {
      //   content.style.maxHeight = content.scrollHeight + "px";
      // } else {
      // }
    });
  });
});
