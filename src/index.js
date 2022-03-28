import "./styles.css";
var changedColor = document.getElementById("changeColor");
var changedShape = document.getElementById("changeShape");
var color = document.getElementById("color");
var shape = document.getElementById("shape");
let index = 0;
const colors = ["green", "purple", "blueviolet"];
changedColor.addEventListener("click", function () {
  color.style.backgroundColor = colors[index];
  index = index >= colors.length - 1 ? 0 : index + 1;
});
changedShape.addEventListener("click", function (event) {
  if (shape.className === "shape") {
    shape.className = "shape2";
  } else if (shape.className === "shape2") {
    shape.className = "shape3";
  } else if (shape.className === "shape3") {
    shape.className = "shape";
  }

  event.stopPropagation();
});
