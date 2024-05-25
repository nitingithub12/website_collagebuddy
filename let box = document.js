let box = document.getElementById('box');
let animation = false;

function startAnimation() {
    if (!animation) {
        box.style.animationPlayState = 'running';
        animation = true;
    }
}

function stopAnimation() {
    if (animation) {
        box.style.animationPlayState = 'paused';
        animation = false;
    }
}