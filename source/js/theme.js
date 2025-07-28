// const toggleBtn = document.getElementById("menuToggle");
// const mobileMenu = document.getElementById("mobileMenu");


// toggleBtn.addEventListener("click", (e) => {
//   e.stopPropagation(); 
//   mobileMenu.classList.toggle("hidden");
// });


// document.addEventListener("click", (e) => {
//   const isClickInsideMenu = mobileMenu.contains(e.target);
//   const isClickOnToggle = toggleBtn.contains(e.target);

//   if (!isClickInsideMenu && !isClickOnToggle) {
//     mobileMenu.classList.add("hidden");
//   }
// });




//   const toggleBtn2 = document.getElementById("themeToggle");
// const icon = document.getElementById("themeIcon");

// // استعادة السمة المحفوظة
// if (localStorage.getItem("theme") === "dark") {
//   document.documentElement.classList.add("dark");
//   icon.classList.replace("fa-moon", "fa-sun");
// }

// toggleBtn2.addEventListener("click", () => {
//   const isDark = document.documentElement.classList.toggle("dark");
//   icon.classList.toggle("fa-moon", !isDark);
//   icon.classList.toggle("fa-sun", isDark);
//   localStorage.setItem("theme", isDark ? "dark" : "light");
// });


   function applyTheme() {
      const savedTheme = localStorage.getItem('theme') || 'light';
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      updateToggleButton(savedTheme);
    }

    function updateToggleButton(theme) {
      const icon = document.getElementById('themeIcon');
      if (icon) {
        icon.classList.replace(theme === 'dark' ? 'fa-moon' : 'fa-sun', theme === 'dark' ? 'fa-sun' : 'fa-moon');
      }
    }

    function setupThemeToggle() {
      const toggleBtn = document.getElementById('themeToggle');
      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
          const isDark = document.documentElement.classList.contains('dark');
          const newTheme = isDark ? 'light' : 'dark';
          document.documentElement.classList.toggle('dark');
          localStorage.setItem('theme', newTheme);
          updateToggleButton(newTheme);
        });
      }
    }

    window.addEventListener('DOMContentLoaded', () => {
      applyTheme();
      setupThemeToggle();

      // Hamburger toggle
      const toggleBtn = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");


toggleBtn.addEventListener("click", (e) => {
  e.stopPropagation(); 
  mobileMenu.classList.toggle("hidden");
});


document.addEventListener("click", (e) => {
  const isClickInsideMenu = mobileMenu.contains(e.target);
  const isClickOnToggle = toggleBtn.contains(e.target);

  if (!isClickInsideMenu && !isClickOnToggle) {
    mobileMenu.classList.add("hidden");
  }
});
      
    });



      const loginPage = document.getElementById('loginPage');
    const dashboard = document.getElementById('dashboard');
    const loginForm = document.getElementById('loginForm');
       const logoutBtn = document.getElementById('logoutBtn');
   loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      loginPage.classList.add('hidden');
      dashboard.classList.remove('hidden');
    });

    logoutBtn.addEventListener('click', function () {
      dashboard.classList.add('hidden');
      loginPage.classList.remove('hidden');
    });