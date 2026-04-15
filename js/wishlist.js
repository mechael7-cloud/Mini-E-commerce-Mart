const containerProduk = document.getElementById("container");
const getData = JSON.parse(localStorage.getItem("save")) || [];

// 1. Render dulu semua card
getData.forEach(post => {
    const div = document.createElement("div");
    div.className = "card";
    div.id = `data-${post.id}`;

    div.innerHTML = `
        <img src="${post.image[0]}" alt="" id="image-plant">
        <img src="${post.image[1]}" alt="" class="image-love">
        <div class="dekripsi">
            <h3 class="title">${post.title}</h3>
            <p class="rate">★ <span>${post.teksRate}</span></p>
            <h4 class="price">${post.teksPrice}</h4>
            <img src="${post.image[2]}" alt="" class="image-troli">
        </div>
    `;

    containerProduk.appendChild(div);
});


containerProduk.addEventListener("click", (e) => {
    const img = e.target;

    if (!img.classList.contains("image-love")) return;

    const card = img.closest(".card");
    const id = Number(card.id.replace("data-", ""));

    if (img.src.includes("love-background.png")) {

        img.src = "image/love.png"; 
        const dataLama = JSON.parse(localStorage.getItem("save")) || [];
        const dataSesudah = dataLama.filter(post => post.id !== id);
        localStorage.setItem("save", JSON.stringify(dataSesudah));

        console.log("Dihapus id:", id);

        const card = img.closest(".card");
        if (card) {
            card.remove();
        }
    } else {
        img.src = "image/love-background.png";
        console.log("Love aktif id:", id);
    }
});