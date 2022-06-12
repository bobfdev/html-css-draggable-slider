const container = document.querySelector('.container');
const cards = document.querySelector('.cards');

/* keep track of user's mouse down and up */    
let mouseDown = false;
 
/* x horizontal space of cursor from inner container */
let cursorXSpace;

container.addEventListener('mousedown', (e) => {
    isPressedDown = true;
    cursorXSpace = e.offsetX - cards.offsetLeft;
    container.style.cursor = 'grabbing';
});

/* offsetX read-only property of the MouseEvent interface provides the offset in the X coordinate of the mouse pointer between that event and the padding edge of the target node. */

/* offsetLeft returns the number of pixels that the upper left corner of the current element is offset to the left within the HTMLElement.offsetParent node. */

/* offsetParent element is the nearest ancestor that has a position other than static */

container.addEventListener('mouseup', () => {
    container.style.cursor = 'grab';
})

window.addEventListener('mouseup', () => {
    isPressedDown = false;
});

container.addEventListener('mousemove', (e) => {
    if (!isPressedDown) return;
    e.preventDefault();
    cards.style.left = `${e.offsetX - cursorXSpace}px`;
    boundCards();
}) 

function boundCards() {
    const container_rect = container.getBoundingClientRect();
    const cards_rect = cards.getBoundingClientRect();

    if (parseInt(cards.style.left) > 0) {
        cards.style.left = 0;
    } else if (cards_rect.right < container_rect.right) {
        cards.style.left = `-${cards_rect.width - container_rect.width}px`;
    }
}