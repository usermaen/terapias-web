export default function ReviewList({ reviews }) {
  if (reviews.length === 0) return <p className="text-center text-gray-500">Sé el primero en opinar.</p>;

  return (
    <div className="grid md:grid-cols-3 gap-4 mt-8">
      {reviews.map((rev) => (
        <div key={rev.id} className="bg-white p-4 rounded-lg shadow border border-gray-100">
          <div className="flex justify-between items-start mb-2">
            <div>
                <h4 className="font-bold text-[#6d4c41]">{rev.nombre} {rev.apellido}</h4>
                <div className="text-yellow-500 text-sm">{"★".repeat(rev.rating)}</div>
            </div>
            <span className="text-xs text-gray-400">
                {new Date(rev.created_at).toLocaleDateString()}
            </span>
          </div>
          <p className="text-gray-600 text-sm italic">"{rev.comentario}"</p>
        </div>
      ))}
    </div>
  );
}