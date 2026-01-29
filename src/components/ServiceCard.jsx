function ServiceCard({ title, description, icon: Icon }) {
  return (
    <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 hover:bg-sky-600 transition-all duration-300 ease-in-out">
      <div className="w-14 h-14 flex items-center justify-center bg-sky-100 text-sky-700 rounded-full text-2xl group-hover:bg-white group-hover:text-sky-600 transition-colors duration-300">
        {Icon && <Icon />}
      </div>

      <h3 className="mt-4 text-xl font-semibold text-slate-900 group-hover:text-white transition-colors duration-300">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-600 group-hover:text-sky-100 transition-colors duration-300">
        {description}
      </p>
      
      {/* Arrow indicator on hover */}
      <div className="mt-4 flex items-center text-sky-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
        <span className="text-sm font-medium">Learn more</span>
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}

export default ServiceCard;