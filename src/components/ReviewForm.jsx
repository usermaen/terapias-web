import { useState } from 'react';

export default function ReviewForm({ onReviewSubmit }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: '', apellido: '', comentario: '', rating: 5
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = (e) => {
    e.preventDefault();
    if (formData.nombre && formData.apellido) setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando reseña:", formData);
    onReviewSubmit(formData);
    setStep(1);
    setFormData({ nombre: '', apellido: '', comentario: '', rating: 5 });
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-2xl shadow-xl border-2 border-[#F5F5F0]">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-[#2D5016] to-[#4A7C2C] rounded-full flex items-center justify-center">
          <span className="text-2xl">✍️</span>
        </div>
        <h3 className="text-2xl font-bold text-[#8B6F47]">Deja tu Reseña</h3>
      </div>
      
      {step === 1 ? (
        <form onSubmit={nextStep} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre</label>
            <input 
              type="text" 
              name="nombre" 
              placeholder="Ingresa tu nombre" 
              required
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#2D5016] focus:outline-none transition-colors" 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Apellido</label>
            <input 
              type="text" 
              name="apellido" 
              placeholder="Ingresa tu apellido" 
              required
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#2D5016] focus:outline-none transition-colors" 
              onChange={handleChange} 
            />
          </div>
          <button className="w-full bg-[#2D5016] text-white py-3 rounded-lg font-bold text-lg hover:bg-[#4A7C2C] transition-colors shadow-lg">
            Continuar →
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <p className="text-base text-gray-700 bg-[#F5F5F0] p-3 rounded-lg">
            Hola <span className="font-bold text-[#2D5016]">{formData.nombre}</span>, cuéntanos tu experiencia:
          </p>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Calificación</label>
            <select 
              name="rating" 
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#2D5016] focus:outline-none transition-colors" 
              onChange={handleChange}
            >
              <option value="5">⭐⭐⭐⭐⭐ (Excelente)</option>
              <option value="4">⭐⭐⭐⭐ (Muy Bueno)</option>
              <option value="3">⭐⭐⭐ (Bueno)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Tu comentario</label>
            <textarea 
              name="comentario" 
              placeholder="Comparte tu experiencia con nosotros..." 
              required
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#2D5016] focus:outline-none transition-colors" 
              rows="4" 
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex gap-3">
            <button 
              type="button" 
              onClick={() => setStep(1)} 
              className="w-1/3 text-gray-600 border-2 border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              ← Atrás
            </button>
            <button className="w-2/3 bg-[#8B6F47] text-white py-3 rounded-lg font-bold text-lg hover:bg-[#A68A64] transition-colors shadow-lg">
              Publicar Reseña
            </button>
          </div>
        </form>
      )}
    </div>
  );
}