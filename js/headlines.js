// const apiKey = 'a4c8d451206c4062893eee6a85dbf200'; // Replace with your actual API key

// async function fetchLatestNews() {
//     const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
//     const data = await response.json();
//     displayNews(data.articles);
// }

// function displayNews(articles) {
//     const newsContainer = document.getElementById('newsContainer');
//     newsContainer.innerHTML = '';
    
//     articles.forEach(article => {
//         const articleDiv = document.createElement('div');
//         articleDiv.className = 'article';
        
//         articleDiv.innerHTML = `
//             <h2>${article.title}</h2>
//             <p>${article.description}</p>
//             <a href="${article.url}" target="_blank">Read more</a>
//         `;
        
//         newsContainer.appendChild(articleDiv);
//     });
// }

// fetchLatestNews();


const apiKey = 'pub_552922a3949cb87515af69d5d3f119f6e51fe'; // Use your actual API key

async function fetchLatestNews() {
    try {
        const response = await fetch(`https://newsdata.io/api/1/latest?apikey=${apiKey}&q=pizza`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        if (data.results && data.results.length > 0) {
            displayNews(data.results);
        } else {
            console.error("No articles found");
        }
    } catch (error) {
        console.error("Error fetching latest news:", error);
    }
}

function displayNews(articles) {
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = '';

    articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'article';

        articleDiv.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.description || 'No description available'}</p>
            <a href="${article.link}" target="_blank">Read more</a>
        `;

        newsContainer.appendChild(articleDiv);
    });
}

fetchLatestNews();
