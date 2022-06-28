console.log("This is my Index js file");

// news parameters(initialise)
let source = "bbc-news";
let apikey = "e1ce7806efa14a388eb0b8692c44cbe6";

//grab news container
let newsAccordion = document.getElementById("newsAcc");

// create ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e1ce7806efa14a388eb0b8692c44cbe6`,
  true
);
// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    //console.log(articles);
    let newsHtml = "";
    articles.forEach(function(element,index) {
        //const words = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"];
       // console.log(index);
        let news = `
                    <div class="card">
                        <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                            <button
                                class="btn btn-link collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapse${index}"
                                aria-expanded="true"
                                aria-controls="collapse${index}"
                            >
                            <span class="badge badge-secondary"><b>Breaking News ${index+1}:</b></span> ${element["title"]}
                            </button>
                            </h2>
                        </div>

                        <div
                            id="collapse${index}"
                            class="collapse"
                            aria-labelledby="heading${index}"
                            data-parent="#newsAcc"
                        >
                            <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a> </div>
                        </div>
                    </div>`
        newsHtml += news;
       // console.log(newsHtml);
    });
        newsAccordion.innerHTML = newsHtml;

  } else {
    console.log("Some error occured");
    
  }
}

xhr.send();


