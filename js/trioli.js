const containerProduk = document.getElementById("container");
const getData = JSON.parse(localStorage.getItem("save")) || [];
const imgTrash = document.querySelectorAll(".image-trash");


console.log(getData);
getData.forEach(post => {
    const div = document.createElement("div");
    div.className = "card";
    div.id = `data-${post.id}`;

    div.innerHTML = `
                <img src="${post.image[0]}" alt="">
                <div class="card-info">
                    <h2>${post.title}</h2>
                    <p></p>
                    <h3>${post.teksPrice}</h3>
                    <div class="card-input-remove">
                        <div class="input">
                            <button id="button-min">&mdash;</button>
                            <span>1</span>
                            <button id="button-plus">+</button>
                        </div>
                        <img src="image/trash.png" alt="" class="img-trash">
                    </div>
                </div>
            </div>
    `;

    containerProduk.appendChild(div);
});

containerProduk.addEventListener("click", (e) => {
    const img = e.target;

    if (!img.classList.contains("img-trash")) return;

    const card = img.closest(".card");
    const id = Number(card.id.replace("data-", ""));

    if (img.src.includes("trash.png")) { 
        const dataLama = JSON.parse(localStorage.getItem("save")) || [];
        const dataSesudah = dataLama.filter(post => post.id !== id);
        localStorage.setItem("save", JSON.stringify(dataSesudah));

        console.log("Dihapus id:", id);

        const card = img.closest(".card");
        if (card) {
            card.remove();
        }
    } else {
        img.src = "image/trash.png";
        console.log("Love aktif id:", id);
    }
});




// containerProduk.addEventListener("click", (e) => {
//     const img = e.target;

//     if (!img.classList.contains("image-trash")) return;

//     const card = img.closest(".card");
//     const id = Number(card.id.replace("data-", ""));

//     if (img.src.includes("trash.png")) {
//         const dataLama = JSON.parse(localStorage.getItem("save")) || [];
//         const dataSesudah = dataLama.filter(post => post.id !== id);
//         localStorage.setItem("save", JSON.stringify(dataSesudah));
//         console.log("Dihapus id:", id);
//     }
// })


