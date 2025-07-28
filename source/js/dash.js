// ========== الوضع الليلي ==========
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

// ========== تسجيل الدخول والخروج ==========
function setupAuth() {
  const loginPage = document.getElementById('loginPage');
  const dashboard = document.getElementById('dashboard');
  const loginForm = document.getElementById('loginForm');
  const logoutBtn = document.getElementById('logoutBtn');

  // تحقق من حالة تسجيل الدخول عند تحميل الصفحة
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  if (isLoggedIn) {
    loginPage.classList.add('hidden');
    dashboard.classList.remove('hidden');
  } else {
    loginPage.classList.remove('hidden');
    dashboard.classList.add('hidden');
  }

  // عند تسجيل الدخول
  loginForm?.addEventListener('submit', function (e) {
    e.preventDefault();
    localStorage.setItem("loggedIn", "true");
    loginPage.classList.add('hidden');
    dashboard.classList.remove('hidden');
  });

  // عند تسجيل الخروج
  logoutBtn?.addEventListener('click', function () {
    localStorage.removeItem("loggedIn");
    dashboard.classList.add('hidden');
    loginPage.classList.remove('hidden');
  });
}

// ========== القائمة الجانبية ==========
function setupSidebarToggle() {
  const toggleSidebarBtn = document.getElementById("toggleSidebar");
  const sidebar = document.getElementById("sidebar");

  toggleSidebarBtn?.addEventListener("click", () => {
    sidebar?.classList.toggle("hidden");

    
  });
}

// ========== تنقل بين الأقسام ==========
function setupSectionNavigation() {
  const navLinks = document.querySelectorAll("aside nav a[href^='#']");
  const sections = document.querySelectorAll("main > div[id]");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("href").replace("#", "");
      sections.forEach(section => {
        section.style.display = section.id === targetId ? "block" : "none";
      });
    });
  });

  // عرض جميع الأقسام عند التحميل لأول مرة
  sections.forEach(section => (section.style.display = "block"));
}




function setupSidebarAutoClose() {
  const sidebar = document.getElementById("sidebar");
  const toggleSidebarBtn = document.getElementById("toggleSidebar");

  // عند الضغط على أي رابط داخل القائمة، تُغلق
  sidebar?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        sidebar.classList.add("hidden");
      }
    });
  });

  // عند الضغط خارج القائمة، تُغلق
  document.addEventListener("click", (e) => {
    if (window.innerWidth >= 768) return; // فقط على الموبايل

    const isClickInside = sidebar?.contains(e.target);
    const isToggle = toggleSidebarBtn?.contains(e.target);

    if (!isClickInside && !isToggle) {
      sidebar?.classList.add("hidden");
    }
  });
}
 

// ========== تفعيل الكل عند تحميل الصفحة ==========
window.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  setupThemeToggle();
  setupAuth();
  setupSidebarToggle();
  setupSectionNavigation();
   setupSidebarAutoClose(); 
});