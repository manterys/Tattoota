// Preloader
const dkPreloader = () => {
  const loader = document.querySelector("#preloader");
  const wrapper = document.querySelector("#wrapper");

  window.addEventListener('load', function () {
      loader.style.opacity = 0

      loader.addEventListener('transitionend', function () {
        loader.style.display = 'none'
        wrapper.style.display = "block";
        setTimeout(() => (wrapper.style.opacity = 1), 100);
      });
  });
};
dkPreloader();

// Header
const dkHeader = () => {
  const menuBtn = document.getElementById("btn");
  const btnLine = document.querySelectorAll(".btn-line");
  const overlay = document.querySelector(".nav-overlay");
  const navSide = document.querySelector(".nav-container");

  menuBtn.addEventListener("click", function () {
    btnLine.forEach((item) => item.classList.toggle("close-btn"));
    overlay.classList.toggle("show");
    navSide.classList.toggle("open");
  });

  window.addEventListener("click", function (e) {
    if (e.target == overlay) {
      overlay.classList.remove("show");
      navSide.classList.remove("open");
      btnLine.forEach((item) => item.classList.remove("close-btn"));
    }
  });
  
}
dkHeader();

// Close slide menu on click links
const dkCloseMenu = () => {
  $(document).ready(function () {
    var nav = $(".nav"),
    overlay = $(".nav-overlay"),
    sideBar = $(".nav-container"),
    btnLine = $(".btn-line");
    
    nav.find("a").on("click", function () {
      overlay.removeClass("show");
      sideBar.removeClass("open");
      btnLine.removeClass("close-btn");
    });
  });
}
dkCloseMenu();

// ScrollSpy
const dkScrollSpy = () => {
  const mainNavLinks = document.querySelectorAll(".nav a");
  
  window.addEventListener("scroll", (event) => {
    const fromTop = window.scrollY;
    
    mainNavLinks.forEach((link) => {
      const section = document.querySelector(link.hash);
      
      if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
      ) {
      link.classList.add("active");
      } else {
      link.classList.remove("active");
      }
    });
  });
}
dkScrollSpy();

// ScrollUp
const dkScrollUp = () => {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 160) {
      $(".header-container, .scroll-up").addClass("visible");
    } else {
      $(".header-container, .scroll-up").removeClass("visible");
    }
  });
}
dkScrollUp();

// Smooth scroll
const dkSmoothScroll = () => {
  $(".nav a, .scroll").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      
    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top + 2,
      },
      500
    );
  }
});
}
dkSmoothScroll();

const dkLightbox = () => {
  $(function () {
    const $gallery = $(".gallery-content a").simpleLightbox();
  });
}
dkLightbox();