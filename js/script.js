document.addEventListener("DOMContentLoaded", function () {

  /* ---------------- COMPONENT LOADER ---------------- */

  const componentVersion = "20260507-footer-icons";

  function loadComponent(id, file, callback) {
    const separator = file.includes("?") ? "&" : "?";

    fetch(`${file}${separator}v=${componentVersion}`, { cache: "no-store" })
      .then(response => {
        if (!response.ok) throw new Error("Component not found: " + file);
        return response.text();
      })
      .then(data => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = data;
        if (callback) callback();
      })
      .catch(err => console.error(err));
  }

  let path = window.location.pathname;

  let headerPath, footerPath;

  if (path.includes("/services/")) {
    headerPath = "../components/header.html";
    footerPath = "../components/footer.html";
  } else {
    headerPath = "./components/header.html";
    footerPath = "./components/footer.html";
  }

  loadComponent("header", headerPath, () => {

    const header = document.querySelector("header");
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = header ? header.querySelector("nav ul") : null;
    let overlay = document.querySelector(".menu-overlay");

    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "menu-overlay";
      document.body.appendChild(overlay);
    }

    if (menuToggle && navLinks) {
      const setMenuIcon = isOpen => {
        menuToggle.classList.toggle("open", isOpen);
      };

      const closeMenu = () => {
        navLinks.classList.remove("show");
        overlay.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        setMenuIcon(false);
      };

      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        overlay.classList.toggle("active");
        const isOpen = navLinks.classList.contains("show");
        menuToggle.setAttribute("aria-expanded", isOpen);
        setMenuIcon(isOpen);
      });

      navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
      });

      overlay.addEventListener("click", closeMenu);
    }

    const darkToggle = document.getElementById("darkToggle");

    if (darkToggle) {
      darkToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const icon = darkToggle.querySelector("i");

        icon.classList.toggle("fa-moon");
        icon.classList.toggle("fa-sun");

      });
    }

    if (header) {
      window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
      });
    }

  });

  loadComponent("footer", footerPath);


  /* ---------------- TYPEWRITER EFFECT ---------------- */

  const textArray = [
    "Fcity Online",
    "Digital Services & IT Solutions",
    "Web Development",
    "SEO & Digital Marketing"
  ];

  let index = 0;
  let charIndex = 0;
  let currentText = "";
  let isDeleting = false;

  const typedText = document.getElementById("typed-text");

  function typeEffect() {

    if (!typedText) return;

    currentText = textArray[index];

    if (!isDeleting) {
      typedText.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    } else {
      typedText.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index++;
      if (index === textArray.length) index = 0;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 90);
  }

  typeEffect();


  /* ---------------- FAQ ACCORDION ---------------- */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(btn => {

  btn.addEventListener("click", () => {

    const answer = btn.nextElementSibling;
    const icon = btn.querySelector("i");

    document.querySelectorAll(".faq-answer").forEach(a=>{
      if(a !== answer){
        a.style.display = "none";
      }
    });

    document.querySelectorAll(".faq-question i").forEach(i=>{
      if(i !== icon){
        i.classList.remove("fa-chevron-up");
        i.classList.add("fa-chevron-down");
      }
    });

    if(answer.style.display === "block"){
      answer.style.display = "none";
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
    }else{
      answer.style.display = "block";
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
    }

  });

});

  /* ---------------- CLASSY TEXT REVEAL ---------------- */

  const revealText = document.querySelectorAll(
    ".hero h1, .hero h2, .hero h3, .hero p, .hero a, " +
    ".hero2 h1, .hero2 h2, .hero2 h3, .hero2 p, .hero2 a, " +
    ".services h2, .service-item h3, .service-item p, " +
    ".why-choose-us h2, .feature-item h3, .feature-item p, " +
    ".professional-section h2, .professional-section p, .professional-section li, " +
    ".faq-title, .faq-question, .faq-answer p, " +
    ".cta h2, .cta p, .cta a, " +
    "footer h3, footer p, footer a"
  );

  revealText.forEach((el, index) => {
    if (el.closest(".tech-track") || el.closest("header")) return;

    el.classList.add("classy-reveal");
    const delay = el.closest(".hero, .hero2") ? index * 0.16 : Math.min(index % 5, 4) * 0.08;
    el.style.animationDelay = `${delay}s`;
  });

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.18,
    rootMargin: "0px 0px -12% 0px"
  });

  revealText.forEach(el => {
    if (el.classList.contains("classy-reveal")) {
      revealObserver.observe(el);
    }
  });

  /* ---------------- TECH MARQUEE ---------------- */

  const track = document.getElementById("techTrack");

  if (track) {
    const clone = track.innerHTML;
    track.innerHTML += clone;
  }

  const appsTrack = document.getElementById("appsTrack");

  if (appsTrack && !appsTrack.dataset.cloned) {
    appsTrack.innerHTML += appsTrack.innerHTML;
    appsTrack.dataset.cloned = "true";
  }

});
