export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#A3130D] text-white shadow-sm">
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4">
        {/* Logo texte */}
        <a href="/" className="flex items-center gap-3">
          <span className="font-serif text-2xl md:text-3xl tracking-tight">Interno&nbsp;Living</span>
        </a>
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm md:text-base">
          <a href="#projects" className="hover:underline underline-offset-4">Projets</a>
          <a href="#services" className="hover:underline underline-offset-4">Services</a>
          <a href="#catalogue" className="hover:underline underline-offset-4">Catalogue</a>
          <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
          <a href="#devis" className="rounded-full bg-white text-[#A3130D] px-4 py-2 font-medium hover:bg-white/90">Devis</a>
        </nav>
        {/* Menu mobile */}
        <button className="md:hidden inline-flex items-center justify-center rounded p-2 ring-1 ring-white/30">
          <span className="sr-only">Ouvrir le menu</span>☰
        </button>
      </div>
    </header>
  );
}
