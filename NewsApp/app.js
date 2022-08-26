
    //querySelectors
    var q=""
    var inputClass = document.querySelector('.inputClass');
    var buttonClass = document.querySelector('.buttonClass');
    var container = document.querySelector('.container');
    inputClass.addEventListener("change",()=>{
        q=inputClass.value
        // console.log(q)

    })
    buttonClass.addEventListener('click',function(event){
        container.innerHTML =""

        fetch(`https://newsapi.org/v2/everything?q=${q}&from=2022-07-26&sortBy=publishedAt&apiKey=3064d88d2d1345a7915d57781a10a49e`)
        .then(result=>result.json())
        .then(data=>{
            let articles = data["articles"]
            
            for(let i=0;i<9;i++){
                let article = articles[i]
                let html = `<div class ="content">
                    <img src=${article["urlToImage"]}>
                    <h1>${article["title"]} </h1>
                    <p>${article["author"]}</p>
                    <p>${article["description"]} <a href=${article["url"]} class="cta">Read more</a> </p>
                  </div>`

                container.innerHTML+=html
              
                
            }
        }).catch(err=>alert("error"))
    })
