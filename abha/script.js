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
      nameAr: "منتزه السودة",
      type: "nature",
      img: "img/soudah.jpg",
      alt: "A drawing of green mountain peaks at Al Soudah, with mist between them",
      altAr: "رسم لقمم جبال خضراء في السودة، وبينها ضباب",
      line: "The highest area near Abha. Fog, juniper trees and long views. Cool even in August.",
      lineAr: "أعلى منطقة قرب أبها. ضباب، وأشجار عرعر، وإطلالات بعيدة. الجو بارد حتى في أغسطس.",
      months: [6, 7, 8],
      slot: "morning",
      tip: "Take a jacket — it is cold up here, even in August.",
      tipAr: "خُذ معك جاكيت — الجو بارد هنا في الأعلى، حتى في أغسطس.",
      maps: "Al Soudah Park, Saudi Arabia"
    },
    {
      name: "Abha Dam Lake",
      nameAr: "بحيرة سد أبها",
      type: "nature",
      img: "img/dam-lake.jpg",
      alt: "A drawing of the lake at Abha dam, with green mountains behind it",
      altAr: "رسم لبحيرة سد أبها، وخلفها جبال خضراء",
      line: "A lake with a walking path and places to sit. Families go there in the spring.",
      lineAr: "بحيرة فيها ممشى وأماكن للجلوس. العائلات تذهب إليها في الربيع.",
      months: [3, 4, 5],
      slot: "evening",
      tip: "Come an hour before sunset — the light on the water is the whole point.",
      tipAr: "اذهب قبل الغروب بساعة — ضوء الشمس على الماء هو كل الجمال.",
      maps: "Abha Dam Lake, Abha, Saudi Arabia"
    },
    {
      name: "Jacaranda Season",
      nameAr: "موسم الجاكرندا",
      type: "nature",
      img: "img/jacaranda.jpg",
      alt: "A drawing of two jacaranda trees covered in purple blossom",
      altAr: "رسم لشجرتَي جاكرندا مغطاتين بزهور بنفسجية",
      line: "In spring the jacaranda trees turn the streets purple. Very beautiful, and only for a few weeks.",
      lineAr: "في الربيع تصبغ أشجار الجاكرندا الشوارع باللون البنفسجي. منظر جميل جداً، ولا يدوم إلا أسابيع قليلة.",
      months: [3, 4],
      slot: "morning",
      tip: "Come in the first half of April, before the flowers start to fall.",
      tipAr: "اذهب في النصف الأول من أبريل، قبل أن تبدأ الأزهار بالتساقط.",
      maps: "Jacaranda trees, Abha, Saudi Arabia"
    },
    {
      name: "Habala Hanging Village",
      nameAr: "قرية حبالة المعلّقة",
      type: "nature",
      img: "img/habala.jpg",
      alt: "The dry rocky plateau and deep valley at Al Habala in Asir",
      altAr: "الهضبة الصخرية الجافة والوادي العميق في حبالة بعسير",
      line: "An old village on a cliff. You go down to it by cable car, over the valley.",
      lineAr: "قرية قديمة على حافة جرف. تنزل إليها بالتلفريك فوق الوادي.",
      months: [12, 1, 2, 3, 4, 5],
      slot: "morning",
      tip: "Check the cable car is open before you drive there. Wear real shoes.",
      tipAr: "تأكد أن التلفريك يعمل قبل أن تسافر إليها. اِلبس حذاءً مريحاً.",
      maps: "Al Habala, Abha, Saudi Arabia"
    },

    /* ---- heritage ---- */
    {
      name: "Rijal Almaa Village",
      nameAr: "قرية رجال ألمع",
      type: "heritage",
      img: "img/rijal-inside.jpg",
      alt: "Inside an old house in Rijal Almaa: a green staircase and a wall painted with bright geometric patterns",
      altAr: "من داخل بيت قديم في رجال ألمع: درج أخضر وجدار مزيّن بنقوش هندسية زاهية",
      // this photo is tall, so show the lower part — the stairs, not the roof
      pos: "50% 74%",
      line: "A 900-year-old village of tall stone houses, now a heritage site. The most photographed place in Asir.",
      lineAr: "قرية عمرها 900 سنة، بيوتها حجرية عالية، وهي الآن موقع تراثي. أكثر مكان يُصوَّر في عسير.",
      months: [10, 11, 12, 1, 2],
      slot: "morning",
      tip: "It is a 45-minute drive. Give it three hours, not one.",
      tipAr: "تبعد 45 دقيقة بالسيارة. خصّص لها ثلاث ساعات، لا ساعة واحدة.",
      maps: "Rijal Almaa Heritage Village, Saudi Arabia"
    },
    {
      name: "Al Muftaha Art Village",
      nameAr: "قرية المفتاحة الفنية",
      type: "heritage",
      img: "img/muftaha.jpg",
      alt: "The white and blue buildings of Al Muftaha art village in Abha",
      altAr: "مباني قرية المفتاحة الفنية البيضاء والزرقاء في أبها",
      line: "An area for artists and local art: colourful walls, galleries and small shops.",
      lineAr: "منطقة للفنانين والفن المحلي: جدران ملوّنة، وصالات عرض، ومحلات صغيرة.",
      months: ALL_YEAR,
      slot: "afternoon",
      tip: "Good at any time of year. In summer there are evening events here.",
      tipAr: "جيدة في أي وقت من السنة. في الصيف تُقام هنا فعاليات مسائية.",
      maps: "Al Muftaha Art Village, Abha, Saudi Arabia"
    },
    {
      name: "Shada Palace",
      nameAr: "قصر شدا",
      type: "heritage",
      img: "img/shada-palace.jpg",
      alt: "The old palace of Abha standing on a hill under a cloudy sky",
      altAr: "قصر أبها القديم على تلة تحت سماء غائمة",
      line: "An old mud and stone palace, now a small museum. Inside: rooms of Asiri life, dress and tools.",
      lineAr: "قصر قديم من الطين والحجر، وهو الآن متحف صغير. في الداخل: غرف عن الحياة العسيرية واللباس والأدوات.",
      months: ALL_YEAR,
      slot: "morning",
      tip: "Small and quick — an hour is plenty. Good on a cloudy day.",
      tipAr: "صغير وسريع — ساعة تكفي. مناسب في يوم غائم.",
      maps: "Shada Palace, Abha, Saudi Arabia"
    },
    {
      name: "Al Qatt Al Asiri Art",
      nameAr: "فن القط العسيري",
      type: "heritage",
      img: "img/qatt-asiri.jpg",
      alt: "Al Qatt Al Asiri wall painting: red, yellow, green and blue shapes with triangles and lines",
      altAr: "نقش القط العسيري: أشكال حمراء وصفراء وخضراء وزرقاء بمثلثات وخطوط",
      line: "The colourful wall painting that women in Asir paint inside their homes. Red, yellow, green and blue.",
      lineAr: "النقش الجداري الملوّن الذي ترسمه نساء عسير داخل بيوتهن. أحمر وأصفر وأخضر وأزرق.",
      months: ALL_YEAR,
      slot: "afternoon",
      tip: "Look for it on the inside walls of old houses and in the heritage villages.",
      tipAr: "ابحث عنه على الجدران الداخلية للبيوت القديمة وفي القرى التراثية.",
      maps: "Al Qatt Al Asiri art, Abha, Saudi Arabia"
    },

    /* ---- activities ---- */
    {
      name: "Green Mountain Viewpoint",
      nameAr: "إطلالة الجبل الأخضر",
      type: "activities",
      img: "img/jabal-akhdar.jpg",
      alt: "The green hill of Jabal Akhdar rising above the white buildings of Abha",
      altAr: "تلة الجبل الأخضر ترتفع فوق مباني أبها البيضاء",
      line: "A hill inside the city with a view of all of Abha. Best in the evening, when the lights come on.",
      lineAr: "تلة داخل المدينة تُطل على أبها كلها. الأفضل في المساء عندما تُضاء الأنوار.",
      months: ALL_YEAR,
      slot: "evening",
      tip: "Go up about half an hour before sunset and stay for the lights.",
      tipAr: "اصعد قبل الغروب بنحو نصف ساعة وابقَ لترى الأنوار.",
      maps: "Jabal Akhdar, Abha, Saudi Arabia"
    },
    {
      name: "Abha Cable Car",
      nameAr: "تلفريك أبها",
      type: "activities",
      img: "img/cable-car.jpg",
      alt: "Cable car cabins hanging above tall green trees on the Abha line",
      altAr: "كبائن التلفريك معلّقة فوق أشجار خضراء عالية في خط أبها",
      line: "A long, slow ride over the valley, from the mountain down towards the city. The best view you can buy for a few riyals.",
      lineAr: "رحلة طويلة وهادئة فوق الوادي، من الجبل نزولاً نحو المدينة. أجمل منظر يمكنك شراؤه ببضعة ريالات.",
      months: [6, 7, 8, 9],
      slot: "evening",
      tip: "Ride down near sunset and watch the city lights come on.",
      tipAr: "انزل قرب الغروب وشاهد أنوار المدينة تشتعل.",
      maps: "New Abha Cable Car, Abha, Saudi Arabia"
    },
    {
      name: "Al Sahab Park",
      nameAr: "حديقة السحاب",
      type: "activities",
      img: "img/sahab-park.jpg",
      alt: "Green lawns, paths and trees in a park in Abha",
      altAr: "مسطحات خضراء وممرات وأشجار في حديقة بأبها",
      line: "The name means clouds park. A picnic area at the edge of the mountain — sometimes the clouds are under you.",
      lineAr: "الاسم يعني حديقة السحاب. مكان للتنزّه على حافة الجبل — وأحياناً تكون السحب تحتك.",
      months: [6, 7, 8],
      slot: "afternoon",
      tip: "Take a picnic and a blanket. It is a good place to sit and do nothing.",
      tipAr: "خُذ معك طعاماً وبطانية. مكان جميل للجلوس بلا أي شيء تفعله.",
      maps: "Al Sahab Park, Abha, Saudi Arabia"
    },
    {
      name: "Weekly Market",
      nameAr: "السوق الأسبوعي",
      type: "activities",
      img: "img/market.jpg",
      alt: "Colourful cloth and goods hanging at a traditional market stall in Saudi Arabia",
      altAr: "أقمشة ملوّنة وبضائع معلّقة في بسطة سوق شعبي في السعودية",
      line: "A traditional market with honey, spices, baskets and local clothes. Go in the morning — it closes early.",
      lineAr: "سوق شعبي فيه عسل وبهارات وسلال وملابس محلية. اذهب في الصباح — يُغلق مبكراً.",
      months: ALL_YEAR,
      slot: "morning",
      tip: "Take cash, and ask before you take a photo of people.",
      tipAr: "خُذ معك نقداً، واستأذن قبل أن تصوّر الناس.",
      maps: "Thulathaa Traditional Market, Abha, Saudi Arabia"
    },

    /* ---- food ---- */
    {
      name: "Areeka",
      nameAr: "عريكة",
      type: "food",
      img: "img/areeka.jpg",
      alt: "A bowl of areeka: brown wheat porridge topped with honey and dates",
      altAr: "طبق عريكة: قمح بني مطبوخ مغطى بالعسل والتمر",
      line: "Wheat cooked soft, then covered with honey and butter. The Asiri breakfast, and a very old recipe.",
      lineAr: "قمح مطبوخ حتى يلين، ثم يُغطى بالعسل والسمن. فطور عسيري، ووصفة قديمة جداً.",
      months: ALL_YEAR,
      slot: "lunch",
      tip: "Eat it for breakfast or as a sweet after a big lunch.",
      tipAr: "كُلها في الفطور أو كحلوى بعد غداء كبير.",
      maps: "areeka, Abha, Saudi Arabia",
      mapsSearch: true
    },
    {
      name: "Haneeth at a Local House",
      nameAr: "حنيذ في بيت محلي",
      type: "food",
      img: "img/haneeth.jpg",
      alt: "A large platter of haneeth: slow-roast lamb on a bed of rice",
      altAr: "صينية كبيرة من الحنيذ: لحم مشوي ببطء على فرشة من الأرز",
      line: "Lamb buried in an underground oven for hours until it falls off the bone. The Asiri dish you will talk about later.",
      lineAr: "لحم يُدفن في تنّور تحت الأرض ساعات حتى ينفصل عن العظم. الطبق العسيري الذي ستتحدث عنه لاحقاً.",
      months: ALL_YEAR,
      slot: "lunch",
      tip: "Order one big plate for the table and eat with your right hand.",
      tipAr: "اطلب صينية كبيرة للطاولة وكُل بيدك اليمنى.",
      maps: "haneeth restaurant, Abha, Saudi Arabia",
      mapsSearch: true
    },
    {
      name: "Aseer Sidr Honey",
      nameAr: "عسل السدر العسيري",
      type: "food",
      img: "img/honey.jpg",
      alt: "A traditional Asiri bee house built on top of a huge granite rock",
      altAr: "بيت نحل عسيري تقليدي مبني فوق صخرة جرانيت ضخمة",
      line: "Asir honey is famous across the Gulf. Buy it from a roadside honey shop, straight from the bee house.",
      lineAr: "عسل عسير مشهور في كل الخليج. اشتره من محل عسل على الطريق، مباشرة من بيت النحل.",
      months: [8, 9, 10],
      slot: "lunch",
      tip: "Late summer is harvest time, so that is when it is cheapest.",
      tipAr: "آخر الصيف هو وقت الحصاد، وحينها يكون أرخص.",
      maps: "Abha Honey Market, Abha, Saudi Arabia"
    },
    {
      name: "Kabsa and Arabic Coffee",
      nameAr: "كبسة وقهوة عربية",
      type: "food",
      img: "img/kabsa.jpg",
      alt: "A close view of kabsa rice with tomato, lime and fresh salad",
      altAr: "صورة قريبة لأرز الكبسة مع الطماطم والليمون وسلطة طازجة",
      line: "Spiced rice with chicken or lamb, then cardamom coffee and dates. The everyday meal, done well.",
      lineAr: "أرز بالبهارات مع دجاج أو لحم، ثم قهوة بالهيل وتمر. الأكل اليومي، لكن متقن.",
      months: ALL_YEAR,
      slot: "lunch",
      tip: "Say yes to a second cup of coffee. It means you are welcome.",
      tipAr: "وافق على فنجان قهوة ثانٍ. هذا يعني أنك مرحّب بك.",
      maps: "kabsa restaurant, Abha, Saudi Arabia",
      mapsSearch: true
    },
    {
      name: "Asir Table",
      nameAr: "سُفرة عسير",
      type: "food",
      img: "img/asir-table.jpg",
      alt: "A golden Arabic coffee pot, a small cup and dates on a table",
      altAr: "دلة قهوة عربية ذهبية وفنجان صغير وتمر على طاولة",
      line: "Traditional dishes, eaten sitting on the floor. Come hungry and come with friends.",
      lineAr: "أطباق تقليدية، تُؤكل جلوساً على الأرض. اِحضُر جائعاً ومع أصدقائك.",
      months: ALL_YEAR,
      slot: "lunch",
      tip: "A made-up place, for this project. The real ones are just as good.",
      tipAr: "مكان تجريبي لهذا المشروع. الأماكن الحقيقية لا تقل عنه.",
      maps: "traditional restaurant, Abha, Saudi Arabia",
      mapsSearch: true
    },
    {
      name: "Misty Peak Cafe",
      nameAr: "مقهى قمة الضباب",
      type: "food",
      img: "img/misty-peak.jpg",
      alt: "A small cup of Arabic coffee on a saucer",
      altAr: "فنجان صغير من القهوة العربية على صحن",
      line: "Coffee with a mountain view. Good for a slow morning before the clouds come in.",
      lineAr: "قهوة مع إطلالة على الجبل. مناسبة لصباح هادئ قبل أن يأتي الضباب.",
      months: ALL_YEAR,
      slot: "morning",
      tip: "A made-up place, for this project. Look for a cafe with a view like this.",
      tipAr: "مكان تجريبي لهذا المشروع. ابحث عن مقهى بإطلالة مثل هذه.",
      maps: "cafe with a view, Abha, Saudi Arabia",
      mapsSearch: true
    }
  ];

  /* ----------------------------------------------------------
     1b. THE TWO LANGUAGES

     The page is written in English and in Arabic. The button in
     the toolbar swaps between them. Every word the page makes
     itself is in T below; the words that sit in index.html carry
     data-en and data-ar on the tag itself.
     ---------------------------------------------------------- */
  var LANG_KEY = "abha-lang-v1";

  var lang = "en";
  try {
    var rawLang = window.localStorage.getItem(LANG_KEY);
    if (rawLang === "ar" || rawLang === "en") lang = rawLang;
  } catch (e) { /* private browsing — English is fine */ }

  function isAr() { return lang === "ar"; }

  var MONTHS = {
    en: ["January", "February", "March", "April", "May", "June",
         "July", "August", "September", "October", "November", "December"],
    ar: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
         "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
  };

  /* the short names used on a card: "Best Jun–Aug" */
  var SHORT = {
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
         "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    ar: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
         "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
  };

  var TYPE_LABEL = {
    en: { nature: "Nature", heritage: "Heritage", food: "Food", activities: "Activity" },
    ar: { nature: "طبيعة", heritage: "تراث", food: "طعام", activities: "نشاط" }
  };

  /* the four seasons, and the months in each one */
  var SEASONS = {
    winter: { en: "Winter", ar: "الشتاء", months: [12, 1, 2] },
    spring: { en: "Spring", ar: "الربيع", months: [3, 4, 5] },
    summer: { en: "Summer", ar: "الصيف", months: [6, 7, 8] },
    autumn: { en: "Autumn", ar: "الخريف", months: [9, 10, 11] }
  };

  function seasonLabel(key) { return SEASONS[key][lang]; }

  /* Every sentence the page builds for itself. English and Arabic
     put the words in a different order, so each one is a whole
     sentence rather than a pile of loose words. */

  /* Arabic counts in threes: one place, two places, three to ten
     places, then one place again. So "18 places" is "18 مكاناً". */
  function placeWordAr(n) {
    if (n >= 3 && n <= 10) return "أماكن";
    if (n >= 11) return "مكاناً";
    return "مكان";   // 0, 1 and 2 all read "2 مكان" next to a number
  }

  var T = {
    en: {
      title: "Abha — A Guide for Visiting Friends",
      desc: "A photo guide to Abha, Saudi Arabia: 18 places in the Asir mountains — nature, heritage, food and activities. Filter by type, pick a season or a month, or let it plan your day.",
      allYear: "All year",
      best: "Best ",
      bestNow: "Best now",
      openMaps: "Open in Maps",
      findInAbha: "Find it in Abha",
      save: "Save ",
      remove: "Remove ",
      saved: "Saved",
      place: "place",
      places: "places",
      typeWord: { all: "", saved: "saved ", nature: "nature ", heritage: "heritage ",
                  food: "food ", activities: "activity " },
      showing: function (n, word) {
        return "Showing <b>" + n + "</b> " + word + (n === 1 ? "place" : "places") + ".";
      },
      inPeriod: function (period, good, total, word) {
        return "In <b>" + period + "</b>, <b>" + good + "</b> of these " + total + " " + word +
          (total === 1 ? "place" : "places") + (good === 1 ? " is" : " are") +
          " at their best. Those are shown first.";
      },
      nowLine: function (month, good, total) {
        return "It is <b>" + month + "</b> in Abha. <b>" + good + "</b> of the " + total +
          " places are at their best now. " +
          '<button type="button" class="link" id="showNow">Show them</button>';
      },
      showThem: "Show them",
      showEverything: "Show everything",
      emptySaved: "You have not saved any places yet. " +
        "Press the heart on a place to keep it here. ",
      emptyNone: "Nothing matches that. ",
      planIn: "Plan my day in ",
      planMyDay: "Plan my day",
      myPlanTitle: "My plan for one day",
      myPlanFoot: "This is the day I would take you on. Press the button for a new one.",
      dayIn: "A day in ",
      dayInAbha: "A day in Abha",
      newPlanFoot: function (p) {
        return ((p.month || p.season) ? "Picked for " + periodLabelFull(p) + ". " : "") +
          "Press again for a different day, or " +
          '<button type="button" class="link" id="showMine">show my plan</button>.';
      },
      showMine: "show my plan",
      icsNote: function (day) {
        return "Saved as abha-day.ics for Friday " + day +
          ". Open that file to put the four stops in your calendar.";
      },
      picked: function (name) {
        return "Picked for you: <b>" + name + "</b>. Press again for another.";
      },
      searchMaps: function (name) { return "Search Google Maps for " + name; },
      openMapsAria: function (name) { return "Open " + name + " in Google Maps"; },
      saveAria: "Save ", removeAria: "Remove ",
      switchTo: "عربي", switchAria: "Switch to Arabic"
    },
    ar: {
      title: "أبها — دليل لأصدقائي الزائرين",
      desc: "دليل مصوَّر لأبها في السعودية: 18 مكاناً في جبال عسير — طبيعة وتراث وطعام وأنشطة. صفِّ حسب النوع، أو اختر موسماً أو شهراً، أو دع الصفحة تخطّط يومك.",
      allYear: "طوال السنة",
      best: "الأفضل ",
      bestNow: "الأفضل الآن",
      openMaps: "افتح في الخرائط",
      findInAbha: "ابحث عنه في أبها",
      save: "احفظ ",
      remove: "أزل ",
      saved: "المحفوظة",
      place: "مكان",
      places: "أماكن",
      typeWord: { all: "", saved: "من المحفوظة", nature: "من الطبيعة",
                  heritage: "من التراث", food: "من الطعام", activities: "من الأنشطة" },
      showing: function (n, word) {
        return "يظهر الآن <b>" + n + "</b> " + placeWordAr(n) +
          (word ? " " + word : "") + ".";
      },
      inPeriod: function (period, good, total, word) {
        return "في <b>" + period + "</b>، <b>" + good + "</b> من أصل " + total + " " +
          placeWordAr(total) + (word ? " " + word : "") + " في أفضل حال. وهي معروضة أولاً.";
      },
      nowLine: function (month, good, total) {
        return "الشهر الآن <b>" + month + "</b> في أبها. <b>" + good + "</b> من " + total +
          " مكاناً في أفضل حال الآن. " +
          '<button type="button" class="link" id="showNow">اعرضها</button>';
      },
      showThem: "اعرضها",
      showEverything: "اعرض الكل",
      emptySaved: "لم تحفظ أي مكان بعد. اضغط على القلب في أي مكان ليبقى هنا. ",
      emptyNone: "لا يوجد شيء بهذا الوصف. ",
      planIn: "خطّط يومي في ",
      planMyDay: "خطّط يومي",
      myPlanTitle: "خطتي ليوم واحد",
      myPlanFoot: "هذا هو اليوم الذي سآخذكم فيه. اضغط الزر لتحصل على يوم آخر.",
      dayIn: "يوم في ",
      dayInAbha: "يوم في أبها",
      newPlanFoot: function (p) {
        return (p.month ? "مختار لشهر " : p.season ? "مختار لموسم " : "") +
          ((p.month || p.season) ? periodLabelFull(p) + ". " : "") +
          "اضغط مرة أخرى ليوم مختلف، أو " +
          '<button type="button" class="link" id="showMine">اعرض خطتي</button>.';
      },
      showMine: "اعرض خطتي",
      icsNote: function (day) {
        return "حُفظ الملف باسم abha-day.ics ليوم الجمعة " + day +
          ". افتح الملف لتصبح المحطات الأربع في تقويمك.";
      },
      picked: function (name) {
        return "اخترت لك: <b>" + name + "</b>. اضغط مرة أخرى لغيره.";
      },
      searchMaps: function (name) { return "ابحث في خرائط Google عن " + name; },
      openMapsAria: function (name) { return "افتح " + name + " في خرائط Google"; },
      saveAria: "احفظ ", removeAria: "أزل ",
      switchTo: "English", switchAria: "Switch to English"
    }
  };

  /* T now, in the language on screen */
  function t() { return T[lang]; }

  /* The four words that change on a place: name, line, tip, alt text. */
  function pname(p) { return (isAr() && p.nameAr) ? p.nameAr : p.name; }
  function pline(p) { return (isAr() && p.lineAr) ? p.lineAr : p.line; }
  function ptip(p)  { return (isAr() && p.tipAr)  ? p.tipAr  : p.tip; }
  function palt(p)  { return (isAr() && p.altAr)  ? p.altAr  : p.alt; }

  /* What the four times of day are called. */
  var SLOT_LABEL = {
    en: { morning: "Morning", lunch: "Lunch", afternoon: "Afternoon", evening: "Evening" },
    ar: { morning: "صباحاً", lunch: "الغداء", afternoon: "بعد الظهر", evening: "مساءً" }
  };

  /* ----------------------------------------------------------
     2. THE PAGE
     ---------------------------------------------------------- */
  var grid       = document.getElementById("grid");
  var status     = document.getElementById("status");
  var empty      = document.getElementById("empty");
  var nowLine    = document.getElementById("nowline");
  var toolbar    = document.getElementById("toolbar");
  var savedChip  = document.querySelector('#filters .chip[data-filter="saved"]');
  var icsBtn     = document.getElementById("icsBtn");
  var icsNote    = document.getElementById("icsNote");
  var pickBtn    = document.getElementById("pickBtn");
  var pickToast  = document.getElementById("pickToast");
  var pickAgain  = document.getElementById("pickAgain");
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

  /* Most places here are one real spot, so Maps opens that exact place.
     A few are a dish or a made-up place, and there is no address for
     them — Maps can only show a list. Say so on the button, so nobody
     is surprised. */
  function mapsLabel(place) {
    return place.mapsSearch ? t().findInAbha : t().openMaps;
  }

  function mapsAria(place) {
    return place.mapsSearch ? t().searchMaps(pname(place)) : t().openMapsAria(pname(place));
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
  /* A period is a month number or a season name, never both.
     Keeping it as the month/season itself (not as a finished
     sentence) means the label can be said again in either
     language later, when the button is pressed. */
  function periodLabelShort(p) {
    if (p.month) return MONTHS[lang][p.month - 1];
    if (p.season) return seasonLabel(p.season);
    return "";
  }

  /* "March" or "spring (Mar–May)" — the season with its months */
  function periodLabelFull(p) {
    if (!p.season) return periodLabelShort(p);
    var s = SEASONS[p.season];
    var first = s.months[0], last = s.months[s.months.length - 1];
    return periodLabelShort(p) + " (" + SHORT[lang][first - 1] + "–" + SHORT[lang][last - 1] + ")";
  }

  function periodShort() { return periodLabelShort(state); }
  function periodName()  { return periodLabelFull(state); }

  /* "Jun–Aug", "Dec–May", "Mar, Apr" or "All year".
     Arabic has its own comma, so the list uses "،". */
  function monthText(place) {
    var S = SHORT[lang];
    var comma = isAr() ? "، " : ", ";
    var m = place.months.slice().sort(function (a, b) { return a - b; });
    if (m.length >= 10) return t().allYear;
    if (m.length < 3) return m.map(function (x) { return S[x - 1]; }).join(comma);

    // the months may run past December into January, so start the run
    // at the first gap and then check the whole ring
    var start = 0;
    for (var i = 1; i < m.length; i++) {
      if (m[i] !== m[i - 1] + 1) { start = i; break; }
    }
    var run = m.slice(start).concat(m.slice(0, start));
    for (var j = 1; j < run.length; j++) {
      if (run[j] !== (run[j - 1] % 12) + 1) {
        return m.map(function (x) { return S[x - 1]; }).join(comma);
      }
    }
    return S[run[0] - 1] + "–" + S[run[run.length - 1] - 1];
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

  var HEART = '<svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true" fill="none" ' +
              'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
              '<path d="M12 20.4 4.7 13a4.6 4.6 0 1 1 6.5-6.5l.8.8.8-.8A4.6 4.6 0 1 1 19.3 13z"/></svg>';

  /* ----------------------------------------------------------
     4b. THE PLACES YOU SAVED

     The heart on a card keeps a place in the browser itself,
     so it is still there the next time you open the page.
     There is no server, so it is saved on this device only.
     ---------------------------------------------------------- */
  var SAVED_KEY = "abha-saved-v1";
  var saved = {};

  try {
    var rawSaved = window.localStorage.getItem(SAVED_KEY);
    var list = rawSaved ? JSON.parse(rawSaved) : [];
    if (Object.prototype.toString.call(list) === "[object Array]") {
      list.forEach(function (n) { saved[n] = true; });
    }
  } catch (e) {
    /* private browsing, or the browser said no — keep them in memory only */
  }

  function savedCount() { return Object.keys(saved).length; }

  function saveStore() {
    try {
      window.localStorage.setItem(SAVED_KEY, JSON.stringify(Object.keys(saved)));
    } catch (e) { /* nothing we can do, and nothing breaks */ }
  }

  /* ----------------------------------------------------------
     4. DRAW THE CARDS
     ---------------------------------------------------------- */
  function cardHtml(place, bestNow, quiet) {
    // some photos are tall; "pos" says which part of the photo to show
    var pos = place.pos ? ' style="object-position:' + place.pos + '"' : '';
    var on = !!saved[place.name];

    return '' +
      '<li class="card anim' + (quiet ? " is-quiet" : "") + '" data-place="' + escapeHtml(place.name) + '">' +
        '<a class="card-photo" href="' + mapsUrl(place) + '" target="_blank" rel="noopener" ' +
           'aria-label="' + escapeHtml(mapsAria(place)) + '">' +
          '<img src="' + place.img + '" alt="' + escapeHtml(palt(place)) + '" loading="lazy" width="1400" height="1050"' + pos + '>' +
          '<span class="now"' + (bestNow ? "" : " hidden") + ">" + t().bestNow + "</span>" +
        "</a>" +
        '<button type="button" class="save" data-name="' + escapeHtml(place.name) + '"' +
          ' aria-pressed="' + (on ? "true" : "false") + '"' +
          ' aria-label="' + (on ? t().removeAria : t().saveAria) + escapeHtml(pname(place)) + '">' +
          HEART +
        "</button>" +
        '<div class="card-body">' +
          '<p class="card-meta type-' + place.type + '">' +
            '<i class="dot" aria-hidden="true"></i>' +
            "<span>" + TYPE_LABEL[lang][place.type] + "</span>" +
            '<span class="sep" aria-hidden="true">|</span>' +
            "<span>" + t().best + monthText(place) + "</span>" +
          "</p>" +
          "<h3>" + escapeHtml(pname(place)) + "</h3>" +
          '<p class="line">' + escapeHtml(pline(place)) + "</p>" +
          '<a class="maps" href="' + mapsUrl(place) + '" target="_blank" rel="noopener">' +
            PIN + "<span>" + mapsLabel(place) + "</span>" +
          "</a>" +
        "</div>" +
      "</li>";
  }

  /* Each piece settles into place as you reach it, instead of all
     at once: the cards, and a few still pieces of the page.

     The stylesheet does the moving (the "arrive" animation); this
     only says when each piece has been reached.

     The move is small and quick, and the moment it is over the
     animation is taken off the piece again. Nothing is left
     running while you scroll, which keeps a phone quick. */
  function settled(e) {
    /* only our own little arrival counts: a card that "Pick one for
       me" has just rung, or a stop in the day plan, is a different
       animation and must not be cut short */
    if (e.animationName !== "arrive") return;
    var el = e.currentTarget;
    el.removeEventListener("animationend", settled);
    el.classList.remove("anim");
  }

  var io = ("IntersectionObserver" in window)
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-in");
          e.target.addEventListener("animationend", settled);
          io.unobserve(e.target);
        });
      }, { rootMargin: "0px 0px -4% 0px" })
    : null;

  function reveal() {
    /* a card also carries "anim", so this finds each one only once */
    var parts = document.querySelectorAll(".card, .anim");
    Array.prototype.forEach.call(parts, function (el) {
      if (el.classList.contains("is-in")) return;
      if (io) io.observe(el); else el.classList.add("is-in");
    });
  }

  function render() {
    var months = wantedMonths();

    var shown = PLACES.filter(function (p) {
      if (state.type === "all") return true;
      if (state.type === "saved") return !!saved[p.name];
      return p.type === state.type;
    });

    // when a season or a month is picked, the best ones come first
    if (months) {
      shown = shown.slice().sort(function (a, b) {
        return (isBestIn(b, months) ? 1 : 0) - (isBestIn(a, months) ? 1 : 0);
      });
    }

    /* the old cards are about to be thrown away: stop watching them */
    Array.prototype.forEach.call(grid.querySelectorAll(".card"), function (c) {
      if (io) io.unobserve(c);
    });

    grid.innerHTML = shown.map(function (p) {
      var best = isBestIn(p, months);
      return cardHtml(p, best, months && !best);
    }).join("");
    reveal();

    empty.hidden = shown.length > 0;
    empty.innerHTML = (!shown.length && state.type === "saved" ? t().emptySaved : t().emptyNone) +
      '<button type="button" class="link" id="reset">' + t().showEverything + "</button>";

    // the line above the cards
    var typeWord = t().typeWord[state.type];
    if (!months) {
      status.innerHTML = t().showing(shown.length, typeWord);
    } else {
      var good = shown.filter(function (p) { return isBestIn(p, months); }).length;
      status.innerHTML = t().inPeriod(periodName(), good, shown.length, typeWord);
    }

    drawNowLine();
    updateSavedChip();

    // the list changed, so any place we picked before is not on the page any more
    window.clearTimeout(pickTimer);
    if (pickToast) pickToast.hidden = true;
  }

  /* ----------------------------------------------------------
     4c. "IT IS NOVEMBER" — what is good at this moment

     The page reads the month from the visitor's own device and
     says how many places are at their best right now.
     ---------------------------------------------------------- */
  function currentMonth() { return new Date().getMonth() + 1; }

  function drawNowLine() {
    if (!nowLine) return;

    // once a filter is on, the line above the cards already says it
    if (state.type !== "all" || wantedMonths()) { nowLine.hidden = true; return; }

    var m = currentMonth();
    var good = PLACES.filter(function (p) { return isBestIn(p, [m]); }).length;

    nowLine.hidden = false;
    nowLine.innerHTML = t().nowLine(MONTHS[lang][m - 1], good, PLACES.length);
  }

  function updateSavedChip() {
    if (!savedChip) return;
    var n = savedCount();
    savedChip.textContent = n ? t().saved + " (" + n + ")" : t().saved;
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
      planBtnTxt.textContent = t().planIn + MONTHS[lang][state.month - 1];
    } else if (state.season) {
      planBtnTxt.textContent = t().planIn + seasonLabel(state.season);
    } else {
      planBtnTxt.textContent = t().planMyDay;
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

  function resetAll() {
    state = { type: "all", season: "", month: 0 };
    showTab(filterBtns, filterBtns[0]);
    showTab(seasonBtns, seasonBtns[0]);
    showTab(monthBtns, monthBtns[0]);
    render();
    updatePlanBtn();
  }

  // "Show everything" is drawn inside the empty message, so listen on the
  // message itself — the button is made again every time the list changes.
  empty.addEventListener("click", function (e) {
    if (e.target && e.target.id === "reset") resetAll();
  });

  /* ----------------------------------------------------------
     6b. THE HEART ON A CARD
     ---------------------------------------------------------- */
  grid.addEventListener("click", function (e) {
    var btn = e.target && e.target.closest ? e.target.closest(".save") : null;
    if (!btn) return;

    e.preventDefault();
    var name = btn.getAttribute("data-name");

    if (saved[name]) delete saved[name]; else saved[name] = true;
    saveStore();

    var on = !!saved[name];
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    btn.setAttribute("aria-label", (on ? t().removeAria : t().saveAria) + pname(findPlace(name) || { name: name }));
    updateSavedChip();

    // looking at the saved list and you just unsaved one — take it away
    if (state.type === "saved" && !on) render();
  });

  /* ----------------------------------------------------------
     6c. "SHOW THEM" — jump to this month's best places
     ---------------------------------------------------------- */
  nowLine.addEventListener("click", function (e) {
    if (!e.target || e.target.id !== "showNow") return;

    var m = currentMonth();
    state.month = m;
    state.season = "";
    showTab(monthBtns, document.querySelector('#months .month[data-month="' + m + '"]'));
    showTab(seasonBtns, seasonBtns[0]);
    render();
    updatePlanBtn();
  });

  /* ----------------------------------------------------------
     6d. A SHADOW UNDER THE TOOLBAR ONCE YOU SCROLL

     This is the only work done while the page scrolls, and it is
     one class, only when the answer actually changes. Nothing on
     this page moves as you scroll, so a phone has nothing to
     redraw between the small arrivals.
     ---------------------------------------------------------- */
  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    var stuck = y > 30;
    if (toolbar && toolbar.classList.contains("is-stuck") !== stuck) {
      toolbar.classList.toggle("is-stuck", stuck);
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* turning the phone, or a wider window, can bring a piece into
     view that had no room before */
  var resizeTimer = 0;
  window.addEventListener("resize", function () {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(reveal, 200);
  }, { passive: true });

  /* ----------------------------------------------------------
     6e. "PICK ONE FOR ME" — a place at random

     It only picks from what you can see right now. So if you
     picked Food, it gives you a food place. If you picked a
     month or a season, it looks there first.
     ---------------------------------------------------------- */
  var lastPick = "";
  var pickTimer = 0;

  function pickOne() {
    var pool = PLACES.filter(function (p) {
      if (state.type === "saved") return !!saved[p.name];
      if (state.type !== "all") return p.type === state.type;
      return true;
    });
    if (!pool.length) return;          // nothing on the page to pick from

    // with a month or a season on, the places that are good then come first
    var months = wantedMonths();
    var good = months ? pool.filter(function (p) { return isBestIn(p, months); }) : [];
    var from = good.length ? good : pool;

    // do not give the same place twice in a row
    if (from.length > 1) {
      var other = from.filter(function (p) { return p.name !== lastPick; });
      if (other.length) from = other;
    }

    var place = from[Math.floor(Math.random() * from.length)];
    lastPick = place.name;
    showPick(place);
  }

  function showPick(place) {
    var cards = grid.querySelectorAll(".card");
    var target = null;

    Array.prototype.forEach.call(cards, function (c) {
      c.classList.remove("is-picked");
      if (c.getAttribute("data-place") === place.name) target = c;
    });
    if (!target) return;

    target.classList.add("is-in");       // in case it has not faded in yet
    target.classList.add("is-picked");

    var quiet = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: quiet ? "auto" : "smooth", block: "center" });

    status.innerHTML = t().picked(escapeHtml(pname(place)));
    if (pickToast) pickToast.hidden = false;

    window.clearTimeout(pickTimer);
    pickTimer = window.setTimeout(function () {
      target.classList.remove("is-picked");
      if (pickToast) pickToast.hidden = true;
    }, 7000);
  }

  if (pickBtn) pickBtn.addEventListener("click", pickOne);
  if (pickAgain) pickAgain.addEventListener("click", pickOne);

  /* ----------------------------------------------------------
     7. PLAN MY DAY

     MY_PLAN is the writer's own plan for one day.
     It is the plan you see first. The button gives you a new one.
     ---------------------------------------------------------- */
  /* The four stops of a day, each with the time you would go.
     Times are 24-hour here and shown as 8:00 am on the page.
     Change one and it changes everywhere, including the calendar file. */
  var SLOTS = [
    { key: "morning",   from: "08:00", to: "10:00" },
    { key: "lunch",     from: "13:00", to: "14:30" },
    { key: "afternoon", from: "16:30", to: "18:00" },
    { key: "evening",   from: "19:00", to: "21:00" }
  ];

  /* "08:00" -> "8:00 am" in English, "8:00 ص" in Arabic */
  function prettyTime(hhmm) {
    var p = hhmm.split(":");
    var h = Number(p[0]);
    var h12 = h % 12 === 0 ? 12 : h % 12;
    var tail = isAr() ? (h < 12 ? "ص" : "م") : (h < 12 ? "am" : "pm");
    return h12 + ":" + p[1] + " " + tail;
  }

  var SLOT_BY_KEY = {};
  SLOTS.forEach(function (s) { SLOT_BY_KEY[s.key] = s; });

  var MY_PLAN = [
    { slot: "morning",   place: "Al Soudah Park",
      note: "Then breakfast at Misty Peak Cafe.",
      noteAr: "ثم الفطور في مقهى قمة الضباب." },
    { slot: "lunch",     place: "Asir Table",
      note: "Traditional dishes, sitting on the floor.",
      noteAr: "أطباق تقليدية، جلوساً على الأرض." },
    { slot: "afternoon", place: "Al Muftaha Art Village",
      note: "Colourful walls, galleries and small shops.",
      noteAr: "جدران ملوّنة، وصالات عرض، ومحلات صغيرة." },
    { slot: "evening",   place: "Green Mountain Viewpoint",
      note: "Then dinner in the city on the way back down.",
      noteAr: "ثم العشاء في المدينة أثناء النزول." }
  ];

  function findPlace(name) {
    for (var i = 0; i < PLACES.length; i++) {
      if (PLACES[i].name === name) return PLACES[i];
    }
    return null;
  }

  // Draw any list of stops. A stop is { slot, place, note },
  // where "slot" is a key from SLOTS above.
  var lastStops = [];

  /* the little line under a stop: the writer's own words if the
     stop has them, otherwise the tip that sits on the card */
  function stopNote(stop, place) {
    if (stop.note) return (isAr() && stop.noteAr) ? stop.noteAr : stop.note;
    return ptip(place);
  }

  function drawPlan(stops) {
    lastStops = stops;
    if (icsNote) icsNote.hidden = true;   // the old note was about another day
    planList.innerHTML = stops.map(function (stop) {
      var place = stop.place;
      var note = stopNote(stop, place);
      var slot = SLOT_BY_KEY[stop.slot];
      return "<li>" +
        '<img class="plan-img" src="' + place.img + '" alt="" loading="lazy" width="74" height="74"' +
          (place.pos ? ' style="object-position:' + place.pos + '"' : '') + ">" +
        "<div>" +
          /* The time and the word for the time of day each sit in their
             own box. Without that, the Arabic word pulls the "·" to the
             wrong side and the two pieces of text overlap. */
          '<span class="plan-slot">' +
            '<b class="plan-time">' + prettyTime(slot.from) + "</b> · " +
            '<span class="plan-when">' + SLOT_LABEL[lang][slot.key] + "</span>" +
          "</span>" +
          '<p class="plan-name">' + escapeHtml(pname(place)) + "</p>" +
          '<p class="plan-why">' + escapeHtml(note) + "</p>" +
        "</div>" +
      "</li>";
    }).join("");
  }

  /* Which plan is on screen: the writer's own, or a new one. The
     words above and below the stops follow it, so they change
     with the language too. */
  var planMode = "mine";
  var lastPeriod = { month: 0, season: "" };

  function setPlanHead() {
    if (planMode === "mine") {
      if (planTitle) planTitle.textContent = t().myPlanTitle;
      if (planFoot) planFoot.textContent = t().myPlanFoot;
      return;
    }
    var short = periodLabelShort(lastPeriod);
    if (planTitle) {
      planTitle.textContent = short ? t().dayIn + short : t().dayInAbha;
    }
    if (planFoot) planFoot.innerHTML = t().newPlanFoot(lastPeriod);
  }

  // The writer's own day, shown first.
  function showMyPlan() {
    var stops = MY_PLAN.map(function (s) {
      return { slot: s.slot, place: findPlace(s.place), note: s.note, noteAr: s.noteAr };
    }).filter(function (s) { return s.place; });

    planMode = "mine";
    drawPlan(stops);
    setPlanHead();
    planPanel.hidden = false;
  }

  // Build one day. When "strict" is true it only uses places that are
  // at their best in the chosen season or month (if there are any).
  function buildStops(months, strict) {
    var used = [];
    var stops = [];

    SLOTS.forEach(function (slot) {
      var pool = PLACES.filter(function (p) {
        return p.slot === slot.key && used.indexOf(p.name) === -1;
      });
      if (!pool.length) return;

      var good = (months && strict)
        ? pool.filter(function (p) { return isBestIn(p, months); })
        : [];
      var from = good.length ? good : pool;
      var place = from[Math.floor(Math.random() * from.length)];

      used.push(place.name);
      stops.push({ slot: slot.key, place: place });
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

    planMode = "new";
    lastPeriod = { month: state.month, season: state.season };

    drawPlan(stops);
    setPlanHead();

    planPanel.hidden = false;
  }

  if (planBtn) planBtn.addEventListener("click", makePlan);

  /* ----------------------------------------------------------
     7b. PUT THE DAY IN A CALENDAR

     The page builds a small calendar file in the browser and
     hands it to the phone. No server is needed.
     ---------------------------------------------------------- */
  function pad2(n) { return (n < 10 ? "0" : "") + n; }

  function nextFriday() {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + ((5 - d.getDay() + 7) % 7));  // 5 = Friday
    return d;
  }

  /* A time in Abha as UTC. Abha is UTC+3 all year, with no summer time. */
  function utcStamp(day, hhmm) {
    var p = hhmm.split(":");
    var d = new Date(day.getFullYear(), day.getMonth(), day.getDate(),
                     Number(p[0]) - 3, Number(p[1]), 0);
    return d.getUTCFullYear() + pad2(d.getUTCMonth() + 1) + pad2(d.getUTCDate()) + "T" +
           pad2(d.getUTCHours()) + pad2(d.getUTCMinutes()) + "00Z";
  }

  function icsEsc(s) {
    return String(s).replace(/\\/g, "\\\\").replace(/;/g, "\\;")
                    .replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");
  }

  /* A calendar line should be 75 bytes or fewer. Arabic letters
     take two bytes each, so count bytes, not letters. A folded
     line carries on after a space at the start of the next line. */
  function icsFold(line) {
    var out = "";
    var bytes = 0;
    for (var i = 0; i < line.length; i++) {
      var ch = line.charAt(i);
      var size = ch.charCodeAt(0) < 128 ? 1 : 2;
      if (bytes + size > 75) { out += "\r\n "; bytes = 1; }
      out += ch;
      bytes += size;
    }
    return out;
  }

  function icsText(stops, day) {
    var L = ["BEGIN:VCALENDAR", "VERSION:2.0", "CALSCALE:GREGORIAN",
             "PRODID:-//Abha guide//A day in Abha//EN",
             "X-WR-CALNAME:" + icsEsc(isAr() ? "يوم في أبها" : "A day in Abha")];
    var stamp = utcStamp(day, "00:00");

    stops.forEach(function (stop) {
      var s = SLOT_BY_KEY[stop.slot];
      L.push("BEGIN:VEVENT");
      L.push("UID:" + stamp + "-" + s.key + "@abha-guide");
      L.push("DTSTAMP:" + stamp);
      L.push("DTSTART:" + utcStamp(day, s.from));
      L.push("DTEND:" + utcStamp(day, s.to));
      L.push("SUMMARY:" + icsEsc(pname(stop.place)));
      L.push("LOCATION:" + icsEsc(stop.place.maps));
      L.push("DESCRIPTION:" + icsEsc(pline(stop.place)));
      L.push("END:VEVENT");
    });

    L.push("END:VCALENDAR");
    return L.map(icsFold).join("\r\n") + "\r\n";
  }

  function dayLabel(d) {
    return d.getDate() + " " + MONTHS[lang][d.getMonth()];
  }

  if (icsBtn) icsBtn.addEventListener("click", function () {
    if (!lastStops.length) return;

    var day = nextFriday();
    var blob = new Blob([icsText(lastStops, day)], { type: "text/calendar;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");

    a.href = url;
    a.download = "abha-day.ics";
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.setTimeout(function () { URL.revokeObjectURL(url); }, 2000);

    if (icsNote) {
      icsNote.hidden = false;
      icsNote.textContent = t().icsNote(dayLabel(day));
    }
  });

  // the small "show my plan" button inside the panel
  planFoot.addEventListener("click", function (e) {
    if (e.target && e.target.id === "showMine") showMyPlan();
  });

  /* ----------------------------------------------------------
     8. THE LANGUAGE BUTTON

     English and Arabic say the same thing. The button swaps the
     page over: the words inside index.html come from data-en and
     data-ar, and everything the page builds itself is redrawn.
     ---------------------------------------------------------- */
  var langBtn     = document.getElementById("langBtn");
  var langBtnText = document.getElementById("langBtnText");

  function setTagText() {
    var tags = document.querySelectorAll("[data-en]");
    for (var i = 0; i < tags.length; i++) {
      tags[i].textContent = tags[i].getAttribute(isAr() ? "data-ar" : "data-en");
    }

    var arias = document.querySelectorAll("[data-en-aria]");
    for (var j = 0; j < arias.length; j++) {
      arias[j].setAttribute("aria-label",
        arias[j].getAttribute(isAr() ? "data-ar-aria" : "data-en-aria"));
    }

    var alts = document.querySelectorAll("[data-en-alt]");
    for (var k = 0; k < alts.length; k++) {
      alts[k].setAttribute("alt",
        alts[k].getAttribute(isAr() ? "data-ar-alt" : "data-en-alt"));
    }
  }

  function applyLang() {
    var root = document.documentElement;
    root.lang = lang;
    /* The page keeps the same left-to-right shape in both
       languages, so the buttons never jump to the other side.
       Only the words and the font change. */
    root.dir = "ltr";

    document.title = t().title;
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t().desc);

    setTagText();
    if (langBtnText) langBtnText.textContent = t().switchTo;
    if (langBtn) langBtn.setAttribute("aria-label", t().switchAria);

    render();
    updatePlanBtn();
    drawPlan(lastStops);
    setPlanHead();

    /* In Arabic a row of buttons reads from the right. Some phones
       put a scrolling row at the far end instead, which hides the
       first button, so put all three rows back to the start. */
    ["filters", "seasons", "months"].forEach(function (id) {
      var row = document.getElementById(id);
      if (row) row.scrollLeft = 0;
    });

    try { window.localStorage.setItem(LANG_KEY, lang); } catch (e) { /* fine */ }
  }

  if (langBtn) {
    langBtn.addEventListener("click", function () {
      lang = isAr() ? "en" : "ar";
      applyLang();
    });
  }

  /* ----------------------------------------------------------
     8b. THE DARK / LIGHT BUTTON

     The page is light unless you ask for dark. index.html has
     already put data-theme on <html> before the page painted, so
     there is no white flash; this only keeps the button in step
     with the colours, and remembers your choice for next time.

     The stylesheet does all the colour work — see the
     "DARK COLOURS" block in abha/styles.css.
     ---------------------------------------------------------- */
  var THEME_KEY = "abha-theme-v1";
  var themeBtn  = document.getElementById("themeBtn");
  var htmlEl    = document.documentElement;

  function isDark() { return htmlEl.getAttribute("data-theme") === "dark"; }

  /* aria-pressed says "dark is on", which is what a screen reader
     needs to hear from a button that stays pressed. The name of
     the button ("Dark colours") comes from data-en-aria. */
  function paintThemeBtn() {
    if (themeBtn) themeBtn.setAttribute("aria-pressed", isDark() ? "true" : "false");
  }

  function setTheme(next) {
    htmlEl.setAttribute("data-theme", next);
    paintThemeBtn();
    try { window.localStorage.setItem(THEME_KEY, next); } catch (e) { /* fine */ }
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      setTheme(isDark() ? "light" : "dark");
    });
  }

  /* ----------------------------------------------------------
     9. START
     ---------------------------------------------------------- */
  applyLang();     // direction, title, words, cards, plan button
  showMyPlan();    // the writer's own day, in the right language
  paintThemeBtn(); // the dark/light button shows the colours on screen
  onScroll();
  /* once every photo has arrived the page is a different height, so
     look again for anything that has come into view */
  window.addEventListener("load", reveal);
})();
