const loadCategory = (category_id) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/0${category_id}`)
        .then(res => res.json())
        .then(data => displayCategory(data.data))
}

const displayCategory = newses => {
    const newsContainer = document.getElementById('news-container');
    toggleSpinner(true);
    newsContainer.innerHTML = ``;
    // Massege Section 
    const massegeContainer = document.getElementById('massege-container');
    massegeContainer.innerText = ``;
    const massegeDiv = document.createElement('h3');
    massegeDiv.classList.add('massege-section');
    if (newses.length != 0) {
        massegeDiv.innerText = `${newses.length} items found for this category`;

    } else {
        massegeDiv.innerText = `No items found for this category`;
    }
    massegeContainer.appendChild(massegeDiv);



    for (const news of newses) {
        const newsCard = document.createElement('div');
        newsCard.classList.add("card");
        newsCard.classList.add("mb-3")
        newsCard.innerHTML = `
        <div class="row g-0">
                        <div class="col-md-4 p-2">
                            <img src="${news.thumbnail_url}" class="img-fluid rounded-start p-2 h-100 w-100" alt="...">
                        </div>
                        <div class="col-md-8 pe-5 pt-5">
                            <div class="card-body">
                                <h5 class="card-title fw-bold pb-3">${news.title}</h5>
                                <p class="card-text fs-6" style="color:#A3A3A3;">${news.details.slice(0, 500)}...</p>
                            </div>
                            <div>
                                <small class="text-muted">
                              
                               <div class="d-flex flex-row mb-3">
                                      <div class="ps-3"><img src="${news.author.img ? news.author.img : 'No data available'}" class="img-fluid rounded-circle" style="width:45px; hight:45px;"></div>
                                      <div class="ps-3"> <h6>${news.author.name ? news.author.name : 'No data available'}</h6>
                                      <p class="pt-0">${news.author.published_date ? news.author.published_date : 'No data available'}</p></div>
                                      <div class="ps-5 ms-5"><i class="fa-solid fa-eye"><h6 class="float-end ps-2">${news.total_view ? news.total_view : 'No data available'}</h6></i></div>
                                     <div> <div class="icon" style="text-align:left;">
                                     <a onclick="loadNews('${news._id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-greater-than"></i>
                                    
                                    </a></div>
                                     </div>
                                    </div>

                                </small>
                            </div>

                        </div>
                    </div>
        `
        newsContainer.appendChild(newsCard);


    }
    toggleSpinner(false);
}
loadCategory(01);