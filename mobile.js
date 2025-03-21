(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");
  const menuLinks = document.querySelectorAll(".js-menu-container a");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");

    document.body.style.overflow = isMenuOpen ? "" : "hidden";
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      openMenuBtn.setAttribute("aria-expanded", false);
      document.body.style.overflow = "";
    });
  });

  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    document.body.style.overflow = "";
  });
})();
