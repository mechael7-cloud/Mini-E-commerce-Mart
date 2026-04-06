const buttonLove = document.querySelectorAll(".image-love")


// buttonLove.addEventListener("click", () => {
//     buttonLove.forEach(img => {
//         img.src = "image/love-background"
//     })
// })


buttonLove.forEach(img => {
    img.addEventListener("click", () => {
        if(img.src.includes("love.png")) {
            img.src = "image/love-background.png";
        } else {
            img.src = "image/love.png";
        }
    })
})
