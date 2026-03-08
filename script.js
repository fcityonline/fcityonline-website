document.addEventListener("DOMContentLoaded", function () {

  function loadComponent(id, file, callback) {
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error('Component not found: ' + file);
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
    if(menuToggle){
      menuToggle.addEventListener("click", () => navLinks.classList.toggle("show"));
    }

    const darkToggle = document.getElementById("darkToggle");
    if(darkToggle){
      darkToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const icon = darkToggle.querySelector("i");
        icon.classList.toggle("fa-moon");
        icon.classList.toggle("fa-sun");
      });
    }

    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 50);
    });
  });

  // Load footer
  loadComponent("footer", footerPath);

});
