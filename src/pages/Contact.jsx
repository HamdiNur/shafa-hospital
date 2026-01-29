import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from "react-icons/md";
import { motion } from "framer-motion";

function Contact() {
  const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const contactInfo = [
  { icon: MdLocationOn, title: "Address", text: "Shafa Hospital, Mogadishu, Somalia" },
  { icon: MdPhone, title: "Phone", text: "+252 61 000 0000" },
  { icon: MdEmail, title: "Email", text: "info@shafahospital.so" },
  { 
    icon: MdAccessTime, 
    title: "Working Hours", 
    text: "Emergency Services: Open 24/7\nOutpatient Departments: Mon - Fri: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM" 
  }
];

  return (
    <div className="space-y-0">

      {/* PAGE HEADER */}
      <div className="bg-gradient-to-b from-sky-50 to-white py-20 text-center">
        <span className="inline-block bg-sky-100 text-sky-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
          Get in Touch
        </span>
        <h1 className="text-4xl font-bold text-slate-800">
          Contact <span className="text-sky-600">Us</span>
        </h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Get in touch with Shafa Hospital for appointments, inquiries, or emergencies.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">

        {/* CONTACT INFO & MAP */}
        <section className="grid md:grid-cols-2 gap-10 items-start">
          
          {/* Left - Info Cards */}
          <div className="grid grid-cols-1 gap-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={idx}
                  className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-sky-200 transition"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-sky-100 text-sky-600 rounded-full text-2xl">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">{info.title}</h3>
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
            className="h-80 md:h-full min-h-[400px] bg-sky-100 rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src="/images/map.jfif"
              alt="Shafa Hospital Location"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>

        {/* CONTACT FORM */}
        <section className="bg-slate-50 p-8 md:p-12 rounded-2xl">
          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="w-12 h-1 bg-sky-500 rounded mx-auto mb-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
              Send Us a <span className="text-sky-600">Message</span>
            </h2>
            <p className="mt-2 text-slate-600">We'll get back to you as soon as possible</p>
          </motion.div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-white border border-slate-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-white border border-slate-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
            />
            <input
              type="text"
              placeholder="Subject"
              className="bg-white border border-slate-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition md:col-span-2"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="bg-white border border-slate-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition md:col-span-2"
            />
            <button
              type="submit"
              className="bg-sky-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-sky-700 transition shadow-lg shadow-sky-600/25 md:col-span-2 flex items-center justify-center gap-2"
            >
              Send Message
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Contact;