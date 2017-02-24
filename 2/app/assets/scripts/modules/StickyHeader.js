import smoothScroll from 'smoothscroll-polyfill'
smoothScroll.polyfill()

class StickyHeader {
    
    constructor() {
        this.pageHeader = document.querySelector(".page-header");
        //this.pageSections = document.querySelectorAll("section");
        this.menuLinks = document.querySelectorAll(".page-navigation__item a");
        this.events();
    }
    
    events() {
        // Shrink header
        window.addEventListener("scroll", this.debounce(this.toggleShrink.bind(this)));
        // Scroll to section
        this.menuLinks.forEach( link => link.addEventListener("click", this.scrollToSection));
        
    }
    
    debounce(func, wait = 15, immediate = true) {
      let timeout;
      return function() {
        let context = this, args = arguments;
        let later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
          
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }
    
    toggleShrink() {
        const headerHeight = this.pageHeader.clientHeight;
        
        if (window.scrollY >= headerHeight ) {
            this.pageHeader.classList.add('page-header--scrolled');
        } else {
            this.pageHeader.classList.remove('page-header--scrolled');
        }
    }
    
    scrollToSection() {
        const pageSection = document.querySelector(`${this.hash}`);
        pageSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    
}

export default StickyHeader;