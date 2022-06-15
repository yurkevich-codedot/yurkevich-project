if (document.querySelector(".header__menu-btn")) {
  document.querySelector(".header__menu-btn").addEventListener("click", (e) => {
    if (document.querySelector("body").classList.contains("block")) {
      document.querySelector("body").classList.remove("block");
    } else {
      document.querySelector("body").classList.add("block");
    }
  });
}
