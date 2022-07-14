let selectedValue = 0;

const resultCard = document.getElementById('result-card')! as HTMLDivElement;
const submitButton = document.getElementById('submit')! as HTMLButtonElement;
const results = document.getElementById('results')! as HTMLDivElement;

resultCard.style.display = 'none';

const voteListArray = document.getElementsByTagName(
  'li'
) as HTMLCollectionOf<HTMLLIElement>;

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
  const votingCard = document.getElementById('voting-card') as HTMLDivElement;
  votingCard.style.display = 'none';
  resultCard.style.display = 'block';
  results.innerText = `You selected ${selectedValue} out of 5`;  
});