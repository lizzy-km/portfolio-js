const navBtn = document.getElementById("navBtn");
const closeBtn = document.getElementById("close");
const menuBox = document.getElementById("m-nav");
const showpj = document.getElementsByTagName("button");
const proj = document.getElementById("project");
const home = document.getElementById("vPj");
const main = document.getElementById("home");
const info = document.getElementById("projectInfo");
const projInfo = document.getElementById("pjInfo");
const body = document.getElementsByTagName("body");

navBtn.addEventListener("click", () => {
  menuBox.classList.add("show-m");
  menuBox.classList.remove("menu-m");
});
closeBtn.addEventListener("click", () => {
  menuBox.classList.remove("show-m");
  menuBox.classList.add("menu-m");
});

home.addEventListener("click", () => {
  home.removeChild(home.firstElementChild);
  home.classList.add("d-none");
  home.classList.remove("d-flex");
  body.classList.remove("ov-hi");
});


if (home.className.includes("d-flex")) {
  console.log("flex");
}

for (let i = 0; i < showpj.length; i++) {
  showpj[i].addEventListener("click", (e) => {
    const node = e.srcElement.parentElement.parentElement;
    const clone = node.cloneNode(true);
    home.appendChild(clone);
    const rp = home.firstElementChild.firstElementChild;
    rp.replaceChild(projInfo, rp.lastElementChild);

    home.classList.remove("d-none");
    home.classList.add("d-flex");
  });
}
