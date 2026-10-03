/* ---------- Illustrations (shown when a product has no photo) ---------- */
function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const c = (v) => Math.max(0, Math.min(255, v + amt));
  return `rgb(${c(n >> 16)},${c((n >> 8) & 255)},${c(n & 255)})`;
}

function illustration(category, color) {
  const base = color, dark = shade(color, -35), light = shade(color, 30);
  const gold = "#d9b36c";
  const art = {
    handbags: `
      <path d="M70 80 C70 20 150 20 150 80" fill="none" stroke="${dark}" stroke-width="7" stroke-linecap="round"/>
      <path d="M30 90 Q30 78 44 78 H176 Q190 78 190 90 L200 180 Q202 196 186 196 H34 Q18 196 20 180 Z" fill="${base}"/>
      <path d="M30 90 Q30 78 44 78 H176 Q190 78 190 90 L194 118 H26 Z" fill="${light}" opacity=".45"/>
      <rect x="98" y="104" width="24" height="20" rx="4" fill="${gold}"/>
      <circle cx="110" cy="114" r="3" fill="${dark}"/>`,
    sling: `
      <path d="M40 10 C40 80 70 70 70 100 M180 10 C180 80 150 70 150 100" fill="none" stroke="${dark}" stroke-width="6" stroke-linecap="round"/>
      <rect x="45" y="95" width="130" height="95" rx="28" fill="${base}"/>
      <path d="M45 123 Q45 95 73 95 H147 Q175 95 175 123 V128 Q110 150 45 128 Z" fill="${light}" opacity=".5"/>
      <circle cx="110" cy="140" r="9" fill="${gold}"/>
      <path d="M62 118 H158" stroke="${dark}" stroke-width="1.5" stroke-dasharray="4 4" opacity=".6"/>`,
    tote: `
      <path d="M70 90 C60 20 160 20 150 90" fill="none" stroke="${dark}" stroke-width="8" stroke-linecap="round"/>
      <path d="M32 84 H188 L200 190 Q201 198 192 198 H28 Q19 198 20 190 Z" fill="${base}"/>
      <path d="M32 84 H188 L190 100 H30 Z" fill="${dark}" opacity=".35"/>
      <rect x="82" y="124" width="56" height="34" rx="5" fill="${light}" opacity=".6"/>
      <text x="110" y="147" font-family="Georgia,serif" font-size="15" text-anchor="middle" fill="${dark}" font-style="italic">Oolavia</text>`,
    wallets: `
      <rect x="22" y="52" width="176" height="116" rx="14" fill="${base}"/>
      <rect x="22" y="52" width="176" height="46" rx="14" fill="${light}" opacity=".45"/>
      <rect x="22" y="108" width="176" height="2" fill="${dark}" opacity=".5"/>
      <rect x="150" y="104" width="48" height="36" rx="10" fill="${dark}"/>
      <circle cx="170" cy="122" r="5" fill="${gold}"/>
      <rect x="36" y="64" width="60" height="6" rx="3" fill="${dark}" opacity=".3"/>
      <path d="M34 160 H120" stroke="${dark}" stroke-width="1.5" stroke-dasharray="4 4" opacity=".6"/>`,
  };
  return `<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${category}">${art[category]}</svg>`;
}

const AMAZON_ICON = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 4h2.2l.5 2H21l-2 8H8l.4 2H19v2H6.7L4.3 6H3V4zm5.5 4 .9 4h8.1l1-4H8.5zM9 20a1.5 1.5 0 1 1 0 .01zm9 0a1.5 1.5 0 1 1 0 .01z"/></svg>`;

const CAT_LABEL = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.label]));
const CAT_BG = { handbags: "#e8c8bd", sling: "#d9c9b4", tote: "#c9d1c0", wallets: "#bfa58f" };

/* ---------- Amazon store links ---------- */
document.querySelectorAll(".amazon-store").forEach((a) => {
  a.href = AMAZON_STORE; a.target = "_blank"; a.rel = "noopener";
});

/* ---------- Hero illustrations ---------- */
const byCat = (id) => PRODUCTS.find((p) => p.category === id);
document.getElementById("heroA").innerHTML = illustration("handbags", byCat("handbags").color);
document.getElementById("heroB").innerHTML = illustration("tote", byCat("tote").color);
document.getElementById("heroC").innerHTML = illustration("sling", byCat("sling").color);
document.getElementById("storyBag").innerHTML = illustration("handbags", "#9c5f48");

/* ---------- Collections ---------- */
document.getElementById("collectionGrid").innerHTML = CATEGORIES.map((c) => {
  const p = byCat(c.id);
  return `<a class="collection reveal" href="#shop" data-filter="${c.id}" style="background:${CAT_BG[c.id]}">
    <div class="art">${illustration(c.id, p.color)}</div>
    <h3>${c.label}</h3><p>${c.blurb}</p>
  </a>`;
}).join("");

/* ---------- Product grid + filters ---------- */
const filtersEl = document.getElementById("filters");
const gridEl = document.getElementById("productGrid");
let active = "all";

function renderFilters() {
  const items = [{ id: "all", label: "All" }, ...CATEGORIES];
  filtersEl.innerHTML = items
    .map((c) => `<button class="filter ${c.id === active ? "active" : ""}" data-id="${c.id}">${c.label}</button>`)
    .join("");
}

function renderProducts() {
  const list = PRODUCTS.filter((p) => active === "all" || p.category === active);
  gridEl.innerHTML = list.map((p, i) => `
    <article class="card" style="animation-delay:${i * 60}ms">
      <div class="card-img" style="background:${CAT_BG[p.category]}">
        ${p.tag ? `<span class="tag">${p.tag}</span>` : ""}
        ${p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy" />` : illustration(p.category, p.color)}
      </div>
      <div class="card-body">
        <span class="card-cat">${CAT_LABEL[p.category]}</span>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        ${p.price ? `<span class="price">${p.price}</span>` : ""}
        <a class="buy" href="${p.url}" target="_blank" rel="noopener sponsored">${AMAZON_ICON} Buy on Amazon</a>
      </div>
    </article>`).join("");
}

function setFilter(id) { active = id; renderFilters(); renderProducts(); }

filtersEl.addEventListener("click", (e) => {
  const b = e.target.closest(".filter");
  if (b) setFilter(b.dataset.id);
});
document.getElementById("collectionGrid").addEventListener("click", (e) => {
  const c = e.target.closest(".collection");
  if (c) setFilter(c.dataset.filter);
});
setFilter("all");

/* ---------- Nav behaviour ---------- */
const nav = document.getElementById("nav");
const burger = document.getElementById("burger");
const links = document.getElementById("navLinks");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 30), { passive: true });
burger.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
links.addEventListener("click", (e) => {
  if (e.target.closest("a")) { links.classList.remove("open"); burger.setAttribute("aria-expanded", false); }
});

/* ---------- Scroll reveal ---------- */
document.querySelectorAll(".section-head, .story-art, .story-text, .promise").forEach((el) => el.classList.add("reveal"));
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
