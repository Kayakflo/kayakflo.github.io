const inputsAll = document.querySelectorAll("#pointsAll tr input");

for (const input of inputsAll) {
    input.addEventListener("change", (event) => {
        const parentRow = event.target.parentNode.parentNode;
        
        const openPoints = parseInt(parentRow.querySelector("td:nth-child(2)").textContent, 10);
        const openCounter = parentRow.querySelector("td:nth-child(3) input").value;

        const hiddenPoints = parseInt(parentRow.querySelector("td:nth-child(4)").textContent, 10);
        const hiddenCounter = parentRow.querySelector("td:nth-child(5) input").value;

        const counterAll = parentRow.querySelector("td:last-child");
        counterAll.textContent = (openPoints * openCounter) + (hiddenPoints * hiddenCounter);
        calcAll(); 
    });
}