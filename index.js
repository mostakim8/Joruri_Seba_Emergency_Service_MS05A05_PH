
      const menuToggle = document.getElementById("menuToggle");
      const mobileMenu = document.getElementById("mobileMenu");
      const closeMenu = document.getElementById("closeMenu");

      menuToggle.addEventListener("click", () => {
        mobileMenu.classList.remove("hidden");
        menuToggle.classList.add("hidden");
      });

      closeMenu.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuToggle.classList.remove("hidden");
      });
    