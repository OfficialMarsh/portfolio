let currentLanguage = 'en';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'tr' : 'en';
    updateLanguage();
    updateButtonText();
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(element => {
        const text = element.getAttribute(`data-${currentLanguage}`);
        if (text) {
            element.textContent = text;
        }
    });
}

function updateButtonText() {
    const currentLang = document.querySelector('.current-lang');
    const otherLang = document.querySelector('.other-lang');
    
    if (currentLanguage === 'en') {
        currentLang.textContent = 'EN';
        otherLang.textContent = 'TR';
    } else {
        currentLang.textContent = 'TR';
        otherLang.textContent = 'EN';
    }
}

// Sayfa yüklendiğinde dil ayarını kontrol et
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        updateLanguage();
        updateButtonText();
    }
}); 