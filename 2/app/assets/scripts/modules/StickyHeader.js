"use strict";

import smoothScroll from 'smoothscroll'

class StickyHeader {
    
    constructor() {
        this.pageHeader = document.querySelector(".page-header");
        this.pageSections = [...document.querySelectorAll("section")];
        this.menuLinks = [...document.querySelectorAll(".page-navigation__item a")];
        this.events();
    }
    
    events() {
        document.addEventListener("DOMContentLoaded", () => {
            //check on load
            this.highlightLinks();
            this.toggleShrink();
            //check on scroll
            window.addEventListener("scroll", () => {
               this.highlightLinks();
               this.toggleShrink();
            });
            // Scroll to section
            this.menuLinks.forEach(link => link.addEventListener("click", this.scrollToSection));
        });
    }
 
    toggleShrink() {
        const headerHeight = this.pageHeader.clientHeight;
        
        if (window.pageYOffset >= (headerHeight / 2 )) {
            this.pageHeader.classList.add("page-header--scrolled");
        } else {
            this.pageHeader.classList.remove("page-header--scrolled");
        }
        
    }
    scrollToSection() {
        const pageSection = document.querySelector(`${this.hash}`);
        
        smoothScroll(pageSection);
    }
    
    highlightLinks() {
        this.pageSections.forEach(pageSection => {
            const isNotScrolledPast = window.pageYOffset < (pageSection.offsetTop - this.pageHeader.offsetHeight + pageSection.offsetHeight),
            isShown = (pageSection.offsetTop - this.pageHeader.offsetHeight) < window.pageYOffset,
            menuLink = document.querySelector(`[href="#${pageSection.id}"]`);
          
            if (isShown && isNotScrolledPast){
                menuLink.classList.add("active-link");
            } else {
                menuLink.classList.remove("active-link");
            }
        });
    } 
}

export default StickyHeader;