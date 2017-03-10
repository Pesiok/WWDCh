import smoothScroll from 'smoothscroll'

class ScrollTo {
    
    constructor() {
        this.homeScrollBtn = document.getElementById("homeScroll");
        this.footerScrollBtn = document.getElementById("footerScroll");
        this.events();
    }
    
    events() {
        document.addEventListener("DOMContentLoaded", () => {
            this.homeScrollBtn.addEventListener("click", () => this.scrollToDest);
            this.footerScrollBtn.addEventListener("click", () => this.scrollToDest);
        });
    }
    
    scrollToDest() {
        const destination = document.querySelector(`${this.hash}`);
        smoothScroll(destination);
    }
}

export default ScrollTo;