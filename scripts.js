const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const getStyle = (element, style) => 
    window.getComputedStyle(element).getPropertyValue(style);

const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
}

const darkMode = {
    bg: "#333333",
    bgPanel: "#434343",
    colorHeadings: "#3664ff",
    colorText: "#b5b5b5",
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors);
})

const changeColors = (colors) => {
    Object.keys(colors).forEach(key =>
        html.style.setProperty(transformKey(key), colors[key])
    )
}

const transformKey = (key) => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();
