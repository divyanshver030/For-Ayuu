const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');
const message = document.getElementById('message');

// Improved "Runaway" logic
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton); // Adds mobile support!

function moveButton() {
    // Keeps the button within the visible window area
    const padding = 20;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;
    
    // Calculate random position
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

yesBtn.addEventListener('click', () => {
    question.style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
    message.classList.remove('hidden');
});
