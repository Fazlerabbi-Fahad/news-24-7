const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.data.news_category))
}

const displayCategories = (newses) => {
    toggleSpinner(true);
    const categorySection = document.getElementById('category');
    for (const news of newses) {
        const categoryLi = document.createElement('li');
        categoryLi.classList.add('nav-item');
        categoryLi.innerHTML = `
        <a class="nav-link category" onclick="loadCategory(${news.category_id})"aria-current="page" href="#">${news.category_name}</a>
        `
        categorySection.appendChild(categoryLi);

    }
    toggleSpinner(false);
}
loadCategories()


const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    } else {
        loaderSection.classList.add('d-none');
    }
}



