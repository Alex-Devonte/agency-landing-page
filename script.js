document.addEventListener("DOMContentLoaded", function () {
  const menuToggleBtn = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-menu]");

  function toggleMenu() {
    const isExpanded = menuToggleBtn.getAttribute("aria-expanded") === "true";
    menu.classList.toggle("menu-open");
    menuToggleBtn.setAttribute("aria-expanded", !isExpanded);
    menuToggleBtn.setAttribute(
      "aria-label",
      isExpanded ? "Open menu" : "Close menu",
    );

    menuToggleBtn.classList.toggle("menu-active", !isExpanded);
  }

  document
    .querySelectorAll("[data-menu] a,  [data-menu] button")
    .forEach((link) => {
      link.addEventListener("click", () => {
        //Close menu when link or button is clicked
        menu.classList.remove("menu-open");
        menuToggleBtn.setAttribute("aria-expanded", "false");
        menuToggleBtn.setAttribute("aria-label", "Open menu");
        menuToggleBtn.classList.remove("menu-active");
      });
    });

  menuToggleBtn.addEventListener("click", toggleMenu);

  const swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
});
