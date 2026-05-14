export default class ThemeManager {
  constructor(options = {}) {
    this.key = options.key || "theme";
    this.darkClass = options.darkClass || "dark";

    this.init();
  }

  init() {
    const saved = this.getStorage() || "light";
    this.setTheme(saved, false);
  }

  setTheme(theme, animate = true) {
    document.documentElement.setAttribute("data-theme", theme);
    this.saveStorage(theme);

    if (animate) this.animate();
  }

  toggle() {
    const current = document.documentElement.getAttribute("data-theme");

    this.setTheme(current === "dark" ? "light" : "dark");
  }

  getTheme() {
    return document.documentElement.getAttribute("data-theme");
  }

  // 🍪 storage (localStorage simple, mieux que cookie ici)
  saveStorage(value) {
    localStorage.setItem(this.key, value);
  }

  getStorage() {
    return localStorage.getItem(this.key);
  }

  // ✨ animation switch
  animate() {
    document.body.classList.remove("theme-fade");
    void document.body.offsetWidth;
    document.body.classList.add("theme-fade");
  }
}