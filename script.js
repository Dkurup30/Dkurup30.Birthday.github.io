document.getElementById('surprise-button').addEventListener('click', function() {
    document.getElementById('surprise').classList.remove('hidden');
    document.getElementById('birthday-message').classList.add('hidden');
    this.classList.add('hidden');
});

document.getElementById('blow-candles-button').addEventListener('click', function() {
    document.querySelector('.cake').classList.add('blown-out');
    document.getElementById('wish').textContent = '🎉 Your wish is coming true! 🎉';
    this.classList.add('hidden');
});
