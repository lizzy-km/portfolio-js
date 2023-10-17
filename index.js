const works = [
  {
    id: 1,
    title: "Data Dashboard & Healthcare",
    tech: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    detail:
      " Id esse proident aliquip enim tempor ex consequat in. Ullamco fugiat esse fugiat reprehenderit duis id magna adipisicing proident veniam amet cupidatat magna exercitation. Duis voluptate cillum esse incididunt cillum laborum nulla mollit magna ullamco consectetur. ",
    image: "",
    live_url: "",
    source: "",
  },
  {
    id: 2,
    title: "Website Portfolio ",
    tech: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    detail:
      " Id esse proident aliquip enim tempor ex consequat in. Ullamco fugiat esse fugiat reprehenderit duis id magna adipisicing proident veniam amet cupidatat magna exercitation. Duis voluptate cillum esse incididunt cillum laborum nulla mollit magna ullamco consectetur. ",
    image: "",
    live_url: "",
    source: "",
  },
  {
    id: 3,
    title: "Profesional Art Printing Data More",
    tech: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    detail:
      " Id esse proident aliquip enim tempor ex consequat in. Ullamco fugiat esse fugiat reprehenderit duis id magna adipisicing proident veniam amet cupidatat magna exercitation. Duis voluptate cillum esse incididunt cillum laborum nulla mollit magna ullamco consectetur. ",
    image: "",
    live_url: "",
    source: "",
  },
  {
    id: 4,
    title: "Data Dashboard & Healthcare",
    tech: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    detail:
      " Id esse proident aliquip enim tempor ex consequat in. Ullamco fugiat esse fugiat reprehenderit duis id magna adipisicing proident veniam amet cupidatat magna exercitation. Duis voluptate cillum esse incididunt cillum laborum nulla mollit magna ullamco consectetur. ",
    image: "",
    live_url: "",
    source: "",
  },
  {
    id: 5,
    title: "Website Portfolio ",
    tech: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    detail:
      " Id esse proident aliquip enim tempor ex consequat in. Ullamco fugiat esse fugiat reprehenderit duis id magna adipisicing proident veniam amet cupidatat magna exercitation. Duis voluptate cillum esse incididunt cillum laborum nulla mollit magna ullamco consectetur. ",
    image: "",
    live_url: "",
    source: "",
  },
  {
    id: 6,
    title: "Profesional Art Printing Data More",
    tech: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    detail:
      " Id esse proident aliquip enim tempor ex consequat in. Ullamco fugiat esse fugiat reprehenderit duis id magna adipisicing proident veniam amet cupidatat magna exercitation. Duis voluptate cillum esse incididunt cillum laborum nulla mollit magna ullamco consectetur. ",
    image: "",
    live_url: "",
    source: "",
  },
];


// <div id="project" class="project one">
// <div id="projectInfo" class="projectInfo">
//   <p>
//     Data Dashboard Healthcare
//   </p>

//   <ul class="languages">
//     <li>Ruby on Rails</li>
//     <li>CSS</li>
//     <li>JavaScript</li>
//     <li>HTML</li>
//   </ul>
//   <button href="#home" id="seePj" type="button" value="See Project">  See Project</button>
// </div>
// </div>

const closeBtn = document.getElementById("close");
const navBtn = document.getElementById("navBtn");
const menuBox = document.getElementById("m-nav");

navBtn.addEventListener("click", () => {
    menuBox.classList.add("show-m");
    menuBox.classList.remove("menu-m");
  });
  closeBtn.addEventListener("click", () => {
    menuBox.classList.remove("show-m");
    menuBox.classList.add("menu-m");
  });

const portfolio = document.getElementById('portfolio')
const viewBox = document.getElementById('vPj')

let closeBtnP;
let project;
let projectInfo;
let titleEl;
let languagesEl;
let lanList;
let seePj;
let pjInfo;
let btnGroup;
let liveBtn;
let srcBtn;
let detailEl;


works.map( work => {

 project = document.createElement('div') //create new div
project.classList.add('project') // add class to new div
portfolio.appendChild(project) // add new div to parent div


 projectInfo = document.createElement('div') //create new div
projectInfo.classList.add('projectInfo') // add class to new div
project.appendChild(projectInfo) // add new div to parent div that we create


 titleEl = document.createElement('p') // create new <p></p>
titleEl.innerText = work.title // add text to <p></p>
projectInfo.appendChild(titleEl) // add new <p></p> to parent div that we create

 languagesEl = document.createElement('ul')
languagesEl.classList.add('languages')
projectInfo.appendChild(languagesEl)

work.tech.map(tech => {
   lanList = document.createElement('li')
  lanList.innerText = tech
  languagesEl.appendChild(lanList)
})


 seePj = document.createElement('button')
seePj.innerText = 'See Project'
projectInfo.appendChild(seePj)

//____________________________________//

pjInfo = document.createElement('div')
pjInfo.classList.add('pjInfo')

detailEl = document.createElement('p')
detailEl.innerText = work.detail
 pjInfo.appendChild(detailEl)

btnGroup = document.createElement('div')
btnGroup.classList.add('btnGroup')

liveBtn = document.createElement('button')
liveBtn.innerText = 'See Live'
btnGroup.appendChild(liveBtn)

srcBtn = document.createElement('button')
srcBtn.innerText = 'See source'
btnGroup.appendChild(srcBtn)
pjInfo.appendChild(btnGroup)



closeBtnP = document.createElement('div')
closeBtnP.classList.add('closeBtnP')
const closeIcon = document.createElement('i')
closeIcon.classList.add('closeIcon', 'fa', 'fa-close')
closeBtnP.appendChild(closeIcon)


closeBtnP.addEventListener('click', () => {
  console.log('close pj');
  viewBox.classList.add("d-none");
  viewBox.classList.remove("d-flex");
  viewBox.removeChild(viewBox.lastElementChild)
  viewBox.removeChild(viewBox.firstElementChild)

});

seePj.addEventListener('click', () => {
  viewBox.classList.remove("d-none");
  viewBox.classList.add("d-flex");
  const clone = project.cloneNode(true);

  viewBox.appendChild(clone)
  viewBox.appendChild(closeBtnP)

  const btn = viewBox.firstElementChild.firstElementChild
  btn.replaceChild(pjInfo, btn.lastElementChild);

 

})

})
