const ServiceCard = ({ title, price, desc }) => (
  <div className="bg-[#fdfbf7] p-6 rounded-xl shadow-lg border-t-4 border-[#4f772d] hover:shadow-xl transition-shadow">
    <h3 className="text-xl font-bold text-[#6d4c41] mb-2">{title}</h3>
    <p className="text-3xl font-extrabold text-[#4f772d] mb-4">${price}</p>
    <p className="text-gray-600 text-sm mb-4">{desc}</p>
    <div className="flex items-center gap-2 text-sm text-green-700 font-semibold">
      <span>✅</span> Disponible ahora
    </div>
  </div>
);

export default function Services() {
  return (
    <section id="servicios" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#4f772d] mb-2">Nuestros Servicios</h2>
        <p className="text-gray-600 mb-10">Terapias especializadas y manejo del dolor.</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard 
            title="Terapia 40 Minutos" 
            price="3.500" 
            desc="Sesión completa de masaje térmico y acupresión para alivio profundo." 
          />
          <ServiceCard 
            title="Terapia 30 Minutos" 
            price="3.000" 
            desc="Ideal para mantenimiento y relajación muscular express." 
          />
          <ServiceCard 
            title="Evaluación Inicial" 
            price="Gratis" 
            desc="Primera visita para determinar el mejor tratamiento para tu columna." 
          />
        </div>
      </div>
    </section>
  );
}