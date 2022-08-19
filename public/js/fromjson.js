const contentEl = document.querySelector('.content');
const loader = document.querySelector('.preloader');

const init = async (link) => {
    const result = await axios.get(link);
    const dataToView = result.data;

    for(let i=0; i<dataToView.length;i++) {
        const htmlCode = `
        <div class="good">
            <a href="./goods/${i}">
                <img class="good_img" src="../img/goods/${dataToView[i].title.toLowerCase()}.jpg" alt="">
                <p class="good_name">${dataToView[i].title}</p>
                <p class="good_price">Цена: ${dataToView[i].price}</p>
            </a>
        </div>  
            `;
        contentEl.insertAdjacentHTML('beforeend', htmlCode);
    };
    loader.remove();
}

init('./json');