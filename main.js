const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
//For Responsive
function caclwidthDevice(){
    var widthDevice = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
      ) && $(".mgi_container").offsetWidth;
    console.log(widthDevice);
    return widthDevice;
}
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
var slideHover = $$(".slide--hover");
var slideCurrent = $(".slide--current")
slideHover.forEach((item,i)=>{
    item.addEventListener("mouseover", fixSlide);
    item.addEventListener("mouseout", removeHover);
})
function fixSlide(){
    var checkFix = slideCurrent.classList.contains("-small");
        if(!checkFix){
            slideCurrent.classList.add("-small");
        }
}
function removeHover(){
    $(".slide--current.-small").classList.remove("-small");
}
// Auto achieve

var achieves = $$(".achieve-showdown");
var achTop = $(".achieve--top");
var achBottom = $(".achieve--bottom");
var achIndex=0;
window.addEventListener("resize", caclwidthDevice);
var widthDevice = caclwidthDevice();
function autoAnimation(){
    achIndex++;
    $(".achieve-showdown.-active").classList.remove("-active");
    $(".achieve-showdown.-slidedown").classList.remove("-slidedown");
    if(achIndex>=achieves.length){
        achIndex=0;
    }
        achieves[achIndex].classList.add("-active");
        $(".achieve-showdown:not(.-active)").classList.add("-slidedown");
    return achIndex;
}

if(widthDevice<1335)
{
    setInterval(autoAnimation, 4000);
    console.log(achIndex);
}