export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#F5F5F0] py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2D5016] leading-tight">
            Equilibrio y Bienestar Natural para tu Columna
          </h1>
          <p className="text-gray-700 text-xl leading-relaxed">
            Técnicas especializadas para el dolor y bienestar integral con la esencia natural del sur de Chile.
          </p>
          <button className="mt-8 bg-[#2D5016] text-white px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:bg-[#4A7C2C] hover:scale-105 transition-all duration-300">
            Reserva tu hora
          </button>
        </div>
        <div className="flex-1">
          <img 
            src="/camilla-seragem.jpg" 
            alt="Local Terapias" 
            className="rounded-3xl shadow-2xl border-8 border-white hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      
      {/* Decoración sutil */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#2D5016] via-[#4A7C2C] to-[#2D5016]"></div>
    </section>
  );
}