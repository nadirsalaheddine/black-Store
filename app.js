/* ==========================================================================
   1. API LAYER & DATABASE (محاكاة قاعدة البيانات وجلب البيانات الافتراضية)
   ========================================================================== */

// مصفوفة المنتجات الفخمة القادمة من السيرفر
const MOCK_API_DATABASE = [
    { id: 1, name: "Air Max Luxury Black", price: 120, category: "Nike", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80" },
    { id: 2, name: "Adidas UltraBoost Dark", price: 140, category: "Adidas", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80" },
    { id: 3, name: "Streetwear Cargo Core", price: 85, category: "High Street", img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500&q=80" },
    { id: 4, name: "Premium Aura Cap", price: 35, category: "Aura Series", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&q=80" },
    { id: 5, name: "Retro Puffer Jacket", price: 195, category: "High Street", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80" },
    { id: 6, name: "Air Force 1 Triple Black", price: 110, category: "Nike", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80" }
];

// دالة جلب البيانات بنظام الأسنك (Async/Await) لمحاكاة سيرفر حقيقي مع وقت شحن
async function fetchProductsFromAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(MOCK_API_DATABASE);
        }, 800); // تأخير صغيير (800ms) لإعطاء تجربة شحن حقيقية للمستخدم
    });
}

/* ==========================================================================
   2. GLOBAL STATE MANAGEMENT (إدارة حالة التطبيق: السلع والسلة)
   ========================================================================== */
let globalProducts = []; // لتخزين السلع القادمة من الـ API
let shoppingCart = [];   // لتخزين السلع المضافة للسلة

/* ==========================================================================
   3. DOM ELEMENTS RETRIEVAL (استدعاء عناصر الواجهة للتعديل عليها)
   ========================================================================== */
const productsTarget = document.getElementById('products-target');
const cartDrawer = document.getElementById('cart-drawer');
const openCartBtn = document.getElementById('open-cart-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartCountBadge = document.getElementById('cart-count');
const cartItemsTarget = document.getElementById('cart-items-target');
const cartTotalItems = document.getElementById('cart-total-items');
const cartTotalPrice = document.getElementById('cart-total-price');
const checkoutBtn = document.querySelector('.btn-checkout');

/* ==========================================================================
   4. RENDER ENGINE (محرك رسم السلع ديناميكياً داخل الـ HTML)
   ========================================================================== */

// دالة رسم كروت المنتجات في الصفحة الرئيسية حسب الفلتر المختار
function renderProducts(productsList) {
    productsTarget.innerHTML = ""; // تنظيف المكان أولاً

    if (productsList.length === 0) {
        productsTarget.innerHTML = `<p class="empty-msg">No products found in this drop.</p>`;
        return;
    }

    productsList.forEach(product => {
        // إنشاء عنصر div جديد لكل كرت
        const productCard = document.createElement('div');
        productCard.className = 'product-card glass-effect';
        
        // حقن كود الـ HTML المبرمج في المرحلة الأولى مع البيانات الديناميكية
        productCard.innerHTML = `
            <div class="img-container">
                <img src="${product.img}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">$${product.price}.00</p>
            </div>
            <button class="btn-add" data-id="${product.id}">
                <i class="fa-solid fa-plus"></i> Add To Bag
            </button>
        `;
        
        productsTarget.appendChild(productCard);
    });

    // ربط أكشن الأزرار فوراً بعد رسمها في الشاشة
    bindAddToCartEvents();
}

// دالة رسم وإدارة عناصر السلة الجانبية
function renderCart() {
    cartItemsTarget.innerHTML = ""; // تنظيف السلة الجانبية

    if (shoppingCart.length === 0) {
        cartItemsTarget.innerHTML = `
            <div class="empty-cart-msg">
                <i class="fa-solid fa-basket-shopping"></i>
                <p>Your bag is currently empty.</p>
            </div>
        `;
        checkoutBtn.disabled = true;
        return;
    }

    checkoutBtn.disabled = false; // تفعيل زر الدفع إذا كانت السلة معمرة

    shoppingCart.forEach(item => {
        const cartItemRow = document.createElement('div');
        cartItemRow.style.display = 'flex';
        cartItemRow.style.alignItems = 'center';
        cartItemRow.style.justifyContent = 'space-between';
        cartItemRow.style.marginBottom = '20px';
        cartItemRow.style.paddingBottom = '15px';
        cartItemRow.style.borderBottom = '1px solid var(--border-color)';

        cartItemRow.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px; width: 60%;">
                <img src="${item.img}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 10px;">
                <div style="overflow: hidden;">
                    <h4 style="font-size: 0.9rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.name}</h4>
                    <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">$${item.price} &times; ${item.quantity}</p>
                </div>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
                <button class="qty-btn" data-action="decrease" data-id="${item.id}" style="width:28px; height:28px; background:var(--bg-surface); border:1px solid var(--border-color); border-radius:6px;">-</button>
                <span style="font-size:0.9rem; font-weight:600;">${item.quantity}</span>
                <button class="qty-btn" data-action="increase" data-id="${item.id}" style="width:28px; height:28px; background:var(--bg-surface); border:1px solid var(--border-color); border-radius:6px;">+</button>
            </div>
        `;
        
        cartItemsTarget.appendChild(cartItemRow);
    });

    bindCartQtyEvents();
}

/* ==========================================================================
   5. CORE LOGIC & ACTIONS (العمليات الحسابية ومنطق الأزرار)
   ========================================================================== */

// إضافة منتج إلى السلة أو زيادة كميته
function addToCart(productId) {
    const product = globalProducts.find(p => p.id === productId);
    if (!product) return;

    const existingItem = shoppingCart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        shoppingCart.push({ ...product, quantity: 1 });
    }

    updateCartTotals();
    renderCart();
    
    // أنيميشن تلقائي: افتح السلة الجانبية فوراً عند إضافة منتج لتنبيه المشتري
    cartDrawer.classList.add('open');
}

// تعديل الكميات داخل السلة (زيادة / نقصان)
function handleQuantityChange(productId, action) {
    const item = shoppingCart.find(item => item.id === productId);
    if (!item) return;

    if (action === 'increase') {
        item.quantity += 1;
    } else if (action === 'decrease') {
        item.quantity -= 1;
        if (item.quantity <= 0) {
            // حذف العنصر تماماً من المصفوفة إذا لحق للصفر
            shoppingCart = shoppingCart.filter(item => item.id !== productId);
        }
    }

    updateCartTotals();
    renderCart();
}

// حساب المجاميع الكلية وتحديث شارات الأرقام (Badges)
function updateCartTotals() {
    let totalItems = 0;
    let totalPrice = 0;

    shoppingCart.forEach(item => {
        totalItems += item.quantity;
        totalPrice += (item.price * item.quantity);
    });

    // تحديث الأرقام في الـ DOM
    cartCountBadge.textContent = totalItems;
    cartTotalItems.textContent = totalItems;
    cartTotalPrice.textContent = `$${totalPrice}.00`;
}

/* ==========================================================================
   6. EVENT BINDING & FILTERS (ربط الأحداث وإعداد تصفية البراندات)
   ========================================================================== */

function bindAddToCartEvents() {
    const addButtons = document.querySelectorAll('.btn-add');
    addButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            addToCart(id);
        });
    });
}

function bindCartQtyEvents() {
    const qtyButtons = document.querySelectorAll('.qty-btn');
    qtyButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            const action = e.currentTarget.getAttribute('data-action');
            handleQuantityChange(id, action);
        });
    });
}

// إعداد فلاتر المنتجات (All, Nike, Adidas...) بالتنسيق مع المرحلة الأولى
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // حذف الـ Active Class من الأزرار الأخرى وإضافته للزر الحالي
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');

            const filterValue = e.currentTarget.textContent.trim();

            if (filterValue === "All Items") {
                renderProducts(globalProducts);
            } else {
                // تصفية المصفوفة حسب الفئة
                const filtered = globalProducts.filter(p => p.category === filterValue);
                renderProducts(filtered);
            }
        });
    });
}

// إعداد حركة فتح وغلق السلة الجانبية (Slide Effect) بالتنسيق مع الـ CSS3
function setupCartDrawer() {
    openCartBtn.addEventListener('click', () => {
        cartDrawer.classList.add('open');
    });

    closeCartBtn.addEventListener('click', () => {
        cartDrawer.classList.remove('open');
    });

    // غلق السلة تلقائياً إذا ضغط المستخدم خارجها للمرونة
    document.addEventListener('click', (e) => {
        if (!cartDrawer.contains(e.target) && !openCartBtn.contains(e.target) && cartDrawer.classList.contains('open')) {
            cartDrawer.classList.remove('open');
        }
    });
}

/* ==========================================================================
   7. INITIALIZATION (إقلاع التطبيق وتشغيل السيستم)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', async () => {
    // 1. تفعيل واجهة السلة الجانبية الفتح والغلق
    setupCartDrawer();
    
    // 2. إعداد مستمعي فلاتر البراندات
    setupFilters();

    // 3. تأثير الشحن البصري: وضع هيكل وهمي سريع قبل وصول السلع
    productsTarget.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">
            <i class="fa-solid fa-spinner fa-spin" style="font-size: 2rem; margin-bottom: 10px; color: var(--accent-red)"></i>
            <p style="font-family: var(--font-title); letter-spacing: 1px;">LOADING CURATED DROPS...</p>
        </div>
    `;

    // 4. استدعاء الـ API الحقيقي وجلب السلعة
    try {
        globalProducts = await fetchProductsFromAPI();
        renderProducts(globalProducts);
    } catch (error) {
        console.error("Failed to load products from API:", error);
        productsTarget.innerHTML = `<p class="empty-msg">Error loading products. Please refresh.</p>`;
    }
});