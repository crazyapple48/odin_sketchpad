const container = document.querySelector(".container");

for (let i = 0; i < (16*16); i++) {
    const itemWidthPercentage = 100 / 16;

    const box = document.createElement("div");
    box.className = "box";
    
    box.style.cssText = `
        flex-basis: ${itemWidthPercentage}%;
        height: ${itemWidthPercentage}%;
    `

    box.addEventListener("mouseenter", () => {
        box.classList.add("active");
    })

    container.appendChild(box);
}