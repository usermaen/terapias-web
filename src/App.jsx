import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';
import Footer from './components/Footer';

// URL de tu backend (cámbiala cuando despliegues en Render)
const API_URL = 'http://localhost:3000'; 

function App() {
  const [reviews, setReviews] = useState([]);

  // Cargar reseñas al inicio
  const fetchReviews = async () => {
    try {
      const res = await fetch(`${API_URL}/resenas`);
      const data = await res.json();
      setReviews(data);
    } catch (error) {
      console.error("Error cargando reseñas:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Función para manejar nueva reseña
  const handleNewReview = async (formData) => {
    try {
      const res = await fetch(`${API_URL}/resenas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        fetchReviews(); // Recargar la lista
        alert("¡Gracias por tu reseña!");
      }
    } catch (error) {
      alert("Error al enviar reseña");
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <div id="inicio">
        <Hero />
      </div>

      <Services />

      {/* Sección de Reseñas con fondo natural */}
      <section id="resenas" className="py-20 bg-gradient-to-b from-[#F5F5F0] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2D5016] mb-3">
              Opiniones de nuestros pacientes
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2D5016] to-[#4A7C2C] mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">
              Conoce las experiencias de quienes han confiado en nosotros
            </p>
          </div>
          
          <ReviewForm onReviewSubmit={handleNewReview} />
          
          <div className="mt-16">
            <ReviewList reviews={reviews} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;