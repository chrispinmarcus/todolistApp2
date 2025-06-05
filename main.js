const addButton = document.getElementById('add');
const toDocontainer = document.getElementById('container');
const textField = document.getElementById('text');

addButton.addEventListener('click', () => {
    const input = textField.value.trim();

    if (input !== '') {
        const paragraph = document.createElement('p');
        paragraph.textContent = input;  // Safer than innerHTML
        paragraph.style.margin = '8px 0';
        toDocontainer.appendChild(paragraph);
        textField.value = '';
    } else {
        alert("Please enter a task before adding.");
    }
});