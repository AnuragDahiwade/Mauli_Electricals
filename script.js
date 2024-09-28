
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