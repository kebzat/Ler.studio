document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll(".animated-text").forEach(el => {
    const delay = parseFloat(el.dataset.gsapDelay) || 0;

    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
        delay: delay,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true
        }
      }
    );
  });
  
  document.querySelectorAll(".animated-left").forEach(el => {
    const delay = parseFloat(el.dataset.gsapDelay) || 0;
    gsap.fromTo(
      el,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: delay,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true
        }
      }
    );
  });

  document.querySelectorAll(".work__item-border").forEach(el => {
  gsap.fromTo(
    el,
    { width: "0%" },
    {
      width: "100%",
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
        once: true
      }
    }
  );
});
});

document.addEventListener("DOMContentLoaded", () => {
  const inner = document.createElement("div");
  const outer = document.createElement("div");
  const label = document.createElement("div");

  inner.classList.add("custom-cursor-inner");
  outer.classList.add("custom-cursor-outer");
  label.classList.add("custom-cursor-label");
  label.textContent = "Otevřít";

  outer.appendChild(label);
  document.body.appendChild(inner);
  document.body.appendChild(outer);

  let timeout;
  let isHoveringLink = false;

  document.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;

    gsap.to(inner, {
      x: clientX,
      y: clientY,
      duration: 0.1,
      ease: "power2.out"
    });

    gsap.to(outer, {
      x: clientX,
      y: clientY,
      duration: 0.5,
      ease: "power3.out"
    });

    showCursors();
    clearTimeout(timeout);
  });

  document.addEventListener("mousedown", () => {
    gsap.to(outer, {
      scale: 1.6,
      duration: 0.2,
      ease: "power3.out"
    });
  });

  document.addEventListener("mouseup", () => {
    gsap.to(outer, {
      scale: 1,
      duration: 0.3,
      ease: "power3.out"
    });
  });

  document.querySelectorAll(".work__item, a").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      isHoveringLink = true;

      gsap.to(outer, {
        width: 60,
        height: 60,
        backgroundColor: "#00AEBC",
        borderColor: "#00AEBC",
        duration: 0.25,
        ease: "power2.out"
      });

      gsap.to(label, {
        opacity: 1,
        color: "#fff",
        duration: 0.15,
        delay: 0.05
      });
    });

    el.addEventListener("mouseleave", () => {
      isHoveringLink = false;

      gsap.to(outer, {
        width: 30,
        height: 30,
        backgroundColor: "transparent",
        borderColor: "#4C5455",
        duration: 0.25,
        ease: "power2.out"
      });

      gsap.to(label, {
        opacity: 0,
        color: "transparent",
        duration: 0.15
      });
    });
  });

  function showCursors() {
    inner.style.opacity = 1;
    outer.style.opacity = 1;
  }

  document.body.style.cursor = "none";
});
