# 🎨 theme-lib

A lightweight JavaScript library to easily manage **light / dark themes**, with automatic persistence and smooth animations.

---

# 🚀 Installation (CDN)

You can use the library directly via CDN (no install required):

```html
<script type="module">
import ThemeManager from "https://cdn.jsdelivr.net/gh/MDotstream/theme-lib@1.0.0/dist/theme-lib.esm.js";

const theme = new ThemeManager();
</script>
```

# ⚙️ Basic Usage

## 📌 Initialize the theme manager
```js
const theme = new ThemeManager();
```
👉 The saved theme is automatically restored on load.

## 🔘 Toggle theme
```js
theme.toggle();
```

## 🎨 Set a specific theme
```js
theme.setTheme("dark"); // or "light"
```

## 📥 Get current theme
```js
console.log(theme.getTheme());
```

# 🌈 Required CSS
## This library uses CSS variables, so you must include the following styles:
```css
:root {
  --bg: white;
  --text: black;

  --surface-a: #f1f1f1;
  --surface-b: #e0e0e0;
  --surface-c: #cfcfcf;
}

[data-theme="dark"] {
  --bg: #111;
  --text: #fff;

  --surface-a: #1c1c1c;
  --surface-b: #2a2a2a;
  --surface-c: #3a3a3a;
}

body {
  background: var(--bg);
  color: var(--text);
  transition: background-color 0.4s ease, color 0.4s ease;
}
```

# 🧱 Theme Surfaces (Cards / Components)
## You can use these utility classes for UI components:
```css
.theme-a {
  background: var(--surface-a);
}

.theme-b {
  background: var(--surface-b);
}

.theme-c {
  background: var(--surface-c);
}
```

## Example HTML
```html
<div class="theme-a">Light card</div>
<div class="theme-b">Medium card</div>
<div class="theme-c">Strong card</div>
```

# ✨ Animation
## Theme switching includes a small smooth animation automatically.
```css
.theme-fade {
  animation: fadeTheme 0.3s ease;
}

@keyframes fadeTheme {
  0% {
    opacity: 0.7;
    transform: scale(0.99);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

# 💾 Automatic Persistence
- Theme is saved automatically in localStorage
- Restored on every page load
- No extra setup required

