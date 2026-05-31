/* 语言切换 + 移动端导航 / Language toggle + mobile nav */
(function () {
  var KEY = "mayfair-lang";

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
})();
