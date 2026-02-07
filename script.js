const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');
const message = document.getElementById('message');
const wrapper = document.querySelector('.button-wrapper');
const homeImg = document.getElementById('homeImage');

function moveButton(e) {
    e.preventDefault();
    // Switch to fixed only when interaction starts to avoid initial overlap
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
    // Hide original content
    question.classList.add('hidden');
    wrapper.classList.add('hidden');
    homeImg.classList.add('hidden');
    noBtn.style.display = 'none';
    
    // Show personalized success content
    message.classList.remove('hidden');
});
