"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        if (element)
            element.innerText = text;
    };
    for (const type of ["chrome", "node", "electron"]) {
        const version = process.versions[type];
        if (version) {
            replaceText(`${type}-version`, version);
        }
    }
});
