# Worldprint

Most platforms are built to maximise what you consume.  
Worldprint is built to surface what consumption reveals.

It is a news-based reflection system — designed not to inform faster, but to help you understand the psychological patterns that connect world events to personal ones.

---

## Core Idea

Every public event carries a human impulse beneath it.  
Every human impulse is also personal.

The same fear that drives a political crisis lives — in smaller form — in everyday decisions. The same avoidance that delays climate action shows up in how people handle difficult conversations. The same need for belonging that fuels nationalism exists in how communities form and exclude.

Worldprint does not explain the news.  
It asks what the news might be explaining about you.

---

## What's Inside

- 18 curated articles across 6 thematic categories
- Each article is tagged with a `patternTag` — the underlying human impulse behind the event
- 3 reflection questions per article, surfaced one at a time
- A pattern reveal at the end — not a judgment, just a mirror
- UI designed to be calm, unhurried, and typographically considered

**Thematic Categories**
- Climate & Survival
- Women & Accountability
- Power & Territory
- Celebration & Identity
- Government & Dependency
- Faith & Authority

---

## Tech Stack

- React (Vite)
- React Router
- Custom CSS — no UI library

---

## Development Process

Built solo, following a self-directed SDLC.

**Planning**
- Product philosophy defined before any code was written
- v0.1 scoped deliberately — static articles, no backend, no AI
- Core data structure (`patternTag`, `reflection` arrays) designed before UI

**Design**
- Visual language built around psychological principles of calm and slowness
- Cormorant Garamond chosen as primary typeface for its literary, unhurried quality
- Warm neutral palette — cream, ink, muted gold — to reduce urgency
- Single question per screen to encourage presence over speed

**Development**
- Component architecture: `ArticleCard`, `CategorySection`, `ArticlePage`, `HomePage`
- Dynamic routing via React Router
- Reflection state managed through `currentQuestion`, `answers`, `revealed`
- 400ms auto-advance delay — small detail, considered reason

**Version Control**
- Git and GitHub used throughout
- Commit messages written descriptively at each milestone
- Branch discipline maintained from the start

**Testing**
- Full manual testing across all 18 articles
- Reflection flow verified end to end
- Edge cases handled — missing articles, incomplete answer states

---

## Running Locally

```bash
git clone https://github.com/your-username/worldprint.git
cd worldprint
npm install
npm run dev
```

---

**Built independently. 4th semester B.Tech CSE (AI/ML).**