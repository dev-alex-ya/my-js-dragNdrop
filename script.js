function inBorder() {
    return false;
}

function getCurrentTarget(event) {
    current_target = event.target;
}

function drag(event) {
    if (current_target && inBorder()) {
        current_target.style.top = event.pageY + 'px';
        current_target.style.left = event.pageX + 'px';
    }
}

function drop(event) {
    current_target = undefined;
}


let current_target;

document.body.addEventListener('mousedown', getCurrentTarget);
document.body.addEventListener('mousemove', drag);
document.body.addEventListener('mouseup', drop);