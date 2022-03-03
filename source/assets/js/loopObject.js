//Fetch
const url = "assets/js/json/artists.json"

getData();

async function getData() {
    const res = await fetch(url);
    const { results } = await res.json();

    const cardList = document.querySelector(".list-artwork");

    results.innerHTML = "";

    results.forEach(artist => {
        console.log(artist.name)

        const card = document.createElement("a");
        card.href = "#";
        card.classList.add("list-artwork__item", artist.category, "show");
        // card.dataset.depth = "5";
        // card.dataset.type = "parallax";

        card.innerHTML = `
            <div class="content">
                <div class="list-artwork__containerImg">
                    <img data-depth="0.1" data-type="parallax" class="list-artwork__img" src="${artist.image}" alt="">
                </div>
                <div class="list-artwork__top">
                    <h2 class="list-artwork__name">${artist.name}</h2>
                    <p class="list-artwork__category">${artist.category}</p>
                </div>
                <div class="list-artwork__bottom">
                    <p class="list-artwork__date">${artist.date}</p>
                    <p class="list-artwork__description">${artist.description}</p>
                </div>
            </div>
        `;

        cardList.appendChild(card);


    })
}
