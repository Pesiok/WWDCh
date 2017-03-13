"use strict";

import 'whatwg-fetch'

class FetchData {
    
    constructor() {
        this.blogBtn = document.getElementById("blog-btn");
        this.blogContainer = document.querySelector(".blog__articles-container");
        this.galleryBtn = document.getElementById("gallery-btn");
        this.galleryContainer = document.querySelector(".gallery__img-container");
        this.events();
    }
    
    events() {
        document.addEventListener("DOMContentLoaded", () => {
            //get gallery data
            this.galleryBtn.addEventListener("click", this.fetchGallery.bind(null, this.galleryBtn, this.galleryContainer));
            //get blog data
            this.blogBtn.addEventListener("click", this.fetchBlog.bind(null, this.blogBtn, this.blogContainer));
        });
        
    }
    
    fetchBlog(trigger, output) {
        const fetchOptions = {  
            method: 'GET',  
            headers: {  
                "X-Mashape-Key": "sarKCOG8IdmshLyiDEEjqRWb2fbvp1Y436JjsnTFCLiQPcJFLC",
                "Accept": 'aplication/json'
            },
            mode: 'cors'
        }
        
        const placeholderArticle = {
            title: "Something is not right. Try to load again.",
            source_url: "#",
            image_url: "../../assets/images/error.jpg",
            publisher: "Site Author"
        }
        
        function getEndpoint() {
            const randomId = Math.floor((Math.random() * 1000) * 3);
            return `https://community-food2fork.p.mashape.com/get?key=6cd3caec14ca49d62973115215d3d885&rId=${randomId}`;
        }
        
        function renderContent(jsonData, index, arr) {
            const dateObj = new Date(),
                  date = dateObj.getDate(),
                  month = dateObj.toLocaleString("en-us", {month: "short"}),
                  dateTime = dateObj.toISOString().substr(0, 16);
            
            let recipe = jsonData.recipe;
            let marginClass = "";
            
            switch(arr.length) {
                case 1:
                    marginClass = "grid__cell--margin-right-none";
                    break;
                case 2: 
                    if (index === 0) {
                        marginClass = "grid__cell--margin-right-m-xs";
                    }
                    break;
                case 3:
                    if (index === 0) {
                    marginClass = "grid__cell--margin-right-m-xs";
                    }
                    if (index === 1) {
                        marginClass = "grid__cell--margin-right-m-xs";
                    }
                    break;
                default:
                    recipe = placeholderArticle;
            }
            
            return`
                <article class="blog-article grid__cell ${marginClass}">
                    <a class="blog-article__link" href="${recipe.source_url}">
                        <img class="blog-article__img" src="${recipe.image_url}" alt="Picture of ${recipe.title}">
                        <time class="blog-article__date" datetime="${dateTime}">
                            ${date} <span class="blog-article__month">${month}</span>
                        </time>
                        <div class="blog-article__content">
                            <h3 class="blog-article__heading">${recipe.title}</h3>
                            <p class="blog-article__text">By ${recipe.publisher} - Just Now</p>
                        </div>
                    </a>
                </article>
                `;
        }
        
        function injectHTML(content) {
            const newContainer = document.createElement("div");
            let contentHTML = "";
            
            content.forEach(element => {contentHTML += element});
            newContainer.classList.add("grid-m");
            newContainer.innerHTML = contentHTML;
            output.appendChild(newContainer);
        }
        
        function toggleBtnAnim() {
            trigger.classList.toggle("btn--loading");
        } 
        
        //fetching
        toggleBtnAnim();
        Promise.all([
            fetch(getEndpoint(), fetchOptions),
            fetch(getEndpoint(), fetchOptions),
            fetch(getEndpoint(), fetchOptions) 
        ])
        .then(responses => {
            return Promise.all(responses.map(response => response.json()));
        })
        .then(unfiltredData => unfiltredData.filter(data => data.recipe.title))
        .then(filtredData => filtredData.map(renderContent))
        .then(injectHTML)
        .then(toggleBtnAnim)
        .catch(error => {console.log(error.message)});
    }
    
    fetchGallery(trigger, output) {
        const fetchOptions = {  
            method: 'GET',  
            headers: {  
                "X-Mashape-Key": "sarKCOG8IdmshLyiDEEjqRWb2fbvp1Y436JjsnTFCLiQPcJFLC",
                "Accept": 'text/plain'
            },
            mode: 'cors'
        }
        
        function toggleBtnAnim() {
            trigger.classList.toggle("btn--loading");
        }        
        
        function getEndpoint() {
            const randomValue = (10 * Math.floor(Math.random() * 7)),
                  width = 500 + randomValue,
                  height = 400 + randomValue;
            return `https://community-placekitten.p.mashape.com/${width}/${height}`; 
        }
        
        function renderContent(blobData, index) {
            const objectURL = URL.createObjectURL(blobData),
                  img = document.createElement("img"),
                  divContainer = document.createElement("div");
            
            if (objectURL) {
                img.src = objectURL;
                img.alt = "Picture of a kitten";
            } else {
                img.src = "../../assets/images/error.jpg";
                img.alt = "Error message";
            }
            
            img.classList.add("gallery__img");
            img.classList.add("gallery__img--equal-height");
            img.classList.add("grid__cell");
            divContainer.classList.add("grid__cell");
            
            if (index === 0) {
                divContainer.classList.add("grid__cell--margin-right-m-xs");
            }
            
            divContainer.appendChild(img);
           
            return divContainer;
        }
        
        function injectHTML(content) {
            const gridContainer = document.createElement("div");
            gridContainer.classList.add("gallery__row");
            gridContainer.classList.add("grid-m");
            
            content.forEach(divContainer => gridContainer.appendChild(divContainer));
            
            output.appendChild(gridContainer);
        }
        
        //fetching
        toggleBtnAnim();
        Promise.all([
            fetch(getEndpoint(), fetchOptions),
            fetch(getEndpoint(), fetchOptions)
        ])
        .then(responses => {
            return Promise.all(responses.map(response => response.blob()));
        })
        .then(blobData => blobData.map(renderContent))
        .then(injectHTML)
        .then(toggleBtnAnim)
        .catch(error => {console.log(error.message)});
    }
    
}

export default FetchData;