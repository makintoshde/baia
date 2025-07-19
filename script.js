document.addEventListener('DOMContentLoaded', function() {
    const currentLang = window.location.pathname.startsWith('/ru/') ? 'ru' : 'en';
    
    initPage(currentLang);
});

function initPage(lang) {
    document.querySelector('.logo').textContent = getTranslation('restaurant.name', lang);
    document.querySelector('header p').textContent = getTranslation('restaurant.description', lang);
    
    renderMenu(lang);
    
    setupEventListeners(lang);
}

function getTranslation(key, lang = 'en') {
    const keys = key.split('.');
    let value = window.menuData;
    
    for (const k of keys) {
        if (!value[k]) return key; // Если ключ не найден, возвращаем сам ключ
        value = value[k];
    }
    
    // Если значение - объект с переводами, возвращаем нужный язык
    if (typeof value === 'object' && (value.en || value.ru)) {
        return value[lang] || value.en || key;
    }
    
    return value; // Если это не объект переводов, возвращаем как есть
}

function renderMenu(lang = 'en') {
    const menuContainer = document.querySelector('main');
    menuContainer.innerHTML = '';

    for (const [categoryId, categoryData] of Object.entries(menuData.categories)) {
        const categorySection = document.createElement('section');
        categorySection.id = categoryId;
        categorySection.className = 'menu-category';
        if (categoryId === 'sushi') categorySection.classList.add('active');

        // Заголовок категории
        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'text-2xl center text-center font-medium mb-8';
        categoryTitle.textContent = getTranslation(`categories.${categoryId}.name`, lang);
        categorySection.appendChild(categoryTitle);

        // Подкатегория
        if (categoryData.subcategory) {
        const subcategoryTitle = document.createElement('h2');
        subcategoryTitle.className = 'text-xl font-medium mb-8';
        subcategoryTitle.textContent = getTranslation(`categories.${categoryId}.subcategory`, lang);
        categorySection.appendChild(subcategoryTitle);
        }

        // Блюда
        categoryData.dishes.forEach(dish => {
        const dishDiv = document.createElement('div');
        dishDiv.className = 'dish';
        
        dishDiv.innerHTML = `
            <div class="flex flex-col md:flex-row gap-6">
            <div class="md:w-1/3">
                <img src="${dish.image}" alt="${getTranslation(`categories.${categoryId}.dishes.${dish.id-1}.title`, lang)}" class="w-full h-48 object-cover rounded">
            </div>
            <div class="md:w-2/3">
                <div class="flex justify-between items-start">
                <h3 class="text-lg font-medium">${getTranslation(`categories.${categoryId}.dishes.${dish.id-1}.title`, lang)}</h3>
                <span class="price text-lg">${dish.price}</span>
                </div>
                <p class="text-gray-600 mt-2">
                ${getTranslation(`categories.${categoryId}.dishes.${dish.id-1}.description`, lang)}
                </p>
            </div>
            </div>
            <div class="dish-divider"></div>
        `;
        
        categorySection.appendChild(dishDiv);
        });

        menuContainer.appendChild(categorySection);
    }
}

function setupEventListeners(lang) {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.hasAttribute('data-category')) {
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                document.querySelectorAll('.menu-category').forEach(category => {
                    category.classList.remove('active');
                });
                
                const categoryId = this.getAttribute('data-category');
                document.getElementById(categoryId).classList.add('active');
            }
        });
    });

    const langToggle = document.getElementById('language-toggle');
    const langDropdown = document.getElementById('language-dropdown');
    const langChevron = document.getElementById('language-chevron');
    
    langToggle.addEventListener('click', function() {
        langDropdown.classList.toggle('hidden');
        langChevron.classList.toggle('rotate-180');
    });
    
    document.querySelectorAll('.language-btn').forEach(button => {
        button.addEventListener('click', function() {
            const targetLang = this.dataset.lang;
            if (targetLang !== lang) {
                window.location.href = `/${targetLang}/index.html`;
            }
        });
    });
}