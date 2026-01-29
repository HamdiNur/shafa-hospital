function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-16">

      {/* PAGE HEADER */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900">About Shafa Hospital</h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Providing modern, compassionate, and reliable healthcare to the people of Mogadishu.
        </p>
      </div>

      {/* OVERVIEW */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Our Overview</h2>
          <p className="mt-4 text-slate-600">
            Shafa Hospital is committed to delivering the highest standard of medical care
            with a focus on patient safety, comfort, and satisfaction. We combine experienced
            medical professionals with modern facilities to provide comprehensive healthcare.
          </p>
        </div>

        <div className="h-64 bg-sky-100 rounded-2xl flex items-center justify-center">
          <img
  src="/images/about.jfif"
  alt="Shafa Hospital"
  className="h-64 w-full rounded-2xl object-cover shadow-sm"
/>
        </div>
      </section>

      {/* MISSION, VISION, VALUES */}
      <section className="grid md:grid-cols-3 gap-10 text-center">
        <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-slate-900">Mission</h3>
          <p className="mt-3 text-slate-600 text-sm">
            Deliver high-quality healthcare with compassion, professionalism, and integrity.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-slate-900">Vision</h3>
          <p className="mt-3 text-slate-600 text-sm">
            To be the leading healthcare provider in Somalia, recognized for excellence and trust.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-slate-900">Values</h3>
          <p className="mt-3 text-slate-600 text-sm">
            Compassion, integrity, professionalism, and patient-centered care.
          </p>
        </div>
      </section>

      {/* HISTORY / CERTIFICATIONS */}
<section className="grid md:grid-cols-2 gap-10 items-center">
  <div className="rounded-2xl overflow-hidden shadow-sm max-h-80">
    <img
      src="/images/certificate2.png"
      alt="Hospital Certificate"
      className="w-full h-full object-contain bg-sky-100"
    />
  </div>

        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Our History & Certifications</h2>
          <p className="mt-4 text-slate-600">
            Founded in 2010, Shafa Hospital has grown to become one of Mogadishu’s most trusted
            healthcare institutions. We adhere to international quality standards and maintain
            multiple certifications to ensure patient safety and service excellence.
          </p>
        </div>
      </section>

    </div>
  );
}

export default About;
