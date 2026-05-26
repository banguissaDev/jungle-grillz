import Image from "next/image";
import Testimonials from "@/components/Testimonials";
export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-darkBrown font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-stone-900">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image src="/hero_bg.png" alt="Jungle Grillz Hero" fill className="object-cover opacity-80" priority />
        </div>

        {/* Navbar */}
        <nav className="relative z-20 flex justify-between items-center px-8 py-6 text-cream/90">
          <div className="flex items-center gap-3 cursor-pointer hover:text-white transition">
            <div className="flex flex-col gap-[5px]">
              <span className="w-6 h-[1px] bg-current"></span>
              <span className="w-6 h-[1px] bg-current"></span>
            </div>
            <span className="text-sm tracking-wide uppercase">Menu</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
               <Image src="/JUNGLE_LOGO.jpg" alt="Jungle Grillz Logo" fill className="object-cover" />
            </div>
            <div className="text-3xl font-serif tracking-wide text-white hidden sm:block">Jungle Grillz</div>
          </div>
          <div className="text-sm tracking-wide uppercase flex items-center gap-2 cursor-pointer hover:text-white transition">
            Order Now <span>→</span>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-20 flex-1 flex flex-col justify-end pb-24 px-8 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end w-full">
            <div className="max-w-3xl">
              <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-cream/80 mb-6">
                Premium Quality
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                Flame. Flavor.<br />
                <span className="font-serif italic font-normal text-cream/90">Jungle vibes</span>
              </h1>
            </div>
            
            <div className="mt-8 md:mt-0 max-w-xs flex flex-col items-start md:items-end text-left md:text-right">
              <p className="text-cream/80 text-sm md:text-base leading-relaxed mb-6">
                Delight in premium grilled food, cocktails & great atmosphere. Join us in Kigali.
              </p>
              <button className="bg-cream/90 hover:bg-white text-darkBrown px-6 py-3 rounded flex items-center gap-3 text-sm font-semibold transition">
                View Our Menu <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="flex flex-col">
            <h2 className="text-xs font-bold tracking-[0.15em] uppercase mb-16 text-darkBrown/60">About Us</h2>
            
            <div className="w-32 h-24 mb-12 relative overflow-hidden rounded-sm shadow-md">
              <Image src="/about_small.png" alt="Cocktail Bar" fill className="object-cover" />
            </div>

            <div className="max-w-md">
              <h3 className="text-4xl md:text-5xl font-serif italic mb-6">Flame Flavor<br/>Every Day <span className="text-sm font-sans not-italic text-darkBrown/50 align-top">[01]</span></h3>
              <p className="mb-6 text-sm md:text-base leading-relaxed text-darkBrown/80">
                At Jungle Grillz, we believe great food starts with passion. From early mornings to the final sear, every dish is crafted by hand using carefully selected ingredients. No shortcuts, just honest, delicious grilling.
              </p>
              <p className="mb-10 text-sm md:text-base leading-relaxed text-darkBrown/80">
                Whether you're stopping by for a Friday after work chill, or celebrating a special moment, we're here to make it unforgettable.
              </p>
              <button className="bg-accentBrown text-cream px-8 py-4 text-sm font-semibold hover:bg-darkBrown transition inline-flex items-center gap-3 rounded-sm">
                Our Process <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Column (Large Image) */}
          <div className="h-[600px] bg-stone-200 rounded-sm relative overflow-hidden shadow-xl">
             <Image src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Premium Grill" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Weekly Promos Section */}
      <section className="py-20 px-8 md:px-16 border-t border-darkBrown/10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-darkBrown/50 mb-3">Always Open</p>
          <h2 className="text-3xl md:text-4xl font-bold text-darkBrown leading-tight mb-4">
            Open <span className="font-serif italic font-normal">Every Day</span>
          </h2>
          <p className="text-sm md:text-base text-darkBrown/60 max-w-xl mx-auto leading-relaxed">
            We welcome you every day of the week — with <span className="font-semibold text-darkBrown/80">special promos</span> on the following days to make your experience even more unforgettable.
          </p>
        </div>

        {/* Promo Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="flex flex-col md:border-r border-darkBrown/10 md:pr-6">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Thursday</span>
            <span className="text-sm text-darkBrown/70 uppercase tracking-widest">Cocktail Promos</span>
          </div>
          <div className="flex flex-col md:border-r border-darkBrown/10 md:px-6">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Friday</span>
            <span className="text-sm text-darkBrown/70 uppercase tracking-widest">After Work Chill</span>
          </div>
          <div className="flex flex-col md:pl-6">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Sunday</span>
            <span className="text-sm text-darkBrown/70 uppercase tracking-widest">BBQ Party & Bottle Discounts</span>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-24 px-8 md:px-16 bg-[#F4F0E6] relative overflow-hidden">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-darkBrown/60 mb-4">Featured Menu</h2>
          <h3 className="text-4xl md:text-5xl">Our <span className="font-serif italic">Best Sellers</span> <span className="text-sm text-darkBrown/50 align-top">[02]</span></h3>
          <p className="text-sm text-darkBrown/60 mt-4 font-serif italic">The most popular picks from our grill</p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 relative z-10">
          <div className="text-4xl md:text-6xl hover:scale-105 transition duration-500 cursor-pointer flex items-baseline">
            <span className="font-bold mr-4">Premium</span> <span className="font-serif italic text-darkBrown/70">Tomahawk</span> <sup className="text-xs text-darkBrown/40 ml-2">[01]</sup>
          </div>
          <div className="text-4xl md:text-6xl hover:scale-105 transition duration-500 cursor-pointer flex items-baseline">
            <span className="font-bold mr-4">Jungle</span> <span className="font-serif italic text-darkBrown/70">Ribs</span> <sup className="text-xs text-darkBrown/40 ml-2">[02]</sup>
          </div>
          <div className="text-4xl md:text-6xl hover:scale-105 transition duration-500 cursor-pointer flex items-baseline">
            <span className="font-bold mr-4">Signature</span> <span className="font-serif italic text-darkBrown/70">Cocktails</span> <sup className="text-xs text-darkBrown/40 ml-2">[03]</sup>
          </div>
          <div className="text-4xl md:text-6xl hover:scale-105 transition duration-500 cursor-pointer flex items-baseline">
            <span className="font-bold mr-4">Fresh</span> <span className="font-serif italic text-darkBrown/70">Platters</span> <sup className="text-xs text-darkBrown/40 ml-2">[04]</sup>
          </div>
        </div>
        
        {/* Floating placeholder images */}
        <div className="absolute top-32 left-[10%] w-48 h-32 -rotate-6 rounded-sm shadow-xl overflow-hidden opacity-80 hover:opacity-100 transition z-0">
          <Image src="https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Tomahawk" fill className="object-cover" />
        </div>
        <div className="absolute top-48 right-[15%] w-40 h-48 rotate-6 rounded-sm shadow-xl overflow-hidden opacity-80 hover:opacity-100 transition z-0">
          <Image src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Cocktail" fill className="object-cover" />
        </div>
        
        <div className="mt-20 text-center relative z-10">
          <button className="bg-accentBrown text-cream px-6 py-3 text-xs font-semibold hover:bg-darkBrown transition inline-flex items-center gap-3 rounded-sm tracking-widest uppercase">
            See Full Menu <span>→</span>
          </button>
        </div>
      </section>

      {/* Signature Event Highlights (Matching Image 4 layout) */}
      <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="bg-[#2a2c24] text-cream p-8 md:p-16 rounded-sm relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
          {/* Left Large Image */}
          <div className="relative w-full lg:w-3/5 h-[400px] lg:h-[600px] rounded overflow-hidden shadow-2xl">
             <Image src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Jungle Grillz BBQ" fill className="object-cover" />
          </div>
          
          {/* Right Content */}
          <div className="relative w-full lg:w-2/5 flex flex-col justify-center">
             {/* Floating Polaroid */}
             <div className="w-64 bg-[#FDFBF7] p-4 pb-12 mb-12 shadow-2xl transform translate-x-4 -translate-y-8 rounded-sm relative z-10 hidden lg:block">
                <div className="relative w-full h-48 overflow-hidden rounded-sm">
                  <Image src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Signature Cocktail" fill className="object-cover" />
                </div>
                <p className="mt-4 text-center font-serif text-[#3B2F2F] text-xl">Signature Cocktail</p>
             </div>
             
             <div className="relative z-20">
               <p className="text-xs font-bold tracking-[0.15em] uppercase text-cream/70 mb-4 font-sans">SIGNATURE EVENT</p>
               <h3 className="text-5xl md:text-6xl lg:text-7xl font-sans mb-6 text-white tracking-tight leading-none">
                 Sunday <br/><span className="font-serif italic text-cream/90">BBQ Party</span> <sup className="text-sm font-sans font-normal text-cream/60 align-top ml-2">[03]</sup>
               </h3>
               <p className="text-sm md:text-base text-cream/80 leading-relaxed font-sans max-w-sm">
                 Join us every Sunday for the ultimate Jungle Grillz BBQ party. Enjoy exclusive discounts on bottles, cocktails, and special meat deals while soaking up the vibrant atmosphere.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials (Matching Image 1 layout) */}
      <Testimonials />

      {/* FAQ Section (Matching Image 2 layout) */}
      <section className="py-32 px-8 md:px-16 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans text-darkBrown tracking-tight mb-4">
            Frequently <span className="font-serif italic">Asked Questions</span>
          </h2>
          <p className="text-sm text-darkBrown/70">Common questions, simple answers.</p>
        </div>
        
        <div className="flex flex-col gap-4">
          {/* Active Item */}
          <div className="bg-[#3B231B] text-[#FDFBF7] p-8 rounded-sm">
            <div className="flex justify-between items-center cursor-pointer mb-4">
              <h4 className="text-lg font-medium tracking-wide">Do you accept large group reservations?</h4>
              <span className="text-xl">^</span>
            </div>
            <p className="text-sm text-cream/80 leading-relaxed max-w-2xl">
              Absolutely. We offer large tables and private sections for birthdays, corporate events, and special occasions. Please place your reservation at least 3-5 days in advance.
            </p>
          </div>
          
          {/* Inactive Items */}
          <div className="bg-transparent border border-darkBrown/20 text-darkBrown p-8 rounded-sm flex justify-between items-center cursor-pointer hover:bg-darkBrown/5 transition">
             <h4 className="text-lg font-medium tracking-wide">Do you grill fresh every day?</h4>
             <span className="text-xl">v</span>
          </div>
          <div className="bg-transparent border border-darkBrown/20 text-darkBrown p-8 rounded-sm flex justify-between items-center cursor-pointer hover:bg-darkBrown/5 transition">
             <h4 className="text-lg font-medium tracking-wide">Do you use authentic wood fire?</h4>
             <span className="text-xl">v</span>
          </div>
          <div className="bg-transparent border border-darkBrown/20 text-darkBrown p-8 rounded-sm flex justify-between items-center cursor-pointer hover:bg-darkBrown/5 transition">
             <h4 className="text-lg font-medium tracking-wide">Can I place an order online?</h4>
             <span className="text-xl">v</span>
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA (Matching Image 5 layout) */}
      <section className="relative w-full h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-black/50 z-10" />
           <Image src="https://images.unsplash.com/photo-1544025162-811114cd8032?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Grill Background" fill className="object-cover" />
        </div>
        <div className="relative z-20 text-center text-cream flex flex-col items-center px-4">
           <h2 className="text-5xl md:text-7xl font-sans mb-6 text-white tracking-tight drop-shadow-lg">
             Premium Grilled,<br/><span className="font-serif italic text-cream/90">Just for You</span>
           </h2>
           <p className="text-sm md:text-base text-cream/90 mb-10 tracking-wide font-medium">Order today and enjoy handcrafted meats and cocktails made fresh every evening.</p>
           <button className="bg-[#FDFBF7] text-[#3B1E16] px-8 py-4 text-sm font-semibold hover:bg-white transition inline-flex items-center gap-3 rounded-sm">
             See Full Menu <span>→</span>
           </button>
        </div>
      </section>

      {/* Footer Details (Matching Image 3 layout) */}
      <footer className="bg-[#2E1610] text-[#FDFBF7] pt-10 px-8 md:px-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 mb-8 lg:mb-12 relative z-10">
          <div className="max-w-sm">
             <h3 className="text-4xl md:text-5xl font-sans mb-6 tracking-tight leading-tight">Grilled to Perfection,<br/><span className="font-serif italic text-cream/90">Every Day</span></h3>
             <p className="text-sm text-cream/70 leading-relaxed mb-8 font-sans">Get the latest events, seasonal drinks, and exclusive offers delivered to your inbox.</p>
             <button className="bg-[#FDFBF7] text-[#2E1610] px-6 py-4 text-sm font-bold flex items-center gap-3 rounded-sm hover:bg-white transition">Subscribe Now <span>→</span></button>
          </div>
          
          <div className="flex flex-wrap gap-16 lg:gap-24 text-sm font-sans pt-4">
             <div className="flex flex-col gap-5">
                <span className="font-bold text-base mb-2">Product</span>
                <a href="#" className="text-cream/60 hover:text-white transition">Home</a>
                <a href="#" className="text-cream/60 hover:text-white transition">Our Story</a>
                <a href="#" className="text-cream/60 hover:text-white transition">Reservations</a>
                <a href="#" className="text-cream/60 hover:text-white transition">Contact Us</a>
             </div>
             <div className="flex flex-col gap-5">
                 <span className="font-bold text-base mb-2">Company</span>
                 <a href="#" className="text-cream/60 hover:text-white transition">About Us</a>
                 <a href="#" className="text-cream/60 hover:text-white transition">Careers</a>
                 <a href="#" className="text-cream/60 hover:text-white transition">Blog</a>
              </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-10 pb-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-sans">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-base text-white mb-1">Service Options</span>
              <span className="text-cream/60">All you can eat · Happy-hour food · Fireplace</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold text-base text-white mb-1">Address</span>
              <a href="https://maps.google.com/?q=KG+20+Ave+Kigali+Rwanda" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-white transition">KG 20 Ave, Kigali, Rwanda</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold text-base text-white mb-1">Phone</span>
              <a href="tel:+250791938593" className="text-cream/60 hover:text-white transition">+250 791 938 593</a>
            </div>
          </div>
        </div>

        {/* Logo & Brand at the bottom */}
        <div className="relative w-full flex flex-col items-center opacity-90 z-0 pb-6 -mt-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 mb-4">
            <Image src="/JUNGLE_LOGO.jpg" alt="Jungle Grillz Logo" fill className="object-cover" />
          </div>
          <span className="font-serif font-bold text-[10vw] leading-none tracking-tighter text-[#FDFBF7]">Jungle Grillz</span>
        </div>
      </footer>
    </div>
  );
}
