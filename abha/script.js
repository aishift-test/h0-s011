/* ============================================================
   Abha — a guide for visiting friends

   Everything you might want to change is in the PLACES list below.
   Change a name, a line, the months, or the map search text.
   ============================================================ */

(function () {
  "use strict";

  /* ----------------------------------------------------------
     1. THE PLACES
     type   : "nature" | "heritage" | "food" | "activities"
     months : the months it is at its best (1 = January ... 12 = December)
     slot   : where it fits in a day — "morning", "lunch", "afternoon" or "evening"
     maps   : the words typed into Google Maps
     ---------------------------------------------------------- */
  var ALL_YEAR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  var PLACES = [
    /* ---- nature ---- */
    {
      name: "Al Soudah Park",
      type: "nature",
      img: "img/soudah.jpg",
      alt: "A drawing of green mountain peaks at Al Soudah, with mist between them",
      line: "The highest area near Abha. Fog, juniper trees and long views. Cool even in August.",
      months: [6, 7, 8],
      slot: "morning",
      tip: "Take a jacket — it is cold up here, even in August.",
      maps: "Al Soudah, Abha, Saudi Arabia"
    },
    {
      name: "Abha Dam Lake",
      type: "nature",
      img: "img/dam-lake.jpg",
      alt: "A drawing of the lake at Abha dam, with green mountains behind it",
      line: "A lake with a walking path and places to sit. Families go there in the spring.",
      months: [3, 4, 5],
      slot: "evening",
      tip: "Come an hour before sunset — the light on the water is the whole point.",
      maps: "Abha Dam Lake, Abha, Saudi Arabia"
    },
    {
      name: "Jacaranda Season",
      type: "nature",
      img: "img/jacaranda.jpg",
      alt: "A drawing of two jacaranda trees covered in purple blossom",
      line: "In spring the jacaranda trees turn the streets purple. Very beautiful, and only for a few weeks.",
      months: [3, 4],
      slot: "morning",
      tip: "Come in the first half of April, before the flowers start to fall.",
      maps: "Jacaranda trees, Abha, Saudi Arabia"
    },
    {
      name: "Habala Hanging Village",
      type: "nature",
      img: "img/habala.jpg",
      alt: "The dry rocky plateau and deep valley at Al Habala in Asir",
      line: "An old village on a cliff. You go down to it by cable car, over the valley.",
      months: [12, 1, 2, 3, 4, 5],
      slot: "morning",
      tip: "Check the cable car is open before you drive there. Wear real shoes.",
      maps: "Al Habala, Abha, Saudi Arabia"
    },

    /* ---- heritage ---- */
    {
      name: "Rijal Almaa Village",
      type: "heritage",
      img: "img/rijal-inside.jpg",
      alt: "Inside an old house in Rijal Almaa: a green staircase and a wall painted with bright geometric patterns",
      // this photo is tall, so show the lower part — the stairs, not the roof
      pos: "50% 74%",
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
      line: "An area for artists and local art: colourful walls, galleries and small shops.",
      months: ALL_YEAR,
      slot: "afternoon",
      tip: "Good at any time of year. In summer there are evening events here.",
      maps: "Al Muftaha Art Village, Abha, Saudi Arabia"
    },
    {
      name: "Shada Palace",
      type: "heritage",
      img: "img/shada-palace.jpg",
      alt: "The old palace of Abha standing on a hill under a cloudy sky",
      line: "An old mud and stone palace, now a small museum. Inside: rooms of Asiri life, dress and tools.",
      months: ALL_YEAR,
      slot: "morning",
      tip: "Small and quick — an hour is plenty. Good on a cloudy day.",
      maps: "Shada Palace, Abha, Saudi Arabia"
    },
    {
      name: "Al Qatt Al Asiri Art",
      type: "heritage",
      img: "img/qatt-asiri.jpg",
      alt: "Al Qatt Al Asiri wall painting: red, yellow, green and blue shapes with triangles and lines",
      line: "The colourful wall painting that women in Asir paint inside their homes. Red, yellow, green and blue.",
      months: ALL_YEAR,
      slot: "afternoon",
      tip: "Look for it on the inside walls of old houses and in the heritage villages.",
      maps: "Al Qatt Al Asiri art, Abha, Saudi Arabia"
    },

    /* ---- activities ---- */
    {
      name: "Green Mountain Viewpoint",
      type: "activities",
      img: "img/jabal-akhdar.jpg",
      alt: "The green hill of Jabal Akhdar rising above the white buildings of Abha",
      line: "A hill inside the city with a view of all of Abha. Best in the evening, when the lights come on.",
      months: ALL_YEAR,
      slot: "evening",
      tip: "Go up about half an hour before sunset and stay for the lights.",
      maps: "Jabal Akhdar, Abha, Saudi Arabia"
    },
    {
      name: "Abha Cable Car",
      type: "activities",
      img: "img/cable-car.jpg",
      alt: "Cable car cabins hanging above tall green trees on the Abha line",
      line: "A long, slow ride over the valley, from the mountain down towards the city. The best view you can buy for a few riyals.",
      months: [6, 7, 8, 9],
      slot: "evening",
      tip: "Ride down near sunset and watch the city lights come on.",
      maps: "Abha Cable Car, Abha, Saudi Arabia"
    },
    {
      name: "Al Sahab Park",
      type: "activities",
      img: "img/sahab-park.jpg",
      alt: "Green lawns, paths and trees in a park in Abha",
      line: "The name means clouds park. A picnic area at the edge of the mountain — sometimes the clouds are under you.",
      months: [6, 7, 8],
      slot: "afternoon",
      tip: "Take a picnic and a blanket. It is a good place to sit and do nothing.",
      maps: "Al Sahab Park, Abha, Saudi Arabia"
    },
    {
      name: "Weekly Market",
      type: "activities",
      img: "img/market.jpg",
      alt: "Colourful cloth and goods hanging at a traditional market stall in Saudi Arabia",
      line: "A traditional market with honey, spices, baskets and local clothes. Go in the morning — it closes early.",
      months: ALL_YEAR,
      slot: "morning",
      tip: "Take cash, and ask before you take a photo of people.",
      maps: "traditional market, Abha, Saudi Arabia"
    },

    /* ---- food ---- */
    {
      name: "Areeka",
      type: "food",
      img: "img/areeka.jpg",
      alt: "A bowl of areeka: brown wheat porridge topped with honey and dates",
      line: "Wheat cooked soft, then covered with honey and butter. The Asiri breakfast, and a very old recipe.",
      months: ALL_YEAR,
      slot: "lunch",
      tip: "Eat it for breakfast or as a sweet after a big lunch.",
      maps: "areeka, Abha, Saudi Arabia"
    },
    {
      name: "Haneeth at a Local House",
      type: "food",
      img: "img/haneeth.jpg",
      alt: "A large platter of haneeth: slow-roast lamb on a bed of rice",
      line: "Lamb buried in an underground oven for hours until it falls off the bone. The Asiri dish you will talk about later.",
      months: ALL_YEAR,
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
      months: ALL_YEAR,
      slot: "lunch",
      tip: "Say yes to a second cup of coffee. It means you are welcome.",
      maps: "kabsa restaurant, Abha, Saudi Arabia"
    },
    {
      name: "Asir Table",
      type: "food",
      img: "img/asir-table.jpg",
      alt: "A golden Arabic coffee pot, a small cup and dates on a table",
      line: "Traditional dishes, eaten sitting on the floor. Come hungry and come with friends.",
      months: ALL_YEAR,
      slot: "lunch",
      tip: "A made-up place, for this project. The real ones are just as good.",
      maps: "traditional restaurant, Abha, Saudi Arabia"
    },
    {
      name: "Misty Peak Cafe",
      type: "food",
      img: "img/misty-peak.jpg",
      alt: "A small cup of Arabic coffee on a saucer",
      line: "Coffee with a mountain view. Good for a slow morning before the clouds come in.",
      months: ALL_YEAR,
      slot: "morning",
      tip: "A made-up place, for this project. Look for a cafe with a view like this.",
      maps: "cafe with a view, Abha, Saudi Arabia"
    }
  ];

  var MONTHS = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
  var SHORT  = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  var TYPE_LABEL = { nature: "Nature", heritage: "Heritage", food: "Food", activities: "Activity" };

  /* the four seasons, and the months in each one */
  var SEASONS = {
    winter: { label: "Winter", months: [12, 1, 2] },
    spring: { label: "Spring", months: [3, 4, 5] },
    summer: { label: "Summer", months: [6, 7, 8] },
    autumn: { label: "Autumn", months: [9, 10, 11] }
  };

  /* ----------------------------------------------------------
     2. THE PAGE
     ---------------------------------------------------------- */
  var grid       = document.getElementById("grid");
  var status     = document.getElementById("status");
  var empty      = document.getElementById("empty");
  var resetBtn   = document.getElementById("reset");
  var filterBtns = document.querySelectorAll("#filters .chip");
  var seasonBtns = document.querySelectorAll("#seasons .season");
  var monthBtns  = document.querySelectorAll("#months .month");
  var planBtn    = document.getElementById("planBtn");
  var planBtnTxt = document.getElementById("planBtnText");
  var planPanel  = document.getElementById("planPanel");
  var planTitle  = document.getElementById("planTitle");
  var planList   = document.getElementById("plan");
  var planFoot   = document.getElementById("planFoot");

  /* season: "" or "winter" | "spring" | "summer" | "autumn"
     month:  0 or 1 ... 12
     Only one of the two is ever set. Picking one clears the other. */
  var state = { type: "all", season: "", month: 0 };

  /* ----------------------------------------------------------
     3. SMALL HELPERS
     ---------------------------------------------------------- */
  function mapsUrl(place) {
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(place.maps);
  }

  /* The months the visitor asked about: one month, or all the months
     of a season. Returns null when they have not asked for any. */
  function wantedMonths() {
    if (state.month) return [state.month];
    if (state.season) return SEASONS[state.season].months;
    return null;
  }

  /* Is this place at its best in one of those months? */
  function isBestIn(place, months) {
    if (!months) return false;
    return months.some(function (m) { return place.months.indexOf(m) !== -1; });
  }

  /* "March" or "spring" */
  function periodShort() {
    if (state.month) return MONTHS[state.month - 1];
    if (state.season) return SEASONS[state.season].label.toLowerCase();
    return "";
  }

  /* "March" or "spring (Mar–May)" — the season with its months */
  function periodName() {
    if (!state.season) return periodShort();
    var s = SEASONS[state.season];
    var first = s.months[0], last = s.months[s.months.length - 1];
    return periodShort() + " (" + SHORT[first - 1] + "–" + SHORT[last - 1] + ")";
  }

  /* "Jun–Aug", "Dec–May", "Mar, Apr" or "All year" */
  function monthText(place) {
    var m = place.months.slice().sort(function (a, b) { return a - b; });
    if (m.length >= 10) return "All year";
    if (m.length < 3) return m.map(function (x) { return SHORT[x - 1]; }).join(", ");

    // the months may run past December into January, so start the run
    // at the first gap and then check the whole ring
    var start = 0;
    for (var i = 1; i < m.length; i++) {
      if (m[i] !== m[i - 1] + 1) { start = i; break; }
    }
    var run = m.slice(start).concat(m.slice(0, start));
    for (var j = 1; j < run.length; j++) {
      if (run[j] !== (run[j - 1] % 12) + 1) {
        return m.map(function (x) { return SHORT[x - 1]; }).join(", ");
      }
    }
    return SHORT[run[0] - 1] + "–" + SHORT[run[run.length - 1] - 1];
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
  function cardHtml(place, bestNow, quiet) {
    // some photos are tall; "pos" says which part of the photo to show
    var pos = place.pos ? ' style="object-position:' + place.pos + '"' : '';

    return '' +
      '<li class="card' + (quiet ? " is-quiet" : "") + '">' +
        '<a class="card-photo" href="' + mapsUrl(place) + '" target="_blank" rel="noopener" ' +
           'aria-label="Open ' + escapeHtml(place.name) + ' in Google Maps">' +
          '<img src="' + place.img + '" alt="' + escapeHtml(place.alt) + '" loading="lazy" width="1400" height="1050"' + pos + '>' +
          '<span class="now"' + (bestNow ? "" : " hidden") + ">Best now</span>" +
        "</a>" +
        '<div class="card-body">' +
          '<p class="card-meta type-' + place.type + '">' +
            '<i class="dot" aria-hidden="true"></i>' +
            "<span>" + TYPE_LABEL[place.type] + "</span>" +
            '<span class="sep" aria-hidden="true">|</span>' +
            "<span>Best " + monthText(place) + "</span>" +
          "</p>" +
          "<h3>" + escapeHtml(place.name) + "</h3>" +
          '<p class="line">' + escapeHtml(place.line) + "</p>" +
          '<a class="maps" href="' + mapsUrl(place) + '" target="_blank" rel="noopener">' +
            PIN + "<span>Open in Maps</span>" +
          "</a>" +
        "</div>" +
      "</li>";
  }

  function render() {
    var months = wantedMonths();

    var shown = PLACES.filter(function (p) {
      return state.type === "all" || p.type === state.type;
    });

    // when a season or a month is picked, the best ones come first
    if (months) {
      shown = shown.slice().sort(function (a, b) {
        return (isBestIn(b, months) ? 1 : 0) - (isBestIn(a, months) ? 1 : 0);
      });
    }

    grid.innerHTML = shown.map(function (p) {
      var best = isBestIn(p, months);
      return cardHtml(p, best, months && !best);
    }).join("");

    empty.hidden = shown.length > 0;

    // the line above the cards
    var typeWord = state.type === "all" ? "" : TYPE_LABEL[state.type].toLowerCase() + " ";
    if (!months) {
      status.innerHTML = "Showing <b>" + shown.length + "</b> " + typeWord +
        (shown.length === 1 ? "place" : "places") + ".";
    } else {
      var good = shown.filter(function (p) { return isBestIn(p, months); }).length;
      status.innerHTML = "In <b>" + periodName() + "</b>, <b>" + good + "</b> of these " +
        shown.length + " " + typeWord + (shown.length === 1 ? "place" : "places") +
        (good === 1 ? " is" : " are") + " at their best. Those are shown first.";
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
     6. THE SEASON PICKER AND THE MONTH PICKER

     They are the same question at two sizes, so picking one
     clears the other. Pick "Any" to go back to everything.
     ---------------------------------------------------------- */
  function updatePlanBtn() {
    if (!planBtnTxt) return;
    if (state.month) {
      planBtnTxt.textContent = "Plan my day in " + MONTHS[state.month - 1];
    } else if (state.season) {
      planBtnTxt.textContent = "Plan my day in " + SEASONS[state.season].label.toLowerCase();
    } else {
      planBtnTxt.textContent = "Plan my day";
    }
  }

  function showTab(list, on) {
    list.forEach(function (b) { b.classList.toggle("is-on", b === on); });
  }

  seasonBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var value = btn.getAttribute("data-season");
      state.season = value === "0" ? "" : value;
      state.month = 0;

      showTab(seasonBtns, btn);
      showTab(monthBtns, monthBtns[0]);   // back to "Any"
      render();
      updatePlanBtn();
    });
  });

  monthBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      state.month = Number(btn.getAttribute("data-month"));
      state.season = "";

      showTab(monthBtns, btn);
      showTab(seasonBtns, seasonBtns[0]);  // back to "Any"
      render();
      updatePlanBtn();
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      state = { type: "all", season: "", month: 0 };
      showTab(filterBtns, filterBtns[0]);
      showTab(seasonBtns, seasonBtns[0]);
      showTab(monthBtns, monthBtns[0]);
      render();
      updatePlanBtn();
    });
  }

  /* ----------------------------------------------------------
     7. PLAN MY DAY

     MY_PLAN is the writer's own plan for one day.
     It is the plan you see first. The button gives you a new one.
     ---------------------------------------------------------- */
  var SLOTS = [["morning", "Morning"], ["lunch", "Lunch"],
               ["afternoon", "Afternoon"], ["evening", "Evening"]];

  var MY_PLAN = [
    { slot: "Morning",   place: "Al Soudah Park",
      note: "Then breakfast at Misty Peak Cafe." },
    { slot: "Lunch",     place: "Asir Table",
      note: "Traditional dishes, sitting on the floor." },
    { slot: "Afternoon", place: "Al Muftaha Art Village",
      note: "Colourful walls, galleries and small shops." },
    { slot: "Evening",   place: "Green Mountain Viewpoint",
      note: "Then dinner in the city on the way back down." }
  ];

  function findPlace(name) {
    for (var i = 0; i < PLACES.length; i++) {
      if (PLACES[i].name === name) return PLACES[i];
    }
    return null;
  }

  // Draw any list of stops. A stop is { slot, place, note }.
  function drawPlan(stops) {
    planList.innerHTML = stops.map(function (stop) {
      var place = stop.place;
      var note = stop.note || place.tip;
      return "<li>" +
        '<img class="plan-img" src="' + place.img + '" alt="" loading="lazy" width="74" height="74"' +
          (place.pos ? ' style="object-position:' + place.pos + '"' : '') + ">" +
        "<div>" +
          '<span class="plan-slot">' + stop.slot + "</span>" +
          '<p class="plan-name">' + escapeHtml(place.name) + "</p>" +
          '<p class="plan-why">' + escapeHtml(note) + "</p>" +
        "</div>" +
      "</li>";
    }).join("");
  }

  // The writer's own day, shown first.
  function showMyPlan() {
    var stops = MY_PLAN.map(function (s) {
      return { slot: s.slot, place: findPlace(s.place), note: s.note };
    }).filter(function (s) { return s.place; });

    drawPlan(stops);
    if (planTitle) planTitle.textContent = "My plan for one day";
    planFoot.textContent = "This is the day I would take you on. Press the button for a new one.";
    planPanel.hidden = false;
  }

  // Build one day. When "strict" is true it only uses places that are
  // at their best in the chosen season or month (if there are any).
  function buildStops(months, strict) {
    var used = [];
    var stops = [];

    SLOTS.forEach(function (pair) {
      var pool = PLACES.filter(function (p) {
        return p.slot === pair[0] && used.indexOf(p.name) === -1;
      });
      if (!pool.length) return;

      var good = (months && strict)
        ? pool.filter(function (p) { return isBestIn(p, months); })
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
    var months = wantedMonths();
    var stops = buildStops(months, true);

    // try again so two presses in a row give you a different day
    for (var i = 0; i < 24 && sameNames(stops, lastPlan); i++) {
      stops = buildStops(months, i < 16);
    }
    lastPlan = stops.map(function (s) { return s.place.name; });

    drawPlan(stops);

    if (planTitle) {
      planTitle.textContent = months
        ? "A day in " + periodShort()
        : "A day in Abha";
    }

    planFoot.innerHTML = (months
      ? "Picked for " + periodName() + ". "
      : "") +
      "Press again for a different day, or " +
      '<button type="button" class="link" id="showMine">show my plan</button>.';

    planPanel.hidden = false;
  }

  if (planBtn) planBtn.addEventListener("click", makePlan);

  // the small "show my plan" button inside the panel
  planFoot.addEventListener("click", function (e) {
    if (e.target && e.target.id === "showMine") showMyPlan();
  });

  /* ----------------------------------------------------------
     8. START
     ---------------------------------------------------------- */
  render();
  showMyPlan();
})();
