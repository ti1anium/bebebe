(async () => {
    const res = await fetch("./db.json");
    const data = await res.json();

    const cards = document.getElementsByClassName("cards")[0];

    for (let card of data.product) {
        const cardElement = document.createElement("div");

        cardElement.className = "card";

        cardElement.innerHTML = `
            <h1 class="name">${card.name}</h1>
            <p class="price">${card.price}$</p>
            <img src="${card.image}" class="icon">
            <p class="description">${card.description}</p>
            <p class="color">Color: ${card.color}</p>
        `;

        cards.appendChild(cardElement);
    }
})();