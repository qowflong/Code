const imageElement = document.getElementById('effectImage');
const buttons = document.querySelectorAll('.effect-btn');

function applyEffect(effectName, clickedButton) {
    imageElement.className = '';
    
    imageElement.classList.add(`effect-${effectName}`);

    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    clickedButton.classList.add('active');
}
applyEffect('gray', buttons[0]);