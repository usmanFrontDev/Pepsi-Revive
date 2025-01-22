(function () {
  const locomotiveScroll = new LocomotiveScroll();
})();

const CanAnimation = () => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page1wra",
      scroller: "body",
      start: "top -5%",
      end: "top -300%",
      scrub: 1,
      ease: "none",
    },
  });
  tl.to(".picture", {
    ease: "none",
    left: "42%",
    top: "50%",
    transform: "translate(-50%, -50%) rotateZ(120deg) scale(1.2)",
  });
  tl.to(".picture", {
    ease: "none",
    top: "150%",
    left: "20%",
    transform: "translate(-50%, -50%) rotateZ(90deg) scale(1.2)",
  });
  tl.to(".picture", {
    ease: "none",
    left: "50%",
    top: "260%",
    transform: "translate(-50%, -50%) rotateZ(0deg) scale(0.5)",
  });
};
CanAnimation();

const Page2TextAnimation = () => {
  gsap.to(".p2cont h3", {
    opacity: 1,
    stagger: 0.2,
    ease: "none",
    transform: "translateX(0)",
    scrollTrigger: {
      trigger: "#page2",
      start: "top 25%",
      scrub: 3,
      end: "top 0%",
    },
  });
};
Page2TextAnimation();

const Page4Animation = () => {
  gsap.to(".p4cont", {
    duration: 5,
    clipPath: "circle(55% at 50% 100%)",
    scrollTrigger: {
      trigger: "#page4",
      scroller: "body",
      start: "top 20%",
      end: "top 0%",
      scrub: 3,
      ease: "none",
    },
  });
};
Page4Animation();

const Page3CanAnimation = () => {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page3wra",
      scroller: "body",
      start: "top 8%",
      end: "top -35%",
      scrub: 3,
      ease: "none",
    },
  });

  tl2.from(".p3wrapper img", {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) sale(0)",
    ease: "none",
  });
  tl2.to(".p3picture", {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) rotateZ(30deg) scale(0.2)",
    ease: "none",
  });
};
Page3CanAnimation();

const Page5TextAnimate = () => {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page5",
      scroller: "body",
      start: "top 35%",
      end: "top 0%",
      scrub: 2,
      ease: "none",
    },
  });
  tl3.to(
    ".p5upperone h1",
    {
      transform: "translateX(-30%)",
    },
    "a"
  );
  tl3.to(
    ".p5lowerone h1",
    {
      transform: "translateX(0%)",
    },
    "a"
  );
};
Page5TextAnimate();

const Page6CanAnimation = () => {
  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page6",
      start: "top -5%",
      end: "top -300%",
      scrub: 4,
    },
  });
  var tl7 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page6",
      start: "top 10%",
      end: "top -240%",
      scrub: 4,
    },
  });

  tl4.to(".p6sec", {
    x: "-300%",
  });

  tl7.to(".p6sec:nth-child(2) img", {
    delay: 0.5,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) rotate(0deg)",
  });
  tl7.to(".p6sec:nth-child(3) img", {
    delay: 0.5,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) rotate(0deg)",
  });
  tl7.to(".p6sec:nth-child(4) img", {
    delay: 0.5,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) rotate(0deg)",
  });
  document.addEventListener("DOMContentLoaded", () => {
    const b = document.querySelector(".p6inner"); // Target element for background color change
    const pages = document.querySelectorAll(".p6sec"); // Select all the horizontal pages
  
    // Define the color map for each section
    const colors = ["", "#33c233", "#fC6A03", "#0a0a0adb"];
  
    // Create an IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Change background color based on the intersecting page's index
            const index = Array.from(pages).indexOf(entry.target);
            b.style.backgroundColor = colors[index] || ""; // Set color or reset to default
          }
        });
      },
      {
        root: null, // Observes the viewport
        rootMargin: "0px",
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );
  
    // Observe each page
    pages.forEach((page) => observer.observe(page));
  });  
};
Page6CanAnimation();
 
var tls = gsap.timeline({
  scrollTrigger: {
    trigger: "#page7wra",
    start: "top -20%",
    end: "top -200%",
    scrub: 2,
  },
});

tls.to(".p7middleone", {
  transform: "translate(-50%, -50%) scale(120) rotate(-150deg)",
});
