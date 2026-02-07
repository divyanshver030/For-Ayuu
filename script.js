const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');
const message = document.getElementById('message');
const wrapper = document.querySelector('.button-wrapper');
const bgContainer = document.getElementById('bg-container');

function moveButton(e) {
    e.preventDefault();
    noBtn.style.position = 'fixed';

    // Calculate boundaries to keep it visible on any screen size
    const padding = 60;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Works for both Desktop (click) and Smartphone (touchstart)
noBtn.addEventListener('click', moveButton);
noBtn.addEventListener('touchstart', moveButton);

yesBtn.addEventListener('click', () => {
    question.classList.add('hidden');
    wrapper.classList.add('hidden');
    noBtn.style.display = 'none';
    
    bgContainer.classList.remove('home-bg');
    bgContainer.classList.add('success-bg');
    
    message.classList.remove('hidden');
});
