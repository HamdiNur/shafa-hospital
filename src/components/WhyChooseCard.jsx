export default function WhyChooseCard({ title, description, icon: Icon }) {
  return (
    <div className="bg-gradient-to-b from-sky-50 to-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-center border-t-4 border-sky-500">
      <div className="w-16 h-16 mx-auto flex items-center justify-center bg-white rounded-full text-sky-600 text-3xl mb-4 shadow-sm">
        {Icon && <Icon />}
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}