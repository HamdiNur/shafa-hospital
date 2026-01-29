import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from "react-icons/md";
import { motion } from "framer-motion";

function Contact() {
  const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  const contactInfo = [
    { icon: MdLocationOn, title: "Address", text: "Shafa Hospital, Mogadishu, Somalia" },
    { icon: MdPhone, title: "Phone", text: "+252 61 000 0000" },
    { icon: MdEmail, title: "Email", text: "info@shafahospital.so" },
    { icon: MdAccessTime, title: "Working Hours", text: "Mon - Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM\nSun: Closed" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-20">
      
      {/* PAGE HEADER */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Contact Us</h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Get in touch with Shafa Hospital for appointments, inquiries, or emergencies.
        </p>
      </div>

      {/* CONTACT INFO & MAP */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left - Info Cards */}
        <div className="grid grid-cols-1 gap-6">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={idx}
                className="flex items-start space-x-4 bg-sky-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-sky-100 text-sky-700 rounded-full text-2xl">
                  <Icon />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{info.title}</h3>
                  <p className="mt-1 text-slate-600 whitespace-pre-line">{info.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right - Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
          className="h-80 md:h-full bg-sky-100 rounded-2xl flex items-center justify-center shadow-md"
        >
          <span className="text-sky-600 font-medium">Google Map Placeholder</span>
        </motion.div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-white p-8 md:p-12 rounded-2xl shadow-md">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Send Us a Message
        </motion.h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-slate-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-slate-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border border-slate-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-sky-400 md:col-span-2"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="border border-slate-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-sky-400 md:col-span-2"
          />
          <button
            type="submit"
            className="bg-sky-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-sky-700 transition md:col-span-2"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
