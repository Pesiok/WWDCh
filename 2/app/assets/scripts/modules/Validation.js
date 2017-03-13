"use strict";

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
        this.init();
        this.events();
    }
    
    //allows normal HTML 5 validation for non-js users
    init() {
        this.contactForm.setAttribute("novalidate", "novalidate");
        this.subscribeForm.setAttribute("novalidate", "novalidate");
    }
    
    events() {
        document.addEventListener("DOMContentLoaded", () => {
            //contact
            this.contactForm.addEventListener("submit", this.validate);
            this.contactInput.forEach(input => input.addEventListener("blur", this.validate));
            //subscribe
            this.subscribeForm.addEventListener("submit", this.validate);
            this.subscribeInput.forEach(input => input.addEventListener("blur", this.validate));
        });
    }
    validate(event) {
        const element = event.target;

        //feedback handlers

        function resetHandler(input, msg) {
            //change input style
            input.classList.remove("validation-ok");
            input.classList.remove("validation-error");
            //display the message
            msg.classList.remove("validation-msg--active");
            //aria attributes
            msg.removeAttribute("aria-hidden");
            input.removeAttribute("aria-describedby");
            input.removeAttribute("aria-invalid");
        }
        
        function errorHandler(input, msg) {
            //change input style
            input.classList.remove("validation-ok");
            input.classList.add("validation-error");
            //display the message
            msg.classList.add("validation-msg--active");
            //aria attributes
            msg.setAttribute("aria-hidden", "false");
            input.setAttribute("aria-invalid", "true");
            input.setAttribute("aria-describedby", msg.id);
        }
        
        function okHandler(input, msg) {
            //change input style
            input.classList.remove("validation-error");
            input.classList.add("validation-ok");
            //display the message
            msg.classList.remove("validation-msg--active");
            //aria attributes
            msg.setAttribute("aria-hidden", "true");
            input.setAttribute("aria-invalid", "false");
            input.removeAttribute("aria-describedby");
        }

        //validation
        
        function validateInput() {
            const msg = document.querySelector(`#${element.id}-error`);
            if (element.validity.valueMissing) {
                resetHandler(element, msg);
            } else if (!element.validity.valid) {
                errorHandler(element, msg);
            } else {
                okHandler(element, msg);
            }
        }
        
        function validateForm() {
            const inputsArray = [...element.getElementsByTagName("input")],
            textareasArray = [...element.getElementsByTagName("textarea")];
            let allInputs;
            (textareasArray) ? allInputs = inputsArray.concat(textareasArray) : allInputs = inputsArray;

            allInputs.map(input => {
                const errorMsg = document.querySelector(`#${input.id}-error`);
                
                if (!input.validity.valid) {
                    errorHandler(input, errorMsg);
                    console.log(event);
                    event.preventDefault();
                } else {
                    okHandler(input, errorMsg);
                }       
            }); 
        }
        
        //triggering validation
        
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
            validateInput(); 
        } else if (element.tagName === "FORM") {
            validateForm();
        } else {
            console.log("Inncorect event.target! ", element)
        }
    }
}

export default Validation;