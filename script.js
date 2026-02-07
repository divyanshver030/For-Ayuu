const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');
const message = document.getElementById('message');
const buttonsDiv = document.querySelector('.buttons');
const body = document.getElementById('bg-body');

// Runaway Logic
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    noBtn.style.position = 'fixed';
    // Keeps button inside the screen area
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// Success Logic
yesBtn.addEventListener('click', () => {
    question.style.display = 'none';
    buttonsDiv.style.display = 'none';
    noBtn.style.display = 'none';
    
    // Change background and show message
    body.classList.add('success-bg');
    message.style.display = 'block';
});
