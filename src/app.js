const feedDisplay = document.querySelector('#feed')

const url = 'http://localhost:8000/results'

fetch(url)
    .then(response => response.json())
    .then(data => data.forEach(article => {

        const articleItem = '<div><h3>' + article.title + '</h3><a>' + article.articleUrl +  '</a></div>'
        feedDisplay.insertAdjacentHTML("beforeend", articleItem)
       

       
    })
    )
    .catch(err => console.log(err))