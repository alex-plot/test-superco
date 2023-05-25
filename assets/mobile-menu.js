function toggleMenu() {
    let menu = document.getElementById('mobile-menu');
    let menuText = document.getElementById('menu-text');
    menu.classList.toggle("show-menu");
    if (menu.classList.contains("show-menu")) {
      menuText.textContent = "CLOSE MENU";
    } else {
      menuText.textContent = "MENU";
    }
}