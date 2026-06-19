// تعريف المنتجات الفخمة في المتجر
const PRODUCTS = [
    { id: 1, name: "Air Max Luxury Black", price: 120, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80", tag: "Nike" },
    { id: 2, name: "Adidas UltraBoost Dark", price: 140, img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80", tag: "Adidas" },
    { id: 3, name: "Streetwear Cargo Core", price: 85, img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500&q=80", tag: "High Street" },
    { id: 4, name: "Premium Aura Cap", price: 35, img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&q=80", tag: "Aura" }
];

function App() {
    // استعمال الـ Hooks عن طريق كائن React مباشرة لتفادي مشاكل الـ CDN
    const [cart, setCart] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [currency, setCurrency] = React.useState("USD");

    // محاكاة جلب البيانات (Mock API) لتشغيل الـ Skeleton Loader لمدة ثانية
    React.useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    // إضافة منتج للسلة
    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    // حساب السعر الإجمالي حسب العملة المختار
    const getPrice = (priceInUSD) => {
        if (currency === "DA") return `${priceInUSD * 220} DA`;
        if (currency === "EUR") return `${(priceInUSD * 0.92).toFixed(0)} €`;
        return `$${priceInUSD}`;
    };

    return (
        <div class="min-h-screen flex flex-col justify-between p-4 md:p-8">
            {/* الهيدر / شريط التنقل */}
            <header class="glass-panel rounded-2xl p-4 flex justify-between items-center mb-8">
                <h1 class="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                    <i class="fa-solid fa-shop mr-2 text-red-500"></i> BLACK STORE
                </h1>
                
                {/* أدوات التحكم: العملات والسلة */}
                <div class="flex items-center gap-4">
                    <select 
                        value={currency} 
                        onChange={(e) => setCurrency(e.target.value)}
                        class="bg-black border border-gray-800 text-white rounded-lg p-1 text-sm outline-none cursor-pointer"
                    >
                        <option value="USD">USD ($)</option>
                        <option value="DA">DA (د.ج)</option>
                        <option value="EUR">EUR (€)</option>
                    </select>

                    <div class="relative cursor-pointer btn-bounce">
                        <i class="fa-solid fa-bag-shopping text-xl text-gray-300"></i>
                        {cart.length > 0 && (
                            <span class="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                                {cart.length}
                            </span>
                        )}
                    </div>
                </div>
            </header>

            {/* محتوى المتجر الرئيسي */}
            <main class="flex-grow">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {loading ? (
                        // حالة الشحن: يعرض كروت وهمية تتحرك (Skeleton)
                        Array(4).fill(0).map((_, idx) => (
                            <div key={idx} class="glass-panel rounded-2xl p-4 h-80 flex flex-col justify-between">
                                <div class="skeleton w-full h-40 rounded-xl"></div>
                                <div class="skeleton w-3/4 h-6 rounded mt-4"></div>
                                <div class="skeleton w-1/2 h-4 rounded mt-2"></div>
                                <div class="skeleton w-full h-10 rounded-xl mt-4"></div>
                            </div>
                        ))
                    ) : (
                        // حالة اكتمال الشحن: يعرض المنتجات الحقيقية
                        PRODUCTS.map(prod => (
                            <div key={prod.id} class="glass-panel rounded-2xl p-4 flex flex-col justify-between hover:border-gray-700 transition-all duration-300">
                                <div class="relative overflow-hidden rounded-xl bg-neutral-900 group">
                                    <img src={prod.img} alt={prod.name} class="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <span class="absolute top-2 left-2 bg-black/70 text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-md text-gray-400">
                                        {prod.tag}
                                    </span>
                                </div>
                                <div class="mt-4">
                                    <h3 class="font-bold text-gray-200 truncate">{prod.name}</h3>
                                    <p class="text-lg font-black text-white mt-1">{getPrice(prod.price)}</p>
                                </div>
                                <button 
                                    onClick={() => addToCart(prod)}
                                    class="w-full bg-white text-black font-bold py-2.5 rounded-xl mt-4 text-sm btn-bounce hover:bg-gray-200 transition-colors"
                                >
                                    <i class="fa-solid fa-plus mr-1"></i> Add To Bag
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </main>

            {/* الفوتر الأسفل */}
            <footer class="text-center text-xs text-gray-600 mt-12 pt-4 border-t border-neutral-900">
                <p>Designed with absolute precision by nadirsalahddine &copy; 2026</p>
            </footer>
        </div>
    );
}

// تشغيل وتفعيل الـ React 18 داخل الـ Root Div المبرمج في الـ HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
