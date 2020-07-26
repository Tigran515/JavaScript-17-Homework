import { SORTING_ORDERS } from "./constants.js";

export const sortStudents = (students, order) => {
  if (order === SORTING_ORDERS.random) {
    
    return students.slice().Math.floor(Math.random()* students.age);
  }

  // @TODO: refactor
  return students.slice().sort((a, b) => {
    if (order === SORTING_ORDERS.asc) {
      return a.age > b.age ? 1 : -1;
    } else {
      return a.age > b.age ? -1 : 1;
    }
  });
};
