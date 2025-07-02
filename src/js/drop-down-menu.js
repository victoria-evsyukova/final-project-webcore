


document.addEventListener('DOMContentLoaded', function() {
    const buttonBurger768 = document.querySelector('.header-media768__burger'); 
    const buttonBurger320 = document.querySelector('.header-media320__burger');
    const menu = document.querySelector('.block'); 
    const buttonMenuClose = document.querySelector('.block__close'); 
    const mask = document.querySelector('.mask'); 
    const blockHeader = document.querySelector('.block__header');



    function setResponsiveHeightMenu () {
        if (window.innerHeight < 768) {
            menu.style.transform = 'translateX(-100%)';
            menu.style.transition = 'transform 0.8s ease';
            menu.classList.add('hidden');
            mask.classList.remove('opacity');
        } else if (window.innerWidth < 1440) {
            menu.style.transform = 'translateX(-100%)';
            menu.style.transition = 'transform 0.8s ease';
            menu.classList.add('hidden');
        } else {
            menu.style.transform = 'translateX(0)';
            menu.style.transition = 'none'; // Отключаем анимацию при ресайзе
            menu.classList.remove('hidden');
            menu.classList.remove('burger-menu');
            menu.style.boxShadow = 'none';
            mask.classList.remove('opacity');
            blockHeader.style.columnGap = '125px';
        } 
    }

    setResponsiveHeightMenu();

    // window.addEventListener('resize', function() {
    //     setResponsiveHeightMenu();
        
    //     // Если меню открыто при уменьшении окна ниже 1440px - закрываем
    //     if (window.innerWidth < 1440 && !menu.classList.contains('hidden')) {
    //         menu.style.transform = 'translateX(-100%)';
    //         mask.classList.remove('opacity');
    //     }

    //     if (window.innerWidth < 1440 && !menu.classList.contains('hidden')) {
    //         menu.classList.add('hidden');
    //         menu.classList.remove('burger-menu');
    //     }
    // });

    window.addEventListener('resize', function() {
        setResponsiveHeightMenu();

        if (768 <= window.innerWidth <= 1440) {
            menu.classList.add('hidden');
            mask.classList.remove('opacity');
        }
        if (window.innerWidth >= 1441) {
            menu.classList.remove('burger-menu');
            menu.classList.remove('hidden');
        }

    });


    // Обработчик клика по бургеру
    buttonBurger768.addEventListener('click', function() {
        // Показываем меню с плавной анимацией
        menu.style.transform = 'translateX(0)';
        menu.style.transition = 'transform 0.8s ease';
        menu.classList.remove('hidden');
        menu.classList.add('burger-menu');
        menu.style.boxShadow = '6px 0 52px 0 rgba(14, 24, 80, 0.2), -2px 0 4px 0 rgba(69, 79, 126, 0.02)';
        blockHeader.style.columnGap = '75px';
        
        // Затемнение фона (если есть)
        if (mask) {
            mask.classList.add('opacity');
        }
    });

    buttonBurger320.addEventListener('click', function() {
        // Показываем меню с плавной анимацией
        menu.style.transform = 'translateX(0)';
        menu.style.transition = 'transform 0.8s ease';
        menu.classList.remove('hidden');
        menu.classList.add('burger-menu');
        mask.classList.remove('opacity');
        blockHeader.style.columnGap = '75px';
        
    });


    // Обработчик клика по кнопке закрытия
    if (buttonMenuClose) {
        buttonMenuClose.addEventListener('click', function() {
            // Скрываем меню с плавной анимацией
            menu.style.transform = 'translateX(-100%)';
            menu.style.boxShadow = 'none';
            
            // Убираем затемнение (если есть)
            if (mask) {
                mask.classList.remove('opacity');
            }
        });
    }

    // Закрытие по клику на overlay (если есть)
    if (mask) {
        mask.addEventListener('click', function() {
        if (menu.classList.contains('burger-menu')) {
            menu.style.transform = 'translateX(-100%)';
            mask.classList.remove('opacity');
            menu.style.boxShadow = 'none';
            }
        })
    };

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (menu.classList.contains('burger-menu')) {
                menu.style.transform = 'translateX(-100%)';
                mask.classList.remove('opacity');
                menu.style.boxShadow = 'none';
            }
        }
    });
});

