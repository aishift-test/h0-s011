# Notes

- Two projects in one repo. Landing page at the top: one page for "Breakthrough Author Live", a 4-week book challenge for coaches ($47). Abha guide in `abha/`: a photo guide to Abha for visiting friends.
- Abha guide files: `abha/index.html`, `abha/styles.css`, `abha/script.js`, `abha/favicon.svg`, `abha/img/`. All the info comes from the student's `brief/abha tourist info.pdf`. The look follows the Visit Saudi site: grey page, white cards, one purple accent `#78006e`, all in `:root` at the top of `abha/styles.css`.
- Done: landing page — all 11 sections, navy + gold, phone first, video player, join panel.
- Done: Abha guide — 18 places, 4 type filters, a SEASON filter (Winter / Spring / Summer / Autumn) and a month picker, a 4-slot "Plan my day" (it opens on the student's own plan from the PDF), photo credits in the footer.
- Done: every plan stop shows a clock time: 8:00 AM morning, 1:00 PM lunch, 4:30 PM afternoon, 7:00 PM evening. The times are in `SLOTS` in `abha/script.js` — change one there and it changes everywhere.
- Done: "Plan my day" buttons — one see-through one in the top photo, one in the planner. Big photos: two cards side by side only from 860px wide; on a phone the photo is square, 366x366.
- Done: four "smart" things. (1) A heart on every card saves that place in the browser (`localStorage`, key `abha-saved-v1`) and a "Saved" tab in the Show row shows them. (2) A line above the cards reads the real month off the visitor's device: "It is November in Abha. 11 of the 18 places are at their best now. Show them". (3) "Add this day to my calendar" builds an `abha-day.ics` in the browser for the coming Friday — times are Abha time (UTC+3), written as UTC so any phone shows them right. (4) Motion: the hero photo drifts, cards fade in as you scroll (IntersectionObserver), the four plan stops arrive one by one, the toolbar lifts when you scroll. All of it stops for `prefers-reduced-motion`.
- Places are edited in `PLACES` in `abha/script.js`; the seasons in `SEASONS`; the student's own day in `MY_PLAN`. If a photo is tall, add `pos: "50% 70%"` to that place.
- Next for the landing page: the video link `VIDEO_SRC` and the payment link `CHECKOUT_URL`, both in `script.js`.
- Note: `abha/img/city.jpg` (the student's brown skyline drawing) is still not used — no place in the list matches it.
- Live pages: https://aishift-test.github.io/h0-s011/ — https://aishift-test.github.io/h0-s011/abha/
