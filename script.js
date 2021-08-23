//console.log("testaroo");

let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("Option clicked:", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  //its okay to keep this as white and simple
  if (mode == "light") {
    document.getElementById("theme-style").href = "css/default.css";
  }

  if (mode == "blue") {
    //eh the blue is fine but it would be cooler to be a nice, dark grey
    document.getElementById("theme-style").href = "css/blue.css";
  }

  if (mode == "green") {
    //these are okay, but the order would be better as white -> green -> purp -> dark grey
    document.getElementById("theme-style").href = "css/green.css";
  }

  if (mode == "purple") {
    //or tan -> green -> grey -> purp
    document.getElementById("theme-style").href = "css/purple.css";
  }

  localStorage.setItem("theme", mode);
}
