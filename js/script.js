document.getElementById('searchBtn').addEventListener('click', function() {
    let query = document.getElementById('search').value;
    fetchNews(query);
});

function fetchNews(query) {
    let apiKey = 'a4c8d451206c4062893eee6a85dbf200';
    let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        let articles = data.articles;
        let newsContainer = document.getElementById('newsContainer');
        newsContainer.innerHTML = '';

        articles.forEach(article => {
            let articleDiv = document.createElement('div');
            articleDiv.className = 'article';
            articleDiv.innerHTML = `
                <h>${article.title}</h2>
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            `;
            newsContainer.appendChild(articleDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching news:', error);
    });
}
