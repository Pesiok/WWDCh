class Validation {
    
    constructor() {
        //contact
        this.contactForm = document.querySelector(".contact-form");
        this.contactInput = [
            document.getElementById("msg-name"),
            document.getElementById("msg-email"),
            document.getElementById("msg-phone"),
            document.getElementById("msg-text")
        ];
        //subscribe
        this.subscribeForm = document.querySelector(".subscribe-form");
        this.subscribeInput = [
            document.getElementById("sub-email")
        ];
        
        this.events();
    }
    
    events() {
        document.addEventListener("DOMContentLoaded", () => {
            //contact
            this.contactForm.addEventListener("submit", this.validateForm);
            this.contactInput.forEach(input => input.addEventListener("blur", this.validateInput));
            //subscribe
            this.subscribeForm.addEventListener("submit", this.validateForm);
            this.subscribeInput.forEach(input => input.addEventListener("blur", this.validateInput));
        });
    }
    
    validateInput() {
        if (!this.validity.valid) {
            this.classList.add("validation-error");
        } else {
            this.classList.remove("validation-error");
        }
    }
    validateForm(event) {
        const inputsArray = [...this.getElementsByTagName("input")],
        textareasArray = [...this.getElementsByTagName("textarea")];
        let allInputs;
        (textareasArray) ? allInputs = inputsArray.concat(textareasArray) : allInputs = inputsArray;
        
        allInputs.map(input => {
            if (!input.validity.valid) {

                //const errorMsg = this.getElementById(`${input.id}-error`);
                //styles
                input.classList.add("validation-error");
                //errorMsg.classList.add("validation-msg");
                //aria attributes
                //errorMsg.setAttribute("aria-hidden", "false");
                //input.setAttribute("aria-invalid", "true");
                //input.setAttribute("aria-describedby", errorMsg.id);
                
                event.preventDefault();
            } else {
                input.classList.add("validation-ok");
            }       
        }); 
    }
}

export default Validation;