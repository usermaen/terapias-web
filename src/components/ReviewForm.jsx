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
    // Aquí harías el fetch POST a tu backend en Render
    console.log("Enviando reseña:", formData);
    onReviewSubmit(formData);
    setStep(1); // Reset
    setFormData({ nombre: '', apellido: '', comentario: '', rating: 5 });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md border border-brand-beige">
      <h3 className="text-xl font-bold text-brand-brown mb-4">Deja tu Reseña</h3>
      
      {step === 1 ? (
        <form onSubmit={nextStep} className="space-y-4">
          <input 
            type="text" name="nombre" placeholder="Nombre" required
            className="w-full p-2 border rounded" onChange={handleChange} 
          />
          <input 
            type="text" name="apellido" placeholder="Apellido" required
            className="w-full p-2 border rounded" onChange={handleChange} 
          />
          <button className="w-full bg-brand-green text-white py-2 rounded font-bold hover:bg-opacity-90">
            Continuar
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-sm text-gray-600">Hola {formData.nombre}, cuéntanos tu experiencia:</p>
          <select name="rating" className="w-full p-2 border rounded" onChange={handleChange}>
            <option value="5">⭐⭐⭐⭐⭐ (Excelente)</option>
            <option value="4">⭐⭐⭐⭐ (Muy Bueno)</option>
            <option value="3">⭐⭐⭐ (Bueno)</option>
          </select>
          <textarea 
            name="comentario" placeholder="Tu comentario..." required
            className="w-full p-2 border rounded" rows="3" onChange={handleChange}
          ></textarea>
          <div className="flex gap-2">
            <button type="button" onClick={() => setStep(1)} className="w-1/3 text-gray-500 underline text-sm">Atrás</button>
            <button className="w-2/3 bg-brand-brown text-white py-2 rounded font-bold">Publicar</button>
          </div>
        </form>
      )}
    </div>
  );
}