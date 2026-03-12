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
                <p className="text-[#F5F5F0]">21 de Mayo 364, Freire, Araucanía, Chile</p>
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
            <button className="flex-1 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#20BA5A] transition-colors shadow-lg flex items-center justify-center gap-2">
              <span>💬</span> WhatsApp
            </button>
          </div>
        </div>

        {/* Lado Derecho: Mapa */}
        <div className="h-96 bg-gray-300 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!4v1773335210075!6m8!1m7!1spxWVlyBJ4GSNXSPEcLVm0w!2m2!1d-38.95297499514745!2d-72.62719799682816!3f80.57510136206625!4f-6.580012063995397!5f0.4000000000000002" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
                title="Ubicación Terapias Esperanza">
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
            © 2026 Terapias Esperanza
          </p>
        </div>
      </div>
    </footer>
  );
}