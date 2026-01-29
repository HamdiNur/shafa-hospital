function ServiceCard({ title, description, icon: Icon  }) {
return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="w-14 h-14 flex items-center justify-center bg-sky-100 text-sky-700 rounded-full text-2xl">
        {/* Call the icon as a component */}
        {Icon && <Icon />}
      </div>

      <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </div>
  );
}


export default ServiceCard;
