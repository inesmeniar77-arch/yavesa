const ICONS = {
  politique: "assets/icon-politique.png",
  sport: "assets/icon-sport.png",
  culture: "assets/icon-culture.png",
  science: "assets/icon-science.png",
  musique: "assets/icon-musique.png",
  monde: "assets/icon-monde.png"
};

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("nav.main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }

  const themeToggle = document.querySelector("[data-theme-toggle]");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem("yavesa-theme", next);
      document.documentElement.setAttribute("data-theme", next);
      const label = next === "dark" ? "Activer le mode clair" : "Activer le mode sombre";
      themeToggle.setAttribute("aria-label", label);
      themeToggle.setAttribute("title", label);
    });
  }

  const heroSlot = document.querySelector("[data-render='hero']");
  if (heroSlot) renderHero(heroSlot);

  const catBand = document.querySelector("[data-render='categories-band']");
  if (catBand) renderCategoryBand(catBand);

  const catGrid = document.querySelector("[data-render='categories-grid']");
  if (catGrid) renderCategoryGrid(catGrid);

  const rewindTrack = document.querySelector("[data-render='rewind']");
  if (rewindTrack) renderRewind(rewindTrack, rewindTrack.dataset.current || "");

  const featuredSlot = document.querySelector("[data-render='featured']");
  if (featuredSlot) renderFeatured(featuredSlot);

  const archiveList = document.querySelector("[data-render='archive-list']");
  if (archiveList) renderArchiveList(archiveList);

  const articleSlot = document.querySelector("[data-render='article']");
  if (articleSlot) renderArticle(articleSlot);
});

function renderHero(el) {
  const { pastDate, todayDate } = getAnniversary();
  const featured = getFeatured();
  el.innerHTML = `
    <div class="hero-main">
      <div class="hero-eyebrow">AUJOURD'HUI, IL Y A 50 ANS</div>
      <p class="hero-year">${pastDate.getFullYear()}</p>
      <div class="hero-date">${formatFrenchDate(pastDate, { withYear: false })}</div>
      <p class="hero-caption">Ce qui faisait la une ce jour-là.</p>
      <a href="article.html?slug=${featured.slug}" class="btn-primary">Lire l'article du jour &rarr;</a>
    </div>
    <div class="timeline">
      <span class="tag">${pastDate.getFullYear()}</span>
      <div class="bar"></div>
      <span class="tag">${todayDate.getFullYear()}</span>
      <span style="font-size:0.65rem; margin-top:4px;">50 ans plus tard</span>
    </div>
  `;
}

function mediaBlock(a, cls) {
  if (a.image) {
    return `
      <div class="${cls} has-photo">
        <img src="${a.image}" alt="${a.title}" loading="lazy">
        ${a.imageCredit ? `<span class="media-label">${a.imageCredit}</span>` : ""}
      </div>`;
  }
  return `<div class="${cls}"><span class="media-label">${a.thumbLabel}</span></div>`;
}

function rewindThumb(a) {
  return a.image
    ? `<div class="rewind-thumb has-photo"><img src="${a.image}" alt="" loading="lazy"></div>`
    : `<div class="rewind-thumb"></div>`;
}

function renderCategoryBand(el) {
  el.innerHTML = CATEGORIES.map(c => `
    <a class="category-card" href="rubriques.html#${c.key}">
      <img src="${ICONS[c.key]}" alt="" width="34" height="34">
      <span>${c.label}</span>
    </a>
  `).join("");
}

function renderCategoryGrid(el) {
  el.innerHTML = CATEGORIES.map(c => `
    <article class="rubrique-card" id="${c.key}">
      <img src="${ICONS[c.key]}" alt="" width="30" height="30">
      <h2>${c.label}</h2>
      <p>${c.desc}</p>
      <a class="link-read" href="archives.html?cat=${c.key}">Voir les archives &rarr;</a>
    </article>
  `).join("");
}

function renderRewind(el, currentSlug) {
  el.innerHTML = ARTICLES.map(a => `
    <a class="rewind-card ${a.slug === currentSlug ? 'active' : ''}" href="article.html?slug=${a.slug}">
      ${rewindThumb(a)}
      <div class="rewind-body">
        <div class="rewind-date">${a.pastDate}</div>
        <div class="rewind-headline">${a.title}</div>
        <span class="rewind-arrow">&rarr;</span>
      </div>
    </a>
  `).join("");
}

function renderFeatured(el) {
  const a = getFeatured();
  el.innerHTML = `
    <div class="featured-text">
      <span class="tag-category">${a.category}</span>
      <h1 class="featured-title">${a.title}</h1>
      <p class="featured-chapo">${a.chapo}</p>
      <a class="link-read" href="article.html?slug=${a.slug}">Lire l'article &rarr;</a>
    </div>
    ${mediaBlock(a, "featured-media")}
  `;
}

function renderArchiveList(el) {
  const params = new URLSearchParams(location.search);
  const filter = params.get("cat");
  const items = filter ? ARTICLES.filter(a => a.category === filter) : ARTICLES;
  el.innerHTML = items.map(a => `
    <a class="archive-row" href="article.html?slug=${a.slug}">
      <span class="a-date">${a.pastDate}</span>
      <span class="a-year">${a.pastDate.split(" ").pop()}</span>
      <span>
        <span class="a-cat">${a.category}</span>
        <span class="a-title">${a.title}</span>
      </span>
      <span class="rewind-arrow">&rarr;</span>
    </a>
  `).join("");
}

function renderArticle(el) {
  const params = new URLSearchParams(location.search);
  const slug = params.get("slug");
  const a = getArticle(slug) || getFeatured();
  document.title = `${a.title} — Yavésa?`;

  const past = parseFrenchDate(a.pastDate);
  const modernDate = formatFrenchDate(addYears(past, 50));
  const layout = a.layout || "standard";

  const breadcrumb = `<div class="breadcrumb"><a href="index.html">Accueil</a> / <a href="rubriques.html#${a.category}">${a.category}</a></div>`;

  let header;
  if (layout === "photo") {
    header = `
      <div class="article-photo-hero">
        ${mediaBlock(a, "article-media")}
        <div class="article-photo-scrim"></div>
        <div class="wrap article-photo-overlay">
          ${breadcrumb}
          <span class="tag-category-badge">${a.category}</span>
          <h1 class="article-title">${a.title}</h1>
          <div class="photo-dateline">
            <span class="arrow-years">${past.getFullYear()} <span class="arrow">&rarr;</span> ${past.getFullYear() + 50}</span>
            <span>IL Y A 50 ANS JOUR POUR JOUR — ${a.pastDate}</span>
          </div>
        </div>
      </div>`;
  } else if (layout === "brief") {
    header = `
      <div class="wrap article-brief-hero">
        ${breadcrumb}
        <div class="brief-head-row">
          <div class="brief-head-text">
            <span class="tag-category">${a.category}</span>
            <h1 class="article-title">${a.title}</h1>
            <div class="brief-dateline-pill">
              <span>${past.getFullYear()} &rarr; ${past.getFullYear() + 50}</span>
              <span>—</span>
              <span>IL Y A 50 ANS — ${a.pastDate}</span>
            </div>
          </div>
          ${mediaBlock(a, "article-media brief-media")}
        </div>
      </div>`;
  } else {
    header = `
      <div class="wrap article-hero">
        ${breadcrumb}
        <span class="tag-category">${a.category}</span>
        <h1 class="article-title">${a.title}</h1>
        <div class="article-dateline">
          <span class="arrow-years">${past.getFullYear()} <span class="arrow">&rarr;</span> ${past.getFullYear() + 50}</span>
          <span class="label">IL Y A 50 ANS JOUR POUR JOUR — ${a.pastDate}</span>
        </div>
        ${mediaBlock(a, "article-media")}
      </div>`;
  }

  let bodyHTML;
  if (layout === "photo") {
    bodyHTML = buildPhotoLayout(a, modernDate);
  } else if (layout === "brief") {
    bodyHTML = buildBriefLayout(a, modernDate);
  } else {
    bodyHTML = buildStandardLayout(a, modernDate);
  }

  el.innerHTML = `
    ${header}
    <div class="wrap article-body layout-${layout}">${bodyHTML}</div>
    <div class="wrap" style="padding-bottom:60px">
      <div class="rewind-title">Autres unes du jour</div>
      <div class="rewind-track" data-render="rewind" data-current="${a.slug}"></div>
    </div>
  `;
  const rewindTrack = el.querySelector("[data-render='rewind']");
  if (rewindTrack) renderRewind(rewindTrack, a.slug);
}

function estimateReadTime(a) {
  const words = (a.body || [a.chapo]).join(" ").trim().split(/\s+/).length;
  return Math.max(2, Math.round(words / 130));
}

function bylineHTML(a, cls = "") {
  return `<div class="article-byline ${cls}">Par la rédaction Yavésa <span class="dot">&middot;</span> ${estimateReadTime(a)} min de lecture</div>`;
}

function buildStandardLayout(a, modernDate) {
  const bodyParas = a.body || [a.chapo];
  const mid = Math.ceil(bodyParas.length / 2);
  return `
    <div class="article-columns">
      ${bylineHTML(a)}
      ${bodyParas.slice(0, mid).map(p => `<p>${p}</p>`).join("")}
      ${a.pullQuote ? `<div class="pull-quote">${a.pullQuote}</div>` : ""}
      ${bodyParas.slice(mid).map(p => `<p>${p}</p>`).join("")}
    </div>
    ${a.future ? `
    <aside class="future-box">
      <span class="eyebrow" style="color:var(--bleu-pastel)">50 ANS PLUS TARD</span>
      <h2>${a.future.lead}</h2>
      <ul>${a.future.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
      <div class="quote">${a.future.quote}</div>
      <div class="timeline-mini">${a.pastDate} &rarr; ${modernDate}</div>
    </aside>` : ""}
  `;
}

function buildPhotoLayout(a, modernDate) {
  const bodyParas = a.body || [a.chapo];
  return `
    <div class="article-columns">
      ${bylineHTML(a)}
      ${bodyParas.map(p => `<p>${p}</p>`).join("")}
      ${a.pullQuote ? `<div class="pull-quote">${a.pullQuote}</div>` : ""}
    </div>
    ${a.future ? `
    <div class="future-band">
      <span class="eyebrow">50 ANS PLUS TARD</span>
      <h2>${a.future.lead}</h2>
      <ul class="band-grid">${a.future.bullets.map((b, i) => `<li><span class="band-index">${String(i + 1).padStart(2, "0")}</span>${b}</li>`).join("")}</ul>
      <div class="quote">${a.future.quote}</div>
      <div class="timeline-mini light">${a.pastDate} &rarr; ${modernDate}</div>
    </div>` : ""}
  `;
}

function buildBriefLayout(a, modernDate) {
  const bodyParas = a.body || [a.chapo];
  return `
    ${a.future ? `
    <div class="fact-strip-wrap">
      <span class="eyebrow">50 ANS PLUS TARD</span>
      <div class="fact-strip">
        ${a.future.bullets.map((b, i) => `
          <div class="fact">
            <span class="fact-index">${String(i + 1).padStart(2, "0")}</span>
            ${b}
          </div>`).join("")}
        <div class="fact fact-quote">
          <div class="quote">${a.future.quote}</div>
          <span class="timeline-mini">${a.pastDate} &rarr; ${modernDate}</span>
        </div>
      </div>
    </div>` : ""}
    <div class="article-columns">
      ${bylineHTML(a)}
      ${bodyParas.map(p => `<p>${p}</p>`).join("")}
      ${a.pullQuote ? `<div class="pull-quote">${a.pullQuote}</div>` : ""}
    </div>`;
}
