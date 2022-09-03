const loadNews = (news_id) => {
    console.log(news_id);
    fetch(`https://openapi.programming-hero.com/api/news/${news_id}`)
        .then(res => res.json())
        .then(data => displayNews(data.data[0]));
}

const displayNews = news => {
    const modalExample = document.getElementById('exampleModalLabel');
    modalExample.innerText = news.title;
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
    <img class="img-fluid" src=${news.image_url}>
    <div>
    <small class="text-muted">
  
   <div class="d-flex flex-row mb-3 mt-4">
          <div class="ps-3"><img src="${news.author.img ? news.author.img : 'No data available'}" class="img-fluid rounded-circle" style="width:45px; hight:45px;"></div>
          <div class="ps-3"> <h6>${news.author.name ? news.author.name : 'No data available'}</h6>
          <p class="pt-0">${news.author.published_date ? news.author.published_date : 'No data available'}</p></div>
          <div class="ps-5 ms-5"><i class="fa-solid fa-eye"><h6 class="float-end ps-2">${news.total_view ? news.total_view : 'No data available'}</h6></i></div>
         </div>
        </div>

    </small>
</div>
<div>
<p>${news.details}</p>
</div>


`
}
loadNews()