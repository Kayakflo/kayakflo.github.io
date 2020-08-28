const factorAllInputs = document.querySelectorAll("#factorAll tr input");

for (const input of factorAllInputs) {
    input.addEventListener("change", event => recalcAllFactorRows(event.target.parentNode.parentNode.parentNode));
}
