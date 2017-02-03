class MobileMenu {
    
    constructor() {
        this.pageNavigation = document.querySelector(".page-navigation");
        this.menuIcon = document.querySelector(".page-header__menu-icon");
        this.events();
    }
    
    events() {
        this.menuIcon.addEventListener("click", () => this.toggleMenu() );
    }
    
    toggleMenu() {
        this.pageNavigation.classList.toggle("page-navigation--is-expanded");
        //this.menuIcon.classList.toggle("page-header__menu-icon--close-x");
    }
}

export default MobileMenu;