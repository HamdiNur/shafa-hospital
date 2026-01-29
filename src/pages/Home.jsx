import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import WhyChooseCard from "../components/WhyChooseCard";
import TestimonialCard from "../components/TestimonialCard";
// Import data
import services from "../data/services";
import whyChoose from "../data/whyChooseData";
import testimonials from "../data/testimonials";
import NumberCounter from "number-counter";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div>
      {/* HERO SECTION */}
{/* HERO SECTION */}
<section className="relative bg-gradient-to-br from-sky-50 via-white to-sky-50/50 overflow-hidden">
  {/* Decorative background elements */}
  <div className="absolute top-20 right-10 w-72 h-72 bg-sky-100 rounded-full blur-3xl opacity-50"></div>
  <div className="absolute bottom-10 left-10 w-48 h-48 bg-sky-200 rounded-full blur-2xl opacity-30"></div>

  <div className="relative max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
    {/* Left - Text & Buttons */}
    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
      {/* Badge */}
      <span className="inline-block bg-sky-100 text-sky-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
        Trusted Healthcare Since 2010
      </span>

      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
        Trusted Healthcare <br /> for Every <span className="text-sky-600">Family</span>
      </h1>

      <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
        Shafa Hospital provides modern, compassionate, and reliable
        medical services for the people of Mogadishu and beyond.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to="/appointment"
          className="bg-sky-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-sky-700 transition shadow-lg shadow-sky-600/25 flex items-center gap-2"
        >
          Book Appointment
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>

        <a
          href="tel:+252610000000"
          className="border border-sky-600 text-sky-600 px-6 py-3 rounded-lg font-medium hover:bg-sky-50 transition flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Emergency Call
        </a>
      </div>
    </motion.div>

    {/* Right - Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
    >
      <div className="h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/images/shafa.jfif"
          alt="Shafa Hospital"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  </div>
</section>
      {/* TRUST STATS */}
      {/* STATS SECTION */}
      <section className="bg-gradient-to-b from-sky-50 to-white border-t border-sky-100">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="bg-white p-6 rounded-xl shadow-sm text-center border border-slate-100"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-sky-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-sky-700 flex items-baseline justify-center">
                <NumberCounter end={15} delay={5} />
                <span className="ml-1">+</span>
              </h3>
              <p className="mt-2 text-sm text-slate-600">Years of Experience</p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="bg-white p-6 rounded-xl shadow-sm text-center border border-slate-100"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-sky-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-sky-700 flex items-baseline justify-center">
                <NumberCounter end={50} delay={5} />
                <span className="ml-1">+</span>
              </h3>
              <p className="mt-2 text-sm text-slate-600">Qualified Doctors</p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="bg-white p-6 rounded-xl shadow-sm text-center border border-slate-100"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-sky-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-sky-700">24/7</h3>
              <p className="mt-2 text-sm text-slate-600">Emergency Services</p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="bg-white p-6 rounded-xl shadow-sm text-center border border-slate-100"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-sky-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-sky-700">10k+</h3>
              <p className="mt-2 text-sm text-slate-600">Patients Treated</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW (first 3) */}
      {/* SERVICES PREVIEW (first 6) */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-14">
           <h2 className="text-3xl font-bold text-slate-800">
  Our Medical <span className="text-sky-600">Departments</span>
</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Comprehensive healthcare services delivered by experienced
              professionals using modern medical technology.
            </p>
          </div>

          {/* Department Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
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
                  icon={service.icon} // 👈 pass the icon component here
                />
              </motion.div>
            ))}
          </div>

          {/* See All Link */}
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="text-sky-600 font-medium hover:underline"
            >
              See all services
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US PREVIEW */}
   <section className="bg-white">
  <div className="max-w-7xl mx-auto px-4 py-20">
    
    {/* Heading */}
    <motion.div
      className="text-center mb-14"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
<h2 className="text-3xl font-bold text-slate-800">
  Why <span className="text-sky-600">Choose Us</span>
</h2>      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        Discover the reasons why Shafa Hospital is trusted by our patients.
      </p>
    </motion.div>

    {/* Cards */}
    <motion.div
      className="grid md:grid-cols-3 gap-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {whyChoose.map((item, idx) => (
        <motion.div
          key={idx}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
        >
          <WhyChooseCard
            title={item.title}
            description={item.description}
            icon={item.icon} 
          />
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
//
  <section className="bg-slate-50 py-20">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-14">
<h2 className="text-3xl font-bold text-slate-800">
  What Our <span className="text-sky-600">Patients Say</span>
</h2>      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        Hear from some of our patients about their experiences at Shafa Hospital.
      </p>
    </div>

    <Slider {...sliderSettings}>
      {testimonials.map((t) => (
        <div key={t.id} className="px-2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
            <TestimonialCard
              name={t.name}
              feedback={t.feedback}
              image={t.image}
            />
          </motion.div>
        </div>
      ))}
    </Slider>
  </div>
</section>

    </div>
  );
}

export default Home;
