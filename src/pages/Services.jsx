import ServiceCard from "../components/ServiceCard";
import services from "../data/services";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-slate-900">Our Departments</h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Explore all of Shafa Hospital's medical departments and services.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <motion.div
            key={service.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon} // update ServiceCard to accept icon
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
