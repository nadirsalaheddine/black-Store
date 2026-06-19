/* ==========================================================================
   1. MOCK DATABASE (قاعدة بيانات المنتجات - Nike, Adidas, Puma)
   ========================================================================== */
const productsDB = [
    // --- منتجات الصيف ---
    { id: 1, name: "Nike Premium Summer Tee", price: 45, season: "summer", category: "clothing", type: "clothes", img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500" },
    { id: 2, name: "Adidas UltraBoost Light", price: 180, season: "summer", category: "shoes", type: "shoes", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500" },
    { id: 3, name: "Puma Summer Shorts", price: 35, season: "summer", category: "clothing", type: "clothes", img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500" },
    { id: 4, name: "Black Store Cap", price: 25, season: "summer", category: "accessories", type: "none", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500" },
    { id: 5, name: "Calvin Klein Underwear Set", price: 40, season: "summer", category: "underwear", type: "clothes", img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500" },
    
    // --- منتجات الشتاء ---
    { id: 6, name: "Nike Tech Fleece Hoodie", price: 120, season: "winter", category: "clothing", type: "clothes", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500" },
    { id: 7, name: "Puma Winter Beanie", price: 20, season: "winter", category: "accessories", type: "none", img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500" },
    { id: 8, name: "Adidas Yeezy 500 High", price: 220, season: "winter", category: "shoes", type: "shoes", img: "https://images.unsplash.com/photo-1610425255469-8a3d5e237699?w=500" },
    { id: 9, name: "Thermal Underwear Base", price: 50, season: "winter", category: "underwear", type: "clothes", img: "https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?w=500" },
    { id: 10, name: "Nike ACG Winter Boots", price: 195, season: "winter", category: "shoes", type: "shoes", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" }
];

/* ==========================================================================
   2. I18N SYSTEM (نظام الترجمة بـ 3 لغات)
   ========================================================================== */
const translations = {
    en: {
        nav_home: "Home", nav_store: "Collections", nav_about: "About Us", nav_contact: "Contact",
        store_title: "Global Collections", tab_summer: "Summer Drop", tab_winter: "Winter Essentials",
        cat_all: "All", cat_clothing: "Clothing", cat_shoes: "Footwear", cat_acc: "Accessories", cat_under: "Underwear",
        btn_add: "Order Now", about_title: "Who Are We?", about_desc: "We are Black Store, the pinnacle of modern streetwear. Bridging the gap between High Fashion and everyday lifestyle.",
        contact_title: "Get In Touch", btn_send: "Send Message", checkout_info: "Shipping Information",
        payment_method: "Payment Method", pay_cod: "Cash on Delivery (COD)", pay_card: "Credit Card", btn_confirm: "Confirm Order",
        card_details: "Enter Card Details", thank_you_title: "Thank You For Trusting Us!",
        thank_you_desc: "Your premium order has been successfully placed. We are preparing it for shipment.",
        newsletter_title: "Join The Elite", newsletter_desc: "Subscribe to get early access to new drops and exclusive sales.", btn_subscribe: "Subscribe"
    },
    fr: {
        nav_home: "Accueil", nav_store: "Collections", nav_about: "À Propos", nav_contact: "Contact",
        store_title: "Collections Globales", tab_summer: "Édition Été", tab_winter: "Essentiels Hiver",
        cat_all: "Tout", cat_clothing: "Vêtements", cat_shoes: "Chaussures", cat_acc: "Accessoires", cat_under: "Sous-vêtements",
        btn_add: "Commander", about_title: "Qui Sommes-Nous?", about_desc: "Nous sommes Black Store, le sommet du streetwear moderne. Faisant le pont entre la haute couture et le style de vie quotidien.",
        contact_title: "Contactez-Nous", btn_send: "Envoyer", checkout_info: "Informations de Livraison",
        payment_method: "Mode de Paiement", pay_cod: "Paiement à la Livraison", pay_card: "Carte Bancaire", btn_confirm: "Confirmer la Commande",
        card_details: "Détails de la Carte", thank_you_title: "Merci de Votre Confiance!",
        thank_you_desc: "Votre commande premium a été passée avec succès. Nous préparons son expédition.",
        newsletter_title: "Rejoignez l'Élite", newsletter_desc: "Abonnez-vous pour un accès anticipé aux nouveautés.", btn_subscribe: "S'abonner"
    },
    ar: {
        nav_home: "الرئيسية", nav_store: "التشكيلات", nav_about: "من نحن", nav_contact: "تواصل معنا",
        store_title: "تشكيلات عالمية", tab_summer: "مجموعة الصيف", tab_winter: "أساسيات الشتاء",
        cat_all: "الكل", cat_clothing: "ملابس", cat_shoes: "أحذية", cat_acc: "إكسسوارات", cat_under: "ملابس داخلية",
        btn_add: "اطلب الآن", about_title: "من نحن؟", about_desc: "نحن بلاك ستور، قمة أزياء الشارع العصرية. نجمع بين الأزياء الراقية وأسلوب الحياة اليومي.",
        contact_title: "تواصل معنا", btn_send: "إرسال الرسالة", checkout_info: "معلومات التوصيل",
        payment_method: "طريقة الدفع", pay_cod: "الدفع عند الاستلام", pay_card: "البطاقة البنكية", btn_confirm: "تأكيد الطلب",
        card_details: "بيانات البطاقة", thank_you_title: "شكراً لثقتك بنا!",
        thank_you_desc: "تم تأكيد طلبك الفاخر بنجاح. نحن نقوم بتجهيزه للشحن.",
        newsletter_title: "انضم للنخبة", newsletter_desc: "اشترك ليصلك كل جديد وحصري قبل الجميع.", btn_subscribe: "اشتراك"
    }
};

// دالة تغيير اللغة
function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    // تغيير اتجاه الصفحة إذا كانت العربية
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.style.fontFamily = lang === 'ar' ? "'Syne', 'Inter', sans-serif" : "'Inter', sans-serif";
}

document.getElementById('lang-switcher').addEventListener('change', (e) => {
    changeLanguage(e.target.value);
});

/* ==========================================================================
   3. THEME SWITCHER (وضع الليل والنهار - تيتانيوم ستايل)
   ========================================================================== */
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.contains('theme-dark');
    if (isDark) {
        document.body.classList.remove('theme-dark');
        document.body.classList.add('theme-light');
    } else {
        document.body.classList.remove('theme-light');
        document.body.classList.add('theme-dark');
    }
});

/* ==========================================================================
   4. RENDER ENGINE & FILTERS (نظام عرض السلعة والفلترة الذكية)
   ========================================================================== */
let currentSeason = 'summer';
let currentCategory = 'all';
const productsGrid = document.getElementById('products-grid');

function renderProducts() {
    productsGrid.innerHTML = ''; // تنظيف الشبكة
    
    // فلترة السلعة حسب الموسم والتصنيف
    const filteredProducts = productsDB.filter(product => {
        const matchSeason = product.season === currentSeason;
        const matchCategory = currentCategory === 'all' ? true : product.category === currentCategory;
        return matchSeason && matchCategory;
    });

    filteredProducts.forEach(product => {
        // تحديد المقاسات حسب نوع السلعة (ملابس ولا أحذية)
        let sizesHTML = '';
        if (product.type === 'clothes') {
            sizesHTML = `
                <select class="size-selector apple-select">
                    <option value="">Size (XXS - XXL)</option>
                    <option value="XXS">XXS</option><option value="S">S</option>
                    <option value="M">M</option><option value="L">L</option><option value="XL">XL</option>
                </select>`;
        } else if (product.type === 'shoes') {
            sizesHTML = `
                <select class="size-selector apple-select">
                    <option value="">Size (US/EU)</option>
                    <option value="US8">US 8 / EU 41</option>
                    <option value="US9">US 9 / EU 42.5</option>
                    <option value="US10">US 10 / EU 44</option>
                </select>`;
        }

        const card = document.createElement('div');
        card.className = 'product-card apple-blur';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}" loading="lazy">
            <div class="prod-info">
                <h3>${product.name}</h3>
                <p class="price">$${product.price}.00</p>
                ${sizesHTML}
                <button class="add-to-cart-btn" onclick="openCheckoutModal()" data-i18n="btn_add">Order Now</button>
            </div>
        `;
        productsGrid.appendChild(card);
    });
    
    // إعادة تطبيق الترجمة على الأزرار الجديدة
    const currentLang = document.getElementById('lang-switcher').value;
    changeLanguage(currentLang);
}

// مستمعات قفالي الفلترة
document.querySelectorAll('.season-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        document.querySelectorAll('.season-tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        currentSeason = e.target.getAttribute('data-season');
        renderProducts();
    });
});

document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        currentCategory = e.target.getAttribute('data-cat');
        renderProducts();
    });
});

/* ==========================================================================
   5. CHECKOUT FLOW MODALS (نظام الدفع المعقد)
   ========================================================================== */
const checkoutOverlay = document.getElementById('checkout-overlay');
const creditCardModal = document.getElementById('credit-card-modal');
const successModal = document.getElementById('success-modal');

// فتح فورم معلومات التوصيل كي يعبص "اطلب الآن"
function openCheckoutModal() {
    checkoutOverlay.classList.remove('hidden');
}

// زر تأكيد الطلب من فورم التوصيل
document.getElementById('proceed-payment-btn').addEventListener('click', () => {
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    
    if (paymentMethod === 'cod') {
        // إذا الدفع عند الاستلام -> بطاقة شكر مباشرة
        checkoutOverlay.classList.add('hidden');
        successModal.classList.remove('hidden');
    } else if (paymentMethod === 'card') {
        // إذا بطاقة -> افتح نافذة البطاقة
        checkoutOverlay.classList.add('hidden');
        creditCardModal.classList.remove('hidden');
    }
});

// زر الدفع في نافذة البطاقة
document.getElementById('pay-now-btn').addEventListener('click', () => {
    creditCardModal.classList.add('hidden');
    successModal.classList.remove('hidden');
});

// إغلاق بطاقة الشكر والرجوع للموقع
document.getElementById('close-success-btn').addEventListener('click', () => {
    successModal.classList.add('hidden');
});

// ميزة الإغلاق كي تضغط برا المربع (تخلي السيت Pro)
window.addEventListener('click', (e) => {
    if (e.target === checkoutOverlay) checkoutOverlay.classList.add('hidden');
    if (e.target === creditCardModal) creditCardModal.classList.add('hidden');
    if (e.target === successModal) successModal.classList.add('hidden');
});

/* ==========================================================================
   6. INIT APP (تشغيل الموقع)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(); // رسم السلع لأول مرة
    changeLanguage('en'); // اللغة الافتراضية
    
    // منع تحديث الصفحة عند الضغط على فورم التوصل (Newsletter & Contact)
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Message Sent! Thank you.");
    });
    document.querySelector('.subscribe-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Welcome to the Elite! You are subscribed.");
    });
});