// Create a function that returns a license badge based on which license is passed in
function renderShapeSection(shape) {
  switch (shape) {
    case "circle": 
      return 'circle cx="150" cy="100" r="80"';
      break;
    case "triangle":
      return 'polygon points="70,180 230,180, 150,20"';
      break;
    case "square":
      return 'rect x="70" y="20" width="160" height="160"';
      break;
    case null: // If there is no license, return an empty string
      return ""
      break;
  }
}

// Create a function to generate SVG file for a logo
function generateSvg(data) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <${renderShapeSection(data.shape)} fill="${data.shape_color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.font_color}">${data.characters}</text>

</svg>`;
}

module.exports = {
  generateSvg
};
