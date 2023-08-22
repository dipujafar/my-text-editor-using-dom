// Bolt Style
document.getElementById("btn-bolt").addEventListener("click", function () {
  textBoldStyle("id-text-area");
});

//   italic Style
document.getElementById("btn-italic").addEventListener("click", function () {
  textItalicStyle("id-text-area");
});

// UnderLine Style

document.getElementById("btn-Underline").addEventListener("click", function () {
  textUnderLineStyle("id-text-area");
});

//text align left
document.getElementById("btn-text-left").addEventListener("click", function () {
  textAlign("id-text-area", "left");
});

// text align center
document
  .getElementById("btn-text-center")
  .addEventListener("click", function () {
    textAlign("id-text-area", "center");
  });

// text align center
document
  .getElementById("btn-text-right")
  .addEventListener("click", function () {
    textAlign("id-text-area", "right");
  });

// text align justify
document
  .getElementById("btn-text-justify")
  .addEventListener("click", function () {
    textAlign("id-text-area", "justify");
  });

//font size
document
  .getElementById("input-font-size")
  .addEventListener("change", function () {
    const inputFont = document.getElementById("input-font-size");
    const inputFontValue = inputFont.value;
    textFont("id-text-area", inputFontValue);
  });
// text transformation
document
  .getElementById("text-transformation")
  .addEventListener("click", function () {
    textTransformation("id-text-area");
  });

//input color

document.getElementById("input-color").addEventListener("change", function () {
  const inputColor = document.getElementById("input-color");
  const inputColorValue = inputColor.value;
  textColor("id-text-area", inputColorValue);
});
