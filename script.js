// ==================== PAGE TRANSITION EFFECT ====================
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");

  const links = document.querySelectorAll("a[href]");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = link.getAttribute("href");

      // If it's an anchor link or external link, skip animation
      if (target.startsWith("#") || link.target === "_blank") return;

      e.preventDefault();
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = target;
      }, 150); // match CSS transition duration
    });
  });
});

// ==================== SKILL BAR ANIMATION ====================

// Animate technical skill bars
document.querySelectorAll(".progress-bar div").forEach((bar) => {
  const target = parseInt(bar.textContent);
  bar.style.width = "0%";
  let current = 0;
  const interval = setInterval(() => {
    if (current >= target) {
      clearInterval(interval);
    } else {
      current++;
      bar.style.width = current + "%";
      bar.textContent = current + "%";
    }
  }, 15); // Speed of animation
});

// Animate circular skill progress
document.querySelectorAll(".circle").forEach((circle) => {
  const valueElement = circle.querySelector(".value");
  const label = circle.querySelector(".label").textContent;
  const target = parseInt(valueElement.textContent);
  let current = 0;
  const interval = setInterval(() => {
    if (current > target) {
      clearInterval(interval);
    } else {
      valueElement.textContent = current + "%";
      circle.style.background = `conic-gradient(cyan ${current}%, #1e293b ${current}%)`;
      current++;
    }
  }, 15); // Speed of animation
});

// ==================== SIDEBAR ACTIVE LINK HIGHLIGHT ====================
window.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;

  if (currentPath.includes("index")) {
    document.getElementById("nav-home")?.classList.add("active");
  } else if (currentPath.includes("about")) {
    document.getElementById("nav-about")?.classList.add("active");
  } else if (currentPath.includes("skills")) {
    document.getElementById("nav-skills")?.classList.add("active");
  } else if (currentPath.includes("contact")) {
    document.getElementById("nav-contact")?.classList.add("active");
  }
});
