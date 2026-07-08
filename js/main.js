/* ═══════════════════════════════════════════════════════════
   TEDxChicago 2026 — WE THE PEOPLE
   Interactions: sticky header, mobile nav, carousels,
   quote rotation, scroll-reveal.
   Vanilla JS — drop-in friendly for Squarespace code blocks.
   ═══════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ── Sticky header ─────────────────────────────────────── */
  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ── Mobile nav ────────────────────────────────────────── */
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  navToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  mainNav.addEventListener("click", (e) => {
    if (e.target.closest("a") && !e.target.closest(".nav-drop-toggle")) {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ── Nav dropdowns (click/tap toggle; hover handled by CSS) ── */
  const closeDropdowns = (except) => {
    document.querySelectorAll(".nav-item.open").forEach((item) => {
      if (item !== except) {
        item.classList.remove("open");
        item.querySelector(".nav-drop-toggle").setAttribute("aria-expanded", "false");
      }
    });
  };

  document.querySelectorAll(".nav-drop-toggle").forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      const item = toggle.parentElement;
      const open = item.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      closeDropdowns(item);
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-item")) closeDropdowns();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDropdowns();
  });

  /* ── Carousels (prev/next scroll one card) ─────────────── */
  const scrollCarousel = (track, dir) => {
    const card = track.querySelector(":scope > *");
    if (!card) return;
    const gap = parseFloat(getComputedStyle(track).gap) || 24;
    track.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: "smooth" });
  };

  document.querySelectorAll("[data-carousel-prev]").forEach((btn) => {
    const track = document.getElementById(btn.dataset.carouselPrev);
    btn.addEventListener("click", () => scrollCarousel(track, -1));
  });
  document.querySelectorAll("[data-carousel-next]").forEach((btn) => {
    const track = document.getElementById(btn.dataset.carouselNext);
    btn.addEventListener("click", () => scrollCarousel(track, 1));
  });

  /* ── Quote carousel (auto-rotate + dots) ───────────────── */
  const quotes = document.querySelectorAll("#quoteSlides .quote");
  const dots = document.querySelectorAll("#quoteDots .qdot");
  let quoteIndex = 0;
  let quoteTimer = null;

  const showQuote = (i) => {
    quoteIndex = (i + quotes.length) % quotes.length;
    quotes.forEach((q, n) => q.classList.toggle("is-active", n === quoteIndex));
    dots.forEach((d, n) => d.classList.toggle("is-active", n === quoteIndex));
  };

  const startQuotes = () => {
    stopQuotes();
    quoteTimer = setInterval(() => showQuote(quoteIndex + 1), 5500);
  };
  const stopQuotes = () => quoteTimer && clearInterval(quoteTimer);

  dots.forEach((dot, n) => {
    dot.addEventListener("click", () => {
      showQuote(n);
      startQuotes(); // reset the clock after manual pick
    });
  });

  if (quotes.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    startQuotes();
  }

  /* ── Scroll reveal ─────────────────────────────────────── */
  const revealables = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealables.forEach((el) => io.observe(el));
  } else {
    revealables.forEach((el) => el.classList.add("is-visible"));
  }
})();
