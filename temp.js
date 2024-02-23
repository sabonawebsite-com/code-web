const textbox = document.getElementById("textbox");
const tofahrenheit = document.getElementById("tofahrenheit");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");
let temp;

function convert() {

  if (tofahrenheit.checked) {
    temp = Number(textbox.value);
    temp = temp * 9 / 5 + 32;
    result.textContent = temp + "oF";
  }
  else if (tocelsius.checked) {
    sssss
    temp = Number(textbox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + `&#37;C `
  }
  else {
    result.textContent = "select unit";
  }
}