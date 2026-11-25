/* Breakthrough Author Live — small page behaviours */

(function () {
  "use strict";

  /* ---- 1. open and close the menu on a phone ---- */
  var burger = document.getElementById("burger");
  var menu = document.getElementById("menu");

  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!open));
      burger.setAttribute("aria-label", open ? "Open menu" : "Close menu");
      menu.hidden = open;
    });

    menu.addEventListener("click", function (event) {
      if (event.target.tagName === "A" && window.innerWidth < 720) {
        burger.setAttribute("aria-expanded", "false");
        menu.hidden = true;
      }
    });
  }

  /* ---- 2. the sticky button at the bottom ---- */
  var sticky = document.getElementById("stickyCta");

  if (sticky) {
    var onScroll = function () {
      var y = window.scrollY || document.documentElement.scrollTop;
      var nearBottom =
        y + window.innerHeight > document.body.offsetHeight - 260;
      var show = y > 620 && !nearBottom;

      sticky.classList.toggle("is-visible", show);
      sticky.hidden = false;
      document.body.style.paddingBottom = show ? "128px" : "";
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  }

  /* ---- 3. the video player ----
     Put your video link between the quotes below.
     A YouTube link, a Vimeo link, or a file in this folder like "media/training.mp4".
     Leave it empty and the box says the video is coming soon. */
  var VIDEO_SRC = "";

  var videoBox = document.getElementById("videoBox");
  var videoModal = document.getElementById("videoModal");
  var videoEl = document.getElementById("trainingVideo");
  var videoNote = document.getElementById("videoNote");
  var videoClose = document.getElementById("videoClose");

  if (videoBox && videoModal && videoEl && videoNote) {
    if (VIDEO_SRC) {
      videoEl.src = VIDEO_SRC;
      videoEl.hidden = false;
      videoNote.hidden = true;
    }

    var openVideo = function () {
      videoModal.hidden = false;
      document.body.classList.add("no-scroll");
      if (videoClose) videoClose.focus();
    };

    var closeVideo = function () {
      videoModal.hidden = true;
      document.body.classList.remove("no-scroll");
      if (!videoEl.paused) videoEl.pause();
      videoBox.focus();
    };

    videoBox.addEventListener("click", openVideo);
    videoBox.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openVideo();
      }
    });

    videoModal.addEventListener("click", function (event) {
      var hit = event.target.closest("[data-vclose]");
      if (hit) closeVideo();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !videoModal.hidden) closeVideo();
    });
  }

  /* ---- 4. gentle fade in when a block comes into view ---- */
  var items = document.querySelectorAll(
    ".sec .wrap > *, .card, .week, .faq, .bonuses li, .fail-block, .checklist li, .results li"
  );

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );

    items.forEach(function (el, i) {
      el.classList.add("reveal");
      el.style.transitionDelay = Math.min(i % 6, 5) * 40 + "ms";
      io.observe(el);
    });
  }
})();
