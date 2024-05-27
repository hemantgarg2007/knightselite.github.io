document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('a[href^="#"]');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Smooth scrolling for anchor links
  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }
  
  function clickHandler(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const offsetTop = target.offsetTop;
  
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });

    // Close mobile navigation menu after clicking on a link
    navLinks.classList.remove('active');
  }

  // Toggle mobile navigation menu
  navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
});
