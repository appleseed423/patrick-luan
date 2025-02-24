!(function (e = ".", t = "__import__") {
  try {
    self[t] = new Function("u", "return import(u)");
  } catch (i) {
    const o = new URL(e, location),
      n = (e) => {
        URL.revokeObjectURL(e.src), e.remove();
      };
    (self[t] = (e) =>
      new Promise((i, r) => {
        const l = new URL(e, o);
        if (self[t].moduleMap[l]) return i(self[t].moduleMap[l]);
        const s = new Blob(
            [`import * as m from '${l}';`, `${t}.moduleMap['${l}']=m;`],
            { type: "text/javascript" }
          ),
          a = Object.assign(document.createElement("script"), {
            type: "module",
            src: URL.createObjectURL(s),
            onerror() {
              r(new Error(`Failed to import: ${e}`)), n(a);
            },
            onload() {
              i(self[t].moduleMap[l]), n(a);
            },
          });
        document.head.appendChild(a);
      })),
      (self[t].moduleMap = {});
  }
})("/assets/");
var e = new Swiper(".testimonialSlider", {
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});
(e = new Swiper(".portfolio-slider-tab", { slidesPerView: 4 })),
  (e = new Swiper(".partner-slider", {
    slidesPerView: 4,
    breakpoints: {
      1400: { slidesPerView: 5, spaceBetweenSlides: 30 },
      1200: { slidesPerView: 4, spaceBetweenSlides: 30 },
      767: { slidesPerView: 3, spaceBetweenSlides: 30 },
      575: { slidesPerView: 2, spaceBetweenSlides: 40 },
      320: { slidesPerView: 1, spaceBetweenSlides: 40 },
    },
  }));
const t = document.querySelectorAll(".tab-item"),
  i = document.querySelectorAll(".content-item"),
  o = (e, t = "is-active") => {
    e.forEach((e) => e.classList.remove(`${t}`));
  },
  n = (e, t, i = "is-active") => {
    e[t].classList.add(`${i}`);
  };
t.forEach((e, r) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("is-active")) return;
    const l = r;
    o(t), o(i), n(t, l), n(i, l);
  });
});
e = new Swiper(".alex-portfolio-swiper-container", {
  slidesPerView: 3,
  direction: r(),
  navigation: {
    nextEl: ".alax-portfolio-swiper-button-next",
    prevEl: ".alax-portfolio-swiper-button-prev",
  },
  on: {
    resize: function () {
      e.changeDirection(r());
    },
  },
});
function r() {
  return window.innerWidth <= 760 ? "vertical" : "horizontal";
}
var l = $(".all-items-portfolio").isotope({});
function s(e) {
  localStorage.setItem("theme", e),
    "dark" == e
      ? document.getElementById("theme").classList.add("dark-theme")
      : document.getElementById("theme").classList.remove("dark-theme");
}
$(".portfolio-menu").on("click", "li", function () {
  var e = $(this).attr("data-filter");
  l.isotope({ filter: e });
}),
  $(".scroll-shift").click(function (e) {
    e.preventDefault();
    var t = $($(this).attr("href"));
    if (t.length) {
      var i = t.offset().top;
      $("body, html").animate({ scrollTop: i + "px" }, 400);
    }
  }),
  window.addEventListener("load", function () {
    let e = localStorage.getItem("theme");
    s(e), document.getElementById("themeMode").value(e);
  }),
  document.getElementById("themeMode").addEventListener("change", function () {
    s(document.getElementById("themeMode").value);
  }),
  window.addEventListener("load", (e) => {
    let t = localStorage.getItem("theme");
    document.getElementById("themeMode").value = t;
  });
