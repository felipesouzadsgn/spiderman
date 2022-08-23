/*======= SHOW MENU ======= */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Show Menu */
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu Hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* Remove Menu Mobile */

const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((n) =>
  n.addEventListener("click", () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
  })
);


/*======= GSAP ANIMATION =======*/
document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();

  tl.fromTo(
    ".loader",
    { duration: 2, width: "100vw", ease: "expo.out" },
    { duration: 0.7, width: "0%", delay: 5 }
  )
    .fromTo(
      ".nav__item",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2 }
    )
    .fromTo(
      ".nav__social-link",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2 }
    )

    .fromTo(
      ".nav__bx",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2 }
    );

  /** 
   const timeline = new TimelineMax();
   
  timeline
    .fromTo(
      ".loader",
      2,
      { width: "100%" },
      { width: "0%", delay: 5, ease: Expo.easeInOut }
    )

    .fromTo(
      ".play",
      2,
      { width: "0%", opacity: 0 },
      { width: "100%", opacity: 1, ease: Expo.easeInOut },
      "-=1"
      )
    .fromTo(
      ".nav__logo",
      2,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut } 
    );
    */
});
