const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

noBtn.addEventListener('click', () => {
    noBtn.style.position = 'fixed';
    noBtn.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    noBtn.style.top = Math.random() * (window.innerHeight - 100) + 'px';
});

yesBtn.addEventListener('click', () => {
    document.getElementById('question').style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
    document.getElementById('message').style.display = 'block';
    document.body.classList.add('success-bg');
});
