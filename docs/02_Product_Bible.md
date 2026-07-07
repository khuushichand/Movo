Product Bible
[Working Title] — Personality, Voice & Experience Principles
Status: Draft v1 — reference document for design & engineering Companion to: PRD v1 Last updated: July 2026
This document defines how the product behaves, not what it does. The PRD says what we're building. This says what it feels like to use — precisely enough that anyone can look at a screen, a sentence, or an animation and say "that's on-brand" or "that's not us."
________________________________________
1. Product Personality
In one line: The friend at the table who always knows somewhere good, never forces an opinion, and is genuinely happier when the group decides together than when their suggestion wins.
The personality in five traits, each with a boundary (a trait without a boundary is just an adjective):
Trait	What it looks like	What it is NOT
Warm	Encouraging language, generous defaults, feels glad you're here	Not gushing, not exclamation-point-heavy, not performatively friendly
Tasteful	Curated, specific, has a point of view ("Hidden Gems," not "Restaurants Near You")	Not elitist, never implies your taste is wrong, never snobbish about budget
Calm	Unhurried pacing, no artificial urgency, no red badges demanding attention	Not boring, not slow, not passive when the user needs help
Curious	Genuinely interested in what the group wants, asks good questions	Not nosy — never asks for more than the session needs
Quiet confidence	States things plainly, trusts its own curation	Not showing off, never says "AI-powered" or "smart" about itself
The one-sentence test: Before shipping any copy, flow, or visual, ask — would this feel like it came from a knowledgeable friend, or from a system trying to be helpful? If it's the latter, rewrite it.
________________________________________
2. Tone of Voice
Voice vs. Tone
Voice is constant (who we are). Tone shifts by context (how we sound right now). A magazine's voice doesn't change between its travel section and its obituaries — but the tone absolutely does.
Core voice attributes
•	Conversational, not corporate. Write like you're talking to one person, not broadcasting to a segment.
•	Specific, not generic. "Under ₹500" beats "Budget-Friendly." "Rainy Day Plans" beats "Indoor Activities." Specificity is what makes curation feel human rather than templated.
•	Plain English, Indian at home. No Hinglish, no slang, no forced localization — but rhythm and warmth that read naturally to an Indian 18–30 audience without needing to perform it. Avoid words that skew American-corporate ("awesome," "reach out," "circle back") or British-formal ("whilst," "amongst").
•	Confident, not bossy. We suggest; we never instruct the group what to decide. "A few ideas that might work for everyone" not "Here's your plan."
•	Economical. Say the necessary thing in the fewest warm words. Cut adjectives before cutting clarity.
Tone by context (this is the part that actually gets used day to day)
Context	Tone	Example
Onboarding / first open	Warm, unhurried, inviting	"No pressure to decide anything yet. Just look around."
Browsing / discovery	Curious, editorial	"A quiet café for when you want to actually hear each other talk."
Session started, waiting on others	Patient, light	"Waiting on 2 more people to add their ideas."
Constraint conflict surfaced	Neutral, matter-of-fact, never blaming	"Rohan's budget is ₹500; this place runs closer to ₹1,200. Here are a few ways to bridge that."
Plan finalized	Warm, a little celebratory, brief	"That's the plan. Have a good one."
Empty state, no results	Calm, helpful, never apologetic-desperate	"Nothing here yet for this filter. Try widening the budget or the area."
Errors / something broke	Plain, honest, zero blame, zero humor	"That didn't save. Try again in a moment."
Privacy / permissions	Precise, calm, no legalese, no persuasion	"Your budget is only visible to people in this session."
AI invoked	Helpful, low-ego, clearly bounded	"Here's one idea that fits both budgets. You know your friends best — take it or leave it."
Never: exclamation marks as a crutch for enthusiasm, ALL CAPS for urgency, countdown timers or scarcity language ("Only 2 spots left!"), guilt-based copy ("Are you sure you want to leave your friends hanging?"), or emoji as a substitute for actual warmth in the writing itself.
________________________________________
3. UX Writing Principles
1.	Lead with the human outcome, not the system action. Not "Session created" → "Your plan is ready for people to join."
2.	Never make the user feel behind or slow. No "Hurry, your friends are waiting" — even if true, frame it gently or not at all.
3.	Address the group, not just "you," when relevant. Planning is collective; copy should reflect that ("Everyone's added their ideas" not "You've completed step 2").
4.	One idea per sentence. If a sentence needs a comma to explain a comma, split it.
5.	No jargon, ever, including our own. No "collab session," no "convergence view" in user-facing copy — those are our internal terms. Users see "plan," "session," "the group's ideas."
6.	Buttons say the outcome, not the mechanism. "See where everyone agrees" not "View Convergence." "Ask for an idea" not "Trigger AI Assistant."
7.	Numbers and specifics beat vague reassurance. "3 of 5 people have joined" beats "Almost there!"
________________________________________
4. Visual Principles
(Principles, not a full design system — that's a follow-on document once the Bible is settled.)
•	Whitespace is a feature, not leftover space. If a screen feels empty, that's often correct. Resist filling it.
•	Photography-led, not icon-led. Real, warm, editorial photography carries the emotional weight (Airbnb/Pinterest influence). Icons are for function, kept small and quiet.
•	Typography does the hierarchy work, not color or boxes. A well-set headline needs no card around it.
•	Color is calm and restrained. A confident neutral palette with one or two warm accent colors used sparingly for actual meaning (e.g., "this is where you are in the flow"), never decoratively.
•	No dashboards. Data (budgets, votes, overlaps) is always translated into a warm visual metaphor before it's shown — never a raw table, chart-for-chart's-sake, or spreadsheet aesthetic, even internally-inspired ones.
•	Motion is felt, not seen. See Section 5.
•	Density is low. When in doubt, show fewer things, more beautifully, rather than more things adequately.
________________________________________
5. Animation & Motion Philosophy
Principle: motion should feel like breathing, not like machinery.
•	Purposeful only. Every animation answers "where did this come from, where is it going, why did it change" — never decoration for its own sake.
•	Soft easing, no bounce, no spring-for-spring's-sake. Bounce reads as playful-app-toy; we want considered and calm. Ease-in-out, moderate duration (200–350ms for most UI transitions).
•	No attention-grabbing motion. Nothing pulses, shakes, or wiggles to demand a tap. If something needs attention, say so in words, don't animate at it.
•	Transitions connect states, they don't reset them. When a card becomes a full view, it should visually grow into that view, not cut and reappear — continuity is part of feeling premium.
•	Loading states are calm, not cute. No spinning mascots. A gentle, minimal, branded loading treatment (soft pulse, subtle shimmer) — never a joke or a fun fact while waiting.
•	Celebration moments are the one place motion can have a bit more warmth — when a plan is finalized, a small, tasteful moment of delight is earned. Still restrained: think a soft glow or gentle confetti-adjacent moment, never a full-screen takeover.
________________________________________
6. Accessibility Principles
Accessibility is a design constraint from day one, not a pass at the end.
•	Contrast: all text meets WCAG AA minimum (4.5:1 for body text, 3:1 for large text) even within a warm, muted palette — calm doesn't mean low-contrast.
•	Never color-alone. Constraint conflicts, budget mismatches, and status indicators must be conveyed with text/icon, not color alone (colorblindness, and it's also just clearer).
•	Motion sensitivity: respect prefers-reduced-motion; all transitions have a reduced/instant fallback that loses no information.
•	Touch targets: minimum 44×44px on mobile, generous spacing between interactive elements especially in swipe/vote flows.
•	Screen reader parity: every visual-only cue (e.g., a subtle color bar showing budget fit) has an equivalent text label. Editorial imagery gets meaningful alt text, not "image.jpg" or decorative-only skip.
•	Language clarity doubles as accessibility. Plain English (Section 3) helps non-native speakers and cognitive accessibility alike — this is a shared goal, not a separate one.
•	Forms/inputs: constraint check-ins must be fully keyboard-navigable and screen-reader-labeled; no interaction should depend solely on drag/swipe gesture (always provide a tap/button alternative).
________________________________________
7. Empty States
Empty states are one of the most on-brand opportunities in the product — they're where "calm, not desperate" gets tested.
Principles:
•	Never apologize excessively ("Oops, nothing here! 😢"). State the situation plainly and warmly, then offer a next step.
•	Never guilt or pressure ("Your friends are waiting for you to add something!").
•	Always offer one clear, low-effort next action — never a dead end.
Examples:
Situation	Copy
New user, nothing saved yet	"Nothing saved yet. Start with a collection that catches your eye."
Session started, no one's added ideas	"This plan is just getting started. Add the first idea."
Filtered search, no results	"Nothing fits those filters yet. Try a wider budget or a different area."
Group board, no overlap yet	"No overlap yet — that's normal early on. Keep adding, it usually comes together."
No past sessions / history	"Your past plans will show up here once you've made a few."
________________________________________
8. Error States
Principles:
•	Plain, calm, zero blame — never imply the user did something wrong unless they truly need to correct input.
•	No humor, ever, in error states (per your explicit direction).
•	Always say what happened and what to do next — never just "Something went wrong."
•	Technical detail belongs in logs, not in user-facing copy.
Examples:
Situation	Copy
Network/save failure	"That didn't save. Check your connection and try again."
Session link invalid/expired	"This plan link isn't working anymore. Ask whoever shared it to send a new one."
Booking handoff failed	"We couldn't open [Partner] right now. You can find this place directly at [link]."
Input validation (e.g. budget field)	"That doesn't look like a budget — try just the number, like 500."
AI assistant unavailable	"Can't reach the assistant right now. The group can still decide without it."
________________________________________
9. Privacy Language
Privacy copy is a trust surface, not a legal formality — it should read like an honest explanation from a person, not a compliance notice.
Principles:
•	Plain language over legal language. "Only people in this session can see your budget" not "Your data is processed in accordance with our data handling policy."
•	State the fact, not the reassurance. Don't say "Don't worry, we take your privacy seriously" — say exactly what is and isn't shared, and let the clarity build the trust.
•	Always actionable. Any privacy statement near a toggle or setting should make clear what changes if the user flips it.
•	Never bury consent in flow. Personalization opt-in is a clear, standalone moment — never a pre-checked box or a buried settings toggle discovered by accident.
Examples:
Situation	Copy
Asking for a constraint	"This helps the group find something that works for everyone. Only visible to people in this session."
Personalization opt-in	"Let us remember your preferences to make future planning faster? You can turn this off anytime."
Personalization off (confirming)	"Got it — nothing about your choices will be saved beyond this session."
Sharing a session link	"Anyone with this link can join and see what's been added. You can end the session anytime."
Data deletion	"This will remove your saved preferences. Your past sessions with friends stay as they were."
________________________________________
10. AI Behavior Principles
This section governs how AI is allowed to show up anywhere in the product — the single most important boundary in the whole Bible, given the "should never feel like an AI website" mandate.
Non-negotiable rules:
1.	Invisible until invoked. No persistent AI icon, no proactive pop-ups, no "Did you know I can help?" prompts. The user must take a clear, deliberate action to bring AI into the conversation.
2.	Never initiates a suggestion unasked. AI responds to an explicit request ("we're stuck," "give us one more idea") — it does not offer opinions the group didn't ask for, even when it "could."
3.	Low-ego framing. AI never claims certainty or authority over the group's taste. Language like "here's one idea" or "this might fit" — never "the best option is" or "I recommend."
4.	Always hands the decision back. Every AI response should end in a way that returns agency to the group ("Take it or leave it," "You know your friends best").
5.	No AI-flavored visual or verbal tells. No robot iconography, no "✨ AI" badges, no chatbot bubble UI. If it's invoked, it should look and read like a calm inline suggestion, not a separate AI persona bolted onto the product.
6.	Transparent when used. Never disguise an AI-generated suggestion as an editorial curation or another user's idea — clearly (but quietly) distinguishable, without being loud about it.
7.	Never touches conflict resolution alone. Per the PRD, AI can be asked to propose a compromise, but it never silently applies one — its output is always a suggestion into the shared board, not an automatic decision.
8.	Graceful absence. If AI is unavailable, the product must remain fully usable — the collaborative mechanic is the core product, AI is a support beam, never a load-bearing wall (see Error States, Section 8).
________________________________________
How to Use This Document
•	Designers: if a screen doesn't pass the tone/visual checks here, it's not ready — this isn't a style suggestion, it's a bar.
•	Engineers: error/empty/privacy copy in this doc are defaults, not placeholders — implement the actual language, don't ship "Lorem ipsum" or generic framework copy and expect writing to be swapped in later.
•	Anyone writing new copy: run it through the one-sentence test in Section 1 before shipping.
•	This is a living document — expect it to sharpen as real screens get built and real edge cases surface. Treat contradictions you find as signal to revisit, not as reasons to ignore the doc.
________________________________________
Open Questions for Next Discussion
1.	Naming conventions — we've avoided a working title throughout; worth a dedicated naming session since tone-of-voice work compounds once there's a real name to write around.
2.	Should there be a distinct (even if subtly different) tone for the solo-exploration mode vs. group-session mode, given Persona 4 (the Date Planner) may need a slightly different register?
3.	A short "copy audit checklist" derived from this doc might be worth creating next, so it can be applied screen-by-screen once UI design starts.
