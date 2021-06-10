function creatSvg(colors) {
  const svg = document.createElement("svg");
  svg.setAttribute(`width`, `${48 * colors.length}`);
  svg.setAttribute(`height`, `48`);
  svg.setAttribute(`viewBox`, `0 0  ${48 * colors.length} 48`);
  svg.setAttribute(`fill`, `none`);
  svg.setAttribute(`xmlns`, `http://www.w3.org/2000/svg`);

  const rect = colors
    .map(
      (color, i) =>
        `<rect x=${48 * i} width="48" height="48" fill="#${color}"></rect>`
    )
    .join("");
  svg.innerHTML = rect;

  console.log(svg);
  return svg;
}

export function downloadSVG(colors,slug) {
  const svg = creatSvg(colors);
  const base64doc = btoa(unescape(encodeURIComponent(svg.outerHTML)));
  const a = document.createElement("a");
  const e = new MouseEvent("click");
  a.download = `${slug}.svg`;
  a.href = "data:image/svg+xml;base64," + base64doc;
  a.dispatchEvent(e);
}
