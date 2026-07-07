Product Requirements Document
[Working Title] — A Collaborative Experience Discovery & Planning Platform
Status: Draft v1 — for discussion Owner: [You] Last updated: July 2026
________________________________________
1. Vision
People don't struggle to find things to do. They struggle to decide together.
Every existing tool optimizes for the moment after the decision is made — booking a table, buying a ticket, reserving a slot. Nothing good exists for the messy, human, often-joyful process before that: browsing ideas, weighing everyone's constraints, discovering something new, and arriving at a plan the whole group is actually excited about.
We are building the space where that happens. Not a booking engine. Not a recommendation algorithm. A shared table where a group can explore possibilities together — calmly, beautifully, without fifteen tabs open — and walk away with a plan they're genuinely looking forward to.
If Pinterest is where you collect inspiration alone, and a group chat is where plans go to die in scroll — this is the space in between: collaborative discovery that actually converges into a plan.
________________________________________
2. Problem Statement
The friction isn't a lack of options. Bengaluru (and every city) has more restaurants, cafés, treks, and activities than any one person could exhaust in a lifetime. The friction is coordinating around invisible, conflicting constraints:
•	Budget varies wildly between friends and is rarely said out loud until late
•	Someone has to leave by 8pm; someone else is only free after 7
•	One person did the trending brunch spot last week and wants something new
•	Distance matters to some, doesn't matter to others
•	No one wants to be "the difficult one," so people stay quiet instead of stating constraints — and the group defaults to indecision or whoever's loudest
Today, resolving this means bouncing between Instagram (inspiration), Google Maps (location/distance), Zomato/BookMyShow (specifics), a WhatsApp group (discussion), and increasingly ChatGPT (arbitration) — with no shared surface that holds the whole conversation. The result: decision fatigue that eats into the time meant for the actual experience, and plans that quietly die from unresolved friction rather than active disagreement.
The core insight: this is a constraint-reconciliation problem wearing a discovery-app costume. Solve the former honestly and transparently, and the latter (beautiful browsing) becomes the enjoyable part rather than a distraction from the real problem.
________________________________________
3. Goals
Product goals
•	Reduce the time and emotional friction between "let's do something" and "we're doing this" — without erasing the discussion, since the discussion is part of the fun for many groups
•	Make constraint conflicts visible and easy to resolve, not hidden or auto-decided
•	Make discovery itself enjoyable enough that people browse even without an active plan (Pinterest-like standalone value)
•	Support both a single steady "planner" and a fully collaborative group with no clear leader
Explicit non-goals (v1)
•	We are not trying to become a booking/inventory platform (no owned restaurant/ticket inventory)
•	We are not trying to maximize engagement/time-on-app as a metric — this is a tool that should get people offline faster, not addict them
•	We are not building a general social network (feeds, followers, likes-as-currency)
•	We are not personalizing by default or building behavioral profiles without explicit opt-in
Business goal (this phase)
•	Validate that groups genuinely plan better and enjoy planning more with this tool vs. status quo (WhatsApp + Maps + Zomato + Instagram). Monetization is deliberately deferred.
________________________________________
4. User Personas
(Proposed — challenge freely; these are hypotheses to validate, not settled truth.)
Persona 1 — "The Reluctant Planner" (Ananya, 24, working professional)
Ends up organizing most hangouts by default, not by choice. Exhausted by asking six people for their budget and availability individually. Wants a way to collect everyone's constraints without being the nag. Success = she can propose "let's do something Saturday" and the group self-organizes from there.
Persona 2 — "The Quiet Constraint-Haver" (Rohan, 21, college student)
Has a tight budget but doesn't want to say so out loud in a group of friends with more disposable income. Currently either overspends to avoid awkwardness or quietly opts out. Success = the platform lets him state constraints privately/comfortably, and the group still finds something inclusive without singling him out.
Persona 3 — "The Explorer" (Meera, 27, working professional, new to the city)
Loves discovering new places and experiences, uses Pinterest/Instagram for inspiration constantly, but has no easy way to turn "I saved this" into "we're doing this" with her friend group. Success = seamless path from solo browsing to group plan.
Persona 4 — "The Date Planner" (Aditya, 26)
Different mode entirely — planning for one other person, not a group. Higher stakes per decision, wants to seem thoughtful, less interested in group-consensus mechanics and more in curated, impressive, "just right" suggestions. (Flagging: this persona may need different UX than group planning — see open questions in Section 6.)
Question for you: Are all four in scope for v1, or should we sharpen focus to 1–2 primary personas first? Trying to serve group consensus and solo date-planning and new-to-city exploration in one v1 risks diluting the core mechanic.
________________________________________
5. User Journey
Journey A — Group plan, asynchronous start
1.	Spark: Someone opens the app and starts a session ("Saturday hangout") — or forwards a saved collection to the group
2.	Invite: Friends join via link, no mandatory account friction (see privacy section)
3.	Contribute (async): Over the next day or two, each person browses curated collections, saves ideas to the shared board, and optionally states a constraint (budget, must-leave-by time, "not sushi again") — only if relevant, never a mandatory profile form
4.	Surface tensions: The platform visibly (not silently) shows where constraints conflict — e.g., "Rohan's budget is ₹500, Ananya suggested a place that averages ₹1,200" — framed neutrally, never as blame
5.	Converge: The group either keeps discussing async, or flips into a live mode (real-time voting/swiping together) to close the loop
6.	Decide: A shortlist narrows to one plan, or a couple of backup options are saved for later
7.	Book: Deep link out to BookMyShow/Zomato/District/Maps for the actual reservation — we don't own this step
8.	Reflect (optional, future): Lightweight, private way to note "that was great" / "wouldn't repeat" to (optionally) improve future suggestions
Journey B — Live, real-time decision (friends already together, "what now?")
1.	Someone opens the app, starts a live session, others join instantly by proximity/link
2.	Quick constraint check-in (budget range, time available, mood/energy) — fast, tappable, not a form
3.	Swipe/vote together on a curated set of nearby options
4.	Immediate convergence — group sees where they overlap in real time
5.	Decide and go — minimal friction, this mode should resolve in under 2–3 minutes
Journey C — Solo exploration (no active plan)
1.	Open app just to browse — editorial collections, no pressure to decide anything
2.	Save things that spark interest, privately, to personal boards
3.	Later, turn a saved board into a group session with one action ("plan this with friends")
Question for you: Which journey is the wedge for v1 — A, B, or C? They have very different technical and design demands (async collaboration vs. real-time multiplayer vs. solo Pinterest-style browsing). Trying to nail all three simultaneously in a first release is a real risk.
________________________________________
6. Core Features (v1 candidates)
Grouped by the three stated pillars: Discover → Collaborate → Decide.
Discover
•	Editorial collections, hand-curated, mood/occasion-based ("Rainy Day Plans," "Under ₹500," "First Date, Low Pressure," "Weekend Escapes") — not algorithmic feeds
•	Rich experience cards — real data where available (location, hours, price range, ratings) pulled from reliable sources/APIs, visually led (photo-forward, Pinterest/Airbnb-style), not spec-sheet-led
•	Personal & shared boards — save ideas privately or to a group board, Pinterest-style, before any "session" exists
Collaborate
•	Planning sessions — a lightweight, ephemeral (or persistent, user's choice) shared space per outing, not a permanent group chat clone
•	Constraint check-in — optional, contextual, per-session prompts for budget/time/distance/mood — never a mandatory long-form profile
•	Transparent conflict surfacing — the platform names where constraints clash and proposes balanced compromises (e.g., "affordable dinner + one splurge activity") rather than silently filtering or silently choosing
•	Flexible pacing — same session supports async (drop in over days) and live (swipe/vote together in real time) modes, switchable anytime
Decide
•	Convergence view — a clear, calm visual of where the group's saved ideas and constraints overlap (not a spreadsheet, not a bracket — needs real design thought)
•	Shortlisting & light voting — narrow from "everyone's ideas" to "the 2-3 real contenders" without it feeling like a poll/survey tool
•	Handoff to booking — one tap out to the right external platform (Maps, BookMyShow, Zomato, District, trek operator sites) with details pre-filled where possible
•	Ask AI (only on request) — if a group is stuck ("we can't decide" / "give us one more idea that fits X and Y"), an explicit, invokable assistant helps — never present by default, never initiating suggestions unasked
Open design question I'd flag rather than assume: the "convergence view" is the single hardest and most important screen in the product — it's the moment constraint-reconciliation becomes visible and feels good rather than like an argument made visual. I'd want to spend real design time here before touching code. Worth a dedicated conversation once the PRD is settled.
________________________________________
7. Future Features (explicitly post-v1)
•	Opt-in long-term personalization (remembered preferences, taste graph)
•	"Reflect" loop — private post-experience notes that quietly improve future suggestions
•	Trip/multi-day planning (treks, road trips) as a distinct heavier mode
•	Local creator/curator partnerships for collections (editorial contributors, not algorithmic ranking)
•	Group "taste compatibility" as a fun, optional, transparent feature (Spotify Blend-style) — approached carefully given privacy stance
•	Monetization: affiliate booking commissions, premium collaborative features, curated partnerships
•	Solo date-planning as a distinct product mode (see Persona 4 flag above)
________________________________________
8. Privacy Principles
These are non-negotiable design constraints, not features to trade off later:
1.	Ask only what's needed, when it's needed. Constraints are requested per-session, contextually — never as an upfront mandatory profile.
2.	Private by default. Nothing is shared with the group, or beyond it, unless the user explicitly shares it.
3.	No silent profiling. No behavioral inference without clear, opt-in consent, explained in plain language.
4.	Personalization is optional and reversible. The product must be fully usable and good without ever opting into memory/personalization. Turning it off is always available and honored immediately.
5.	Transparency over automation in conflict. The platform never silently resolves disagreements on users' behalf; it shows the conflict and helps humans decide.
6.	Minimal identity friction. Joining a session shouldn't require heavy signup — low barrier to entry with privacy intact (exact mechanism TBD — e.g. link-based ephemeral join).
________________________________________
9. Design Philosophy
Feeling: Warm, minimal, premium, editorial, calm, elegant. Never transactional, never "AI-website," never e-commerce.
Reference points and what to borrow from each:
•	Airbnb — trust through editorial photography and clear, honest information density; the feeling of "this was curated by someone who cares"
•	Pinterest — joyful, low-pressure visual browsing; saving as a delightful act, not a commitment
•	Spotify — calm, confident use of color and motion; personalization that feels like a gift, not surveillance (when opted in)
•	Apple — restraint; whitespace; typography doing the work instead of ornamentation; every screen earns its elements
What to explicitly avoid: dense grids of filterable listings (Google Maps/BookMyShow energy), chat-bubble AI interfaces, dashboard/spreadsheet aesthetics for the convergence/decision view, notification-driven urgency, gamified engagement mechanics (streaks, badges) that manufacture stickiness rather than genuine value.
AI's visual and interaction posture: invisible until invoked. No persistent chat icon, no proactive suggestions, no "AI-generated" framing. When invoked, it should feel like a calm, capable friend chiming in once asked — not a chatbot layer bolted on top.
________________________________________
10. Technical Considerations
(High-level only — flagging areas that need real decisions, not prescribing architecture yet.)
•	Data sourcing: Reliable APIs for movies, restaurants, locations/maps, ratings, public events where available; manual/editorial curation to fill gaps (treks, workshops, niche activities) — a hybrid content pipeline is a real early investment, not an afterthought
•	Real-time + async duality: The architecture needs to support both a live multiplayer-style session (websockets or similar) and a persistent async board — these have different technical shapes and should be scoped honestly, likely async-first for v1 given complexity
•	No owned inventory/booking: We are an aggregator/decision layer, linking out to booking partners — reduces liability and scope, but means we depend on external data freshness and deep-linking quality
•	Privacy-by-design implications: minimal data retention by default, clear data model separating session-scoped ephemeral data from opt-in persistent profile data
•	Identity/auth: needs a low-friction join mechanism (magic link / session code) balanced against spam/abuse prevention — worth a dedicated design decision
________________________________________
11. Success Metrics
(Proposed — this needs its own dedicated conversation, but a starting frame:)
Primary (validates the core thesis):
•	% of started sessions that reach a "decided" or "shortlisted-and-saved" end state (vs. abandoned)
•	Time from session start to decision, compared to group's self-reported prior process
•	Qualitative: do users describe planning itself as enjoyable, not just "fast"? (survey/interview signal, not just analytics)
Secondary (health signals):
•	Return usage for a new session (not repeat use of the same session — signals habitual value, not just one-off utility)
•	Ratio of async-only vs. live-mode sessions (tells us which journey is actually the wedge)
•	% of sessions where "Ask AI" is invoked (should be low and voluntary — a high number may signal the collaborative mechanic itself isn't working)
Explicitly not a success metric: time-on-app, session frequency as a vanity number, DAU for its own sake. This product's win condition is helping people leave and go do the thing, not maximizing time inside it.
________________________________________
Open Questions for Next Discussion
1.	Scope the personas: all four (Section 4), or sharpen to 1–2 for v1?
2.	Pick the wedge journey: async group planning (A), live real-time (B), or solo discovery (C) — which ships first?
3.	Deep-dive the "convergence/decision view" — this is the make-or-break screen and deserves dedicated design time before any code.
4.	Identity/join mechanism — how light is "light," and how do we prevent abuse without adding friction?
