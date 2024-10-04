document.getElementById('searchBtn').addEventListener('click', function() {
    let query = document.getElementById('search').value;
    fetchNews(query);
});

function fetchNews(query) {
    let apiKey = 'a4c8d451206c4062893eee6a85dbf'; 
    let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.articles && data.articles.length > 0) {
            let articles = data.articles;
            let newsContainer = document.getElementById('newsContainer');
            newsContainer.innerHTML = '';

            articles.forEach(article => {
                let articleDiv = document.createElement('div');
                articleDiv.className = 'article';
                articleDiv.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;
                newsContainer.appendChild(articleDiv);
            });
        } else {
            console.error("No articles found for this query");
        }
    })
    .catch(error => {
        console.error('Error fetching news:', error);
    });
}
