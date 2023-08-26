const headerSection = document.querySelector(".header_section");
/**
 * navigation Scroll Bar Design
 */
const navBarScroll = () => {
  window.addEventListener("scroll", () => {
    const x = window.screenY;
    if (window.scrollY >= 450) {
      console.log(x);
      headerSection.classList.remove("bg-opacity-25");
    } else {
      headerSection.classList.add("bg-opacity-25");
    }
  });
};

navBarScroll();
