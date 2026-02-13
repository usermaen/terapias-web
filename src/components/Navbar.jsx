export default function Navbar() {
  return (
    <nav className="bg-[#8B6F47] text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
            {/* Logo con estilo natural */}
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2D5016] font-bold text-xl shadow-md">
              S
            </div>
            <span className="text-2xl font-bold tracking-wide">Terapias Seragem</span>
        </div>
        <ul className="hidden md:flex gap-8 font-medium text-lg">
          <li><a href="#inicio" className="hover:text-[#F5F5F0] transition-colors border-b-2 border-transparent hover:border-white pb-1">Inicio</a></li>
          <li><a href="#servicios" className="hover:text-[#F5F5F0] transition-colors border-b-2 border-transparent hover:border-white pb-1">Servicios</a></li>
          <li><a href="#resenas" className="hover:text-[#F5F5F0] transition-colors border-b-2 border-transparent hover:border-white pb-1">Reseñas</a></li>
          <li><a href="#ubicacion" className="hover:text-[#F5F5F0] transition-colors border-b-2 border-transparent hover:border-white pb-1">Ubicación</a></li>
        </ul>
      </div>
    </nav>
  );
}