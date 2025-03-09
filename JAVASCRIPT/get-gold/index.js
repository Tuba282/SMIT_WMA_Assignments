gsap.registerPlugin(ScrollTrigger);

gsap.from(".logo div", {
  opacity: 0,
  delay: 1,
  x: 20,
});

const menu_items = document.querySelector(".menu-items");

gsap.from(menu_items.children, {
  opacity: 0,
  x: 0,
  duration: 1,
  delay: 0.5,
  stagger: {
    amount: 1,
  },
});
// gsap.utils.toArray("h1 , h2").forEach((heading) => {
//   gsap.fromTo(heading,
//     {
//       opacity: 0,
//       x: 200,
//       letterSpacing: "5px",
//       skewX: 65,
//     },
//     {
//       opacity: 1,
//       x: 0,
//       letterSpacing: "0px",
//       skewX: 0,
//       duration: 1,
//       delay: 0.5,
//       scrollTrigger: "h1",
//     }
//   );
// });

gsap.fromTo(
  ".section-one h1 ,.section-one h2 ,.section-one p,.section-one button",
  {
    opacity: 0,
    x: 300,
    letterSpacing: "5px",
    skewX: 65,
  },
  {
    opacity: 1,
    x: 0,
    letterSpacing: "0px",
    skewX: 0,
    duration: 1,
    delay: 0.5,
    scrollTrigger: ".section-one",
  }
);

gsap.fromTo(
  ".section-two h1, .section-two h2, .section-two p, .section-two button",
  {
    opacity: 0,
    x: -300,
    letterSpacing: "5px",
    skewX: 65,
  },
  {
    opacity: 1,
    x: 0,
    letterSpacing: "0px",
    skewX: 0,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".section-two",
      start: "top bottom", //when scroll start
      end: "bottom center ", //when scroll end
      scrub: true, // Smooth animation on scroll
    },
  }
);

gsap.fromTo(
  ".section-three h1, .section-three h2, .section-three p",
  {
    opacity: 0,
    x: 400,
    letterSpacing: "5px",
    skewX: 65,
  },
  {
    opacity: 1,
    x: 0,
    letterSpacing: "0px",
    skewX: 0,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".section-three",
      start: "top bottom",
      end: "center center",
      scrub: true,
    },
  }
);
gsap.fromTo(
  ".section-four .left-side ",
  {
    opacity: 0,
    x: -300,
  },
  {
    opacity: 1,
    x: 0,
    duration: 2,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".section-three",
      start: "top bottom",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".section-four .right-side",
  {
    opacity: 0,
    x: 300,
  },
  {
    opacity: 1,
    x: 0,
    duration: 2,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".section-three",
      start: "top bottom",
      scrub: true,
    },
  }
);

// card section

gsap.fromTo(
  ".card",
  {
    opacity: 0,
    y: 700,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    delay: 0,
    scrollTrigger: {
      trigger: ".section-three",
      start: "top bottom",
      scrub: true,
    },
  }
);

// footer-section

gsap.fromTo(
  ".footer-section .left-side .title",
  {
    opacity: 0,
    x: 300,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 2,
    scrollTrigger: {
      trigger: ".footer-section",
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".footer-section .container .right-side .title",
  {
    opacity: 0,
    x: -300,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 2,
    scrollTrigger: {
      trigger: ".footer-section",
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".logo-star",
  {
    rotation: 450,
    opacity: 0,
    y: 100,
  },
  {
    rotation: 0,
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 1.5,
    scrollTrigger: ".logo-star",
  }
);

gsap.fromTo(
  ".section-one .right-side img",
  {
    opacity: 0,
    scale: 0,
  },
  { opacity: 1, scale: 1, duration: 1, delay: 0.5 }
);

gsap.fromTo(
  ".rotation",
  {
    opacity: 0,
    rotation: 350,
    scale: 0.2,
  },
  {
    //wo ghoom k aye
    opacity: 1,
    rotation: 0,
    scale: 1,
    duration: 1,
    delay: 0.3,
    scrollTrigger: ".rotation",
  }
);
gsap.fromTo(
  ".hand",
  {
    scale: 0.2,
    opacity: 0,
    skewY: 40,
  },
  {
    scale: 1,
    opacity: 1,
    skewY: 0,
    duration: 1,
    delay:.2,
    scrollTrigger: ".hand",
  }
);
const menu = document.querySelector(".menu");

gsap.from(menu.children, {
  opacity: 0,
  x: 50,
  duration: 1,
  delay: 0.5,
  stagger: {
    amount: 1,
  },
  scrollTrigger: {
    trigger: menu.children,
  },
});
