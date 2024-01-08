const apiKey = '0c8ca91c6ca94fbca03f68f02ba9a8f5'; // Get your API key from NewsAPI.org

const newsContainer = document.getElementById('news-container');

async function fetchNews() {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
    const data = await response.json();
    
    if (data.status === 'ok') {
      displayNews(data.articles);
    } else {
      console.error('Failed to fetch news:', data.message);
    }
  } catch (error) {
    console.error('Error fetching news:', error.message);
  }
}

function displayNews(articles) {
  newsContainer.innerHTML = '';

  articles.forEach(article => {
    const articleElement = document.createElement('article');
    articleElement.innerHTML = `
      <h2>${article.title}</h2>
      <p>${article.description}</p>
      <a href="${article.url}" target="_blank">Read more</a>
    `;
    newsContainer.appendChild(articleElement);
  });
}

document.addEventListener('DOMContentLoaded', fetchNews);

const sliderBtn = document.getElementById('slider-btn');

sliderBtn.addEventListener('click', () => {
  scrollToNewsContainer();
});

function scrollToNewsContainer() {
    const newsContainer = document.getElementById('news-container');
    const containerTop = newsContainer.getBoundingClientRect().top + window.scrollY;
    const offset = 0;
  
    window.scrollTo({
      top: containerTop - offset,
      behavior: 'smooth'
    });
  }
  

function displayNews(articles) {
    newsContainer.innerHTML = '';
  
    articles.forEach(article => {
      const articleElement = document.createElement('article');
      articleElement.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <a href="${article.url}" target="_blank">Read more</a>
      `;
      newsContainer.appendChild(articleElement);
    });
  
    // Scroll down to the news container when news is loaded
    scrollToNewsContainer();
  }
  
