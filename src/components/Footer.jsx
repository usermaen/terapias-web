export default function Footer() {
  return (
    <footer id="ubicacion" className="bg-[#6d4c41] text-[#f2e8cf] py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Lado Izquierdo: Datos */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Ubicación y Contacto</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="bg-[#4f772d] p-2 rounded-full">📍</span>
              <p>Calle Principal 123, Tu Ciudad, Chile</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-[#4f772d] p-2 rounded-full">📞</span>
              <p>+56 9 9928 3805</p>
            </div>
            <div className="flex items-center gap-3">
                <span className="bg-[#4f772d] p-2 rounded-full">⏰</span>
                <p>Lunes a Viernes: 9:00 - 19:00</p>
            </div>
          </div>
          
          <div className="mt-8 flex gap-4">
            {/* Botones Sociales */}
            <button className="bg-white text-[#6d4c41] px-4 py-2 rounded font-bold hover:bg-gray-200 transition">Instagram</button>
            <button className="bg-[#25D366] text-white px-4 py-2 rounded font-bold hover:bg-opacity-80 transition">WhatsApp</button>
          </div>
        </div>

        {/* Lado Derecho: Mapa (Google Maps Embed) */}
        <div className="h-64 bg-gray-300 rounded-xl overflow-hidden shadow-2xl">
            {/* REEMPLAZA ESTE IFRAME con el de tu dirección real de Google Maps */}
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.0!2d-70.6!3d-33.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI3JzAwLjAiUyA3MMKwMzYnMDAuMCJX!5e0!3m2!1ses!2scl!4v1600000000000!5m2!1ses!2scl" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy">
            </iframe>
        </div>

      </div>
      <div className="text-center mt-12 text-sm opacity-50">
        © 2026 Terapias Seragem - Desarrollado por Pipe
      </div>
    </footer>
  );
}