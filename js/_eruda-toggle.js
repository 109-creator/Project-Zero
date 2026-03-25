let btnVisible = false;
let erudaLoaded = false;
let erudaScript = null;

const tap = document.getElementById("erudaTap");
const btn = document.getElementById("erudaBtn");

// 念のためDOM読み込み後に実行
function init() {
  tap.addEventListener("click", () => {
    btnVisible = !btnVisible;
    btn.classList.toggle("show", btnVisible);
  });

  btn.addEventListener("click", () => {
    if (!erudaLoaded) {
      erudaScript = document.createElement("script");
      erudaScript.src = "https://cdn.jsdelivr.net/npm/eruda";
      erudaScript.onload = () => {
        eruda.init();
      };
      document.body.appendChild(erudaScript);
      erudaLoaded = true;
    } else {
      if (window.eruda) eruda.destroy();
      if (erudaScript) erudaScript.remove();
      erudaScript = null;
      erudaLoaded = false;
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}