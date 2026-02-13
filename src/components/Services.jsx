const ServiceCard = ({ title, price, desc }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#F5F5F0] hover:border-[#2D5016] hover:shadow-2xl transition-all duration-300 group">
    <div className="w-16 h-16 bg-gradient-to-br from-[#2D5016] to-[#4A7C2C] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <span className="text-3xl">🌿</span>
    </div>
    <h3 className="text-2xl font-bold text-[#8B6F47] mb-3">{title}</h3>
    <p className="text-4xl font-extrabold text-[#2D5016] mb-4">${price}</p>
    <p className="text-gray-600 text-base leading-relaxed mb-6">{desc}</p>
    <div className="flex items-center gap-2 text-sm text-[#4A7C2C] font-semibold bg-[#F5F5F0] px-4 py-2 rounded-lg">
      <span>✅</span> Disponible ahora
    </div>
  </div>
);

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2D5016] mb-3">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2D5016] to-[#4A7C2C] mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Terapias especializadas inspiradas en la naturaleza del sur de Chile</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            title="Terapia 40 Minutos" 
            price="3.500" 
            desc="Sesión completa de masaje térmico y acupresión para alivio profundo y restauración integral." 
          />
          <ServiceCard 
            title="Terapia 30 Minutos" 
            price="3.000" 
            desc="Ideal para mantenimiento y relajación muscular express con resultados efectivos." 
          />
          <ServiceCard 
            title="Evaluación Inicial" 
            price="Gratis" 
            desc="Primera visita para determinar el mejor tratamiento personalizado para tu columna." 
          />
        </div>
      </div>
    </section>
  );
}