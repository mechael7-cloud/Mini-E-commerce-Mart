


const buttonLove = document.querySelectorAll(".image-love")



buttonLove.forEach(img => {
    img.addEventListener("click", () => {

        const cards = img.closest(".card");
        const id = Number(cards.dataset.id);


        if (img.src.includes("love.png")) {
            img.src = "image/love-background.png";


            const title = cards.querySelector(".title")?.textContent || "";
            const teksRate = cards.querySelector(".rate")?.textContent || "";
            const teksPrice = cards.querySelector(".price")?.textContent || "";

            const images = [];
            cards.querySelectorAll("img").forEach(i => {
                images.push(i.src);
            });

            const postBaru = { id, title, teksRate, teksPrice, image: images }

            const dataLama = JSON.parse(localStorage.getItem("save")) || [];
            dataLama.push(postBaru);
            localStorage.setItem("save", JSON.stringify(dataLama));

            alert("Postingan Tersimpan");

        }
        else {
            img.src = "image/love.png";
            const dataLama = JSON.parse(localStorage.getItem("save")) || [];
            const dataSesudah = dataLama.filter(post => post.id !== id);
            localStorage.setItem("save", JSON.stringify(dataSesudah));
            console.log("Dihapuskan: ", id)
        }


    })



})














// SIMPAN CARD KE DALAM BANTUK JSON








//  localStorage.setItem("save", JSON.stringify(posts));



