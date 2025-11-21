// Put your application javascript here

window.addEventListener("DOMContentLoaded", () => {
  const dropdownButtons = document.querySelectorAll("[data-dropdown-button]");
  dropdownButtons.forEach((button) => {
    const menu = button.nextElementSibling;
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      document
        .querySelectorAll(["[data-dropdown-menu].active"])
        .forEach((activeMenu) => {
          if (activeMenu !== menu) {
            activeMenu.classList.remove("active");
            activeMenu.classList.add("hidden");
          }
        });
      menu.classList.toggle("hidden");
      menu.classList.toggle("active");
    });
    document.addEventListener("click", () => {
      document
        .querySelectorAll("[data-dropdown-menu].active")
        .forEach((menu) => {
          menu.classList.remove("active");
          menu.classList.add("hidden");
        });
    });
  });
  const mobileSubmenuButtons = document.querySelectorAll(
    "[data-mobile-submenu-button]"
  );
  mobileSubmenuButtons.forEach((submenuButton) => {
    const submenu = submenuButton.nextElementSibling;

    submenuButton.addEventListener("click", (e) => {
      e.stopPropagation();
      document
        .querySelectorAll("[data-mobile-submenu-menu].active")
        .forEach((activeSubmenu) => {
          if (activeSubmenu !== submenu) {
            activeSubmenu.classList.remove("active");
            activeSubmenu.classList.add("hidden");
          }
        });
      submenu.classList.toggle("hidden");
      submenu.classList.toggle("active");
    });
  });
  const mobileMenuButton = document.querySelector("[data-mobile-menu-button");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  mobileMenuButton.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("active");
  });
  const mobileMenuCloseButton = document.querySelector(
    "[data-mobile-menu-close-button]"
  );
  mobileMenuCloseButton.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("active");
  });
});
