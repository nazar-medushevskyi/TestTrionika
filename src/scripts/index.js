const navItems = [
  { text: 'Спикеры', link: '#laptopsComputers', qa: 'hover' },
  { text: 'Партнеры', link: '#gadgets' },
  { text: 'Локация', link: '#tablets' },
  { text: 'Afterparty', link: '#photo' },
  { text: 'Контакты', link: '#video' }
];

const menuItems = [
  { name: 'All', href: 'All', },
  { name: 'Gambling', href: 'Gambling', isActive: true },
  { name: 'Nutra', href: 'Nutra' },
  { name: 'PDL', href: 'PDL', dataQa: 'hover' },
  { name: 'Essay', href: 'Essay' },
];


const imageItems = [
  { src: './images/header/telegram-fill.svg', alt: 'telegram' },
  { src: './images/header/youtube-fill.svg', alt: 'youtube' },
  { src: './images/header/facebook-circle-fill.svg', alt: 'facebook' }
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

// window.addEventListener('scroll', function() {
//   const headerContent = document.querySelector('.header__content');
//   if (window.pageYOffset > 10) {
//     headerContent.style.backgroundColor = 'white';
//   } else {
//     headerContent.style.backgroundColor = 'transparent';
//   }
// });

document.addEventListener('DOMContentLoaded', function() {
  const navContainer = document.querySelector('.nav__list');

  const navHtml = navItems.map(item => `
    <li class="nav__list">
      <a class="nav__link text-style" href="${item.link}" ${item.qa ? `data-qa="${item.qa}"` : ''}>
        ${item.text}
      </a>
    </li>
  `).join('');

  navContainer.innerHTML = navHtml;
});

document.addEventListener('DOMContentLoaded', function() {
  const imageContainer = document.querySelector('.header__contacts');

  const imagesHtml = imageItems.map(image => `
    <img src="${image.src}" alt="${image.alt}">
  `).join('');

  imageContainer.innerHTML = imagesHtml;
});

document.addEventListener("DOMContentLoaded", function() {
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

document.addEventListener("DOMContentLoaded", function() {
  const conferenceRecommendationsBlock = document.querySelector('.conference-recommendations-block');
  
  const statsContainer = document.createElement('div');
  statsContainer.classList.add("stats-container");
  conferenceRecommendationsBlock.appendChild(statsContainer);

  const statsData = [
    { label: "участников", value: "1200+" },
    { label: "спикера", value: "22" },
    { label: "для нетворкинга", value: "3000м²" },
    { label: "вебмастера", value: "75%" }
  ];

  statsData.forEach((stat, index) => {
    const item = document.createElement('div');
    item.className = `stats-item stats-item${index + 1}`;

    const label = document.createElement('div');
    label.className = "stats-label sections-text-style";
    label.textContent = stat.label;

    const value = document.createElement('div');
    value.className = "stats-value sections-text-style";
    value.textContent = stat.value;

    item.appendChild(label);
    item.appendChild(value);
    statsContainer.appendChild(item);
  });

  const afterParty = document.createElement('div');
  afterParty.className = "after-party";
  afterParty.innerHTML = "After<br/>party";
  statsContainer.appendChild(afterParty);

  const linesContainer = document.createElement('div');
  linesContainer.className = "lines-container";

  const lineClasses = [
    "horizontal-line line1",
    "vertical-line line2",
    "vertical-line line3",
    "vertical-line line4",
    "horizontal-line line5",
    "horizontal-line line6",
    "horizontal-line line7",
    "horizontal-line line8",
    "vertical-line line9"
  ];

  lineClasses.forEach(lineClass => {
    const line = document.createElement('div');
    line.className = lineClass;
    linesContainer.appendChild(line);
  });

  statsContainer.appendChild(linesContainer);
});


document.addEventListener("DOMContentLoaded", function() {
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
    listItem.classList.add('menu__item--active'); // добавлен этот класс для активного пункта
  }

  if (item.dataQa) {
    link.setAttribute('data-qa', item.dataQa);
  }

  listItem.appendChild(link);
  menuList.appendChild(listItem);
});


document.addEventListener('DOMContentLoaded', function() { // Убедимся, что документ полностью загружен
  document.querySelector('.button-speaker').addEventListener('click', function() {
    
    const cardsTemplate = `
    <div class="speakers__cardss">
    <div class="speakers__card">
      <img class="speakers__card-image" src="./images/sections/speakers/5.png" alt="Описание изображения">
      <div class="speakers__card-content">
        <h1 class="speakers__card-name">Анна Лебедева</h1>
        <div class="speakers__card-buttons">
          <button class="button-card">Betting</button>
          <button class="button-card" style="background-color: #E53030; color: white;">SEO</button>
        </div>
      </div>
      <p class="speakers__card-description smallText-style"> Очень крутая богатая, не скаммер <br> Parimatch.tech</p>
    </div>

    <div class="speakers__card">
      <img class="speakers__card-image" src="./images/sections/speakers/6.png" alt="Описание изображения">
      <div class="speakers__card-content">
        <h1 class="speakers__card-name">Кирилл Богатюк</h1>
        <div class="speakers__card-buttons">
          <button class="button-card">Crypto</button>
          <button class="button-card" style="background-color: #E53030; color: white;">SEO</button>
        </div>
      </div>
      <p class="speakers__card-description smallText-style">Гений, миллионер в 16 лет, владелец <br> Tesla</p>
    </div>


    <div class="speakers__card">
      <img class="speakers__card-image" src="./images/sections/speakers/7.png" alt="Описание изображения">
      <div class="speakers__card-content">
        <h1 class="speakers__card-name">Дмитрий Голополосов</h1>
        <div class="speakers__card-buttons">
          <button class="button-card">Нутра</button>
          <button class="button-card" style="background-color: #204DEF; color: white;">Affiliate</button>
        </div>
      </div>
      <p class="speakers__card-description smallText-style">Основатель арбитраж-команды <br> SCAMM.pro</p>
    </div>


    <div class="speakers__card">
      <img class="speakers__card-image" src="./images/sections/speakers/8.png" alt="Описание изображения">
      <div class="speakers__card-content">
        <h1 class="speakers__card-name">Дмитрий Голополосов</h1>
        <div class="speakers__card-buttons">
          <button class="button-card">Нутра</button>
          <button class="button-card" style="background-color: #204DEF; color: white;">Affiliate</button>
        </div>
      </div>
      <p class="speakers__card-description smallText-style">Открыл 12 палаток с шаурмой</p>
    </div>
  </div>
    `;

    // Вставляем новый блок карточек после существующего
    document.querySelector('.speakers__cards').insertAdjacentHTML('afterend', cardsTemplate);
    
    // Отключаем кнопку, чтобы предотвратить многократное добавление карточек
    this.disabled = true;
  });
});