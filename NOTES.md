# Notes

- Project 1 — landing page: one page for "Breakthrough Author Live", a 4-week book challenge for coaches ($47).
- Project 2 — Abha guide: a photo guide to Abha for visiting friends. 18 places, filter by nature / heritage / food / activities, a season picker, a month picker, and "Plan my day".
- Files: landing page at the top (`index.html`, `styles.css`, `script.js`, `favicon.svg`). Abha guide in `abha/` (`index.html`, `styles.css`, `script.js`, `favicon.svg`, `img/`).
- Done: landing page — all 11 sections, navy + gold, phone first, video player, join panel, gold polish.
- Done: Abha guide — 18 places, 4 filters, month picker, 4-slot day planner, photo credits in the footer. All the info comes from the student's `brief/abha tourist info.pdf`.
- Done: "Plan my day" now opens on the student's own plan from the PDF (Al Soudah Park → Asir Table → Al Muftaha → Green Mountain). The button makes a different day. `MY_PLAN` in `abha/script.js` is the student's plan.
- Done: the card photos are big and sharp. Two cards side by side only from 860px wide (540x405 each on a laptop). Below that the card is alone in its row: 704x528 on a tablet, and a square 366x366 on a phone (it was 350x263 — too small). The small photos in "Plan my day" are 86px on a phone (were 58px). `abha/img/` is about 2.9 MB.
- Done: the Abha guide look follows the Visit Saudi tourism site. Light grey page (`#f8f8f8`), white cards with a soft shadow and no border, a big Playfair Display serif headline on a full-width photo, and ONE accent colour — the Visit Saudi purple `#78006e` — used only for buttons and links. The four types are told apart by a small coloured dot in the grey meta line on each card. Filters and months are underlined tabs, not pills. All colours live in `:root` at the top of `abha/styles.css`.
- Done: the guide has 18 places (was 20). Removed Jacaranda Corner (it repeated the Jacaranda Season card) and Highland Grill House (a made-up place). Now: nature 4, heritage 4, activities 4, food 6. The made-up places left are Misty Peak Cafe and Asir Table.
- Done: a SEASON filter, in the toolbar above the months — Any / Winter (Dec–Feb) / Spring (Mar–May) / Summer (Jun–Aug) / Autumn (Sep–Nov). Season and month are the same question at two sizes, so picking one clears the other. The places at their best come first, the others fade, and "Plan my day" follows the season too. The four seasons live in `SEASONS` at the top of `abha/script.js`.
- Note: `abha/img/city.jpg` (the student's brown skyline drawing) is still not used — no place in the list matches it.
- Next for the landing page: (1) the video link `VIDEO_SRC`, (2) the payment link `CHECKOUT_URL` — both in `script.js`.
- Next for the Abha guide: nothing needed. You can edit the places in `abha/script.js`. If a photo is tall, add `pos: "50% 70%"` to that place to choose which part shows.
- Live pages: landing page https://aishift-test.github.io/h0-s011/ — Abha guide https://aishift-test.github.io/h0-s011/abha/
