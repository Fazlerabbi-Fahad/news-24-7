const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.data.news_category))
}

const displayCategories = (newses) => {
    const categorySection = document.getElementById('category');
    for (const news of newses) {
        const categoryLi = document.createElement('li');
        categoryLi.classList.add('nav-item');
        categoryLi.innerHTML = `
        <a class="nav-link category" aria-current="page" href="#">${news.category_name}</a>
        `
        categorySection.appendChild(categoryLi);
    }
}
loadCategories()