function DoctorCard({ name, specialization, image, experience }) {
  return (
    <div className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group overflow-hidden">
      
      {/* Doctor Image */}
      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-sky-100 mb-4">
        <img src={image || "https://via.placeholder.com/150"} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Default Info */}
      <h3 className="text-xl font-semibold text-slate-900 text-center">{name}</h3>
      <p className="text-slate-600 text-center">{specialization}</p>
      {experience && <p className="text-sky-700 text-center mt-1 text-sm">{experience}+ years experience</p>}

      {/* Hover Overlay */}
      {/* <div className="absolute inset-0 bg-white bg-opacity-95 flex flex-col justify-center items-center p-4 text-center opacity-0 group-hover:opacity-100 transition duration-300">
        <p className="text-slate-700 mb-3">
          Highly skilled {specialization} with a focus on patient care and modern medical practices.
        </p>
        <button className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition">
          Book Appointment
        </button>
      </div> */}
    </div>
  );
}

export default DoctorCard;
