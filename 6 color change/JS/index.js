const colorInput = document.querySelector('.colorInp');
const backGroundInput = document.querySelector('.backGroundInp');
const applyButton = document.querySelector('.applyBtn');
const paragraph = document.querySelectorAll("p");



let colorState = {
    colorInputValue: "",
}

let backGroundState = {
    backGroundInputValue: "",

}

colorInput.addEventListener('input', e => {
    const reg = /[0-9A-Fa-f]{6}/g;

    if (reg.test(e.target.value)) {
        colorState.colorInputValue = e.target.value;

    }
});

backGroundInput.addEventListener('input', e => {
    const reg = /[0-9A-Fa-f]{6}/g;
    if (reg.test(e.target.value)) {
        backGroundState.backGroundInputValue = e.target.value;
    }
});



applyButton.addEventListener('click', () => {

    paragraph.forEach(item => {
        item.style.color = colorState.colorInputValue;
        item.style.backgroundColor = backGroundState.backGroundInputValue;
        console.log("VALID HEX");


    });

})
