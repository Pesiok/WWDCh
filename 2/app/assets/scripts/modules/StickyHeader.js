class StickyHeader {
    
    constructor() {
        this.pageHeader = document.querySelector(".page-header");
        this.events();
    }
    
    events() {
        window.addEventListener("scroll", () => this.toggleShrink() );
    }
    
    toggleShrink() {
        const headerHeight = this.pageHeader.clientHeight;
        console.log("headerHeight: ", headerHeight);
        console.log("window.scrollY: ", window.scrollY);
        
        if (window.scrollY >= headerHeight ) {
            this.pageHeader.classList.add('page-header--scrolled');
        } else {
            this.pageHeader.classList.remove('page-header--scrolled');
        }
        
        
    }
    
    
}

export default StickyHeader;