document.addEventListener("DOMContentLoaded", function () {

  /* ---------------- COMPONENT LOADER ---------------- */

  function loadComponent(id, file, callback) {
    fetch(file)
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

    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector("nav ul");

    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
      });
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

    const header = document.querySelector("header");

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

  /* ---------------- TECH MARQUEE ---------------- */

  const track = document.getElementById("techTrack");

  if (track) {
    const clone = track.innerHTML;
    track.innerHTML += clone;
  }

});
