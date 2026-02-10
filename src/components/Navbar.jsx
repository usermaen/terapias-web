export default function Navbar() {
  return (
    <nav className="bg-[#6d4c41] text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
            {/* Simulación de Logo */}
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#6d4c41] font-bold">S</div>
            <span className="text-xl font-bold">Terapias Seragem</span>
        </div>
        <ul className="hidden md:flex gap-6 font-medium">
          <li><a href="#inicio" className="hover:text-[#f2e8cf]">Inicio</a></li>
          <li><a href="#servicios" className="hover:text-[#f2e8cf]">Servicios</a></li>
          <li><a href="#resenas" className="hover:text-[#f2e8cf]">Reseñas</a></li>
          <li><a href="#ubicacion" className="hover:text-[#f2e8cf]">Ubicación</a></li>
        </ul>
      </div>
    </nav>
  );
}