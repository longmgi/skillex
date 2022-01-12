const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// Scroll event
window.addEventListener('scroll', function() {
    var positionX = window.pageYOffset;
    if(positionX >= 80){
        $("header").classList.add("-fixtop");
    }else{
        $("header").classList.remove("-fixtop");
    }
});

// Toggle menu mobile
var nav = $("#navMobile");
var btnOpenMenu = $("#openMenu");
var btnCloseMenu = $("#closeMenu");

function toggleNav(){
    var checkMenu = nav.classList.contains("-open");
    if(!checkMenu){
        nav.classList.add("-open");
    }else{
        nav.classList.remove("-open");
    }
}
btnOpenMenu.addEventListener("click", toggleNav);
btnCloseMenu.addEventListener("click", toggleNav);

// Slide
 var viewport = $(".mgi_carousell--wrap");
 var items = $$(".carousell--card");
 var slide = $(".mgi_carousell");
 var posX = 0;
 var endPos = items[items.length -5].offsetLeft;
 var nextBtn = $("#nextSlide");
 var prevBtn = $("#prevSlide");
 console.log("cuoi",endPos);
 function prevSlide(){
    handleClickslide(-1);
 }
 function nextSlide(){
    handleClickslide(1)
}
 function handleClickslide(direction){
    if(direction == 1){
        viewport.style = `transform: translateX(-${endPos}px)`;
    }
    else if(direction == -1)
    {
        viewport.style = `transform: translateX(0px)`;
    }
 }
// tab
var tabs = $$(".tabs--link");
var tab_panels = $$(".mgi_contents");

tabs.forEach((tab,i) => {
    const panel = tab_panels[i];
    tab.onclick = function(){
        var tabActive = $(".tabs--link.-active");
        var panelActive = $(".mgi_contents.-active");
        tabActive.classList.remove("-active");
        panelActive.classList.remove("-active");
        this.classList.add("-active");
        panel.classList.add("-active");
    }
});

 //Fix Hover
var slideHover = $(".slide--hover");
var slideCurrent = $(".slide--current")
slideHover.addEventListener("mouseover", fixSlide);
function fixSlide(m){
    var checkFix = slideCurrent.classList.contains("-small");
        if(!checkFix){
            slideCurrent.classList.add("-small");
        }
}
slideHover.removeEventListener("mousemove", fixSlide);