export default function Footer() {
  return (
    <footer id="ubicacion" className="bg-[#8B6F47] text-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Lado Izquierdo: Datos */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-4xl">📍</span>
            Ubicación y Contacto
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
              <div className="w-12 h-12 bg-[#2D5016] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📍</span>
              </div>
              <div>
                <p className="font-semibold text-lg">Dirección</p>
                <p className="text-[#F5F5F0]">Calle Principal 123, Tu Ciudad, Chile</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
              <div className="w-12 h-12 bg-[#2D5016] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📞</span>
              </div>
              <div>
                <p className="font-semibold text-lg">Teléfono</p>
                <p className="text-[#F5F5F0]">+56 9 9928 3805</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
              <div className="w-12 h-12 bg-[#2D5016] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">⏰</span>
              </div>
              <div>
                <p className="font-semibold text-lg">Horario</p>
                <p className="text-[#F5F5F0]">Lunes a Viernes: 9:00 - 19:00</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 flex gap-4">
            {/* Botones Sociales */}
            <button className="flex-1 bg-white text-[#8B6F47] px-6 py-3 rounded-xl font-bold hover:bg-[#F5F5F0] transition-colors shadow-lg flex items-center justify-center gap-2">
              <span>📸</span> Instagram
            </button>
            <button className="flex-1 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#20BA5A] transition-colors shadow-lg flex items-center justify-center gap-2">
              <span>💬</span> WhatsApp
            </button>
          </div>
        </div>

        {/* Lado Derecho: Mapa */}
        <div className="h-96 bg-gray-300 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.0!2d-70.6!3d-33.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI3JzAwLjAiUyA3MMKwMzYnMDAuMCJX!5e0!3m2!1ses!2scl!4v1600000000000!5m2!1ses!2scl" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
                title="Ubicación Terapias Seragem">
            </iframe>
        </div>

      </div>
      
      {/* Copyright con decoración natural */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="mt-12 pt-8 border-t-2 border-white/20 text-center">
          <div className="flex items-center justify-center gap-2 text-[#F5F5F0] mb-2">
            <span className="text-2xl">🌿</span>
            <span className="text-sm font-medium">Inspirados en la naturaleza del sur de Chile</span>
            <span className="text-2xl">🌿</span>
          </div>
          <p className="text-sm text-white/60">
            © 2026 Terapias Seragem - Desarrollado por Felipe
          </p>
        </div>
      </div>
    </footer>
  );
}