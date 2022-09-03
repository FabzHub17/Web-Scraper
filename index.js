const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();

const url = 'https://www.fandom.com/';
 
axios(url)
    .then(response =>{
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []

        $('.a-list-feed__item', html).each( function() {
            const title = $(this).find('.a-list-feed__title').text()
            const articleUrl = $(this).attr('href')
            articles.push({
                title,
                articleUrl
            })
        })
        console.log(articles)
        
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));