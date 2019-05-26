const selectElement = document.querySelector('.type');

selectElement.addEventListener('change', (event) => {
    const httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', `http://localhost:5000/moves?type=${event.target.value}`, false);
    httpRequest.send();

    const moves = JSON.parse(httpRequest.response);

    const paragraph = $('<p></p>');
    paragraph.append(`Difficulty: ${moves[0].difficulty}`)
        .append('<br />')
        .append(`Type: ${moves[0].type}`);

    $('#moves').append('<div>')
        .append(`<h2> ${moves[0].name} </h2>`)
        .append(paragraph)
        .append('</div>');
});