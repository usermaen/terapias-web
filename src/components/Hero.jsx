export default function Hero() {
  return (
    <section className="relative bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-green leading-tight">
            Equilibrio y Bienestar Natural para tu Columna
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Técnicas especializadas para el dolor y bienestar integral.
          </p>
          <button className="mt-8 bg-brand-green text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:scale-105 transition-transform">
            Reserva tu hora
          </button>
        </div>
        <div className="flex-1">
          <img 
            src="/camilla-seragem.jpg" 
            alt="Local Terapias" 
            className="rounded-[40px] shadow-2xl border-8 border-white"
          />
        </div>
      </div>
    </section>
  );
}