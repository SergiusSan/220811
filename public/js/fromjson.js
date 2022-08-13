const contentEl = document.querySelector('.content');
const loader = document.querySelector('.loader');

const init = async (link) => {
    const result = await axios.get(link);
    const dataToView = result.data;
    for(let i=0; i<dataToView.length;i++) {
        contentEl.insertAdjacentHTML('beforeend', `<p><a href="./goods/${i} ">${dataToView[i].title}</a></p>`);
    };
    loader.style.display = "none";
}

init('./json');