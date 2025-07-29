// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    initializeLanguage();
    
    // Language switcher functionality
    document.querySelectorAll('.language-switcher .lang-option').forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
            
            // Update active class
            document.querySelectorAll('.language-switcher .lang-option').forEach(opt => {
                opt.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Get the header height to offset the scroll position
                const headerHeight = document.querySelector('.header').offsetHeight;
                
                // Calculate the target position with offset
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                // Smooth scroll to the target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    
    // Apply initial styles
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    header.style.background = '#000';
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// Translations for the website
const translations = {
    'tr': {
        'nav_home': 'Ana Sayfa',
        'nav_about': 'Hakkımızda',
        'nav_services': 'Hizmetlerimiz',
        'nav_team': 'Ekibimiz',
        'nav_contact': 'İletişim',
        'hero_title': 'Didim\'in Güvenilir Harita Mühendisliği',
        'hero_subtitle': 'Arsa, parsel ve proje ihtiyaçlarınızda yanınızdayız. Teknik uzmanlık, şeffaf hizmet ve güvenilir çözümler.',
        'hero_button': 'İLETİŞİME GEÇİN',
        'hero_button_services': 'HİZMETLERİMİZ',
        'stat_experience': 'Yıl Deneyim',
        'stat_projects': 'Tamamlanan Proje',
        'stat_satisfaction': 'Müşteri Memnuniyeti',
        'stat_support': 'Destek Hattı',
        'services_title': 'Hizmetlerimiz',
        'services_subtitle': 'Harita mühendisliği alanında ihtiyacınız olan tüm hizmetleri profesyonel ekibimizle sunuyoruz',
        'service_survey_title': 'Arazi Ölçümü',
        'service_survey_desc': 'Hassas ölçüm cihazlarımızla arazinizin sınırlarını belirliyor, detaylı harita çıkarıyoruz.',
        'service_application_title': 'Aplikasyon',
        'service_application_desc': 'Tapu müdürlüğü için gerekli aplikasyon işlemlerinizi hızlı ve doğru şekilde hazırlıyoruz.',
        'service_subdivision_title': 'İfraz İşlemleri',
        'service_subdivision_desc': 'Arazinizi bölmek istiyorsanız, tüm ifraz işlemlerinizi baştan sona yönetiyoruz.',
        'service_boundary_title': 'Sınır Tespiti',
        'service_boundary_desc': 'Komşu parseller arasındaki sınırları net şekilde belirliyor, anlaşmazlıkları çözüyoruz.',
        'service_zoning_title': 'İmar Durumu',
        'service_zoning_desc': 'Arazinizin imar durumunu araştırıyor, yapılaşma koşullarını detaylı raporluyoruz.',
        'service_permit_title': 'Ruhsat Desteği',
        'service_permit_desc': 'İnşaat ruhsatı için gerekli harita çalışmalarınızı eksiksiz hazırlıyoruz.',
        'process_title': 'Çalışma Sürecimiz',
        'process_step1_title': 'İlk Görüşme',
        'process_step1_desc': 'İhtiyaçlarınızı dinliyor, projenizi analiz ediyoruz',
        'process_step2_title': 'Keşif ve Teklif',
        'process_step2_desc': 'Saha keşfi yapıyor, detaylı teklif sunuyoruz',
        'process_step3_title': 'Saha Çalışması',
        'process_step3_desc': 'Modern cihazlarla hassas ölçümler gerçekleştiriyoruz',
        'process_step4_title': 'Raporlama',
        'process_step4_desc': 'Detaylı raporlar hazırlıyor, teslim ediyoruz',
        'why_us_title': 'Neden Bizi Tercih Etmelisiniz',
        'why_us_feature1_title': 'Yerel ve Teknik Uzmanlık',
        'why_us_feature1_desc': 'Didim ve çevresindeki imar planlarına, belediye süreçlerine ve teknik uygulamalara hâkimiz. Her işte doğru ölçüm ve mevzuata uygun çözüm sunarız.',
        'why_us_feature2_title': 'Hızlı, Şeffaf ve Takipli Hizmet',
        'why_us_feature2_desc': 'İşin süresi, maliyeti ve aşamaları baştan netleştirilir. Resmi kurumlarla olan tüm süreçleri sizin yerinize biz takip ederiz.',
        'why_us_feature3_title': 'Tek Noktada Çözüm ve Anlaşılır Yaklaşım',
        'why_us_feature3_desc': 'Aplikasyondan ifraza, kot kesitten ruhsat ön hazırlığına kadar tüm harita hizmetlerini tek elden sunarız. Teknik detayları sade bir dille anlatır, güler yüzle karşılarız.',
        'video_title': 'Çalışmalarımızdan Örnekler',
        'team_title': 'Ekibimiz',
        'contact_title': 'İletişim',
        'contact_subtitle': 'Projeleriniz için bizimle iletişime geçin. Size en uygun çözümü birlikte bulalım.',
        'contact_phone_title': 'Telefon',
        'contact_phone_desc': 'Hemen arayın, ücretsiz danışmanlık alın',
        'contact_address_title': 'Adres',
        'contact_hours_title': 'Çalışma Saatleri',
        'contact_hours_weekdays': 'Pazartesi - Cuma: 8:30 - 16:00',
        'contact_hours_weekend': 'Hafta Sonu: Randevu ile',
        'cta_title': 'Projeniz için hemen başlayalım!',
        'cta_description': 'Ücretsiz keşif ve danışmanlık için bugün arayın',
        'cta_button': 'HEMEN ARA',
        'footer_slogan': 'Ölçümüz net, yerimiz Zirve.',
        'footer_contact': 'İletişim',
        'footer_hours_title': 'Çalışma Saatleri',
        'footer_hours': 'Pazartesi - Cuma: 8:30 - 16:00',
        'footer_copyright': '© 2023 Zirve Harita. Tüm hakları saklıdır.'
    },
    'en': {
        'nav_home': 'Home',
        'nav_about': 'About Us',
        'nav_services': 'Services',
        'nav_team': 'Our Team',
        'nav_contact': 'Contact',
        'hero_title': 'Didim\'s Reliable Surveying Engineering',
        'hero_subtitle': 'We are with you for your land, parcel and project needs. Technical expertise, transparent service and reliable solutions.',
        'hero_button': 'CONTACT US',
        'hero_button_services': 'OUR SERVICES',
        'stat_experience': 'Years Experience',
        'stat_projects': 'Completed Projects',
        'stat_satisfaction': 'Customer Satisfaction',
        'stat_support': 'Support Line',
        'services_title': 'Our Services',
        'services_subtitle': 'We provide all the services you need in the field of surveying engineering with our professional team',
        'service_survey_title': 'Land Surveying',
        'service_survey_desc': 'We determine the boundaries of your land with our precision measuring devices and create detailed maps.',
        'service_application_title': 'Application',
        'service_application_desc': 'We prepare the application procedures required for the land registry office quickly and accurately.',
        'service_subdivision_title': 'Subdivision Procedures',
        'service_subdivision_desc': 'If you want to divide your land, we manage all your subdivision procedures from start to finish.',
        'service_boundary_title': 'Boundary Determination',
        'service_boundary_desc': 'We clearly determine the boundaries between neighboring parcels and resolve disputes.',
        'service_zoning_title': 'Zoning Status',
        'service_zoning_desc': 'We research the zoning status of your land and report the construction conditions in detail.',
        'service_permit_title': 'Permit Support',
        'service_permit_desc': 'We prepare the map work required for construction permits completely.',
        'process_title': 'Our Working Process',
        'process_step1_title': 'Initial Meeting',
        'process_step1_desc': 'We listen to your needs and analyze your project',
        'process_step2_title': 'Survey and Proposal',
        'process_step2_desc': 'We conduct site surveys and present detailed proposals',
        'process_step3_title': 'Field Work',
        'process_step3_desc': 'We perform precise measurements with modern devices',
        'process_step4_title': 'Reporting',
        'process_step4_desc': 'We prepare detailed reports and deliver them',
        'why_us_title': 'Why Choose Us',
        'why_us_feature1_title': 'Local and Technical Expertise',
        'why_us_feature1_desc': 'We are familiar with the zoning plans, municipal processes, and technical applications in Didim and its surroundings. We provide accurate measurement and solutions in compliance with regulations in every job.',
        'why_us_feature2_title': 'Fast, Transparent, and Tracked Service',
        'why_us_feature2_desc': 'The duration, cost, and stages of the work are clarified from the beginning. We follow all processes with official institutions on your behalf.',
        'why_us_feature3_title': 'One-Stop Solution and Understandable Approach',
        'why_us_feature3_desc': 'We provide all mapping services from application to subdivision, from elevation section to pre-preparation of license, from a single source. We explain technical details in simple language and greet with a smile.',
        'video_title': 'Examples of Our Work',
        'team_title': 'Our Team',
        'contact_title': 'Contact',
        'contact_subtitle': 'Contact us for your projects. Let\'s find the most suitable solution together.',
        'contact_phone_title': 'Phone',
        'contact_phone_desc': 'Call now, get free consultation',
        'contact_address_title': 'Address',
        'contact_hours_title': 'Working Hours',
        'contact_hours_weekdays': 'Monday - Friday: 8:30 - 16:00',
        'contact_hours_weekend': 'Weekend: By appointment',
        'cta_title': 'Let\'s start for your project right away!',
        'cta_description': 'Call today for free survey and consultation',
        'cta_button': 'CALL NOW',
        'footer_slogan': 'Our measure is precise, our place is at the top.',
        'footer_contact': 'Contact',
        'footer_hours_title': 'Working Hours',
        'footer_hours': 'Monday - Friday: 8:30 - 16:00',
        'footer_copyright': '© 2023 Zirve Harita. All rights reserved.'
    }
};

// Default language
let currentLanguage = 'tr';

// Function to change the language
function changeLanguage(lang) {
    currentLanguage = lang;
    updateContent();
    // Save language preference to localStorage
    localStorage.setItem('language', lang);
}

// Function to update content based on selected language
function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
}

// Initialize language from localStorage or browser preference
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'tr' || savedLanguage === 'en')) {
        currentLanguage = savedLanguage;
    } else {
        // Check browser language
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('tr')) {
            currentLanguage = 'tr';
        } else {
            currentLanguage = 'en';
        }
    }
    
    // Update the language switcher
    document.querySelectorAll('.language-switcher .lang-option').forEach(option => {
        if (option.getAttribute('data-lang') === currentLanguage) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
    
    updateContent();
}