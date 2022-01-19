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
      );
    return widthDevice;
}
window.addEventListener("resize", caclwidthDevice);
var widthDevice = caclwidthDevice();
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
var linksMobile = $$(".mgi_link--mobile");
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

linksMobile.forEach((link,i)=>{
    link.addEventListener("click", toggleNav);
});
// Slide
 var viewport = $(".mgi_carousell--wrap");
 var items = $$(".carousell--card");
 var slide = $(".mgi_carousell");
 var posX = 0;
 var endPos = items[items.length -5].offsetLeft;
 var widthItem = items[1].offsetWidth+24;
 var nextBtn = $("#nextSlide");
 var prevBtn = $("#prevSlide");
 
 function prevSlide(){
    handleClickslide(-1);
 }
 function nextSlide(){
    handleClickslide(1)
}
 function handleClickslide(direction){
    if(widthDevice>=1335){
        if(direction == 1){
            viewport.style = `transform: translateX(-${endPos}px)`;
        }
        else if(direction == -1)
        {
            viewport.style = `transform: translateX(0px)`;
        }
    }else{
        if(direction == 1){
            posX++;
            if(posX >= items.length-1)
            {
                posX = 0;
            }
            viewport.style = `transform: translateX(-${widthItem*posX}px)`;
        }
        else if(direction == -1)
        {
            posX--;
            if(posX <= 0)
            {
                posX = items.length-1;
            }
            viewport.style = `transform: translateX(-${widthItem*posX}px)`;
        }
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
}
// Active menu & Animation scroll
var findpassion = parseInt($("#findpassion").offsetTop);
var categories = parseInt($("#categories").offsetTop)-80;
var skills = parseInt($("#skills").offsetTop)-50;
var customer = parseInt($("#customer").offsetTop);
var menuLinks = $$(".mgi_link");

window.addEventListener("scroll",function(){
    var scrollX = parseInt(window.scrollY);
    var param;
    menuLinks.forEach((link,i)=>{
        link.classList.remove("-active");
    })
    if(scrollX>=0 && scrollX < categories){
        param = "#findpassion";
    }
    else if(scrollX >= categories && scrollX < skills){
        param = "#categories";
    }
    else if(scrollX >= skills && scrollX < customer){
        param = "#skills";
    }
    else if(scrollX>=customer){
        param = "#customer";
    }
    
    var selector = `a.mgi_link[href="${param}"]`;
    var linkAnchor = $(`${selector}`);
    linkAnchor.classList.add("-active");

    var cardsCat = $$(".mgi_contents:first-child .mgi_card");
    var linepoints = $$(".mgi_linepoint")
    if(scrollX >= categories-300){
        var i=0;
        function cardAnimation(){
            if(i < cardsCat.length){
                
                console.log(i);
                cardsCat[i].classList.add("fadeinUp");
                i++;
            }
        }
        setInterval(cardAnimation, 200);
        $(".mgi_tabs").classList.add("fadeinUp");
    }
    //DOING
    if(scrollX >= skills-600){
        $(".mgi_skills--top .col--left").classList.add("fadeinUp");
        $(".mgi_skills--top .col--right p").classList.add("fadeinUp");
    }
    if(scrollX >= skills-200){
        var ii=0;
        function pointAnimation(){
            if(ii < linepoints.length){
                linepoints[ii].classList.add("fadeinUp");
                ii++;
            }
        }
        setInterval(pointAnimation, 200);
        $(".mgi_skills--bottom .col--right").classList.add("fadeinUp");
        $(".mgi_achieve").classList.add("fadeinDown");
    }
    if(scrollX >= customer-450){
        $("#customer").classList.add("fadeinUp");
    }
    if(scrollX >= customer-100){
        $("footer").classList.add("fadeinUp");
    }
    
})

// Scroll smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validate email

var messages = $$("span.mgi_message");
function validateEmail(){

    let data = document.forms["mgiform"]["email"].value;
    console.log(data);
    const validateEmail = (email) => {
        return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };
    if (data == "") {
        messages.forEach((message,i)=>{
            message.innerHTML = "Email must be filled out";
            message.style.color = "red";
        })
        return false;
    }
    else if(!validateEmail(data)){
        messages.forEach((message,i)=>{
            message.innerHTML = "Email must be right format";
            message.style.color = "red";
        })
        return false;
    }
    messages.forEach((message,i)=>{
            message.innerHTML = "Success";
            message.style.color = "green";
        })
}