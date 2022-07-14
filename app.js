"use strict";
let selectedValue = 0;
const resultCard = document.getElementById('result-card');
const submitButton = document.getElementById('submit');
const results = document.getElementById('results');
resultCard.style.display = 'none';
const voteListArray = document.getElementsByTagName('li');
function clearSelectedListItems() {
    for (let item of voteListArray) {
        item.classList.remove('selected');
    }
}
for (let item of voteListArray) {
    item.addEventListener('click', () => {
        clearSelectedListItems();
        selectedValue = parseInt(item.innerText);
        item.classList.add('selected');
    });
}
submitButton.addEventListener('click', () => {
    const votingCard = document.getElementById('voting-card');
    votingCard.style.display = 'none';
    resultCard.style.display = 'block';
    results.innerText = `You selected ${selectedValue} out of 5`;
});
//# sourceMappingURL=app.js.map