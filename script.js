const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

noBtn.addEventListener('click', () => {
    // Make it jump
    noBtn.style.position = 'fixed';
    noBtn.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    noBtn.style.top = Math.random() * (window.innerHeight - 100) + 'px';
});

yesBtn.addEventListener('click', () => {
    // Hide buttons and question
    document.getElementById('question').style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
    
    // Show message and change background
    document.getElementById('message').style.display = 'block';
    document.body.classList.add('success-bg');
});
