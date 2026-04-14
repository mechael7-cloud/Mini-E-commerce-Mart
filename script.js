


const buttonLove = document.querySelectorAll(".image-love")

buttonLove.forEach(img => {
    img.addEventListener("click", () => {
        if(img.src.includes("love.png")) {
            img.src = "image/love-background.png";
        } else {
            img.src = "image/love.png";
        }
    })
})



// SIMPAN CARD KE DALAM BANTUK JSON

const cards = document.querySelectorAll(".card");


let posts = [];

cards.forEach(card => {
    console.log("ISI CARD:")
    console.log(card.innerHTML)

    
    const id =  card.dataset.id;
    const title = card.querySelector(".deskripsi .title")?.textContent || "";
    const teksRate = card.querySelector(".rate")?.textContent || "";
    const teksPrice = card.querySelector(".price")?.textContent || "";

    console.log(id, card.dataset.id);
    console.log(title, card.querySelector(".title"));
    console.log(teksRate, card.querySelector(".rate"));
    console.log(teksPrice, card.querySelector(".price"));

    const images = [];
    card.querySelectorAll("img").forEach(img => {
        images.push(img.src);
    });

    posts.push ({
        id: Number(id),
        title: title,
        teksRate: teksRate,
        teksPrice: teksPrice,
        image: images
    });
})

console.log(posts)