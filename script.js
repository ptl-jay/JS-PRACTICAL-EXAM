let history = [];

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}
function calculate() {
    try {
        let exp = document.getElementById("display").value;

        if (exp.includes('%')) {
            exp = exp.replace(/([0-9]+)%/g, '($1/100)');
        }

        let result = eval(exp);
        document.getElementById("display").value = result;

        let historyItem = `${exp} = ${result}`;
        history.push(historyItem);
        updateHistory();

    } catch (e) {
        document.getElementById("display").value = 'Error';
    }
}
function calculateSquareRoot() {
    const display = document.getElementById('display');
    try {
        const value = eval(display.value);
        if (value < 0) {
            display.value = 'Error';
        } else {
            display.value = Math.sqrt(value);
        }
    } catch (error) {
        display.value = 'Error';
    }
}
function updateHistory() {
    let historyContainer = document.getElementById("history");
    historyContainer.innerHTML = '';

    history.forEach(item => {
        let historyElement = document.createElement("div");
        historyElement.classList.add("history-item");
        historyElement.textContent = item;
        historyContainer.appendChild(historyElement);
    });
}