
import React from "react";

export default function App() {
  const suppliers = ["Cassina", "Molteni&C", "B&B Italia", "Vitra", "Flos"];
  const [filter, setFilter] = React.useState("Tous");
  const [cart, setCart] = React.useState([]);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const products = [
    { id:"p1", name:"Fauteuil LC2", supplier:"Cassina", img:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1500&auto=format&fit=crop" },
    { id:"p2", name:"Canapé Paul", supplier:"Molteni&C", img:"https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1500&auto=format&fit=crop" },
    { id:"p3", name:"Bibliothèque 606", supplier:"Vitra", img:"https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1500&auto=format&fit=crop" },
    { id:"p4", name:"Table Onda", supplier:"B&B Italia", img:"https://images.unsplash.com/photo-1555041469-8699ae9d3f5f?q=80&w=1500&auto=format&fit=crop" },
    { id:"p5", name:"Lampadaire Arco", supplier:"Flos", img:"https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1500&auto=format&fit=crop" }
  ];

  const visible = filter === "Tous" ? products : products.filter(p => p.supplier === filter);
  const addToCart = (p) => {
    if (!cart.find(c=>c.id===p.id)) setCart([...cart, p]);
  };
  const removeFromCart = (id) => setCart(cart.filter(c=>c.id!==id));

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/interno-living-logo.png" alt="INTERNO LIVING" className="h-8 w-auto" />
            </div>
            <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-wider uppercase">
              <a href="#projets" className="hover:opacity-60">Projets</a>
              <a href="#services" className="hover:opacity-60">Services</a>
              <a href="#catalogue" className="hover:opacity-60">Catalogue</a>
              <a href="#contact" className="hover:opacity-60">Contact</a>
            </nav>
            <button onClick={()=>setDrawerOpen(true)} className="text-[13px] uppercase tracking-wider underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900">
              Devis ({cart.length})
            </button>
          </div>
        </div>
      </header>

      {/* Catalogue */}
      <section id="catalogue" className="py-16 sm:py-24 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl">Catalogue</h2>
          <div className="flex flex-wrap gap-2 text-[12px] mt-4">
            <button onClick={()=>setFilter("Tous")} className={`px-3 py-2 rounded-full border ${filter==="Tous"?"border-neutral-900":"border-neutral-300"}`}>Tous</button>
            {suppliers.map(s=>(
              <button key={s} onClick={()=>setFilter(s)} className={`px-3 py-2 rounded-full border ${filter===s?"border-neutral-900":"border-neutral-300"}`}>{s}</button>
            ))}
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map(p=>(
              <article key={p.id} className="group border border-neutral-200 rounded-[24px] overflow-hidden bg-white">
                <img src={p.img} alt={p.name} className="h-56 w-full object-cover" />
                <div className="p-4">
                  <div className="text-[11px] uppercase tracking-widest text-neutral-500">{p.supplier}</div>
                  <h3 className="mt-1 font-medium">{p.name}</h3>
                  <div className="mt-3 flex items-center justify-between">
                    <button onClick={()=>addToCart(p)} className="text-[13px] underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900">Ajouter au devis</button>
                    <span className="text-xs text-neutral-500">Sur demande</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Drawer devis */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/30" onClick={()=>setDrawerOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl border-l border-neutral-200 p-6 overflow-y-auto">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl">Votre devis ({cart.length})</h3>
              <button onClick={()=>setDrawerOpen(false)} className="text-sm underline underline-offset-4">Fermer</button>
            </div>
            <ul className="mt-6 space-y-3">
              {cart.length===0 && <li className="text-sm text-neutral-500">Aucun article pour l’instant.</li>}
              {cart.map(item => (
                <li key={item.id} className="flex items-center justify-between border border-neutral-200 rounded-xl p-3">
                  <div>
                    <div className="text-sm font-medium">{item.name}</div>
                    <div className="text-xs text-neutral-500">{item.supplier}</div>
                  </div>
                  <button onClick={()=>removeFromCart(item.id)} className="text-xs underline underline-offset-4">Retirer</button>
                </li>
              ))}
            </ul>
            {cart.length>0 && (
              <div className="mt-6">
                <button className="w-full rounded-xl border border-neutral-900 px-4 py-3 text-[13px] uppercase tracking-wider">Demander un devis</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-neutral-600">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/interno-living-logo.png" alt="INTERNO LIVING" className="h-7 w-auto" />
              <div>
                <div className="font-serif text-neutral-900">INTERNO LIVING</div>
                <div className="text-xs">Intérieurs sur mesure — Suisse romande</div>
              </div>
            </div>
            <div className="flex items-center gap-6 text-xs">
              <a href="#" className="hover:text-neutral-900">Instagram</a>
              <a href="#" className="hover:text-neutral-900">LinkedIn</a>
              <a href="mailto:contact@internoliving.ch" className="hover:text-neutral-900">contact@internoliving.ch</a>
              <span>+41 22 000 00 00</span>
            </div>
          </div>
          <div className="mt-6 text-xs">© {new Date().getFullYear()} INTERNO LIVING — Tous droits réservés.</div>
        </div>
      </footer>
    </div>
  );
}
