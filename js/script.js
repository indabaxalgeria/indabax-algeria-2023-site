// show nav bar on mobile
let hamburger = document.querySelector(".hamburger");
let mainNav = document.querySelector(".main-nav");
let mainNavLi = document.querySelectorAll(".main-nav li a");

// humberger animation
function showandHideNav(){
  hamburger.firstElementChild.classList.toggle("not-checked");
  hamburger.firstElementChild.classList.toggle("checked");
  document.querySelector(".overlay").classList.toggle("open");
  document.body.classList.toggle("no-scroll");
}

function closeNav(){
  hamburger.firstElementChild.classList.add("not-checked");
  hamburger.firstElementChild.classList.remove("checked");
  mainNav.style.right ="-100%";
  document.querySelector(".overlay").classList.remove("open");
  document.body.classList.remove("no-scroll");
}
// control nav by clicking humbergur
hamburger.addEventListener("click",(e)=>{
  showandHideNav();
  if(hamburger.firstElementChild.classList.contains("checked")){
    mainNav.style.right ="0";
  }else{
    mainNav.style.right ="-100%";
  }
})
// close nav on larg screen
window.onresize = function(){
  if(window.innerWidth > 767){
    closeNav()
  }
}
// close nav when move to new section
mainNavLi.forEach((a)=>{
  a.addEventListener("click",()=>{
    if(document.body.classList.contains("no-scroll")){
      closeNav();
    }
  })
})

// Program section
let schudelWraper = document.querySelector(".schude-wrapper");
let schudel = document.querySelector(".schudel");
let date = document.querySelectorAll(".date");
let multipEvent = document.querySelectorAll(".multipe-event");
let lastDayInfo = document.querySelector(".last-info");
let line = document.querySelector(".line");
let controlScudel = document.getElementById("showSchudle");
let text  = document.querySelector(".txt");
let chevron = document.querySelector(".chevron-target");

document.querySelector(".program").style.cssText = `min-height:${schudel.offsetHeight + text.offsetHeigh}px`

line.style.height = `calc(100% - ${lastDayInfo.offsetHeight / 2 + 1}px)`;

controlScudel.addEventListener("click",()=>{
    chevron.classList.toggle("fa-chevron-down");
    chevron.classList.toggle("fa-chevron-up");
  if(controlScudel.classList.contains("open")){
    controlScudel.firstElementChild.textContent = "Show Schudel";
    schudelWraper.style.cssText = `max-height: 0`;
    multipEvent.forEach((e)=>{
      e.classList.remove("animated");
    })
  }else{
    controlScudel.firstElementChild.textContent = "Hide Schudel";
    animatedSchudel()
  }
  controlScudel.classList.toggle("open");
})

function animatedSchudel(){
  schudelWraper.style.cssText = `max-height: ${schudel.offsetHeight + 20}px;`;
  multipEvent.forEach((e)=>{
    e.classList.add("animated");
  })
}

// // animation on scrolling
let hiddenElements = document.querySelectorAll(".sh");
const observer = new IntersectionObserver((e)=>{
  e.forEach((entery)=>{
    if(entery.isIntersecting){
      entery.target.classList.add("show-sh");
      entery.target.classList.add("one-sh");
      if(entery.target.classList.contains("main-title")){
        entery.target.classList.add("fadeUp");
      }
    }
  })
})

hiddenElements.forEach((el)=>{
  if(!el.classList.contains("one-sh")){
    observer.observe(el);
  }
})