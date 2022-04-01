var titleHigh = document.getElementById("titleHigh");
var aHigh = document.getElementById("aHigh");
aHigh.addEventListener("click", function write() {
  titleHigh.innerText = "Lorem ipsum dolor sit ameet!";
  aHigh.style.color = "transparent";
});
var titleHigh2 = document.getElementById("titleHigh2");
var aHigh2 = document.getElementById("aHigh2");
aHigh2.addEventListener("click", function write() {
  titleHigh2.innerText =
    "Lorem ipsum dolor sit ameet consectetur adipisicing elit";
  aHigh2.style.color = "transparent";
});
var titleHigh3 = document.getElementById("titleHigh3");
var aHigh3 = document.getElementById("aHigh3");
aHigh3.addEventListener("click", function write() {
  titleHigh3.innerText =
    "Lorem ipsum dolor sit ameet consectetur adipisicing elit";
  aHigh3.style.color = "transparent";
});
var titleHigh4 = document.getElementById("titleHigh4");
var aHigh4 = document.getElementById("aHigh4");
aHigh4.addEventListener("click", function write() {
  titleHigh4.innerText =
    "Lorem ipsum dolor sit ameet consectetur adipisicing elit";
  aHigh4.style.color = "transparent";
});
var titleHigh5 = document.getElementById("titleHigh5");
var aHigh5 = document.getElementById("aHigh5");
aHigh5.addEventListener("click", function write() {
  titleHigh5.innerText =
    "Lorem ipsum dolor sit ameet consectetur adipisicing elit";
  aHigh5.style.color = "transparent";
});
var titleHigh6 = document.getElementById("titleHigh6");
var aHigh6 = document.getElementById("aHigh6");
aHigh6.addEventListener("click", function write() {
  titleHigh6.innerText =
    "Lorem ipsum dolor sit ameet consectetur adipisicing elit";
  aHigh6.style.color = "transparent";
});

var yearlyBtn = document.getElementById("check");
var Pvalue1 = document.getElementById("value1");
var Pvalue2 = document.getElementById("value2");
var Pvalue3 = document.getElementById("value3");
var i = 1;

yearlyBtn.addEventListener("click", function yearly() {
  if (i % 2 !== 0) {
    Pvalue1.textContent = "242";
    Pvalue2.textContent = "297";
    Pvalue3.textContent = "363";
  } else {
    Pvalue1.textContent = "22";
    Pvalue2.textContent = "27";
    Pvalue3.textContent = "33";
  }
  i++;
});
