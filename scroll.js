// const navHeight = document.querySelector("nav").offsetHeight;

// // Attach a click event listener to each nav link
// document.querySelectorAll("nav a").forEach((link) => {
//   link.addEventListener("click", (event) => {
//     event.preventDefault(); // Prevent the default link behavior

//     // Get the target section from the link href
//     const target = document.querySelector(link.getAttribute("href"));

//     // Calculate the target position, subtracting the nav height
//     const position = target.offsetTop - navHeight;

//     // Scroll to the target section with the margin top
//     window.scrollTo({ top: position, behavior: "smooth" });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("#header");
  const intro = document.querySelector("#intro");
  const navLinks = document.querySelectorAll('#nav a[href^="#"]');
  const navToggle = document.querySelector("#nav_toggle");
  const collapseLinks = document.querySelectorAll("[data-collapse]");

  let introHeight = intro.offsetHeight;
  let scrollOffset = window.pageYOffset || document.documentElement.scrollTop;

  checkScroll();

  window.addEventListener("scroll", checkScroll);

  function checkScroll() {
    scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollOffset >= introHeight) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  }

  // Smooth scrolling and active link
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const offsetTop = target.offsetTop - header.offsetHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });

        navLinks.forEach((link) => link.classList.remove("active"));
        this.classList.add("active");
      }
    });
  });

  // Update active navigation link
  function setActiveLink() {
    const offset = header.offsetHeight + 100;
    const currentPos = window.scrollY + offset;
    document.querySelectorAll("section").forEach((section) => {
      const id = section.getAttribute("id");
      const link = document.querySelector(`#nav a[href="#${id}"]`);
      if (
        link &&
        section.offsetTop - offset <= currentPos &&
        section.offsetTop + section.offsetHeight > currentPos
      ) {
        link.classList.add("active");
      } else if (link) {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);

  const navtoggle = document.querySelector("#nav_toggle");
  const nav = document.querySelector("#nav");

  navtoggle.addEventListener("click", function (event) {
    event.preventDefault();

    navToggle.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // Collapse
  const collapseElements = document.querySelectorAll("[data-collapse]");

  collapseElements.forEach(function (element) {
    element.addEventListener("click", function (event) {
      event.preventDefault();

      element.classList.toggle("active");
    });
  });

  // Close modal when link is clicked
  const modalLinks = document.querySelectorAll('#nav a[href^="#"]');
  modalLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const offsetTop = target.offsetTop - header.offsetHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });

        navToggle.classList.remove("active");
        nav.classList.remove("active");
      }
    });
  });
});
