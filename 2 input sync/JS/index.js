const inp = document.querySelector('.inp');
const p = document.querySelector('.txt');
// let cleanValue = p.textContent;

inp.addEventListener('input', () => {
        p.textContent = `${inp.value}`;

});