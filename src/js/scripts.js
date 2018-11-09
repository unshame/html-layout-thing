function createSelectorControl(selector, onchange, initialIndex = 0) {

    const styleCurrent = 'selector__button_current';

    let $elem = $(selector);
    let $buttons = $('.selector__button', $elem);
    let $curButton = $($buttons[initialIndex]);
    $curButton.addClass(styleCurrent);
    onchange($curButton[0]);

    $buttons.click((e) => {
        select(e.target);
    });

    function select(button) {
        $curButton.removeClass(styleCurrent);
        $curButton = $(button);
        $curButton.addClass(styleCurrent);
        onchange(button);
    }

    return {
        elem: $elem,
        select(i) {
            select($buttons[i]);
        }
    };
}

function getImageUrl(color) {
    return './img/tee-' + color + '.png';
}

function preloadColors() {
    let $buttons = $('.item__color-selector .selector__button');
    $buttons.each((i, button) => {
        let img = new Image();
        img.src = getImageUrl(button.dataset.color);
    });
}

preloadColors();

let $preview = $('.item__preview');
createSelectorControl('.item__size-selector', () => {});
createSelectorControl('.item__color-selector', (button) => {
    $preview.attr('src', getImageUrl(button.dataset.color));
});
