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