const pointsAll = document.getElementById("pointsAll");
const pointsWinner = document.getElementById("pointsWinner");

const factorAll = document.getElementById("factorAll");
const factorWinner = document.getElementById("factorWinner");

const tablesPoints = [pointsAll, pointsWinner];
const tablesFactors = [factorAll, factorWinner];


function recalcAllFactorRows(tbody) {
    const rows = tbody.querySelectorAll("tr");

    for (const parentRow of rows) {
        const factor = parseInt(parentRow.querySelector("td:nth-child(2)").textContent, 10);
        const isChecked = parentRow.querySelector("td:nth-child(3) input").checked;

        const counterAll = parentRow.querySelector("td:last-child");
        counterAll.textContent = isChecked ? factor : 0;    
    }

    calcAll();
}

function calcPoints() {
    let points = 0;

    for (const table of tablesPoints) {
        const lastTDNodes = table.querySelectorAll("tr td:last-child");
        const lastTDs = lastTDNodes.values();
        const lastTDsArray = [...lastTDs];
        const lastTDsValues = lastTDsArray.map(td => parseInt(td.textContent, 10));
        points += lastTDsValues.reduce((prev, curr) => prev + curr, 0);
    }

    return points;
}

function calcFactor() {
    let doubles = 0;

    for (const table of tablesFactors) {
        const lastTDNodes = table.querySelectorAll("tr td:last-child");
        const lastTDs = lastTDNodes.values();
        const lastTDsArray = [...lastTDs];
        doubles += lastTDsArray.reduce((prev, curr) => prev + parseInt(curr.textContent, 10), 0);
    }

    const factor = Math.pow(2, doubles);
    return factor;
}

function calcAll() {
    const points = calcPoints();
    const factor = calcFactor();
    const product = points * factor;

    const pointsField = document.getElementById("points");
    pointsField.textContent = `Punkte: ${points}`;

    const factorsField = document.getElementById("factors");
    factorsField.textContent = `Faktor: ${factor}`;

    const sumField = document.getElementById("sum");
    sumField.textContent = `Gesamt: ${product}`;
}
