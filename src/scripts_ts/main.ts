import { News } from './news.js';

declare let Handlebars;
const noticia = new News();

noticia.getAll().then(response =>{
    let source = document.getElementById('news-template').innerHTML;
    const template = Handlebars.compile(source);
    const resultHtml = template({noticia: response.data.articles})
    document.getElementById('news-container').innerHTML = resultHtml;
});


