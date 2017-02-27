import promise from 'es6-promise'
promise.polyfill()
import "isomorphic-fetch"
class FetchData {
    
    constructor() {
        this.galleryBtn = document.getElementById("gallery-btn");
        this.blogBtn = document.getElementById("blog-btn");
        this.events();
    }
    
    events() {
        //get gallery data
        this.galleryBtn.addEventListener("click", this.fetchGallery);
        //get blog data
        this.blogBtn.addEventListener("click", this.fetchBlog);
        
    }
    
    fetchBlog() {
        
        const options = {  
            method: 'GET',  
            headers: {  
                "X-Mashape-Key": "sarKCOG8IdmshLyiDEEjqRWb2fbvp1Y436JjsnTFCLiQPcJFLC",
                "Accept": 'aplication/json'
            },
            mode: 'cors'
        }
         
        function getEndpoint() {
            const randomId = Math.floor((Math.random() * 1000) * 3);
            return `https://community-food2fork.p.mashape.com/get?key=6cd3caec14ca49d62973115215d3d885&rId=${randomId}`;
        }
        
        function renderContent(jsonData) {
            const recipe = jsonData.recipe;
            const output =  `
            <article class="blog-article grid__cell">
                <a class="blog-article__link" href="${recipe.source_url}">
                    <img class="blog-article__img" src="${recipe.image_url}" alt="Picture of ${recipe.title}">
                    <time class="blog-article__date" datetime="2016-11-10T19:00">
                        10 <span class="blog-article__month">Nov</span>
                    </time>
                    <div class="blog-article__content">
                        <h3 class="blog-article__heading">${recipe.title}</h3>
                        <p class="blog-article__text">${recipe.publisher} - 2 hours ago</p>
                    </div>
                </a>
            </article>
            `;
            //console.log(output)
            return output;
        }
        
        function displayContent(html) {
            console.log(html);
            const newContainer = document.createElement("div");
            const blogContainer = document.querySelector("#blog .grid-m");
            
            newContainer.classList.add("grid-m");
            newContainer.innerHTML = html;
            console.log(newContainer.innerHTML);
            console.log(blogContainer);
            
            blogContainer.appendChild(newContainer);
            
            
        }
        
       // fetch(getEndpoint(), options)
          //  .then(response => response.json())
          //  .then( data => console.log(data));
        
        Promise.all([
            fetch(getEndpoint(), options),
            fetch(getEndpoint(), options),
            fetch(getEndpoint(), options) 
        ])
        .then(responses => {
            //console.log(responses);
            return Promise.all(responses.map(response => response.json()));
        })
        .then(data => {
            return Promise.all(data.map(jsonData => renderContent(jsonData)));
        })
        .then(content => {
            content.forEach( html => displayContent(html))
        })
        //.catch(error => {throw new Error("Something is wrong")});
             
    
        
    }
    
    
}

export default FetchData;