const selectElement = document.querySelector('.type');

selectElement.addEventListener('change', (event) => {
    const httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'http://localhost:5000/moves?type=' + event.target.value, true);
    httpRequest.send();
});