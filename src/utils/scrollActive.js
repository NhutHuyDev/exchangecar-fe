const scrollActiveFunction = () => {
  let sections = document.querySelectorAll("#car-detail-wrapper section");
  let navitem = document.querySelectorAll(".navbar.sticky-top a");

  window.addEventListener("scroll", () => {
    sections.forEach((section) => {
      let top = window.scrollY;
      if (top < 230) {
        navitem.forEach((item) => {
          item.classList.remove("active");
        });
        return;
      }
      let offset = section.offsetTop - 150;
      let height = section.offsetHeight;
      let id = section.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navitem.forEach((item) => {
          item.classList.remove("active");
          document
            .querySelector(".navbar.sticky-top a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
  });
};

export default scrollActiveFunction;
