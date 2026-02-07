const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');
const message = document.getElementById('message');
const buttonsDiv = document.querySelector('.buttons');

function moveButton(e) {
    e.preventDefault();

    // SWITCH TO FIXED ONLY ONCE THE CHASE BEGINS
    // This stops it from overlapping the Yes button on load
    noBtn.style.position = 'fixed';

    const padding = 50;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

noBtn.addEventListener('click', moveButton);
noBtn.addEventListener('touchstart', moveButton);

yesBtn.addEventListener('click', () => {
    question.classList.add('hidden');
    buttonsDiv.classList.add('hidden');
    noBtn.style.display = 'none';
    message.classList.remove('hidden');
});
