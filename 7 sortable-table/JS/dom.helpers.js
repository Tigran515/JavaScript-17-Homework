export const createTableRow = (items) => {
  const tr = document.createElement("tr");

  items.forEach((value) => {
    const td = document.createElement("td");
    td.textContent = value;
    tr.append(td);
  });

  return tr;
};
