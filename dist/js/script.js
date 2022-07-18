const hamburger = document.querySelector('.hamburger'),     /* объявляем переменную и  обращаемся к нашему документу и получаем элемент по селектору(класс, тег, атрибут!) */
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {     /* отслеживаем клики и задаем функцию!и когда пользователь кликает по меню и крестике меняеться класс активности! */
    menu.classList.add('active');    /* добавляеться класс! */
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});




$('form').submit(function(e) {
    e.preventDefault();
    
    if (!$(this).valid()) {
        return;
    }

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");

        $('form').trigger('reset');
    });
    return false;
});