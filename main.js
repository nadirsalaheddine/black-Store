/* ==========================================
   🚀 المرحلة 2: محرك الجافاسكريبت (JS Engine)
   ========================================== */

// ------------------------------------------
// 1. التنقل الذكي (Smart Navigation & Smooth Scroll)
// ------------------------------------------
const setupSmartNavigation = () => {
    // تفعيل التمرير السلس عند الضغط على الروابط
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // تغيير شكل شريط التنقل (Navbar) عند النزول بالصفحة
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled'); // تأكد من إضافة كلاس .scrolled في CSS
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
};

// ------------------------------------------
// 2. نظام اللغات (Multi-Language System)
// ------------------------------------------
const translations = {
    en: {
        home: "Home",
        shop: "Shop",
        cart: "Cart",
        welcomeTitle: "Discover True Beauty"
    },
    ar: {
        home: "الرئيسية",
        shop: "المتجر",
        cart: "السلة",
        welcomeTitle: "اكتشفي الجمال الحقيقي"
    }
};

const switchLanguage = (lang) => {
    // تغيير النصوص بناءً على الـ data-i18n الموجودة في HTML
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // تغيير اتجاه الصفحة (RTL للغة العربية و LTR للإنجليزية)
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // حفظ لغة المستخدم في المتصفح
    localStorage.setItem('preferredLang', lang);
};

// ------------------------------------------
// 3. سلة المشتريات الذكية (Smart Shopping Cart)
// ------------------------------------------
let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

const updateCartUI = () => {
    const cartCountElement = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
        // إضافة تأثير بصري (Animation) عند تحديث السلة
        cartCountElement.classList.add('pop-animation');
        setTimeout(() => cartCountElement.classList.remove('pop-animation'), 300);
    }

    // حساب المجموع الإجمالي
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    console.log(`🛒 إجمالي السلة: ${totalPrice} د.ج`);
};

const addToCart = (productId, productName, price) => {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ 
            id: productId, 
            name: productName, 
            price: price, 
            quantity: 1 
        });
    }
    
    // حفظ السلة في التخزين المحلي لكي لا تضيع عند تحديث الصفحة
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    updateCartUI();
    
    // رسالة نجاح بسيطة
    alert(`تم إضافة ${productName} إلى السلة بنجاح! ✨`);
};

// ------------------------------------------
// 🚀 تشغيل كل الوظائف عند تحميل الصفحة
// ------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    setupSmartNavigation();
    updateCartUI();

    // التحقق من اللغة المحفوظة مسبقاً أو استخدام الإنجليزية كافتراضية
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    switchLanguage(savedLang);

    /* --- تجربة السلة (محاكاة لمنتجات موجودة في الموقع) --- */
    // يمكنك ربط هذه الوظيفة بأزرار "أضف إلى السلة" في الـ HTML
    // مثال:
    // document.getElementById('add-serum-btn').addEventListener('click', () => {
    //     addToCart('p_01', 'Tiziri Premium Serum', 4500);
    // });
    // document.getElementById('add-patches-btn').addEventListener('click', () => {
    //     addToCart('p_02', 'Lunar Eye Patches', 2500);
    // });
});
