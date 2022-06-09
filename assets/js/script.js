//article button vars
var articleBtn = document.querySelector("#get-articles");
var articlePrev = document.querySelector("#article-prev");
var articleNext = document.querySelector("#article-next");

// report button vars
var reportBtn = document.querySelector("#get-reports");
var reportPrev = document.querySelector("#report-prev");
var reportNext = document.querySelector("#report-next");

// important div vars
var articleDiv = document.getElementById("articles");
var reportDiv = document.getElementById("reports");
var menuDiv = document.getElementById("menu");
// var mainContainer = document.getElementById("mainContainer");

// request info vars
var type;
var resultLimit = 10;
var pageReq = 0;

// summary_contains=launch&

var articleList = document.querySelector("#list-articles");
var reportList = document.querySelector("#list-reports");

var requestSpaceInfo = function(infoType){
    var requestUrl = 'https://api.spaceflightnewsapi.net/v3/'+type+'?_start='+pageReq+'&_limit='+resultLimit;

    // disable prev button if page req is 0
    if(pageReq === 0){
        articlePrev.disabled=true;
    }
    else{
        articlePrev.disabled=false;
    }
    
    // fetch spaceflight news
    fetch(requestUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            // if infoType equals "articles"...
            if(infoType === "articles"){
                for(var i = 0; i < data.length; i++){
                    // stringify data
                    var object = JSON.stringify(data[i]);
                    object = JSON.parse(object)
            
                    // create article card
                    var articleCard = document.createElement("div");
                    articleCard.className="article-card";
                    articleCard.id="article-"+object.id;

                    // create article image and attach it to article card
                    var articleImg = document.createElement("img");
                    articleImg.className="article-img";
                    articleImg.src = object.imageUrl;
                    articleCard.appendChild(articleImg);
                    
                    // create article info div and attach to article card
                    var articleInfo = document.createElement("div");
                    articleInfo.className="article-info";
                    articleCard.appendChild(articleInfo);
                    
                    // create article title and attach it to article info div
                    var articleTitle = document.createElement("h3");
                    articleTitle.className="article-title";
                    articleTitle.textContent=object.title;
                    articleInfo.appendChild(articleTitle);
                    
                    // create article site and attach to article div info
                    var articleSite = document.createElement("h4");
                    articleSite.classList="article-news-site";
                    articleSite.textContent="By: "+object.newsSite;
                    articleInfo.appendChild(articleSite);
                    
                    // create article summary and attach to article info div
                    var articleSum = document.createElement("p");
                    articleSum.className="article-summary";
                    articleSum.textContent=object.summary;
                    articleInfo.appendChild(articleSum);
            
                    // attach article card to article list
                    articleList.appendChild(articleCard);
                }
            }
            if(infoType === "reports"){
                
                for(var i = 0; i < data.length; i++){
                    // stringify data
                    var object = JSON.stringify(data[i]);
                    object = JSON.parse(object)
            
                    // create report card
                    var reportCard = document.createElement("div");
                    reportCard.className="report-card";
                    reportCard.id="report-"+object.id;

                    // create report image and attach it to report card
                    var reportImg = document.createElement("img");
                    reportImg.className="report-img";
                    reportImg.src = object.imageUrl;
                    reportCard.appendChild(reportImg);
                    
                    // create report info div and attach to report card
                    var reportInfo = document.createElement("div");
                    reportInfo.className="report-info";
                    reportCard.appendChild(reportInfo);
                    
                    // create report title and attach it to report info div
                    var reportTitle = document.createElement("h3");
                    reportTitle.className="report-title";
                    reportTitle.textContent=object.title;
                    reportInfo.appendChild(reportTitle);
                    
                    // create report site and attach to report div info
                    var reportSite = document.createElement("h4");
                    reportSite.classList="report-news-site";
                    reportSite.textContent="By: "+object.newsSite;
                    reportInfo.appendChild(reportSite);
                    
                    // create report summary and attach to report info div
                    var reportSum = document.createElement("p");
                    reportSum.className="report-summary";
                    reportSum.textContent=object.summary;
                    reportInfo.appendChild(reportSum);
            
                    // attach report card to report list
                    reportList.appendChild(reportCard);
                }
            }
        });
};

//// PREVIOUS BUTTONS
// function to get previous article page
var articlePrevPage = function(){
    pageReq = pageReq - resultLimit;
    while(articleList.firstChild){
        articleList.removeChild(articleList.firstChild);
    }
    requestSpaceInfo(type);
}
// function to get previous report page
var reportPrevPage = function(){
    pageReq = pageReq - resultLimit;
    while(reportList.firstChild){
        reportList.removeChild(reportList.firstChild);
    }
    requestSpaceInfo(type);
}
//// NEXT BUTTONS
// function to get next article page
var articleNextPage = function(){
    pageReq = pageReq + resultLimit;
    while(articleList.firstChild){
        articleList.removeChild(articleList.firstChild);
    }
    requestSpaceInfo(type);
};
// function to get next report page
var reportNextPage = function(){
    pageReq = pageReq + resultLimit;
    while(reportList.firstChild){
        reportList.removeChild(reportList.firstChild);
    }
    requestSpaceInfo(type);
};

// function to show articles
var showArticles = function(){
    menuDiv.style.display = "none";
    articleDiv.style.display="flex";
    mainContainer.style.height="200";
    type = "articles";
    requestSpaceInfo(type);
};
//function to show reports
var showReports = function(){
    menuDiv.style.display = "none";
    reportDiv.style.display="flex";
    type = "reports";
    requestSpaceInfo(type);
};

// article button event listeners
articleBtn.addEventListener("click", showArticles);
articlePrev.addEventListener("click", articlePrevPage);
articleNext.addEventListener("click", articleNextPage);

// report button event listeenrs
reportBtn.addEventListener("click", showReports);
reportPrev.addEventListener("click", reportPrevPage);
reportNext.addEventListener("click", reportNextPage);