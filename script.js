const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');
const message = document.getElementById('message');
const buttonsDiv = document.querySelector('.buttons');

function moveButton(e) {
    // Prevent the actual click
    e.preventDefault();

    // Calculate safe boundaries
    const padding = 50;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    // Ensure the button stays within view (min 25px from edges)
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// Moves ONLY on click or tap
noBtn.addEventListener('click', moveButton);
noBtn.addEventListener('touchstart', moveButton);

// Show the success message
yesBtn.addEventListener('click', () => {
    question.classList.add('hidden');
    buttonsDiv.classList.add('hidden');
    message.classList.remove('hidden');
    
    // Optional: Stop the no button from floating around after yes is clicked
    noBtn.style.display = 'none';
});
