// call the tabs /buttons/and article contents
const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");

tabs.addEventListener("click", (event) => {
    
    // Can identify which button is being clicked on 
    // console.log(event.target.dataset.id);

    const id = event.target.dataset.id

    // Changes the color of the tab section and button to be the live and all in one color 
    if(id) {
        btns.forEach((btn) => {
            btn.classList.remove("live");
        });
        event.target.classList.add("live");
    
        // Changes the articles to the corresponding tab to appear.
        articles.forEach((article) => {
            article.classList.remove("live");
        });
        const element = document.getElementById(id);
        element.classList.add("live");
    }
});