const iconLinks = [
  ["Facebook", "https://www.facebook.com/ethan.dao.realtortx/", "icon-facebook"],
  ["YouTube", "https://www.youtube.com/@ethandaorealtor", "icon-youtube"],
  ["Instagram", "https://www.instagram.com/ethandao.realtor/", "icon-instagram"],
  ["TikTok", "https://www.tiktok.com/@ethandaorealtor", "icon-tiktok"],
  ["Zillow", "https://www.zillow.com/profile/ethandaorealtor", "icon-zillow"],
];

function buildSocialLinks(target) {
  target.innerHTML = iconLinks
    .map(
      ([label, href, icon]) =>
        `<a href="${href}" target="_blank" rel="noopener noreferrer" aria-label="Ethan Dao on ${label}" title="${label}"><svg><use href="#${icon}"></use></svg></a>`
    )
    .join("");
}

document.querySelectorAll(".social-links,.floating-social").forEach(buildSocialLinks);

const navbar = document.querySelector("[data-navbar]");
if (navbar) {
  const updateNavbar = () => navbar.classList.toggle("scrolled", window.scrollY > 80);
  updateNavbar();
  window.addEventListener("scroll", updateNavbar, { passive: true });
}

const sideMenu = document.querySelector("[data-side-menu]");
const menuOverlay = document.querySelector("[data-menu-overlay]");
const setMenu = (open) => {
  if (!sideMenu || !menuOverlay) return;
  sideMenu.classList.toggle("open", open);
  menuOverlay.classList.toggle("open", open);
  document.body.style.overflow = open ? "hidden" : "";
};
document.querySelector("[data-open-menu]")?.addEventListener("click", () => setMenu(true));
document.querySelector("[data-close-menu]")?.addEventListener("click", () => setMenu(false));
menuOverlay?.addEventListener("click", () => setMenu(false));
sideMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));

document.querySelectorAll("[data-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-tab]").forEach((tab) => tab.classList.remove("active"));
    button.classList.add("active");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
);
document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

const salesTrack = document.querySelector("[data-sales-track]");
document.querySelectorAll("[data-scroll-sales]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!salesTrack) return;
    const direction = Number(button.getAttribute("data-scroll-sales"));
    salesTrack.scrollBy({ left: direction * salesTrack.clientWidth * 0.6, behavior: "smooth" });
  });
});

const heroImage = document.querySelector("[data-parallax-image]");
const heroCopy = document.querySelector("[data-parallax-copy]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function updateParallax() {
  if (reduceMotion || window.innerWidth < 1024) return;
  const progress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
  if (heroImage) heroImage.style.transform = `translateY(${progress * 50}px)`;
  if (heroCopy) {
    heroCopy.style.transform = `translateY(${progress * 60}px)`;
    heroCopy.style.opacity = String(1 - progress * 0.88);
  }
}
updateParallax();
window.addEventListener("scroll", updateParallax, { passive: true });

const currentPage = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(`a[href="${currentPage}"]`).forEach((link) => link.classList.add("is-current"));

document.querySelectorAll("[data-static-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const success = form.querySelector(".form-success");
    if (success) success.hidden = false;
  });
});

document.querySelectorAll(".property-filter").forEach((filter) => {
  const buttons = filter.querySelectorAll("[data-property-filter]");
  const search = filter.querySelector("[data-property-search]");
  const list = filter.nextElementSibling;
  const cards = list ? [...list.querySelectorAll("[data-status]")] : [];
  const apply = () => {
    const active = filter.querySelector("[data-property-filter].active")?.getAttribute("data-property-filter") || "all";
    const query = (search?.value || "").trim().toLowerCase();
    cards.forEach((card) => {
      const status = card.getAttribute("data-status") || "";
      const haystack = `${card.textContent || ""} ${card.getAttribute("data-city") || ""}`.toLowerCase();
      const statusOk = active === "all" || status === active;
      const queryOk = !query || haystack.includes(query);
      card.hidden = !(statusOk && queryOk);
    });
  };
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      button.classList.add("active");
      apply();
    });
  });
  search?.addEventListener("input", apply);
});
