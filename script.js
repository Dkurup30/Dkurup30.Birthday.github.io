const surpriseButton = document.getElementById('surprise-button');
const blowCandlesButton = document.getElementById('blow-candles-button');
const surpriseDiv = document.getElementById('surprise');
const cakeDiv = document.querySelector('.cake');
const wishText = document.getElementById('wish');
const birthdayMessage = document.getElementById('birthday-message');
const giftButton = document.getElementById('gift-button');
const giftLink = document.getElementById('gift-link');

let surpriseVisible = false;
let candlesBlown = false;

surpriseButton.addEventListener('click', function() {
    surpriseVisible = !surpriseVisible;
    if (surpriseVisible) {
        surpriseDiv.classList.remove('hidden');
        birthdayMessage.classList.add('hidden');
        surpriseButton.classList.add('hidden');
        giftLink.classList.remove('hidden'); // Show the gift button
    } else {
        surpriseDiv.classList.add('hidden');
        birthdayMessage.classList.remove('hidden');
        surpriseButton.classList.remove('hidden');
        giftLink.classList.add('hidden'); // Hide the gift button
        resetCandles();
    }
});

blowCandlesButton.addEventListener('click', function() {
    candlesBlown = !candlesBlown;
    if (candlesBlown) {
        cakeDiv.classList.add('blown-out');
        wishText.textContent = '🎉 Your wish is coming true! 🎉';
        blowCandlesButton.textContent = 'Relight Candles';
    } else {
        resetCandles();
    }
});

function resetCandles() {
    cakeDiv.classList.remove('blown-out');
    wishText.textContent = 'Make a wish and blow out the candles!';
    blowCandlesButton.textContent = 'Blow Candles';
}

