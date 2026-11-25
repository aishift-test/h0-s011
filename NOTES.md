# Notes

- Project 1 — landing page: one page for "Breakthrough Author Live", a 4-week book challenge for coaches ($47).
- Project 2 — Abha guide: a photo guide to Abha for visiting friends. 20 places, filter by nature / heritage / food / activities, a month picker, and "Plan my day".
- Files: landing page at the top (`index.html`, `styles.css`, `script.js`, `favicon.svg`). Abha guide in `abha/` (`index.html`, `styles.css`, `script.js`, `favicon.svg`, `img/`).
- Done: landing page — all 11 sections, navy + gold, phone first, video player, join panel, gold polish.
- Done: Abha guide — 20 places, 4 filters, month picker, 4-slot day planner, photo credits in the footer. All the info comes from the student's `brief/abha tourist info.pdf`.
- Done: "Plan my day" now opens on the student's own plan from the PDF (Al Soudah Park → Asir Table → Al Muftaha → Green Mountain). The button makes a different day. `MY_PLAN` in `abha/script.js` is the student's plan.
- Done: every card photo is the same size and sharp (542x406 on desktop, 348x261 on phone). `abha/img/` is about 3.3 MB.
- Done: the Abha guide look is calm and professional. Off-white page, near-black text, and ONE accent colour — the deep red from Al Qatt Al Asiri. The four types (nature / heritage / food / activities) are told apart by a small coloured dot inside one dark chip, not by four loud colours. The triangle band under the hero and above the footer is now almost invisible. All colours live in `:root` at the top of `abha/styles.css`.
- Note: `abha/img/city.jpg` (the student's brown skyline drawing) is still not used — no place in the list matches it.
- Next for the landing page: (1) the video link `VIDEO_SRC`, (2) the payment link `CHECKOUT_URL` — both in `script.js`.
- Next for the Abha guide: nothing needed. You can edit the places in `abha/script.js`. If a photo is tall, add `pos: "50% 70%"` to that place to choose which part shows.
- Live pages: landing page https://aishift-test.github.io/h0-s011/ — Abha guide https://aishift-test.github.io/h0-s011/abha/
