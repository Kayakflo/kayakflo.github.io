const factorWinnerInputs = document.querySelectorAll("#factorWinner tr input");

for (const input of factorWinnerInputs) {
    input.addEventListener("change", event => recalcAllFactorRows(event.target.parentNode.parentNode.parentNode));
}