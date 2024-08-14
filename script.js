function showSurprise() {
    document.getElementById('surprise').style.display = 'block';
    document.getElementById('birthday-message').style.display = 'none';
}

function blowCandles() {
    let candles = document.querySelectorAll('.candle::after');
    candles.forEach(function(candle) {
        candle.innerHTML = '';
    });
    document.getElementById('wish').innerHTML = '🎉 Your wish is coming true! 🎉';
}
