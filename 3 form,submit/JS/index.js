const form = document.querySelector('form');
const inputs = document.querySelectorAll('.input');


const data = {
    name: '',
    lastName: '',
}

inputs.forEach(item => {
    item.addEventListener('input', e => {
        const key = e.target.name;
        data[key] = e.target.value;
    });
})



form.addEventListener('submit', e => {
    e.preventDefault();
    if (!(data.name && data.lastName)) {
        const allError = document.createElement('div');
        allError.classList.add('all-error');
        allError.textContent = 'Please fill-in ALL inputs';
        form.insertAdjacentElement('afterbegin', allError);
    } else {
        const allError = (document.querySelector('.all-error'));

        if (allError) {
            allError.remove();

        }
        alert(`name :${data.name} lastName : ${data.lastName}`);
    }
});

