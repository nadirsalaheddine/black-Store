/* ==========================================================================
   1. MOCK DB - SUMMER & WINTER SEPARATED (20 منتج)
   ========================================================================== */
const generateSVG = (name, color) => `https://ui-avatars.com/api/?name=${name}&background=${color}&color=fff&size=500&format=svg&font-size=0.3&bold=true`;

const productsDB = {
    summer: [
        { id: 1, name: "Nike Premium Tee", price: 45, category: "clothing", type: "clothes", img: generateSVG("Nike+Tee", "000000") },
        { id: 2, name: "Adidas Track Jacket", price: 85, category: "clothing", type: "clothes", img: generateSVG("Adidas+Jacket", "1a1a1a") },
        { id: 3, name: "Streetwear Cargo", price: 65, category: "clothing", type: "clothes", img: generateSVG("Cargo+Pants", "333333") },
        { id: 4, name: "Old Money Polo", price: 90, category: "clothing", type: "clothes", img: generateSVG("Polo+Shirt", "000000") },
        { id: 5, name: "Puma Tech Hoodie", price: 75, category: "clothing", type: "clothes", img: generateSVG("Puma+Hoodie", "222222") },
        { id: 6, name: "Nike Air Force 1", price: 110, category: "shoes", type: "shoes", img: generateSVG("Air+Force", "000000") },
        { id: 7, name: "Adidas UltraBoost", price: 180, category: "shoes", type: "shoes", img: generateSVG("Ultra+Boost", "111111") },
        { id: 8, name: "Puma RS-X", price: 120, category: "shoes", type: "shoes", img: generateSVG("Puma+RSX", "333333") },
        { id: 9, name: "Black Store Cap", price: 25, category: "accessories", type: "none", img: generateSVG("Cap", "000000") },
        { id: 10, name: "Designer Sunglasses", price: 95, category: "accessories", type: "none", img: generateSVG("Sunglasses", "1a1a1a") }
    ],
    winter: [
        { id: 11, name: "Nike Tech Fleece", price: 120, category: "clothing", type: "clothes", img: generateSVG("Tech+Fleece", "000000") },
        { id: 12, name: "Adidas Winter Parka", price: 200, category: "clothing", type: "clothes", img: generateSVG("Parka", "1a1a1a") },
        { id: 13, name: "Puma Puffer Jacket", price: 150, category: "clothing", type: "clothes", img: generateSVG("Puffer", "222222") },
        { id: 14, name: "Classic Wool Coat", price: 250, category: "clothing", type: "clothes", img: generateSVG("Wool+Coat", "333333") },
        { id: 15, name: "Nike ACG Boots", price: 195, category: "shoes", type: "shoes", img: generateSVG("ACG+Boots", "000000") },
        { id: 16, name: "Adidas Yeezy 500", price: 220, category: "shoes", type: "shoes", img: generateSVG("Yeezy+500", "111111") },
        { id: 17, name: "Timberland Premium", price: 180, category: "shoes", type: "shoes", img: generateSVG("Timberland", "222222") },
        { id: 18, name: "Winter Beanie", price: 30, category: "accessories", type: "none", img: generateSVG("Beanie", "000000") },
        { id: 19, name: "Leather Gloves", price: 60, category: "accessories", type: "none", img: generateSVG("Gloves", "1a1a1a") },
        { id: 20, name: "Thermal Base Layer", price: 50, category: "underwear", type: "clothes", img: generateSVG("Thermal", "333333") }
    ]
};

/* ==========================================================================
   2. I18N SYSTEM (3 لغات كامل)
   ========================================================================== */
const translations = {
    en: {
        nav_home: "Home", nav_store: "Collections", nav_about: "About Us", nav_contact: "Contact",
        hero_desc: "Step into the future of High Streetwear and Old Money aesthetics. Premium quality, exclusive drops.",
        btn_shop: "Shop Now", btn_about: "About Us",
        search_placeholder: "Search for High Streetwear, Shoes...",
        store_title: "Global Collections", tab_summer: "Summer Drop", tab_winter: "Winter Essentials",
        cat_all: "All", cat_clothing: "Clothing", cat_shoes: "Footwear", cat_acc: "Accessories", cat_under: "Underwear",
        btn_add: "Add to Bag", about_title: "Who Are We?", about_desc: "We are Black Store, the pinnacle of modern streetwear. Bridging the gap between High Fashion and everyday lifestyle.",
        contact_title: "Get In Touch", btn_send: "Send Message", checkout_info: "Shipping Information",
        payment_method: "Payment Method", pay_cod: "Cash on Delivery (COD)", pay_card: "Credit Card", btn_confirm: "Confirm Order",
        card_details: "Enter Card Details", thank_you_title: "Thank You For Trusting Us!",
        thank_you_desc: "Your premium order has been successfully placed. We are preparing it for shipment.",
        cart_title: "Your Bag", cart_total: "Total:", btn_checkout: "Proceed to Checkout",
        newsletter_title: "Join The Elite", newsletter_desc: "Subscribe to get early access to new drops and exclusive sales.", btn_subscribe: "Subscribe"
    },
    fr: {
        nav_home: "Accueil", nav_store: "Collections", nav_about: "A Propos", nav_contact: "Contact",
        hero_desc: "Entrez dans le futur du streetwear haut de gamme. Qualite premium, drops exclusifs.",
        btn_shop: "Acheter", btn_about: "A Propos",
        search_placeholder: "Rechercher des vetements, chaussures...",
        store_title: "Collections Globales", tab_summer: "Edition Ete", tab_winter: "Essentiels Hiver",
        cat_all: "Tout", cat_clothing: "Vetements", cat_shoes: "Chaussures", cat_acc: "Accessoires", cat_under: "Sous-vetements",
        btn_add: "Ajouter au Panier", about_title: "Qui Sommes-Nous?", about_desc: "Nous sommes Black Store, le sommet du streetwear moderne. Faisant le pont entre la haute couture et le style de vie quotidien.",
        contact_title: "Contactez-Nous", btn_send: "Envoyer", checkout_info: "Informations de Livraison",
        payment_method: "Mode de Paiement", pay_cod: "Paiement a la Livraison", pay_card: "Carte Bancaire", btn_confirm: "Confirmer la Commande",
        card_details: "Details de la Carte", thank_you_title: "Merci de Votre Confiance!",
        thank_you_desc: "Votre commande premium a ete passee avec succes. Nous preparons son expedition.",
        cart_title: "Votre Panier", cart_total: "Total:", btn_checkout: "Passer la Commande",
        newsletter_title: "Rejoignez l'Elite", newsletter_desc: "Abonnez-vous pour un acces anticipe aux nouveautes.", btn_subscribe: "S'abonner"
    },
    ar: {
        nav_home: "الرئيسية", nav_store: "التشكيلات", nav_about: "من نحن", nav_contact: "تواصل معنا",
        hero_desc: "ادخل الى عالم ازياء الشارع الفاخرة. جودة ممتازة، تشكيلات حصرية.",
        btn_shop: "تسوق الآن", btn_about: "من نحن",
        search_placeholder: "ابحث عن ملابس، احذية...",
        store_title: "تشكيلات عالمية", tab_summer: "مجموعة الصيف", tab_winter: "اساسيات الشتاء",
        cat_all: "الكل", cat_clothing: "ملابس", cat_shoes: "احذية", cat_acc: "اكسسوارات", cat_under: "ملابس داخلية",
        btn_add: "اضف للسلة", about_title: "من نحن؟", about_desc: "نحن بلاك ستور، قمة ازياء الشارع العصرية. نجمع بين الازياء الراقية واسلوب الحياة اليومي.",
        contact_title: "تواصل معنا", btn_send: "ارسال الرسالة", checkout_info: "معلومات التوصيل",
        payment_method: "طريقة الدفع", pay_cod: "الدفع عند الاستلام", pay_card: "البطاقة البنكية", btn_confirm: "تأكيد الطلب",
        card_details: "بيانات البطاقة", thank_you_title: "شكراً لثقتك بنا!",
        thank_you_desc: "تم تأكيد طلبك الفاخر بنجاح. نحن نقوم بتجهيزه للشحن.",
        cart_title: "سلة مشترياتك", cart_total: "المجموع:", btn_checkout: "اتمام الشراء",
        newsletter_title: "انضم للنخبة", newsletter_desc: "اشترك ليصلك كل جديد وحصري قبل الجميع.", btn_subscribe: "اشتراك"
    }
};

function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

/* ==========================================================================
   3. THEME SWITCHER
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
   4. CART SYSTEM
   ========================================================================== */
let cart = [];
const cartDrawer = document.getElementById('cart-drawer');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalPrice = document.getElementById('cart-total-price');
const cartCounter = document.getElementById('cart-counter');

function addToCart(productId) {
    const allProducts = [...productsDB.summer, ...productsDB.winter];
    const product = allProducts.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    
    if (existing) existing.quantity++;
    else cart.push({ ...product, quantity: 1 });
    
    updateCartUI();
    cartDrawer.classList.add('open');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p style="text-align:center; color:var(--text-muted); margin-top:50px; font-size:1.1rem;">Your bag is empty.</p>`;
    }

    cart.forEach(item => {
        total += item.price * item.quantity;
        count += item.quantity;
        
        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <div style="display:flex; gap:12px; align-items:center;">
                    <img src="${item.img}" style="width:55px; height:55px; border-radius:12px; object-fit:cover;">
                    <div>
                        <h4 style="font-size:0.95rem; font-weight:700;">${item.name}</h4>
                        <p style="color:var(--text-muted); font-size:0.85rem;">$${item.price} x ${item.quantity}</p>
                    </div>
                </div>
                <button class="delete-btn" onclick="removeFromCart(${item.id})">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
            </div>
        `;
    });

    cartTotalPrice.textContent = `$${total.toFixed(2)}`;
    cartCounter.textContent = count;
}

document.getElementById('cart-open-btn').addEventListener('click', () => cartDrawer.classList.add('open'));
document.getElementById('close-cart-btn').addEventListener('click', () => cartDrawer.classList.remove('open'));

document.getElementById('cart-checkout-btn').addEventListener('click', () => {
    if (cart.length > 0) {
        cartDrawer.classList.remove('open');
        openCheckoutModal();
    } else {
        alert("Your bag is empty!");
    }
});

/* ==========================================================================
   5. RENDER ENGINE & FILTERS (SUMMER/WINTER SEPARATED)
   ========================================================================== */
let currentSeason = 'summer';
let currentCategory = 'all';
const productsGrid = document.getElementById('products-grid');

function getSizesHTML(type) {
    if (type === 'clothes') {
        return `
            <select class="size-selector apple-select">
                <option value="">Size (XXS - XXL)</option>
                <option value="XXS">XXS</option><option value="XS">XS</option>
                <option value="S">S</option><option value="M">M</option>
                <option value="L">L</option><option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>`;
    } else if (type === 'shoes') {
        return `
            <select class="size-selector apple-select">
                <option value="">Size (US/EU)</option>
                <option value="US7">US 7 / EU 40</option>
                <option value="US8">US 8 / EU 41</option>
                <option value="US9">US 9 / EU 42.5</option>
                <option value="US10">US 10 / EU 44</option>
                <option value="US11">US 11 / EU 45</option>
            </select>`;
    }
    return '';
}

function renderProducts(productsToRender = null, isSearch = false) {
    productsGrid.innerHTML = '';
    
    let source;
    if (isSearch && productsToRender) {
        source = productsToRender;
    } else {
        source = productsDB[currentSeason] || [];
    }
    
    const filteredProducts = isSearch ? source : source.filter(product => {
        return currentCategory === 'all' ? true : product.category === currentCategory;
    });

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `<p style="text-align:center; color:var(--text-muted); grid-column:1/-1; padding:50px; font-size:1.2rem;">No products found.</p>`;
        return;
    }

    filteredProducts.forEach((product, index) => {
        const sizesHTML = getSizesHTML(product.type);
        
        const card = document.createElement('div');
        card.className = 'product-card apple-blur';
        card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.05}s`;
        card.style.opacity = '0';
        
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}" loading="lazy">
            <div class="prod-info">
                <h3>${product.name}</h3>
                <p class="price">$${product.price}.00</p>
                ${sizesHTML}
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})" data-i18n="btn_add">Add to Bag</button>
            </div>
        `;
        productsGrid.appendChild(card);
    });
    
    const currentLang = document.getElementById('lang-switcher').value;
    changeLanguage(currentLang);
}

document.querySelectorAll('.season-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        document.querySelectorAll('.season-tab').forEach(t => t.classList.remove('active'));
        e.currentTarget.classList.add('active');
        currentSeason = e.currentTarget.getAttribute('data-season');
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
   6. SEARCH BAR LOGIC
   ========================================================================== */
document.getElementById('search-input').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    if (query === '') {
        renderProducts();
        return;
    }
    
    const allProducts = [...productsDB.summer, ...productsDB.winter];
    const filtered = allProducts.filter(product => product.name.toLowerCase().includes(query));
    
    renderProducts(filtered, true);
});

/* ==========================================================================
   7. CHECKOUT FLOW MODALS
   ========================================================================== */
const checkoutOverlay = document.getElementById('checkout-overlay');
const creditCardModal = document.getElementById('credit-card-modal');
const successModal = document.getElementById('success-modal');

function openCheckoutModal() {
    checkoutOverlay.classList.remove('hidden');
}

document.getElementById('proceed-payment-btn').addEventListener('click', () => {
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    
    if (paymentMethod === 'cod') {
        checkoutOverlay.classList.add('hidden');
        successModal.classList.remove('hidden');
        cart = [];
        updateCartUI();
    } else if (paymentMethod === 'card') {
        checkoutOverlay.classList.add('hidden');
        creditCardModal.classList.remove('hidden');
    }
});

document.getElementById('pay-now-btn').addEventListener('click', () => {
    creditCardModal.classList.add('hidden');
    successModal.classList.remove('hidden');
    cart = [];
    updateCartUI();
});

document.getElementById('close-success-btn').addEventListener('click', () => {
    successModal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
    if (e.target === checkoutOverlay) checkoutOverlay.classList.add('hidden');
    if (e.target === creditCardModal) creditCardModal.classList.add('hidden');
    if (e.target === successModal) successModal.classList.add('hidden');
});

/* ==========================================================================
   8. INIT APP
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    changeLanguage('en');
    
    document.getElementById('lang-switcher').addEventListener('change', (e) => {
        changeLanguage(e.target.value);
    });
    
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Message Sent! Thank you.");
        e.target.reset();
    });
    
    document.querySelector('.subscribe-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Welcome to the Elite! You are subscribed.");
        e.target.reset();
    });
});
