window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector: string, text: string): void => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const type of ["chrome", "node", "electron"] as const) {
    const version = process.versions[type];
    if (version) {
      replaceText(`${type}-version`, version);
    }
  }
});
