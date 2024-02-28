document.addEventListener("DOMContentLoaded", function () {
    const heroImage = document.getElementById("heroImage");
  
    function startShimmer() {
      if (heroImage) {
        heroImage.classList.add("shimmering");
      }
    }
  
    function stopShimmer() {
      if (heroImage) {
        heroImage.classList.remove("shimmering");
      }
    }
  
    // Start the shimmer animation every 10 seconds
    setInterval(function () {
      startShimmer();
  
      // Stop the shimmer animation after a short duration (e.g., 2 seconds)
      setTimeout(stopShimmer, 2000); 
    }, 10000); // 10 seconds
  
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".navbar ul");
  
    if (burgerMenu && navLinks) {
      burgerMenu.addEventListener("click", function () {
        navLinks.classList.toggle("show");
      });
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('.navbar a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "center" // Scroll to the center of the viewport
          });
          if (navLinks) {
            navLinks.classList.remove("show"); // Close mobile menu after click
          }
        }
      });
    });
  
    // Center h2 tags within the viewport after clicking
    document.querySelectorAll(".page h2").forEach((h2) => {
      h2.addEventListener("click", function () {
        window.scrollTo({
          top: this.offsetTop - window.innerHeight / 2,
          behavior: "smooth"
        });
      });
    });
  
    // Handle window beforeunload event
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  
    // Function to adjust page height
    function adjustPageHeight() {
      const pages = document.querySelectorAll(".page");
      pages.forEach((page) => {
        const contentHeight = page.scrollHeight;
        const windowHeight = window.innerHeight;
        const newMinHeight = Math.max(contentHeight, windowHeight - 160); // 80px padding on top and bottom
        page.style.minHeight = newMinHeight + "px";
      });
    }
  
    // Call the function on page load and window resize
    window.addEventListener("load", adjustPageHeight);
    window.addEventListener("resize", adjustPageHeight);
  
    // Close nav slideout on link click
    const mobileNavLinks = document.querySelectorAll(".navbar ul a");
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navLinks) {
          navLinks.classList.remove("show");
        }
      });
    });
  });
  