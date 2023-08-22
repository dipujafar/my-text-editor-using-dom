function textBoldStyle(id) {
  const textArea = document.getElementById(id);
  textArea.classList.toggle("font-bold");
}
function textItalicStyle(id) {
  const textArea = document.getElementById(id);
  textArea.classList.toggle("italic");
}

function textUnderLineStyle(id, style) {
  const textArea = document.getElementById(id);
  textArea.classList.toggle("underline");
}

function textAlign(id, style) {
  const textArea = document.getElementById(id);
  textArea.style.textAlign = style;
}

function textFont(id, style) {
  const textArea = document.getElementById(id);
  textArea.style.fontSize = style + "px";
}

function textTransformation(id) {
  const textArea = document.getElementById(id);
  textArea.classList.toggle("uppercase");
}

function textColor(id, style) {
  const textArea = document.getElementById(id);
  textArea.style.color = style;
}
