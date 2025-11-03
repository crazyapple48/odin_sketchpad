const container = document.querySelector(".container");
const button = document.querySelector("#btn");

function createGrid(size) {
    container.innerHTML = "";

	for (let i = 0; i < size * size; i++) {
		const itemWidthPercentage = 100 / size;

		const box = document.createElement("div");
		box.className = "box";

		box.style.cssText = `
            flex-basis: ${itemWidthPercentage}%;
            height: ${itemWidthPercentage}%;
            `;

		box.addEventListener("mouseenter", () => {
			box.classList.add("active");
		});

		container.appendChild(box);
	}
}

function getSize() {
    let input = prompt("How many squares do you want on each side? (0-100)");

    let isValid = false;

    while (!isValid) {
        if (input > 100 || input <= 0) {
            input = prompt("Enter a number between 0 and 100");
        } else {
            isValid = true;
        }
    }

    createGrid(parseInt(input));

    return parseInt(input);
}

const userChoice = getSize();

button.addEventListener("click", () => getSize());