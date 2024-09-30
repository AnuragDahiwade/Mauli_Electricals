
const rootElement = document.documentElement
// const navLogoFront = document.querySelector("#navLogoFront")
// const navLogoBack = document.querySelector("#navLogoBack")
//menu-button display
const menuBtn = document.querySelector("#menu-button");
const navLinks = document.querySelector('#nav-part2')


// Onload of the window or screen
window.onload = function() {
    AdjustLogosToScreen()
    rootElement.removeAttribute('menu-open')
};

// OnRe-size of the window or screen
window.onresize = function() {
    AdjustLogosToScreen()
    rootElement.removeAttribute('menu-open')
};


menuBtn.addEventListener('click', () => {
    rootElement.toggleAttribute('menu-open')

    if(rootElement.hasAttribute("menu-open")){
        navLinks.style.display = 'flex';
    }else{
        navLinks.style.display = 'none';
    }

})

function AdjustLogosToScreen() {
    if(window.innerWidth > 768) {
        rootElement.removeAttribute('menu-open')
        menuBtn.style.display = 'none'
        navLinks.style.display = 'flex'
    }else{

        navLinks.style.display = 'none'
        menuBtn.style.display = 'flex'
        rootElement.setAttribute('menu-open', '')
        
    }

}


// page 2 animaiton on the elements hover
var page2_right_elem = document.querySelectorAll(".page2-cont-right")
var page2_right_elem_img = document.querySelector(".page2-cont-right img")

page2_right_elem.forEach(function(elem){
    elem.addEventListener("mouseenter", function (){
        gsap.to(elem.childNodes[3], {
            opacity: 1,
            scale: 1.2
        })
    })

    elem.addEventListener("mouseleave", function (){
        gsap.to(elem.childNodes[3], {
            opacity: 0,
            scale: 0
        })
    })

    // Add touch event listeners for mobile devices
    elem.addEventListener("touchstart", function (dets) {
        gsap.to(elem.childNodes[3], {
            opacity: 1,
            scale: 1.2
        })
    })

    elem.addEventListener("touchmove", function (dets) {
        var touch = dets.touches[0]
        gsap.to(elem.childNodes[3], {
            x: touch.clientX - elem.getBoundingClientRect().x - 80,
            y: touch.clientY - elem.getBoundingClientRect().y - 100
        })
    })

    elem.addEventListener("touchend", function (){
        gsap.to(elem.childNodes[3], {
            opacity: 0,
            scale: 0
        })
    })

    // Add mouse event listeners for desktop devices
    elem.addEventListener("mousemove", function (dets) {
        gsap.to(elem.childNodes[3], {
            x: dets.x - elem.getBoundingClientRect().x - 20,
            y: dets.y - elem.getBoundingClientRect().y - 50
        })
    })
})


