// Create a function to generate SVG file for a logo
function generateSvg(data) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <${data.shape} cx="150" cy="100" r="80" fill="${data.shape_color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.font_color}">${data.characters}</text>

</svg>`;
}

module.exports = {
  generateSvg
};
