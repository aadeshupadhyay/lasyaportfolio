/**
 * Mobile Navigation – Vanilla JS
 * Drop this script into any page. It finds the existing header elements
 * and builds a toggleable mobile dropdown automatically.
 * No jQuery, no Bootstrap, no React.
 */
(function () {
  "use strict";

  /* ── Locate existing elements ─────────────────────────────── */
  var header = document.querySelector("header");
  if (!header) return;

  // Desktop nav – the <nav> inside the header
  var desktopNav =
    header.querySelector("nav.hidden.md\\:flex") ||
    header.querySelector("nav.hidden") ||
    header.querySelector("nav");
  if (!desktopNav) return;

  // The hamburger button: look for one that's already there
  var menuBtn =
    header.querySelector("button.md\\:hidden") ||
    header.querySelector('button[aria-label*="menu" i]') ||
    header.querySelector('button[aria-label*="Menu"]');

  // If no hamburger button exists, create one
  if (!menuBtn) {
    menuBtn = document.createElement("button");
    menuBtn.className = "md:hidden text-on-surface-variant";
    menuBtn.setAttribute("aria-label", "Open menu");
    menuBtn.innerHTML = '<span class="material-symbols-outlined">menu</span>';
    // Insert it into the header's inner container (the flex div)
    var headerInner = header.querySelector("div") || header;
    headerInner.appendChild(menuBtn);
  }

  /* ── Build mobile dropdown ────────────────────────────────── */
  var mobileNav = document.createElement("nav");
  mobileNav.id = "mobile-nav";
  mobileNav.setAttribute("aria-label", "Mobile navigation");

  // Clone links from the desktop nav
  var links = desktopNav.querySelectorAll("a");
  links.forEach(function (link) {
    var a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.textContent.trim();
    if (link.getAttribute("aria-current") === "page") {
      a.classList.add("mobile-nav-active");
    }
    mobileNav.appendChild(a);
  });

  // Insert dropdown right after the header
  header.insertAdjacentElement("afterend", mobileNav);

  /* ── Inject styles (once) ─────────────────────────────────── */
  var style = document.createElement("style");
  style.textContent =
    /* The mobile dropdown container */
    "#mobile-nav {" +
    "  display: none;" +
    "  flex-direction: column;" +
    "  background: #fcf9f8;" +
    "  border-bottom: 1px solid rgba(62,68,74,0.15);" +
    "  padding: 0.75rem 5vw 1rem;" +
    "  position: sticky;" +
    "  top: 96px;" +
    "  z-index: 49;" +
    "  box-shadow: 0 4px 12px rgba(0,0,0,0.04);" +
    "}" +
    "#mobile-nav.active {" +
    "  display: flex;" +
    "}" +
    "#mobile-nav a {" +
    "  padding: 0.75rem 0;" +
    "  font-family: 'Inter', sans-serif;" +
    "  font-size: 16px;" +
    "  color: #444653;" +
    "  text-decoration: none;" +
    "  border-bottom: 1px solid rgba(62,68,74,0.08);" +
    "  transition: color 0.2s ease;" +
    "}" +
    "#mobile-nav a:last-child {" +
    "  border-bottom: none;" +
    "}" +
    "#mobile-nav a:hover," +
    "#mobile-nav a:focus {" +
    "  color: #0738a5;" +
    "}" +
    "#mobile-nav a.mobile-nav-active {" +
    "  color: #0738a5;" +
    "  font-weight: 500;" +
    "}" +
    /* Hamburger icon – no rotation needed since we swap text */
    "#mobile-menu-btn .material-symbols-outlined {" +
    "  transition: color 0.2s ease;" +
    "}" +
    /* Hide dropdown on desktop (≥768px) */
    "@media (min-width: 768px) {" +
    "  #mobile-nav { display: none !important; }" +
    "  #mobile-menu-btn { display: none !important; }" +
    "}";
  document.head.appendChild(style);

  /* ── Wire up the toggle ───────────────────────────────────── */
  menuBtn.id = "mobile-menu-btn";
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.setAttribute("aria-controls", "mobile-nav");

  var iconSpan = menuBtn.querySelector(".material-symbols-outlined");

  menuBtn.addEventListener("click", function () {
    var isOpen = mobileNav.classList.toggle("active");
    menuBtn.classList.toggle("is-open", isOpen);
    menuBtn.setAttribute("aria-expanded", String(isOpen));

    // Swap icon text between "menu" and "close"
    if (iconSpan) {
      iconSpan.textContent = isOpen ? "close" : "menu";
    }
  });

  /* Close when a link is tapped */
  mobileNav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      mobileNav.classList.remove("active");
      menuBtn.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
      if (iconSpan) iconSpan.textContent = "menu";
    }
  });

  /* Close on Escape key */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileNav.classList.contains("active")) {
      mobileNav.classList.remove("active");
      menuBtn.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
      if (iconSpan) iconSpan.textContent = "menu";
      menuBtn.focus();
    }
  });
})();
