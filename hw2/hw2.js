const getComicBtn = document.getElementById('get-comic-btn');
const disclaimer = document.getElementById('disclaimer');

const comicInfo = document.createElement('div');
const comicTitle = document.createElement('h1');
const comicDate = document.createElement('p');
const comicImage = document.createElement('img');

function fetchComicId() {
    return fetch("https://fwd.innopolis.university/api/hw2/?" + new URLSearchParams({ email: "d.nikulin@innopolis.university"})).then((r) => r.json());
}

function fetchComic(id) {
    return fetch("https://fwd.innopolis.university/api/comic/?" + new URLSearchParams({ id })).then((r) => r.json());
}
getComicBtn.addEventListener('click', async () => {
    getComicBtn.parentNode.removeChild(getComicBtn);
    disclaimer.textContent = "Loading...";
    const id = await fetchComicId();
    const comic = await fetchComic(id);

    comicTitle.textContent = comic.safe_title;
    comicDate.appendChild(document.createTextNode(`Upload date: ${new Date(comic.year, comic.month, comic.day).toLocaleDateString()}`))
    comicImage.setAttribute("src", comic.img);
    comicImage.setAttribute("alt", comic.alt);

    comicInfo.appendChild(comicTitle);
    comicInfo.appendChild(comicDate);
    comicInfo.appendChild(comicImage);

    disclaimer.parentNode.appendChild(comicInfo);
    disclaimer.parentNode.removeChild(disclaimer);
})