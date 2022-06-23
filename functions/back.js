fetch('../components/back.html')
    .then(res => res.text())
    .then(htmlBack => {
        let oldElement = document.querySelector("script#replace_with_backBtn");
        let newElement = document.createElement("div");
        newElement.innerHTML = htmlBack
        oldElement.parentNode.replaceChild(newElement, oldElement);
    })