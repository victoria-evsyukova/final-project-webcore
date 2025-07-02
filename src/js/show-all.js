document.querySelectorAll('.button-show-all').forEach(btn => {
  btn.addEventListener('click', () => {
    const carouselId = btn.getAttribute('data-carousel');
    const carousel = document.getElementById(carouselId);
    const btnHidden = document.querySelector(`.button-hidden[data-carousel="${carouselId}"]`);

    carousel.style.height = 'auto';
    carousel.style.overflow = 'visible';
    btn.classList.add('hidden');
    btnHidden.classList.remove('hidden');
  });
});

document.querySelectorAll('.button-hidden').forEach(btn => {
  btn.addEventListener('click', () => {
    const carouselId = btn.getAttribute('data-carousel');
    const carousel = document.getElementById(carouselId);
    const btnShowAll = document.querySelector(`.button-show-all[data-carousel="${carouselId}"]`);

    carousel.style.height = '200px';
    carousel.style.overflow = 'hidden';
    btn.classList.add('hidden');
    btnShowAll.classList.remove('hidden');
  });
});


var mainInfoButton = document.querySelector('.main-info__read-more');
var mainInfoHiddenButton = document.querySelector('.main-info__hidden-button');
var mainInfoText = document.querySelector('.main-info__description');
var firstInfo = document.querySelector('.first-info');

function setResponsiveHeight() {
    if (window.innerWidth < 768) { // Мобильные устройства
        mainInfoText.style.maxHeight = '55px';
        mainInfoHiddenButton.style.marginBottom = '30px';
    } else if (window.innerWidth < 1440) { // Планшеты
        mainInfoText.style.maxHeight = '125px';
        firstInfo.style.marginTop = '50px';
    } else { // Десктопы
        mainInfoText.style.maxHeight = '145px';
    }
}

// Инициализация высоты при загрузке
setResponsiveHeight();

// Обработчик изменения размера окна
window.addEventListener('resize', setResponsiveHeight);

// Показать весь текст
mainInfoButton.addEventListener('click', function() {
    mainInfoText.style.height = 'auto';
    mainInfoText.style.maxHeight = 'none'; // Снимаем ограничение
    mainInfoText.style.transition = 'max-height 2s ease, height 2s ease;'
    mainInfoButton.classList.add('hidden');
    mainInfoHiddenButton.classList.remove('hidden');
    
});

// Скрыть часть текста
mainInfoHiddenButton.addEventListener('click', function() {
    setResponsiveHeight(); // Возвращаем адаптивную высоту
    mainInfoText.style.height = 'auto'; // Сброс перед установкой maxHeight
    mainInfoText.style.transition = 'max-height 2s ease, height 2s ease;'
    mainInfoButton.classList.remove('hidden');
    mainInfoHiddenButton.classList.add('hidden');

});

