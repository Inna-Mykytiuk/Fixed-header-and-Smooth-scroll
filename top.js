// Get all the links with class 'nav-link'
const links = document.querySelectorAll(".nav-link");

// Loop through each link and add an event listener to it
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    const target = document.querySelector(href);
    const topOffset = 100;
    const elementPosition = target.offsetTop - topOffset;
    window.scroll({
      top: elementPosition,
      behavior: "smooth",
    });
  });
});
