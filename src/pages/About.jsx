import { motion } from "framer-motion";

function About() {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="space-y-0">

      {/* PAGE HEADER */}
      <motion.div
        className="bg-gradient-to-b from-sky-50 to-white py-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <span className="inline-block bg-sky-100 text-sky-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
          About Us
        </span>
        <h1 className="text-4xl font-bold text-slate-800">
          About <span className="text-sky-600">Shafa Hospital</span>
        </h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Providing modern, compassionate, and reliable healthcare to the people of Mogadishu.
        </p>
      </motion.div>

      {/* OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="w-12 h-1 bg-sky-500 rounded mb-4"></div>
            <h2 className="text-2xl font-semibold text-slate-800">
              Our <span className="text-sky-600">Overview</span>
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Shafa Hospital is committed to delivering the highest standard of medical care
              with a focus on patient safety, comfort, and satisfaction. We combine experienced
              medical professionals with modern facilities to provide comprehensive healthcare.
            </p>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-64 bg-sky-100 rounded-2xl flex items-center justify-center overflow-hidden"
          >
            <img
              src="/images/about.jfif"
              alt="Shafa Hospital"
              className="h-64 w-full rounded-2xl object-cover shadow-sm hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              className="text-2xl font-semibold text-slate-800"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              What <span className="text-sky-600">Drives Us</span>
            </motion.h2>
            <motion.p
              className="mt-2 text-slate-600"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Our core principles guide everything we do
            </motion.p>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Mission */}
            <motion.div variants={fadeUp} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-sky-500">
              <div className="w-14 h-14 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Mission</h3>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                Deliver high-quality healthcare with compassion, professionalism, and integrity.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div variants={fadeUp} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-sky-500">
              <div className="w-14 h-14 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Vision</h3>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                To be the leading healthcare provider in Somalia, recognized for excellence and trust.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div variants={fadeUp} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-sky-500">
              <div className="w-14 h-14 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Values</h3>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                Compassion, integrity, professionalism, and patient-centered care.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HISTORY / CERTIFICATIONS */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-2xl overflow-hidden shadow-sm max-h-80">
            <img
              src="/images/certificate2.png"
              alt="Hospital Certificate"
              className="w-full h-full object-contain bg-sky-100"
            />
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="w-12 h-1 bg-sky-500 rounded mb-4"></div>
            <h2 className="text-2xl font-semibold text-slate-800">
              Our History & <span className="text-sky-600">Certifications</span>
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Founded in 2010, Shafa Hospital has grown to become one of Mogadishu's most trusted
              healthcare institutions. We adhere to international quality standards and maintain
              multiple certifications to ensure patient safety and service excellence.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
