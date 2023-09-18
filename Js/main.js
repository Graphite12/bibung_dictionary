const imgs = document.querySelectorAll(".Module_imgs");
let styleElement = null;

function flip_div(event) {
    const clickedClassName = event.target.classList.item(event.target.classList.length - 1);

    if (!styleElement) {
        styleElement = document.createElement('style');
        document.head.appendChild(styleElement);
    }

    styleElement.innerHTML = `
        .${clickedClassName} {
            transform: rotateY(180deg) rotateZ(90deg) scale(11);
            transition: transform 1s ease;
        }
        .${clickedClassName}:hover {
            transform: rotateY(180deg) rotateZ(90deg) scale(11);
            transition: transform 1s ease;
        }
    `;
}

imgs.forEach(articleElement => articleElement.addEventListener("click", flip_div));
