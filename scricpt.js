const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function getstart(){
    const btn = document.querySelector(".yellow-btn");
    const startbutton = document.querySelector(".start-button");
    btn.addEventListener("click",()=>{
        function loaderAnnimation() {
    
            const tl = gsap.timeline();
        
            tl.to(".yellow1", {
                y: "-100%",
                duration: 0.5,
                delay: 0.5,
                ease: "expo.out"
            })
        
            tl.from(".yellow2", {
                y: "100%",
                duration: 0.5,
                delay: 0.5,
                ease: "expo.out"
            }, "abc")
            // this abc variabal run both annimation together
            tl.to(".loader h1", {
                color: "black",
                delay: 0.5,
            }, "abc")
        
            tl.to(".loader", {
                opacity: 0,
                display: "none"
            })
            tl.from("nav .nav1 h2 span,.nav2 p span,i", {
                y: -100,
                duration: 0.5,
                delay: -0.8,
                opacity: 0,
                stagger: 0.15
            })
        }
        loaderAnnimation();
        startbutton.style.display="none";
        startbutton.style.opacity="0";
    })
    
}
getstart();


function page2bgimg (){
    const elems = document.querySelectorAll(".elem");
    const page2 = document.querySelector(".page2");
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", () => {
            var bgimg = e.getAttribute("data-image");
            page2.style.backgroundImage = `url(${bgimg})`
        })
    })
}
page2bgimg();


function cloues() {
    const menu = document.querySelector("nav .icon i");

    const open = 0;
    if (open == 0) {

        menu.addEventListener("click", () => {

            gsap.to("nav .nav2 p", {
                opacity: 1,
                duration: 0.5,
                x: -30
            })
            
        })
        open = 1;
    }
    else if (open == 1) {
        menu.addEventListener("click", () => {
            gsap.to("nav .nav2 p", {
                opacity: 0,
                x: 30,
                duration: 0.5,
            })
            
        })
        open = 0;
    }
}
cloues();


const cour = document.querySelector(".courser");
const startbtn = document.querySelector(".start-button");
startbtn.addEventListener("mousemove",(dest)=>{
    cour.style.left=dest.x + "px";
    cour.style.top = dest.y + "px";
})
gsap.to(".page3 .line", {
    width: "100%",
    duration: 8,
    backgroundColor: "gray",
    scrollTrigger: {
        trigger: ".page3 .line",
        scrller: "main",
        start: "top 0%",
        end: "top 100%",
        scrub: 2,        
    }
})






