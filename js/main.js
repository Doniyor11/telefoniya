"use strict";

// to be extended... currently only swaps color ←→ background-color
class ChangeColorTheme {
    constructor(target) {
        // use string for the target attribute, eg ".switch-color"
        this.target = document
            .querySelector(target)
            .addEventListener("click", this.toggleTheme.bind(this))

        this.fg = window
            .getComputedStyle(document.body)
            .getPropertyValue("background-color")

        this.bg = window
            .getComputedStyle(document.body)
            .getPropertyValue("color")
    }

    toggleTheme() {
        [this.fg, this.bg] = [this.bg, this.fg];
        document.body.style.backgroundColor = this.fg;
        document.body.style.color = this.bg;
    }
}