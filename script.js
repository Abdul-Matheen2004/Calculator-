var display = " ";
var list = [
  "C",
  "()",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "+/-",
  "0",
  ".",
  "=",
];
for (var i = 0; i < list.length; i++) {
  display += `<button onclick=inp_append(${i})> ${list[i]} </button>`;
}
const btn_display = () => {
  var section = document.getElementById("buttons");
  section.insertAdjacentHTML("beforeend", display);
};
let output = "";
let counter = 0;
const inp_append = (click) => {
  if (list[click] === "C") {
    output = "";
  } else if (list[click] === "()") {
    output = "(" + output + ")";
  } else if ((list[click] === "+/-") & (counter == 0)) {
    counter = 1;
    output = "-" + output;
  } else if ((list[click] === "+/-") & (counter == 1)) {
    counter = 0;
    output = output.replace("-", "");
  } else if (list[click] === "=") {
    output = eval(output);
  } else {
    output += list[click];
  }
  document.getElementById("inp").value = output;
};
