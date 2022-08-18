new Swiper ('.reviews__slider-container', {
  //Кнопки
  navigation: {
      nextEl: '.reviews__btn--next',
      prevEl: '.reviews__btn--prev'
  },
  //Скролл
  scrollbar: {
      el: 'swiper-scrollbar',
      //Возможность перетаскивать скролл
      draggable: true
  },
  //Курсор перетаскивания
  grabCursor: true,
  //Управление клавиатурой
  keyboard: {
      //  вкл/выкл
      enabled: true,
      // работать только когда слайдер
      // в пределах вьюпорта
      onlyUnViewport: true,
  },
  // Управление колесом мыши
  mousewheel: {
      // чувствительность колеса мыши
      sensitivity: 1,
  },
  //Колличество слайдов для показа
  //slidesPerView: 4.45,
  //Отступ между слайдами
  spaceBetween: 20,
  //Адаптивность
  breakpoints: {
    320: {
      slidesPerView: 1.3,
    },
    360: {
      slidesPerView: 1.6,
    },
    425: {
      slidesPerView: 1.3,
    },
    550: {
      slidesPerView: 2.2,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3.5,
    },
    860: {
      slidesPerView: 4,
    },

  },

});

new Swiper ('.photo__slider-container', {
  //Кнопки
  navigation: {
    nextEl: '.photo__btn--next',
    prevEl: '.photo__btn--prev'
},
//Скролл
scrollbar: {
    el: 'swiper-scrollbar',
    //Возможность перетаскивать скролл
    draggable: true
},
//Курсор перетаскивания
grabCursor: true,
//Управление клавиатурой
keyboard: {
    //  вкл/выкл
    enabled: true,
    // работать только когда слайдер
    // в пределах вьюпорта
    onlyUnViewport: true,
},
// Управление колесом мыши
mousewheel: {
    // чувствительность колеса мыши
    sensitivity: 1,
},
//Колличество слайдов для показа
slidesPerView: 3.2,

spaceBetween: 20,
//Адаптивность
breakpoints: {
  320: {
    slidesPerView: 1,
  },
  360: {
    slidesPerView: 1.2,
  },
  425: {
    slidesPerView: 1,
  },
  550: {
    slidesPerView: 1.7,
    spaceBetween: 40,
  },
  768: {
    slidesPerView: 3.5,
  },
  860: {
    slidesPerView: 4,
  },
  1440: {
    slidesPerView: 3,
  },
}

});

new Swiper ('.sert__slider-container', {
  //Кнопки
  navigation: {
      nextEl: '.sert__btn--next',
      prevEl: '.sert__btn--prev'
  },
  //Скролл
  scrollbar: {
      el: 'swiper-scrollbar',
      //Возможность перетаскивать скролл
      draggable: true
  },
  //Курсор перетаскивания
  grabCursor: true,
  //Управление клавиатурой
  keyboard: {
      //  вкл/выкл
      enabled: true,
      // работать только когда слайдер
      // в пределах вьюпорта
      onlyUnViewport: true,
  },
  // Управление колесом мыши
  mousewheel: {
      // чувствительность колеса мыши
      sensitivity: 1,
  },
  //Колличество слайдов для показа
  slidesPerView: 4.45,

  spaceBetween: 20,
  //Адаптивность
  breakpoints: {
    320: {
      slidesPerView: 1.3,
    },
    360: {
      slidesPerView: 1.6,
    },
    425: {
      slidesPerView: 1.3,
    },
    550: {
      slidesPerView: 2.2,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3.5,
    },
    860: {
      slidesPerView: 4,
    },
  }

});
