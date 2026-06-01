/* 语言切换 + 移动端导航 / Language toggle + mobile nav */
(function () {
  var KEY = "mayfair-lang";

  // ---- 应用站点配置 / apply SITE_CONFIG (template) ----
  var CFG = window.SITE_CONFIG;
  if (CFG) {
    // 主题色 theme colors -> CSS variables
    var t = CFG.theme || {};
    var root = document.documentElement.style;
    if (t.accent) root.setProperty("--accent", t.accent);
    if (t.wine)   root.setProperty("--wine", t.wine);
    if (t.wine2)  root.setProperty("--wine-2", t.wine2);
    if (t.ink)    root.setProperty("--ink", t.ink);

    // 拨号链接 tel: links
    if (CFG.phone && CFG.phone.dial) {
      document.querySelectorAll('a[href^="tel:"]').forEach(function (a) {
        a.setAttribute("href", "tel:" + CFG.phone.dial);
      });
    }
    // data-cfg 占位元素：data-cfg-zh / data-cfg-en 文本注入（可选，模板用）
    document.querySelectorAll("[data-cfg]").forEach(function (el) {
      try {
        var path = el.getAttribute("data-cfg").split(".");
        var v = CFG; path.forEach(function (k) { v = v[k]; });
        if (v != null) el.textContent = v;
      } catch (e) {}
    });
  }

  function apply(lang) {
    var en = lang === "en";
    document.body.classList.toggle("is-en", en);
    document.documentElement.lang = en ? "en" : "zh-CN";
    document.querySelectorAll(".lang-toggle").forEach(function (b) {
      // Button shows the language you can switch TO
      b.textContent = en ? "中文" : "EN";
      b.setAttribute("aria-label", en ? "切换到中文" : "Switch to English");
    });
  }

  // Init from storage (default Chinese)
  var saved = "zh";
  try { saved = localStorage.getItem(KEY) || "zh"; } catch (e) {}
  apply(saved);

  document.addEventListener("click", function (e) {
    var t = e.target.closest(".lang-toggle");
    if (t) {
      var next = document.body.classList.contains("is-en") ? "zh" : "en";
      apply(next);
      try { localStorage.setItem(KEY, next); } catch (err) {}
      return;
    }
    var nt = e.target.closest(".nav-toggle");
    if (nt) {
      var links = document.querySelector(".nav-links");
      if (links) links.classList.toggle("open");
      return;
    }
    // Close mobile menu when a link is tapped
    if (e.target.closest(".nav-links a")) {
      var nl = document.querySelector(".nav-links");
      if (nl) nl.classList.remove("open");
    }
  });

  // 滚动渐显 / reveal on scroll
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length) {
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
        });
      }, { threshold: 0.12 });
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add("in"); });
    }
  }

  // 跨页锚点定位（如 menu.html#hotpot）：等布局/图片就绪后再滚到位
  if (window.location.hash) {
    var jump = function () {
      var el = document.getElementById(window.location.hash.slice(1));
      if (el) el.scrollIntoView({ block: "start" });
    };
    window.addEventListener("load", function () { setTimeout(jump, 60); });
  }

  // 图片查看 / lightbox — works on any page with [data-img] triggers
  var lb = document.getElementById("lightbox");
  if (lb) {
    var lbImg = lb.querySelector("#lb-img");
    var lbCap = lb.querySelector("#lb-cap");
    var openLb = function (src, cap) {
      lbImg.src = src; lbImg.alt = cap || ""; lbCap.textContent = cap || "";
      lb.classList.add("open"); document.body.style.overflow = "hidden";
    };
    var closeLb = function () { lb.classList.remove("open"); lbImg.src = ""; document.body.style.overflow = ""; };
    document.addEventListener("click", function (e) {
      var trig = e.target.closest("[data-img]");
      if (trig) { openLb(trig.getAttribute("data-img"), trig.getAttribute("data-cap")); return; }
      if (e.target.closest(".lb-close") || e.target === lb) closeLb();
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeLb(); });
  }
})();
