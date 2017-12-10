var switcher = document.querySelector('.switcher'),
    button = document.querySelector('.switcher > div');


switcher.addEventListener('click', function (e) {
    if (button.classList == 'first') {
        button.classList = 'second';
        console.log(1);

    } else if (button.classList == 'second') {
        button.classList = 'third';
        console.log(2);

    } else if (button.classList == 'third') {
        button.classList = 'first';
        console.log(0);

    }
}, false);