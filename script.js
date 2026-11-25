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

  /* ---- 4. the join panel ----
     Put your payment link between the quotes below.
     A Gumroad, Stripe, Ko-fi or PayPal link works.
     Leave it empty and the panel says the link is not set up yet. */
  var CHECKOUT_URL = "";

  var joinModal = document.getElementById("joinModal");
  var joinCheckout = document.getElementById("joinCheckout");
  var joinWait = document.getElementById("joinWait");
  var joinClose = document.getElementById("joinClose");
  var joinButtons = document.querySelectorAll('a[href="#join"]');

  if (joinModal && joinCheckout && joinWait && joinButtons.length) {
    if (CHECKOUT_URL) {
      joinCheckout.href = CHECKOUT_URL;
      joinWait.hidden = true;
    } else {
      joinCheckout.hidden = true;
      joinWait.hidden = false;
    }

    var openJoin = function () {
      joinModal.hidden = false;
      document.body.classList.add("no-scroll");
      if (joinClose) joinClose.focus();
    };

    var closeJoin = function () {
      joinModal.hidden = true;
      document.body.classList.remove("no-scroll");
    };

    joinButtons.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        openJoin();
      });
    });

    joinModal.addEventListener("click", function (event) {
      if (event.target.closest("[data-jclose]")) closeJoin();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !joinModal.hidden) closeJoin();
    });
  }

  /* ---- 5. the gold reading bar at the top ---- */
  var progress = document.getElementById("progress");

  if (progress) {
    var onProgress = function () {
      var y = window.scrollY || document.documentElement.scrollTop;
      var room = document.documentElement.scrollHeight - window.innerHeight;
      var pct = room > 0 ? (y / room) * 100 : 0;
      progress.style.width = Math.max(0, Math.min(100, pct)) + "%";
    };

    onProgress();
    window.addEventListener("scroll", onProgress, { passive: true });
    window.addEventListener("resize", onProgress);
  }

  /* ---- 6. gentle fade in when a block comes into view ---- */
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
