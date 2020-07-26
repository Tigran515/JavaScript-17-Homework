const list = document.querySelectorAll('.list');

list.forEach((element, index, array) => {
    element.addEventListener('click', e => {
        let first = array[0];

        if (e.target === first) {
            e.target.classList.add("line-through");
        };

        if (e.target.previousElementSibling.classList.contains("line-through")) {
            e.target.classList.add("line-through");
        }
    })
});



