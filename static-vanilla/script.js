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

const zillowMap = document.querySelector("[data-zillow-map]");
if (zillowMap) {
  const mapItems = {
    almond: ["For sale", "3508 Almond Ln, McKinney, TX 75070", "$495,000 · 4 bd · 3 ba · 3,045 sqft"],
    bison: ["For sale", "LOT 156 Bison Ridge Dr, Stephenville, TX 76401", "$99,000 · Lot / Land · 135 days on Zillow"],
    dodson: ["Sold", "2610 Dodson St, Garland, TX 75042", "2 bd · 3 ba · 1,542 sqft · Seller"],
    mandarin: ["Sold", "5816 Mandarin Ln, Sachse, TX 75048", "4 bd · 2 ba · 2,081 sqft · Buyer"],
    duster: ["Sold", "1729 Duster Cir, Arlington, TX 76018", "3 bd · 2 ba · 1,457 sqft · Buyer"],
    poppy: ["Sold", "697 Poppy Ln, Lavon, TX 75166", "4 bd · 2 ba · 1,791 sqft · Buyer"],
    tidal: ["Sold", "604 Tidal Dr, McKinney, TX 75071", "4 bd · 3 ba · 2,059 sqft · Buyer"],
  };
  const markers = [...zillowMap.querySelectorAll("[data-map-marker]")];
  const cards = [...zillowMap.querySelectorAll("[data-map-card]")];
  const filters = [...zillowMap.querySelectorAll("[data-map-filter]")];
  const popover = zillowMap.querySelector("[data-map-popover]");

  const setActiveMapItem = (id) => {
    markers.forEach((marker) => marker.classList.toggle("active", marker.dataset.mapMarker === id));
    cards.forEach((card) => card.classList.toggle("active", card.dataset.mapCard === id));
    const marker = markers.find((item) => item.dataset.mapMarker === id);
    const item = mapItems[id];
    if (!marker || !item || !popover) return;
    const [label, address, detail] = item;
    popover.innerHTML = `<span>${label}</span><strong>${address}</strong><small>${detail}</small>`;
    popover.style.left = marker.style.getPropertyValue("--x");
    popover.style.top = `calc(${marker.style.getPropertyValue("--y")} + 34px)`;
  };

  const applyMapFilter = (filter) => {
    filters.forEach((button) => button.classList.toggle("active", button.dataset.mapFilter === filter));
    const visibleIds = [];
    markers.forEach((marker) => {
      const visible = filter === "all" || marker.dataset.status === filter;
      marker.classList.toggle("is-hidden", !visible);
      if (visible) visibleIds.push(marker.dataset.mapMarker);
    });
    cards.forEach((card) => {
      const visible = filter === "all" || card.dataset.status === filter;
      card.hidden = !visible;
    });
    const current = markers.find((marker) => marker.classList.contains("active") && !marker.classList.contains("is-hidden"));
    setActiveMapItem(current?.dataset.mapMarker || visibleIds[0] || "almond");
  };

  filters.forEach((button) => button.addEventListener("click", () => applyMapFilter(button.dataset.mapFilter || "all")));
  markers.forEach((marker) => marker.addEventListener("click", () => setActiveMapItem(marker.dataset.mapMarker)));
  cards.forEach((card) => card.addEventListener("click", () => setActiveMapItem(card.dataset.mapCard)));
  setActiveMapItem("almond");
}

const profileMapNode = document.querySelector("[data-profile-map]");
if (profileMapNode && window.L) {
  const profileMap = L.map(profileMapNode, {
    attributionControl: true,
    scrollWheelZoom: false,
    zoomControl: false,
  });

  L.control.zoom({ position: "bottomright" }).addTo(profileMap);
  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    maxZoom: 19,
  }).addTo(profileMap);

  const profileMapListings = [
    { id: "almond", type: "sale", price: "495K", title: "3508 Almond Ln, McKinney, TX 75070", detail: "$495,000 - 4 bd - 3 ba - 3,045 sqft", lat: 33.173, lng: -96.68 },
    { id: "bison", type: "sale", price: "99K", title: "LOT 156 Bison Ridge Dr, Stephenville, TX 76401", detail: "$99,000 - Lot / Land - 135 days on Zillow", lat: 32.2207, lng: -98.202 },
    { id: "dodson", type: "sold", title: "2610 Dodson St, Garland, TX 75042", detail: "Sold - 2 bd - 3 ba - 1,542 sqft - Seller", lat: 32.919, lng: -96.663 },
    { id: "mandarin", type: "sold", title: "5816 Mandarin Ln, Sachse, TX 75048", detail: "Sold - 4 bd - 2 ba - 2,081 sqft - Buyer", lat: 32.978, lng: -96.594 },
    { id: "duster", type: "sold", title: "1729 Duster Cir, Arlington, TX 76018", detail: "Sold - 3 bd - 2 ba - 1,457 sqft - Buyer", lat: 32.655, lng: -97.087 },
    { id: "poppy", type: "sold", title: "697 Poppy Ln, Lavon, TX 75166", detail: "Sold - 4 bd - 2 ba - 1,791 sqft - Buyer", lat: 33.032, lng: -96.438 },
    { id: "tidal", type: "sold", title: "604 Tidal Dr, McKinney, TX 75071", detail: "Sold - 4 bd - 3 ba - 2,059 sqft - Buyer", lat: 33.246, lng: -96.646 },
    { type: "sold", title: "Dallas, TX", detail: "Sold record on Zillow profile", lat: 32.776, lng: -96.797 },
    { type: "sold", title: "Dallas, TX", detail: "Sold record on Zillow profile", lat: 32.815, lng: -96.82 },
    { type: "sold", title: "Dallas, TX", detail: "Sold record on Zillow profile", lat: 32.864, lng: -96.77 },
    { type: "sold", title: "Dallas, TX", detail: "Sold record on Zillow profile", lat: 32.918, lng: -96.738 },
    { type: "sold", title: "Garland, TX", detail: "Sold record on Zillow profile", lat: 32.912, lng: -96.638 },
    { type: "sold", title: "Garland, TX", detail: "Sold record on Zillow profile", lat: 32.884, lng: -96.602 },
    { type: "sold", title: "Sachse, TX", detail: "Sold record on Zillow profile", lat: 32.99, lng: -96.572 },
    { type: "sold", title: "Wylie, TX", detail: "Sold record on Zillow profile", lat: 33.015, lng: -96.536 },
    { type: "sold", title: "Richardson, TX", detail: "Sold record on Zillow profile", lat: 32.948, lng: -96.729 },
    { type: "sold", title: "Plano, TX", detail: "Sold record on Zillow profile", lat: 33.019, lng: -96.699 },
    { type: "sold", title: "Frisco, TX", detail: "Sold record on Zillow profile", lat: 33.15, lng: -96.824 },
    { type: "sold", title: "McKinney, TX", detail: "Sold record on Zillow profile", lat: 33.198, lng: -96.639 },
    { type: "sold", title: "McKinney, TX", detail: "Sold record on Zillow profile", lat: 33.234, lng: -96.706 },
    { type: "sold", title: "Lavon, TX", detail: "Sold record on Zillow profile", lat: 33.061, lng: -96.431 },
    { type: "sold", title: "Rowlett, TX", detail: "Sold record on Zillow profile", lat: 32.902, lng: -96.563 },
    { type: "sold", title: "Mesquite, TX", detail: "Sold record on Zillow profile", lat: 32.766, lng: -96.599 },
    { type: "sold", title: "Irving, TX", detail: "Sold record on Zillow profile", lat: 32.814, lng: -96.949 },
    { type: "sold", title: "Grand Prairie, TX", detail: "Sold record on Zillow profile", lat: 32.747, lng: -97.008 },
    { type: "sold", title: "Arlington, TX", detail: "Sold record on Zillow profile", lat: 32.735, lng: -97.108 },
    { type: "sold", title: "Arlington, TX", detail: "Sold record on Zillow profile", lat: 32.682, lng: -97.135 },
    { type: "sold", title: "Mansfield, TX", detail: "Sold record on Zillow profile", lat: 32.563, lng: -97.141 },
    { type: "sold", title: "Fort Worth, TX", detail: "Sold record on Zillow profile", lat: 32.755, lng: -97.33 },
    { type: "sold", title: "Fort Worth, TX", detail: "Sold record on Zillow profile", lat: 32.69, lng: -97.28 },
    { type: "sold", title: "Keller, TX", detail: "Sold record on Zillow profile", lat: 32.934, lng: -97.229 },
    { type: "sold", title: "Euless, TX", detail: "Sold record on Zillow profile", lat: 32.837, lng: -97.082 },
    { type: "sold", title: "Carrollton, TX", detail: "Sold record on Zillow profile", lat: 32.975, lng: -96.889 },
    { type: "sold", title: "Lewisville, TX", detail: "Sold record on Zillow profile", lat: 33.046, lng: -96.994 },
    { type: "sold", title: "Flower Mound, TX", detail: "Sold record on Zillow profile", lat: 33.014, lng: -97.096 },
    { type: "sold", title: "Cedar Hill, TX", detail: "Sold record on Zillow profile", lat: 32.588, lng: -96.956 },
    { type: "sold", title: "Waxahachie, TX", detail: "Sold record on Zillow profile", lat: 32.386, lng: -96.848 },
    { type: "sold", title: "Denton, TX", detail: "Sold record on Zillow profile", lat: 33.214, lng: -97.133 },
    { type: "sold", title: "Rockwall, TX", detail: "Sold record on Zillow profile", lat: 32.931, lng: -96.459 },
    { type: "sold", title: "Forney, TX", detail: "Sold record on Zillow profile", lat: 32.748, lng: -96.471 },
  ];

  const markerIcon = (item) =>
    L.divIcon({
      className: `profile-map-marker ${item.type === "sale" ? "sale-label" : "sold-dot"}`,
      html: item.type === "sale" ? `<span class="price">${item.price}</span>` : '<span class="dot"></span>',
      iconSize: item.type === "sale" ? [46, 26] : [22, 22],
      iconAnchor: item.type === "sale" ? [23, 13] : [11, 11],
    });

  const markers = profileMapListings.map((item) => {
    const marker = L.marker([item.lat, item.lng], { icon: markerIcon(item), keyboard: false });
    marker.bindPopup(`<strong>${item.title}</strong><span>${item.detail}</span>`, { className: "profile-map-popup" });
    marker.profileType = item.type;
    marker.addTo(profileMap);
    return marker;
  });

  const profileMapBounds = [
    [32.05, -99.15],
    [34.25, -95.65],
  ];
  const refitProfileMap = () => {
    profileMap.invalidateSize();
    profileMap.fitBounds(profileMapBounds, { padding: [8, 8] });
  };
  refitProfileMap();
  window.addEventListener("resize", refitProfileMap);
  setTimeout(refitProfileMap, 150);
  setTimeout(refitProfileMap, 700);
  new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        refitProfileMap();
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  ).observe(profileMapNode);

  const setProfileMapFilter = (filter) => {
    document.querySelectorAll("[data-profile-map-filter]").forEach((button) => {
      button.classList.toggle("active", button.dataset.profileMapFilter === filter);
    });
    markers.forEach((marker) => {
      const visible = filter === "all" || marker.profileType === filter;
      if (visible && !profileMap.hasLayer(marker)) marker.addTo(profileMap);
      if (!visible && profileMap.hasLayer(marker)) marker.removeFrom(profileMap);
    });
  };

  document.querySelectorAll("[data-profile-map-filter]").forEach((button) => {
    button.addEventListener("click", () => setProfileMapFilter(button.dataset.profileMapFilter || "all"));
  });
}
