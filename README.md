# Wordle Tools

Wordle Tools is a lightweight, client-side web application that provides two helpful utilities for Wordle players:

1. **Daily Guess Generator** — Displays a deterministic “guess of the day” in a Wordle-style grid, based on the current date.
2. **Wordle Cheat Sheet** — A searchable, alphabetized list of all valid five-letter words with optional letter-inclusion and exclusion filters.

The project is intentionally framework-free, fast, and easy to extend — designed for both casual Wordle players and developers interested in clean front-end logic.

---

## Features

### Daily Guess Generator
- Generates a consistent “guess of the day” using a date-based seed
- Wordle-style tile layout
- Options to view:
  - Today’s guess
  - The next day’s guess
  - A random guess
- Fully deterministic — the same date always produces the same word

### Wordle Cheat Sheet
- Displays all valid 5-letter words in alphabetical order
- Real-time search
- Letter filters:
  - **Must include letters**
  - **Exclude letters**
- Responsive layout for desktop and mobile

---

## Tech Stack

- **HTML5**
- **CSS3** (Wordle-inspired styling)
- **Vanilla JavaScript (ES Modules)**

- No frameworks, no build tools, no dependencies

---
