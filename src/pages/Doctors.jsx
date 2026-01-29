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

  const categories = ["All", "Heart", "Surgery", "Pediatrics", "Neurology"]; // example

  // Filter doctors based on category & search
  const filteredDoctors = doctors.filter(
    d =>
      (category === "All" || d.category === category) &&
      d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-10">
      {/* PAGE HEADER */}
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h1 className="text-4xl font-bold text-slate-900">Our Doctors</h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Meet our experienced and qualified medical team ready to provide quality care.
        </p>
      </motion.div>

      {/* FILTERS */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
        {/* Category Filter */}
        <div className="flex gap-4 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-lg font-medium ${
                category === cat ? "bg-sky-600 text-white" : "bg-slate-100 text-slate-700"
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by name..."
          className="px-4 py-2 border rounded-lg w-full sm:w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* DOCTORS GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
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
          <p className="col-span-full text-center text-slate-500">
            No doctors found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Doctors;
