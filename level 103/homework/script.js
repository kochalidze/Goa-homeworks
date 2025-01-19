
const chooseRedButton = document.getElementById('choose-red');
const chooseGreenButton = document.getElementById('choose-green');
const gameResult = document.getElementById('game-result');
const toggleTabButton = document.getElementById('toggle-tab');
const historyTab = document.getElementById('history-tab');
const historyList = document.getElementById('history-list');

let playerChoice = null;

chooseRedButton.addEventListener('click', () => handleChoice('წითელი'));
chooseGreenButton.addEventListener('click', () => handleChoice('მწვანე'));

function handleChoice(choice) {
  playerChoice = choice;
  const timestamp = new Date().toLocaleTimeString();
  gameResult.textContent = `თქვენ აირჩიეთ: ${choice} (${timestamp})`;

  const listItem = document.createElement('li');
  listItem.textContent = `მოთამაშემ აირჩია ${choice} - დრო: ${timestamp}`;
  listItem.classList.add('history-item', choice === 'წითელი' ? 'red' : 'green');
  historyList.appendChild(listItem);
}

toggleTabButton.addEventListener('click', () => {
  historyTab.classList.toggle('hidden');
});
