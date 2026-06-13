const { useState, useEffect } = React;

// 1. طبقة الـ API المتقدمة لجلب البيانات (Asynchronous Mock API Service)
const FashionStoreAPI = {
    fetchProducts: async () => {
        // محاكاة تأخير الشبكة بـ 1.2 ثانية لتظهر شاشات التحميل الأنيقة
        await new Promise(resolve => setTimeout(resolve, 1200));
        return {
            shoes: [
                { id: 1, name: "Obsidian Cyber Sneaker", priceDA: 15500, icon: "fa-solid fa-shoe-prints" },
                { id: 2, name: "Velvet Burgundy Runner", priceDA: 13200, icon: "fa-solid fa-shoe-prints" },
                { id: 3, name: "Olive Earth Sole", priceDA: 14800, icon: "fa-solid fa-shoe-prints" },
                { id: 4, name: "Terracotta Tech Max", priceDA: 18500, icon: "fa-solid fa-shoe-prints" },
                { id: 5, name: "Champagne Platinum Boot", priceDA: 22000, icon: "fa-solid fa-shoe-prints" }
            ],
            winter: [
                { id: 6, name: "Luxury Burgundy Hoodie", priceDA: 8900, icon: "fa-solid fa-shirt" },
                { id: 7, name: "Olive Tech Puffer Jacket", priceDA: 14500, icon: "fa-solid fa-vest" },
                { id: 8, name: "Overcast Urban Hoodie", priceDA: 9500, icon: "fa-solid fa-shirt" },
                { id: 9, name: "Burnt Orange Parka V2", priceDA: 17000, icon: "fa-solid fa-id-card" },
                { id: 10, name: "Winter Fleece Sweatshirt", priceDA: 8200, icon: "fa-solid fa-shirt" }
            ],
            fitness: [
                { id: 11, name: "Earthy Olive Tank Top", priceDA: 3600, icon: "fa-solid fa-shirt" },
                { id: 12, name: "Burnt Orange Gym Vest", priceDA: 4100, icon: "fa-solid fa-shirt" },
                { id: 13, name: "Champagne Air Tank", priceDA: 3300, icon: "fa-solid fa-shirt" },
                { id: 14, name: "Premium Underwear Pack", priceDA: 5200, icon: "fa-solid fa-socks" },
                { id: 15, name: "Classic Cozy Socks Pack", priceDA: 2400, icon: "fa-solid fa-socks" }
            ]
        };
    }
};

// قاموس الترجمات الفورية
const dictionary = {
    en: {
        heroTitle: "NEXT-GEN<br><span>URBAN FASHION</span>",
        heroDesc: "Discover an elite, blazing fast immersive virtual interface optimized with React engine frameworks.",
        shelf1: "Premium Sneakers", shelf2: "Winter Hoodies & Jackets", shelf3: "Gym & Tank Tops",
        cartTitle: "Shopping Bag", total: "Total Amount:", checkout: "Confirm Checkout Order",
        f1: "Support Hub", f2: "Main Node", f3: "Secure Environment", btnText: "Add To Bag",
        empty: "Your shopping bag is completely empty."
    },
    ar: {
        heroTitle: "الجيل القادم من<br><span>الأزياء الحضرية</span>",
        heroDesc: "اكتشف واجهة افتراضية نخبوية فائقة السرعة معززة ومبنية بالكامل بمحرك ريآكت المتطور.",
        shelf1: "الأحذية الفاخرة", shelf2: "الهوديز والسترات الشتوية", shelf3: "الملابس الرياضية والكارينات",
        cartTitle: "حقيبة التسوق", total: "الإجمالي الكلي:", checkout: "تأكيد وإرسال الطلب",
        f1: "مركز الدعم", f2: "العقدة الرئيسية", f3: "بيئة برمجية آمنة", btnText: "أضف للسلة",
        empty: "حقيبة التسوق الخاصة بك فارغة تمامًا حاليًا."
    },
    fr: {
        heroTitle: "MODE URBAINE<br><span>NOUVELLE ÉRE</span>",
        heroDesc: "Découvrez une interface virtuelle d'élite et ultra-rapide optimisée avec l'architecture React.",
        shelf1: "Baskets Premium", shelf2: "Sweats à Capuche & Vestes", shelf3: "Débardeurs de Sport",
        cartTitle: "Panier", total: "Montant Total:", checkout: "Confirmer la Commande",
        f1: "Support", f2: "Nœud Principal", f3: "Espace Sécurisé", btnText: "Ajouter au Sac",
        empty: "Votre panier de shopping est complètement vide."
    },
    it: {
        heroTitle: "MODA URBANA<br><span>PROSSIMA GEN</span>",
        heroDesc: "Scopri un'interfaccia virtuale d'élite ed estremamente veloce ottimizzata con l'architettura React.",
        shelf1: "Sneakers Premium", shelf2: "Felpe con Cappuccio & Giacche", shelf3: "Abbigliamento Palestra",
        cartTitle: "Carrello", total: "Totale Complessivo:", checkout: "Procedi all'Ordine",
        f1: "Supporto", f2: "Nodo Principale", f3: "Ambiente Sicuro", btnText: "Aggiungi al Sacco",
        empty: "Il tuo carrello dello shopping è completamente vuoto."
    }
};

const rates = { DA: 1, USD: 0.0073, EUR: 0.0068 };
const symbols = { DA: "DA", USD: "$", EUR: "€" };

function App() {
    const [products, setProducts] = useState({ shoes: [], winter: [], fitness: [] });
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const [lang, setLang] = useState(localStorage.getItem('rLang') || 'en');
    const [currency, setCurrency] = useState(localStorage.getItem('rCurr') || 'DA');
    const [theme, setTheme] = useState(localStorage.getItem('rTheme') || 'dark');
    const [cartOpen, setCartOpen] = useState(false);

    // استدعاء الـ API عند تشغيل المكون
    useEffect(() => {
        async function loadData() {
            setLoading(true);
            try {
                const data = await FashionStoreAPI.fetchProducts();
                setProducts(data);
            } catch (err) {
                console.error("API Fetch Error", err);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('rTheme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    const handleLangChange = (e) => { setLang(e.target.value); localStorage.setItem('rLang', e.target.value); };
    const handleCurrencyChange = (e) => { setCurrency(e.target.value); localStorage.setItem('rCurr', e.target.value); };

    const addToCart = (product) => {
        setCart(prev => [...prev, product]);
        const icon = document.getElementById('main-bag-btn');
        if (icon) {
            icon.style.transform = 'scale(1.2)';
            setTimeout(() => icon.style.transform = 'scale(1)', 200);
        }
    };

    const removeFromCart = (index) => { setCart(prev => prev.filter((_, i) => i !== index)); };
    const formatPrice = (priceDA) => {
        const converted = (priceDA * rates[currency]).toFixed(currency === 'DA' ? 0 : 2);
        return `${Number(converted).toLocaleString()} ${symbols[currency]}`;
    };

    const checkoutOrder = () => {
        if (cart.length === 0) return alert(dictionary[lang].empty);
        alert(lang === 'ar' ? "✨ تم تأكيد طلبيتك بنجاح يا نادير!" : "✨ Order dispatched successfully!");
        setCart([]);
        setCartOpen(false);
    };

    const t = dictionary[lang];
    const isRTL = lang === 'ar';
    const totalSum = cart.reduce((sum, item) => sum + item.priceDA, 0);

    const SkeletonCard = () => (
        <div className="custom-card p-5 flex flex-col items-center space-y-4">
            <div className="skeleton-pulse w-full h-40"></div>
            <div className="skeleton-pulse w-3/4 h-5"></div>
            <div className="skeleton-pulse w-1/2 h-4"></div>
            <div className="skeleton-pulse w-full h-10 mt-2"></div>
        </div>
    );

    const ProductCard = ({ product }) => (
        <div className="custom-card p-5 flex flex-col justify-between text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <div>
                <div className="bg-[rgba(255,255,255,0.02)] rounded-xl h-40 flex items-center justify-center mb-4 border border-[rgba(255,255,255,0.01)]">
                    <i className={`${product.icon} text-5xl text-[var(--text-muted)] group-hover:text-[var(--color-orange)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}></i>
                </div>
                <h3 className="font-semibold text-sm tracking-wide truncate mb-2">{product.name}</h3>
            </div>
            <div>
                <p className="text-[var(--color-orange)] font-extrabold text-base mb-4">{formatPrice(product.priceDA)}</p>
                <button 
                    className="btn-bounce w-full border border-[var(--border-color)] hover:bg-[var(--color-burgundy)] hover:text-white hover:border-transparent py-2.5 text-xs font-bold uppercase tracking-wider"
                    style={{borderRadius: 'var(--radius-btn)'}}
                    onClick={() => addToCart(product)}
                >
                    {t.btnText}
                </button>
            </div>
        </div>
    );

    return (
        <div className={`min-h-screen flex flex-col ${isRTL ? 'rtl' : ''}`} style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
            
            {/* NAVBAR */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--panel-bg)] backdrop-blur-xl border-b border-[var(--border-color)] px-[6%] py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="brand-spinner w-5 h-5"></div>
                    <span className="font-extrabold text-xl tracking-widest bg-gradient-to-r from-[var(--text-main)] to-[var(--text-muted)] bg-clip-text text-transparent">BLACK STORE</span>
                </div>
                
                <div className="flex items-center gap-4">
                    <select value={currency} onChange={handleCurrencyChange} className="bg-[var(--panel-bg)] text-[var(--text-main)] border border-[var(--border-color)] text-xs px-2.5 py-1.5 rounded-lg outline-none cursor-pointer btn-bounce">
                        <option value="DA">DA (د.ج)</option>
                        <option value="USD">USD ($)</option>
                        <option value="EUR">EUR (€)</option>
                    </select>

                    <select value={lang} onChange={handleLangChange} className="bg-[var(--panel-bg)] text-[var(--text-main)] border border-[var(--border-color)] text-xs px-2.5 py-1.5 rounded-lg outline-none cursor-pointer btn-bounce">
                        <option value="en">EN</option>
                        <option value="ar">AR</option>
                        <option value="fr">FR</option>
                        <option value="it">IT</option>
                    </select>

                    <button onClick={toggleTheme} className="text-lg p-1.5 text-[var(--text-main)] btn-bounce">
                        <i className={`fa-solid ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`}></i>
                    </button>

                    <button id="main-bag-btn" onClick={() => setCartOpen(true)} className="relative p-2 text-lg text-[var(--text-main)] btn-bounce">
                        <i className="fa-solid fa-bag-shopping"></i>
                        {cart.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-[var(--color-orange)] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                {cart.length}
                            </span>
                        )}
                    </button>
                </div>
            </nav>

            {/* HERO */}
            <header className="pt-36 pb-16 px-6 text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6" dangerouslySetInnerHTML={{ __html: t.heroTitle }}></h1>
                <p className="text-[var(--text-muted)] text-sm md:text-base max-w-xl leading-relaxed">{t.heroDesc}</p>
            </header>

            {/* SHELVES */}
            <main className="px-[6%] py-6 flex-grow space-y-16">
                <section>
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-3 border-l-4 border-[var(--color-burgundy)] pl-3 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-3">
                        <i className="fa-solid fa-shoe-prints text-[var(--color-olive)]"></i> {t.shelf1}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {loading ? Array(5).fill(0).map((_, i) => <SkeletonCard key={i} />) : products.shoes.map(p => <ProductCard key={p.id} product={p} />)}
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-3 border-l-4 border-[var(--color-burgundy)] pl-3 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-3">
                        <i className="fa-solid fa-shirt text-[var(--color-olive)]"></i> {t.shelf2}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {loading ? Array(5).fill(0).map((_, i) => <SkeletonCard key={i} />) : products.winter.map(p => <ProductCard key={p.id} product={p} />)}
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-3 border-l-4 border-[var(--color-burgundy)] pl-3 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-3">
                        <i className="fa-solid fa-bolt text-[var(--color-olive)]"></i> {t.shelf3}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {loading ? Array(5).fill(0).map((_, i) => <SkeletonCard key={i} />) : products.fitness.map(p => <ProductCard key={p.id} product={p} />)}
                    </div>
                </section>
            </main>

            {/* CART SIDE PANEL */}
            <div className={`fixed top-0 w-80 md:w-96 h-full bg-[var(--bg-base)] z-50 p-6 flex flex-col justify-between shadow-2xl transition-all duration-400 ${cartOpen ? (isRTL ? 'left-0' : 'right-0') : (isRTL ? '-left-full' : '-right-full')}`} style={{ borderLeftWidth: isRTL ? '0' : '1px', borderRightWidth: isRTL ? '1px' : '0', borderColor: 'var(--border-color)' }}>
                <div>
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="font-bold text-lg">{t.cartTitle}</h3>
                        <i className="fa-solid fa-xmark text-xl cursor-pointer hover:rotate-90 transition-transform btn-bounce" onClick={() => setCartOpen(false)}></i>
                    </div>
                    <div className="space-y-4 overflow-y-auto max-h-[60vh]">
                        {cart.length === 0 ? (
                            <p className="text-xs text-[var(--text-muted)] text-center py-10">{t.empty}</p>
                        ) : cart.map((item, index) => (
                            <div key={index} className="flex justify-between items-center border-b border-[var(--border-color)] pb-3">
                                <div>
                                    <h4 className="text-xs font-semibold max-w-[180px] truncate">{item.name}</h4>
                                    <span className="text-[var(--color-orange)] text-xs font-bold">{formatPrice(item.priceDA)}</span>
                                </div>
                                <button onClick={() => removeFromCart(index)} className="text-red-700 hover:text-red-500 text-sm p-2 btn-bounce">
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border-t border-[var(--border-color)] pt-4">
                    <div className="flex justify-between font-bold text-sm mb-4">
                        <span>{t.total}</span>
                        <span>{formatPrice(totalSum)}</span>
                    </div>
                    <button onClick={checkoutOrder} className="btn-bounce w-full bg-[var(--color-orange)] text-white font-bold py-3 text-xs uppercase tracking-wider rounded-lg">
                        {t.checkout}
                    </button>
                </div>
            </div>

            {/* FOOTER */}
            <footer className="mt-20 border-t border-[var(--border-color)] bg-[rgba(0,0,0,0.1)] px-[6%] py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="custom-card p-6 text-center">
                        <i className="fa-solid fa-headset text-2xl text-[var(--color-olive)] mb-3"></i>
                        <h4 className="font-semibold text-sm mb-1">{t.f1}</h4>
                        <p className="text-[var(--text-muted)] text-xs">support@blackstore.hub</p>
                    </div>
                    <div className="custom-card p-6 text-center">
                        <i className="fa-solid fa-location-dot text-2xl text-[var(--color-olive)] mb-3"></i>
                        <h4 className="font-semibold text-sm mb-1">{t.f2}</h4>
                        <p className="text-[var(--text-muted)] text-xs">Yesser, Boumerdes (Orbit Mainframe)</p>
                    </div>
                    <div className="custom-card p-6 text-center">
                        <i className="fa-solid fa-shield-halved text-2xl text-[var(--color-olive)] mb-3"></i>
                        <h4 className="font-semibold text-sm mb-1">{t.f3}</h4>
                        <p className="text-[var(--text-muted)] text-xs">React State Controlled Architecture</p>
                    </div>
                </div>
                <div className="text-center text-xs text-[var(--text-muted)] pt-6 border-t border-[var(--border-color)]">
                    صنع بكامل الشغف والاتقان من طرف 🌟 <span className="text-[var(--color-orange)] font-bold">Nadir Salah Eddine</span> &copy; 2026
                </div>
            </footer>
        </div>
    );
}

// تشغيل محرك React وحقنه في الصفحة
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);