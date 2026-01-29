function TestimonialCard({ name, feedback, image }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
      <div className="w-20 h-20 mx-auto mb-4">
        <img
          src={image || "https://via.placeholder.com/80"}
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <p className="text-slate-600 italic mb-2">"{feedback}"</p>
      <h3 className="text-slate-900 font-semibold">{name}</h3>
    </div>
  );
}

export default TestimonialCard;
