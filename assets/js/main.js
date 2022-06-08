// var articleBtn = document.querySelector("#get-articles");

var requestUrl = 'https://api.spaceflightnewsapi.net/v3/articles?summary_contains=launch&_start=0&_limit=10';


fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        for(var i = 0; i < data.length; i++){
            var object = JSON.stringify(data[i]);
            object = JSON.parse(object)
            console.log(object);
    
            var mainDiv = document.querySelector("main");
    
            var articleCard = document.createElement("div");
            articleCard.className="article-card";
            articleCard.id="article-"+object.id;
    
            console.log(object.title);
            var articleImg = document.createElement("img");
            articleImg.className="article-img";
            articleImg.src = object.imageUrl;
            articleCard.appendChild(articleImg);
    
            var articleInfo = document.createElement("div");
            articleInfo.className="article-info";
            articleCard.appendChild(articleInfo);
    
            var articleTitle = document.createElement("h3");
            articleTitle.className="article-title";
            articleTitle.textContent=object.title;
            articleInfo.appendChild(articleTitle);
            
            var articleSite = document.createElement("h4");
            articleSite.classList="article-news-site";
            articleSite.textContent=object.newsSite;
            articleInfo.appendChild(articleSite);
    
            var articleSum = document.createElement("p");
            articleSum.className="article-summary";
            articleSum.textContent=object.summary;
            articleInfo.appendChild(articleSum);
    
            mainDiv.appendChild(articleCard);
        }
    });