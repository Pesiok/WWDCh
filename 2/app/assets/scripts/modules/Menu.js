class MobileMenu {
    
    constructor() {
        this.pageNavigation = document.querySelector(".page-navigation");
        this.menuIcon = document.querySelector(".menu-icon");
        this.events();
    }
    
    events() {
        this.menuIcon.addEventListener("click", () => this.toggleMenu() );
    }
    
    toggleMenu() {
        
        // CSS Classes
        this.pageNavigation.classList.toggle("page-navigation--is-expanded");
        this.menuIcon.classList.toggle("menu-icon--close-x");
        
        // Aria atributes
        if (this.menuIcon.getAttribute("aria-expanded") == "false") {
            this.menuIcon.setAttribute("aria-expanded", "true");
        } else {
            this.menuIcon.setAttribute("aria-expanded", "false");
        }
        
    }
    
    
}

export default MobileMenu;