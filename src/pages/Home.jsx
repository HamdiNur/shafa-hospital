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
    const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
      const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

  return (
    <div>
      {/* HERO SECTION */}
    
             <section className="bg-gradient-to-r from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left - Text & Buttons */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Trusted Healthcare <br /> for Every Family
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Shafa Hospital provides modern, compassionate, and reliable medical services for the people of Mogadishu and beyond.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/appointment"
                className="bg-sky-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-sky-700 transition"
              >
                Book Appointment
              </Link>

              <a
                href="tel:+252610000000"
                className="border border-sky-600 text-sky-600 px-6 py-3 rounded-lg font-medium hover:bg-sky-50 transition"
              >
                Emergency Call
              </a>
            </div>
          </motion.div>

          {/* Right - Image placeholder */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}>
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
<section className="bg-white border-t">
  <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    
    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
      <h3 className="text-3xl font-bold text-sky-700 flex items-baseline justify-center">
        <NumberCounter end={15} delay={5} />
          <span className="ml-1">+</span>

      </h3>
      <p className="mt-2 text-sm text-slate-600">Years of Experience</p>
    </motion.div>

    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
  <h3 className="text-3xl font-bold text-sky-700 flex items-baseline justify-center">
  <NumberCounter end={50} delay={5} />
  <span className="ml-1">+</span>
</h3>
      <p className="mt-2 text-sm text-slate-600">Qualified Doctors</p>
    </motion.div>

    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
      <h3 className="text-3xl font-bold text-sky-700">24/7</h3>
      <p className="mt-2 text-sm text-slate-600">Emergency Services</p>
    </motion.div>

    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
      <h3 className="text-3xl font-bold text-sky-700">10k+</h3>
      <p className="mt-2 text-sm text-slate-600">Patients Treated</p>
    </motion.div>

  </div>
</section>

      {/* SERVICES PREVIEW (first 3) */}
{/* SERVICES PREVIEW (first 6) */}
<section className="bg-slate-50 py-20">
  <div className="max-w-7xl mx-auto px-4">
    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold text-slate-900">Our Medical Departments</h2>
      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        Comprehensive healthcare services delivered by experienced professionals using modern medical technology.
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
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold text-slate-900">Why Choose Us</h2>
      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        Discover the reasons why Shafa Hospital is trusted by our patients.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-10">
      {whyChoose.map((item, idx) => (
        <WhyChooseCard
          key={idx}
          title={item.title}
          description={item.description}
          icon={item.icon} // make sure icons are passed
        />
      ))}
    </div>
  </div>
</section>
   <section className="bg-slate-50 py-20">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold text-slate-900">What Our Patients Say</h2>
      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
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
