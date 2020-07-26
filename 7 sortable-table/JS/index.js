
import { SORTING_ORDERS } from "./constants.js";
import { createTableRow } from "./dom.helpers.js";
import { sortStudents } from "./data.helper.js";


const table = document.querySelector("#sortable-table");
const tableBody = table.querySelector("tbody");
const ageCol = table.querySelector("#sortable-table-age");

const inputs = document.querySelectorAll('.inp');



const state = {
    students: [],      

    order: SORTING_ORDERS.random, // 'random', 'asc', 'desc' ⬆️⬇️
};

let newData;



const data = {
    name: "",
    age: '',
    grade: '',
}

inputs.forEach(item => {
    item.addEventListener('input', e => {
        const key = e.target.name;
        data[key] = e.target.value;
    });
})


function StudentInfo(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
}

inputs.forEach(item => {
    item.addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {

            if ((data.name.trim() === "" ||  ! isNaN(data.name) || data.age.trim() === "" || data.grade.trim() === "")) {
                return
            }
            if(data.age < 0 || data.age > 100 || data.grade < 0){
                return
            }
            newData = new StudentInfo(data.name, data.age, data.grade)
            state.students.push(newData);
            console.log(state.students);
        }
    })
});




const render = (state) => {
    tableBody.innerHTML = "";

    state.students.forEach(({ name, age, grade }) => {  ////change
        // maybe with objects ?
        const row = createTableRow([name, grade, age]);

        tableBody.append(row);
    });

    const sortIcon = ageCol.querySelector(".sort-icon");

    switch (state.order) {
        case SORTING_ORDERS.random:
            sortIcon.textContent = "➡️";
            break;
        case SORTING_ORDERS.asc:
            sortIcon.textContent = "⬆️";
            break;
        case SORTING_ORDERS.desc:
            sortIcon.textContent = "⬇️";
            break;
        default:
            throw new Error(`${state.order} is not valid sorting command`);
    }
};



ageCol.addEventListener("click", (evt) => {
    // @TODO: resolve order change according to the docs
    switch (state.order) {
        case SORTING_ORDERS.random:
            state.order = SORTING_ORDERS.asc;
            break;
        case SORTING_ORDERS.asc:
            state.order = SORTING_ORDERS.desc;
            break;
        case SORTING_ORDERS.desc:
            state.order = SORTING_ORDERS.asc;
            break;
        default:
            throw new Error(`${state.order} is not an valid order!`);
    }

    state.students = sortStudents(state.students, state.order);

    render(state);
});




