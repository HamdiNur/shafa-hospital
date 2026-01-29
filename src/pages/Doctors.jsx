import { useState } from "react";
import { motion } from "framer-motion";
import DoctorCard from "../components/DoctorCard";
import doctors from "../data/doctors";

function Doctors() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const categories = ["All", ...new Set(doctors.map(d => d.category))];

  const filteredDoctors = doctors.filter(d =>
    (category === "All" || d.category === category) &&
    d.name.toLowerCase().replace(/\./g, "").includes(search.toLowerCase().replace(/\./g, ""))
  );

  return (
    <div className="space-y-0">

      {/* PAGE HEADER */}
      <div className="bg-gradient-to-b from-sky-50 to-white py-20 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="inline-block bg-sky-100 text-sky-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Medical Team
          </span>
          <h1 className="text-4xl font-bold text-slate-800">
            Our <span className="text-sky-600">Doctors</span>
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Meet our experienced and qualified medical team ready to provide quality care.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">

        {/* FILTERS */}
        <div className="bg-slate-50 p-6 rounded-2xl">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            
            {/* Category Pills */}
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category === cat 
                      ? "bg-sky-600 text-white shadow-md shadow-sky-600/25" 
                      : "bg-white text-slate-600 hover:bg-sky-100 hover:text-sky-700 border border-slate-200"
                  }`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search with Icon */}
            <div className="relative w-full lg:w-72">
              <svg 
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search by name..."
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* DOCTORS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <motion.div
                key={doctor.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <DoctorCard {...doctor} />
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-slate-500 py-12">
              No doctors found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Doctors;