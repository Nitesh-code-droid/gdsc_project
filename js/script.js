// document.getElementById('searchBtn').addEventListener('click', function() {
//     let query = document.getElementById('search').value;
//     fetchNews(query);
// });

// function fetchNews(query) {
//     let apiKey = 'a4c8d451206c4062893eee6a85dbf200';
//     let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

//     fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         let articles = data.articles;
//         let newsContainer = document.getElementById('newsContainer');
//         newsContainer.innerHTML = '';

//         articles.forEach(article => {
//             let articleDiv = document.createElement('div');
//             articleDiv.className = 'article';
//             articleDiv.innerHTML = `
//                 <h>${article.title}</h2>
//                 <p>${article.description}</p>
//                 <a href="${article.url}" target="_blank">Read more</a>
//             `;
//             newsContainer.appendChild(articleDiv);
//         });
//     })
//     .catch(error => {
//         console.error('Error fetching news:', error);
//     });
// }


document.getElementById('searchBtn').addEventListener('click', function() {
    let query = document.getElementById('search').value;
    fetchNews(query);
});

function fetchNews(query) {
    let apiKey = 'pub_552922a3949cb87515af69d5d3f119f6e51fe'; 
    let url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${encodeURIComponent(query)}`;

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.results && data.results.length > 0) {
            let articles = data.results;
            let newsContainer = document.getElementById('newsContainer');
            newsContainer.innerHTML = '';

            articles.forEach(article => {
                let articleDiv = document.createElement('div');
                articleDiv.className = 'article';

                                const maxDescriptionLength = 100;
                const truncatedDescription = article.description 
                    ? (article.description.length > maxDescriptionLength 
                        ? article.description.substring(0, maxDescriptionLength) + '...' 
                        : article.description) 
                    : 'No description available';

                articleDiv.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>${truncatedDescription}</p>
                    <a href="${article.link}" target="_blank">Read more</a>
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

