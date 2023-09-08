const navItems = [
  { text: 'Спикеры', link: '#speakers', qa: 'hover' },
  { text: 'Партнеры', link: '#Партнеры' },
  { text: 'Локация', link: '#Локация' },
  { text: 'Afterparty', link: '#Afterparty' },
  { text: 'Контакты', link: '#Контакты' }
];

const menuItems = [
  { name: 'All', href: '#All', },
  { name: 'Gambling', href: '#Gambling', isActive: true },
  { name: 'Nutra', href: '#Nutra' },
  { name: 'PDL', href: '#PDL', dataQa: 'hover' },
  { name: 'Essay', href: '#Essay' },
];


const imageItems = [
  { src: './images/header/telegram-fill.svg', alt: 'telegram' },
  { src: './images/header/youtube-fill.svg', alt: 'youtube' },
  { src: './images/header/facebook-circle-fill.svg', alt: 'facebook' }
];

const imageItems2 = [
  { src: './images/header/darkTg.svg', alt: 'telegram' },
  { src: './images/header/youtube-dark.svg', alt: 'youtube' },
  { src: './images/header/facebook-dark.svg', alt: 'facebook' }
];


const recommendationItems = [
  {
    text: '1200+',
    smallText: 'участников'
  },
  {
    text: '22',
    smallText: 'спикера'
  },
  {
    text: '3000м²',
    smallText: 'для нетворкинга'
  },
  {
    text: '75%',
    smallText: 'вебмастера'
  },
  {
    heading: 'After <br> party'
  }
];

window.addEventListener('scroll', function() {
  const headerContent = document.querySelector('.header__content');
  const textElement = document.querySelector('.header__logo-description');
  const primaryLogo = document.querySelector('.header__logo-primary');
  const secondaryLogo = document.querySelector('.header__logo-secondary');
  const scrolledSecondaryLogo = document.querySelector('.header__logo-secondary--scrolled');
  const languageIndicator = document.querySelector('.header__language-indicator');
  const languageIndicatorScroll = document.querySelector('.header__language-indicator-scroll');
  const languageArrowScroll = document.querySelector('.header__language-arrow-scroll');
  const scrollThreshold = 10;

  if (window.pageYOffset > scrollThreshold) {
    headerContent.classList.add('header__content--scrolled');
    textElement.classList.add('text-style-scrolled');
    primaryLogo.classList.add('header__logo-primary--scrolled');
    secondaryLogo.style.display = 'none'; 
    scrolledSecondaryLogo.style.display = 'block';
    languageIndicator.style.display = 'none';
    languageIndicatorScroll.style.display = 'block';
  } else {
    headerContent.classList.remove('header__content--scrolled');
    textElement.classList.remove('text-style-scrolled');
    primaryLogo.classList.remove('header__logo-primary--scrolled');
    secondaryLogo.style.display = 'block'; 
    scrolledSecondaryLogo.style.display = 'none';
    languageIndicator.style.display = 'block'; 
    languageIndicatorScroll.style.display = 'none'; 
  }
});




document.addEventListener('DOMContentLoaded', function () {
  const navContainer = document.querySelector('.nav__list');

  const navHtml = navItems.map(item => `
    <li class="nav__list">
      <a class="nav__link header__content--scrolled text-style" href="${item.link}" ${item.qa ? `data-qa="${item.qa}"` : ''}>
        ${item.text}
      </a>
    </li>
  `).join('');

  navContainer.innerHTML = navHtml;
});

document.addEventListener('DOMContentLoaded', function () {
  const imageContainer = document.querySelector('.header__contacts');

  const imagesHtml = imageItems.map(image => `
    <img src="${image.src}" alt="${image.alt}">
  `).join('');

  imageContainer.innerHTML = imagesHtml;
});

document.addEventListener('DOMContentLoaded', function () {
  const imageContainer = document.querySelector('.header__contacts');

  const imagesHtml = imageItems2.map(image => `
    <img src="${image.src}" alt="${image.alt}">
  `).join('');

  imageContainer.innerHTML = imagesHtml;
});

document.addEventListener("DOMContentLoaded", function () {
  const imageNames = ['EDP', 'PDL', 'trionika', 'everad'];
  const container = document.querySelector(".header_bottomPart");

  imageNames.forEach(imgName => {
    const div = document.createElement("div");
    div.classList.add("header_bottomPart", "blockForSvg");

    const img = document.createElement("img");
    img.src = `./images/header/${imgName}.svg`;
    img.classList.add("blockForSvg-img");
    img.alt = '';

    div.appendChild(img);
    container.appendChild(div);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicator');

  function updateSlide(index) {
    if (slides[currentSlide] && indicators[currentSlide]) {
      slides[currentSlide].classList.remove('active');
      indicators[currentSlide].classList.remove('active');
    }

    currentSlide = index;

    if (slides[currentSlide] && indicators[currentSlide]) {
      slides[currentSlide].classList.add('active');
      indicators[currentSlide].classList.add('active');
    }
  }

  function nextSlide() {
    let newSlide = currentSlide + 1;
    if (newSlide >= slides.length) newSlide = 0;
    updateSlide(newSlide);
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      clearInterval(sliderInterval);
      updateSlide(index);
      startSlider();
    });
  });

  function startSlider() {
    sliderInterval = setInterval(nextSlide, 2000);
  }

  let sliderInterval = setInterval(nextSlide, 2000);
});


const menuList = document.getElementById('menuList');

menuItems.map(item => {
  const listItem = document.createElement('li');
  listItem.className = 'menu__item';

  const link = document.createElement('a');
  link.className = 'menu__link';
  link.href = item.href;
  link.textContent = item.name;

  if (item.isActive) {
    link.classList.add('menu__link--active');
    listItem.classList.add('menu__item--active');
  }

  if (item.dataQa) {
    link.setAttribute('data-qa', item.dataQa);
  }

  listItem.appendChild(link);
  menuList.appendChild(listItem);
});



document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.button-speaker').addEventListener('click', function () {

    const cardsTemplate = `
    <div class="speakers__cardss">
      <div class="main-block">

        <div class="speakers__card">
          <img class="speakers__card-image" src="./images/sections/speakers/5.png" alt="Описание изображения">
          <div class="speakers__card-content">
            <h1 class="speakers__card-name">Анна Лебедева</h1>
            <div class="speakers__card-buttons">
              <button class="button-card">Betting</button>
              <button class="button-card" style="background-color: #E53030; color: white;">SEO</button>
            </div>
          </div>
          <div class="effect-to-top red effect-to-top-y">
            <div class="effect-to-top__container">
            <p class="link-more" id="openModalBtn">Подробнее</p>
            <img class="frame" src="./images/sections/speakers/frame.svg" alt="">
            </div>
          </div>
        </div>
        <p class="speakers__card-description smallText-style"> Очень крутая богатая, не скаммер <br> Parimatch.tech</p>
      </div>

      <div class="main-block">
        <div class="speakers__card">
          <img class="speakers__card-image" src="./images/sections/speakers/6.png" alt="Описание изображения">
          <div class="speakers__card-content">
            <h1 class="speakers__card-name">Кирилл Богатюк</h1>
            <div class="speakers__card-buttons">
              <button class="button-card">Crypto</button>
              <button class="button-card" style="background-color: #E53030; color: white;">SEO</button>
            </div>
          </div>
          <div class="effect-to-top blue effect-to-top-x">
            <div class="effect-to-top__container">
            <p class="link-more" id="openModalBtn">Подробнее</p>
            <img class="frame" src="./images/sections/speakers/frame.svg" alt="">
            </div>
          </div>
        </div>
        <p class="speakers__card-description smallText-style">Гений, миллионер в 16 лет, владелец <br> Tesla</p>
      </div>

      <div class="main-block">

        <div class="speakers__card">
          <img class="speakers__card-image" src="./images/sections/speakers/7.png" alt="Описание изображения">
          <div class="speakers__card-content">
            <h1 class="speakers__card-name">Дмитрий Голополосов</h1>
            <div class="speakers__card-buttons">
              <button class="button-card">Нутра</button>
              <button class="button-card" style="background-color: #204DEF; color: white;">Affiliate</button>
            </div>
          </div>
          <div class="effect-to-top red effect-to-top-y">
            <div class="effect-to-top__container">
            <p class="link-more" id="openModalBtn">Подробнее</p>
            <img class="frame" src="./images/sections/speakers/frame.svg" alt="">
            </div>
          </div>
        </div>
        <p class="speakers__card-description smallText-style">Основатель арбитраж-команды <br> SCAMM.pro</p>
      </div>

      <div class="main-block">

        <div class="speakers__card">
          <img class="speakers__card-image" src="./images/sections/speakers/8.png" alt="Описание изображения">
          <div class="speakers__card-content">
            <h1 class="speakers__card-name">Дмитрий Голополосов</h1>
            <div class="speakers__card-buttons">
              <button class="button-card">Нутра</button>
              <button class="button-card" style="background-color: #204DEF; color: white;">Affiliate</button>
            </div>
          </div>
          <div class="effect-to-top blue effect-to-top-x">
            <div class="effect-to-top__container">
            <p class="link-more" id="openModalBtn">Подробнее</p>
            <img class="frame" src="./images/sections/speakers/frame.svg" alt="">
            </div>
          </div>
        </div>
        <p class="speakers__card-description smallText-style">Открыл 12 палаток с шаурмой</p>
      </div>
    </div>
    `;

    document.querySelector('.speakers__cards').insertAdjacentHTML('afterend', cardsTemplate);
    this.disabled = true;
  });
});


var openModalBtn = document.getElementById('openModalBtn');
var closeModalBtn = document.getElementById('closeModalBtn');
var modal = document.getElementById('myModal');

openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});


document.addEventListener('DOMContentLoaded', function () {
  const imageContainer = document.querySelector('.header__contacts');
  const scrollThreshold = 10;
  let isScrolled = false;

  function replaceImages(isScrolled) {
    const imageItemsToUse = isScrolled ? imageItems2 : imageItems;

    const imagesHtml = imageItemsToUse.map(image => `
      <img src="${image.src}" alt="${image.alt}">
    `).join('');

    imageContainer.innerHTML = imagesHtml;
  }

  replaceImages(isScrolled);

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > scrollThreshold && !isScrolled) {
      isScrolled = true;
      replaceImages(isScrolled);
    } else if (window.pageYOffset <= scrollThreshold && isScrolled) {
      isScrolled = false;
      replaceImages(isScrolled);
    }
  });
});
