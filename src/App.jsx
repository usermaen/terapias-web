import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // El que hicimos antes
import Services from './components/Services';
import ReviewForm from './components/ReviewForm'; // El que hicimos antes
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

      {/* Sección de Reseñas */}
      <section id="resenas" className="py-16 bg-[#f2e8cf]/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#6d4c41] mb-10">
            Opiniones de nuestros pacientes
          </h2>
          
          <ReviewForm onReviewSubmit={handleNewReview} />
          
          <div className="mt-12">
            <ReviewList reviews={reviews} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;