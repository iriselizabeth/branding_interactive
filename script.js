
document.addEventListener("DOMContentLoaded", () => {
    console.log("DesignConf 2025 page loaded");
  });
  
  window.addEventListener('scroll', () => {
    const threshold = window.innerHeight * 0.5;
    document.body.classList.toggle('scrolled', window.scrollY > threshold);
  });
  

