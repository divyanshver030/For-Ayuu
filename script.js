const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');
const message = document.getElementById('message');
const buttonsDiv = document.querySelector('.buttons');

function moveButton(e) {
    // Prevent the actual click or touch event from working
    e.preventDefault();

    // Switch to 'fixed' so it can teleport anywhere on the screen
    noBtn.style.position = 'fixed';

    // Calculate safe boundaries so it stays on her screen
    const padding = 50;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    // Generate random coordinates within the safe zone
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    // Apply the new position
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// These listeners trigger the move only when she attempts to click/tap
noBtn.addEventListener('click', moveButton);
noBtn.addEventListener('touchstart', moveButton);

// What happens when she clicks 'Yes'
yesBtn.addEventListener('click', () => {
    // Hide the question and buttons
    question.classList.add('hidden');
    buttonsDiv.classList.add('hidden');
    noBtn.style.display = 'none'; // Ensure the No button disappears too
    
    // Reveal the celebration message
    message.classList.remove('hidden');
});
