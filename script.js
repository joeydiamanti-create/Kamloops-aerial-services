// Kamloops Aerial Services — Interactivity Script
// Features: Lightbox viewer for images/videos + smooth scrolling

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for internal links
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // --- LIGHTBOX FUNCTIONALITY ---
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);

  const images = document.querySelectorAll(".image-grid img, .photo-grid img, .video-grid img");
  images.forEach(image => {
    image.addEventListener("click", () => {
      lightbox.classList.add("active");
      const img = document.createElement("img");
      img.src = image.src;
      img.alt = image.alt || "Gallery image";
      // Clear old content
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(img);
    });
  });

  lightbox.addEventListener("click", e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
  });

  console.log("Kamloops Aerial Services interactive scripts loaded.");
});
