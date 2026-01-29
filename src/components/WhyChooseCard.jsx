export default function WhyChooseCard({ title, description, icon: Icon }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-center">
      <div className="w-16 h-16 mx-auto flex items-center justify-center bg-sky-100 rounded-full text-sky-700 text-3xl mb-4">
        {Icon && <Icon />}
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm text-slate-600">{description}</p>
    </div>
  );
}
