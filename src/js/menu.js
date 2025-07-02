// var itemMenu = document.querySelectorAll('.main-info__item-menu');

// for (var i = 0; i < itemMenu.length; i++) {  
//     itemMenu[i].addEventListener('click', function(event) {  
//         this.style.border = '2px solid #B8FFEC';
        
//     });  
// };


const menuItems = document.querySelectorAll('.main-info__item-menu');

// Функция для сохранения активного элемента
function saveActiveItem(item) {
  localStorage.setItem('activeMenuItem', item.textContent.trim());
}

// Функция для загрузки активного элемента
function loadActiveItem() {
  const savedItemText = localStorage.getItem('activeMenuItem');
  
  if (savedItemText) {
    menuItems.forEach(item => {
      if (item.textContent.trim() === savedItemText) {
        item.classList.add('active');
      }
    });
  }
}

// Обработчик клика
menuItems.forEach(item => {
  item.addEventListener('click', function() {
    // 1. Сначала убираем стили у всех элементов
    menuItems.forEach(el => {
      el.classList.remove('active');
    });
    
    // 2. Применяем стили только к выбранному элементу
    this.classList.add('active');
    
    // 3. Сохраняем в localStorage
    saveActiveItem(this);
  });
});

// Загружаем активный элемент при загрузке страницы
document.addEventListener('DOMContentLoaded', loadActiveItem);