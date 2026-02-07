const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');
const message = document.getElementById('message');
const wrapper = document.querySelector('.button-wrapper');

function moveButton(e) {
    // 1. Prevent the actual click/touch
    e.preventDefault();

    // 2. ONLY NOW we make it fixed so it can jump anywhere
    noBtn.style.position = 'fixed';

    // 3. Calculate random coordinates
    const padding = 50;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    // 4. Apply position
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Listen for interactions
noBtn.addEventListener('click', moveButton);
noBtn.addEventListener('touchstart', moveButton);

// Success action
yesBtn.addEventListener('click', () => {
    question.classList.add('hidden');
    wrapper.classList.add('hidden');
    message.classList.remove('hidden');
});
