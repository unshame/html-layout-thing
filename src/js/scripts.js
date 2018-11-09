function createSelectorControl(selector, onchange, initialIndex = 0) {

    const styleCurrent = 'selector__button_current';

    let $elem = $(selector);
    let $buttons = $('.selector__button', $elem);
    let $curButton = $($buttons[initialIndex]);
    $curButton.addClass(styleCurrent);
    onchange($curButton[0]);

    $buttons.click((e) => {
        let button = e.target;
        $curButton.removeClass(styleCurrent);
        $curButton = $(button);
        $curButton.addClass(styleCurrent);
        onchange(button);
    });
}

let $preview = $('.item__preview');
createSelectorControl('.item__size-selector', () => {});
createSelectorControl('.item__color-selector', (button) => {
    $preview.attr('src', './img/tee-' + button.dataset.color + '.png');
});
