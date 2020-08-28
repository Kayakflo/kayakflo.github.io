const inputsWinner = document.querySelectorAll("#pointsWinner tr input");

for (const input of inputsWinner) {
    input.addEventListener("change", event => recalcAllWinnerPoints(event.target.parentNode.parentNode.parentNode));
}

function recalcAllWinnerPoints(tbody) {
    const rows = tbody.querySelectorAll("tr");

    for (const parentRow of rows) {
        const points = parseInt(parentRow.querySelector("td:nth-child(2)").textContent, 10);
        const isChecked = parentRow.querySelector("td:nth-child(3) input").checked;

        const counterAll = parentRow.querySelector("td:last-child");
        counterAll.textContent = points * isChecked;
        calcAll();
    }

}