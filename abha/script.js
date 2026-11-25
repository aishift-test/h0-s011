/* ============================================================
   Abha — a guide for visiting friends

   Everything you might want to change is in the PLACES list below.
   Change a name, a line, the months, or the map search text.
   ============================================================ */

(function () {
  "use strict";

  /* ----------------------------------------------------------
     1. THE PLACES
     type   : "nature" | "food" | "heritage"
     months : the months it is at its best (1 = January ... 12 = December)
     slot   : where it fits in a day — "morning", "lunch" or "evening"
     maps   : the words typed into Google Maps
     ---------------------------------------------------------- */
  var PLACES = [
    {
      name: "Al Soudah Peak",
      type: "nature",
      img: "img/soudah.jpg",
      alt: "A drawing of green mountain peaks at Al Soudah, with mist between them",
      line: "The highest point in Saudi Arabia. Juniper trees, cloud, and a cool 20°C while the rest of the country burns.",
      months: [6, 7, 8, 9],
      slot: "morning",
      tip: "Go before 10am — the cloud usually rolls in after lunch.",
      maps: "Al Soudah, Abha, Saudi Arabia"
    },
    {
      name: "Abha Cable Car",
      type: "nature",
      img: "img/cable-car.jpg",
      alt: "Cable car cabins hanging above tall green trees on the Abha line",
      line: "A long, slow ride over the valley, from the mountain down towards the city. The best view you can buy for a few riyals.",
      months: [6, 7, 8, 9],
      slot: "evening",
      tip: "Ride down near sunset and watch the city lights come on.",
      maps: "Abha Cable Car, Abha, Saudi Arabia"
    },
    {
      name: "Abha Dam Lake",
      type: "nature",
      img: "img/dam-lake.jpg",
      alt: "A drawing of the lake at Abha dam, with green mountains behind it",
      line: "A quiet lake in the middle of the city. Walk the path, or take a small boat out on the water.",
      months: [11, 12, 1, 2],
      slot: "evening",
      tip: "Come an hour before sunset — the light on the water is the whole point.",
      maps: "Abha Dam Lake, Abha, Saudi Arabia"
    },
    {
      name: "Jacaranda Season",
      type: "nature",
      img: "img/jacaranda.jpg",
      alt: "A drawing of two jacaranda trees covered in purple blossom",
      line: "For a few weeks in spring the whole city turns purple. People drive from all over Saudi Arabia to see it.",
      months: [3, 4],
      slot: "morning",
      tip: "Come in the first half of April, before the flowers start to fall.",
      maps: "Jacaranda trees, Abha, Saudi Arabia"
    },
    {
      name: "Rijal Almaa Village",
      type: "heritage",
      img: "img/rijal-almaa.jpg",
      alt: "The stone towers of Rijal Almaa village standing among green mountains",
      line: "A 900-year-old village of tall stone houses, now a heritage site. The most photographed place in Asir.",
      months: [10, 11, 12, 1, 2],
      slot: "morning",
      tip: "It is a 45-minute drive. Give it three hours, not one.",
      maps: "Rijal Almaa Heritage Village, Saudi Arabia"
    },
    {
      name: "Al Muftaha Art Village",
      type: "heritage",
      img: "img/muftaha.jpg",
      alt: "The white and blue buildings of Al Muftaha art village in Abha",
      line: "A village of artists in the centre of Abha: galleries, wall paintings and small shops. It comes alive in summer.",
      months: [6, 7, 8, 9],
      slot: "evening",
      tip: "The evening Soudah Season events happen here. Check what is on.",
      maps: "Al Muftaha Art Village, Abha, Saudi Arabia"
    },
    {
      name: "Al Habala Hanging Village",
      type: "heritage",
      img: "img/habala.jpg",
      alt: "The dry rocky plateau and deep valley at Al Habala in Asir",
      line: "A village built into a cliff, once reached only by rope ladders. Now a cable car takes you down.",
      months: [3, 4, 5, 9, 10],
      slot: "morning",
      tip: "Wear real shoes. The ground is rock, not pavement.",
      maps: "Al Habala, Abha, Saudi Arabia"
    },
    {
      name: "Shada Palace Museum",
      type: "heritage",
      img: "img/shada-palace.jpg",
      alt: "The old palace of Abha standing on a hill under a cloudy sky",
      line: "The old ruler's palace, built in 1927 from stone and mud. Inside: rooms of Asiri life, dress and tools.",
      months: [11, 12, 1, 2],
      slot: "evening",
      tip: "Small and quick — an hour is plenty. Good on a cloudy day.",
      maps: "Shada Palace, Abha, Saudi Arabia"
    },
    {
      name: "Haneeth at a Local House",
      type: "food",
      img: "img/haneeth.jpg",
      alt: "A large platter of haneeth: slow-roast lamb on a bed of rice",
      line: "Lamb buried in an underground oven for hours until it falls off the bone. The Asiri dish you will talk about later.",
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      slot: "lunch",
      tip: "Order one big plate for the table and eat with your right hand.",
      maps: "haneeth restaurant, Abha, Saudi Arabia"
    },
    {
      name: "Aseer Sidr Honey",
      type: "food",
      img: "img/honey.jpg",
      alt: "A traditional Asiri bee house built on top of a huge granite rock",
      line: "Asir honey is famous across the Gulf. Buy it from a roadside honey shop, straight from the bee house.",
      months: [8, 9, 10],
      slot: "lunch",
      tip: "Late summer is harvest time, so that is when it is cheapest.",
      maps: "honey shop, Abha, Saudi Arabia"
    },
    {
      name: "Kabsa and Arabic Coffee",
      type: "food",
      img: "img/kabsa.jpg",
      alt: "A close view of kabsa rice with tomato, lime and fresh salad",
      line: "Spiced rice with chicken or lamb, then cardamom coffee and dates. The everyday meal, done well.",
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      slot: "lunch",
      tip: "Say yes to a second cup of coffee. It means you are welcome.",
      maps: "kabsa restaurant, Abha, Saudi Arabia"
    }
  ];

  var MONTHS = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
  var SHORT  = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  var TYPE_LABEL = { nature: "Nature", food: "Food", heritage: "Heritage" };

  /* ----------------------------------------------------------
     2. THE PAGE
     ---------------------------------------------------------- */
  var grid       = document.getElementById("grid");
  var status     = document.getElementById("status");
  var empty      = document.getElementById("empty");
  var resetBtn   = document.getElementById("reset");
  var filterBtns = document.querySelectorAll("#filters .chip");
  var monthBtns  = document.querySelectorAll("#months .month");
  var planBtn    = document.getElementById("planBtn");
  var planBtnTxt = document.getElementById("planBtnText");
  var planPanel  = document.getElementById("planPanel");
  var planList   = document.getElementById("plan");
  var planFoot   = document.getElementById("planFoot");

  var state = { type: "all", month: 0 };

  /* ----------------------------------------------------------
     3. SMALL HELPERS
     ---------------------------------------------------------- */
  function mapsUrl(place) {
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(place.maps);
  }

  function isBestIn(place, month) {
    return place.months.indexOf(month) !== -1;
  }

  function monthText(place) {
    if (place.months.length >= 10) return "All year";
    return place.months.map(function (m) { return SHORT[m - 1]; }).join(" · ");
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var PIN = '<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" fill="none" ' +
            'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
            '<path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z"/>' +
            '<circle cx="12" cy="10" r="2.6"/></svg>';

  /* ----------------------------------------------------------
     4. DRAW THE CARDS
     ---------------------------------------------------------- */
  function cardHtml(place, bestNow) {
    var pills = place.months.length >= 10
      ? '<span class="pill">All year</span>'
      : place.months.map(function (m) {
          return '<span class="pill">' + SHORT[m - 1] + "</span>";
        }).join("");

    return '' +
      '<li class="card' + (state.month && !bestNow ? " is-quiet" : "") + '">' +
        '<a class="card-photo" href="' + mapsUrl(place) + '" target="_blank" rel="noopener" ' +
           'aria-label="Open ' + escapeHtml(place.name) + ' in Google Maps">' +
          '<img src="' + place.img + '" alt="' + escapeHtml(place.alt) + '" loading="lazy" width="900" height="675">' +
          '<span class="tag tag-' + place.type + '">' + TYPE_LABEL[place.type] + "</span>" +
          '<span class="now"' + (bestNow ? "" : " hidden") + ">Best now</span>" +
        "</a>" +
        '<div class="card-body">' +
          "<h3>" + escapeHtml(place.name) + "</h3>" +
          '<p class="line">' + escapeHtml(place.line) + "</p>" +
          '<p class="months"><span class="m-label">Best</span>' + pills + "</p>" +
          '<a class="maps" href="' + mapsUrl(place) + '" target="_blank" rel="noopener">' +
            PIN + "<span>Open in Maps</span>" +
          "</a>" +
        "</div>" +
      "</li>";
  }

  function render() {
    var month = state.month;

    var shown = PLACES.filter(function (p) {
      return state.type === "all" || p.type === state.type;
    });

    // when a month is picked, the best ones come first
    if (month) {
      shown = shown.slice().sort(function (a, b) {
        return (isBestIn(b, month) ? 1 : 0) - (isBestIn(a, month) ? 1 : 0);
      });
    }

    grid.innerHTML = shown.map(function (p) {
      return cardHtml(p, month && isBestIn(p, month));
    }).join("");

    empty.hidden = shown.length > 0;

    // the line above the cards
    var typeWord = state.type === "all" ? "" : TYPE_LABEL[state.type].toLowerCase() + " ";
    if (!month) {
      status.innerHTML = "Showing <b>" + shown.length + "</b> " + typeWord +
        (shown.length === 1 ? "place" : "places") + ".";
    } else {
      var good = shown.filter(function (p) { return isBestIn(p, month); }).length;
      status.innerHTML = "In <b>" + MONTHS[month - 1] + "</b>, <b>" + good + "</b> of these " +
        shown.length + " " + typeWord + (shown.length === 1 ? "place is" : "places are") +
        " at their best. Those are shown first.";
    }
  }

  /* ----------------------------------------------------------
     5. THE FILTER BUTTONS
     ---------------------------------------------------------- */
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      state.type = btn.getAttribute("data-filter");
      filterBtns.forEach(function (b) { b.classList.toggle("is-on", b === btn); });
      render();
    });
  });

  /* ----------------------------------------------------------
     6. THE MONTH PICKER
     ---------------------------------------------------------- */
  monthBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      state.month = Number(btn.getAttribute("data-month"));
      monthBtns.forEach(function (b) { b.classList.toggle("is-on", b === btn); });
      render();
      if (planBtnTxt) {
        planBtnTxt.textContent = state.month
          ? "Plan my day in " + MONTHS[state.month - 1]
          : "Make me a day";
      }
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      state = { type: "all", month: 0 };
      filterBtns.forEach(function (b) {
        b.classList.toggle("is-on", b.getAttribute("data-filter") === "all");
      });
      monthBtns.forEach(function (b) {
        b.classList.toggle("is-on", b.getAttribute("data-month") === "0");
      });
      render();
    });
  }

  /* ----------------------------------------------------------
     7. PLAN MY DAY
     ---------------------------------------------------------- */
  var SLOTS = [["morning", "Morning"], ["lunch", "Lunch"], ["evening", "Evening"]];

  // Build one day. When "strict" is true it only uses places that are
  // at their best in the chosen month (if there are any).
  function buildStops(month, strict) {
    var used = [];
    var stops = [];

    SLOTS.forEach(function (pair) {
      var pool = PLACES.filter(function (p) {
        return p.slot === pair[0] && used.indexOf(p.name) === -1;
      });
      if (!pool.length) return;

      var good = (month && strict)
        ? pool.filter(function (p) { return isBestIn(p, month); })
        : [];
      var from = good.length ? good : pool;
      var place = from[Math.floor(Math.random() * from.length)];

      used.push(place.name);
      stops.push({ slot: pair[1], place: place });
    });

    return stops;
  }

  function sameNames(stops, names) {
    if (stops.length !== names.length) return false;
    return stops.every(function (s, i) { return s.place.name === names[i]; });
  }

  var lastPlan = [];

  function makePlan() {
    var month = state.month;
    var stops = buildStops(month, true);

    // try again so two presses in a row give you a different day
    for (var i = 0; i < 24 && sameNames(stops, lastPlan); i++) {
      stops = buildStops(month, i < 16);
    }
    lastPlan = stops.map(function (s) { return s.place.name; });

    planList.innerHTML = stops.map(function (stop) {
      return '<li>' +
        '<img class="plan-img" src="' + stop.place.img + '" alt="" loading="lazy" width="74" height="74">' +
        "<div>" +
          '<span class="plan-slot">' + stop.slot + "</span>" +
          '<p class="plan-name">' + escapeHtml(stop.place.name) + "</p>" +
          '<p class="plan-why">' + escapeHtml(stop.place.tip) + "</p>" +
        "</div>" +
      "</li>";
    }).join("");

    planFoot.textContent = month
      ? "Picked for " + MONTHS[month - 1] + ". Press again for a different day."
      : "Press again for a different day.";

    planPanel.hidden = false;
  }

  if (planBtn) planBtn.addEventListener("click", makePlan);

  /* ----------------------------------------------------------
     8. START
     ---------------------------------------------------------- */
  render();
})();
