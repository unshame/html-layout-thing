function createSelectorControl(selector, onchange, initialIndex = 0) {

    const styleCurrent = 'selector__button_current';

    let elem = document.querySelector(selector);
    let buttons = elem.querySelectorAll('.selector__button');
    let curButton = buttons[initialIndex];
    curButton.classList.add(styleCurrent);
    onchange(curButton);

    for(let button of buttons) {
        button.addEventListener('click', () => {
            select(button);
        });
    }


    function select(button) {
        curButton.classList.remove(styleCurrent);
        curButton = button;
        curButton.classList.add(styleCurrent);
        onchange(button);
    }

    return {
        elem: elem,
        select(i) {
            select(buttons[i]);
        }
    };
}

function getImageUrl(color) {
    return './img/tee-' + color + '.png';
}

let $preview = $('.item__preview');
createSelectorControl('.item__size-selector', () => {});
createSelectorControl('.item__color-selector', (button) => {
    $preview.attr('src', getImageUrl(button.dataset.color));
});
