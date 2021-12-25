// d8cce8638aeb413b90759d2641f0fa68

let source = 'bbc-news';
let apiKey = 'd8cce8638aeb413b90759d2641f0fa68';

let newsAccordion = document.getElementById('newsAccordion');
// const xhr = new XMLHttpRequest();

// xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,true);
// xhr.getResponseHeader('Content-type','application/json');
// xhr.onload = function(){
//     if(this.status===200){
//         let json = JSON.parse(this.responseText);
//         let articles = json.articles;
//         console.log(articles);
//     }
//     else{
//         console.log('Some Error occured');
//     }
    
// }
// xhr.send()

// function getdata(){
//     url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`;
//     fetch(url).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data);
//     })
// }
// getdata();
let news = `<div class="accordion-item">
<h2 class="accordion-header" id="headingOne">
    <button class="accordion-button" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
    </button>
</h2>
<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
    data-bs-parent="#accordionExample">
    <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is hidden by default, until the
        collapse plugin adds the appropriate classes that we use to style each element. These classes
        control the overall appearance, as well as the showing and hiding via CSS transitions. You can
        modify any of this with custom CSS or overriding our default variables. It's also worth noting
        that just about any HTML can go within the <code>.accordion-body</code>, though the transition
        does limit overflow.
    </div>
</div>
</div>`;