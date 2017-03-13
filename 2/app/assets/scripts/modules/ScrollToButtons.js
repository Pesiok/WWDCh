"use strict";

import smoothScroll from 'smoothscroll'

class ScrollToButtons {
    
    constructor() {
        this.homeScrollBtn = document.getElementById("homeScroll");
        this.homeSection = document.getElementById("home");
        this.footerScrollBtn = document.getElementById("footerScroll");
        this.events();
    }
    
    events() {
        document.addEventListener("DOMContentLoaded", () => {
            //clicks
            this.homeScrollBtn.addEventListener("click", this.scrollToDest);
            this.footerScrollBtn.addEventListener("click", this.scrollToDest);

            //check btn position on load
            this.unfixBtn();
            //check btn position oc scroll
            window.addEventListener("scroll", this.unfixBtn.bind(this));
        });
    }
    
    scrollToDest() {
        const destination = document.querySelector(`${this.hash}`);

        smoothScroll(destination);
    }
    
    unfixBtn() {
        const homeBottom = this.homeSection.offsetTop + this.homeSection.offsetHeight,
              pageBottom = window.pageYOffset + window.innerHeight;
        
        if (pageBottom  >= homeBottom ) {
            this.homeScrollBtn.classList.add("home__scroll--stop");
        } else {
            this.homeScrollBtn.classList.remove("home__scroll--stop");
        }
    }
}

export default ScrollToButtons;