// Función para guardar datos en el almacenamiento local
function saveToLocalStorage() {
    var inputValue = document.getElementById('textInput').value;
    localStorage.setItem('userInput', inputValue);
    displayDataFromLocalStorage();
}

// Función para mostrar datos desde el almacenamiento local
function displayDataFromLocalStorage() {
    var outputDiv = document.getElementById('output');
    var savedData = localStorage.getItem('userInput');
    if (savedData) {
        outputDiv.innerHTML = '<p>Data from Local Storage: ' + savedData + '</p>';
    } else {
        outputDiv.innerHTML = '<p>No data saved in Local Storage</p>';
    }
}

// Mostrar datos al cargar la página
window.onload = function() {
    displayDataFromLocalStorage();
};