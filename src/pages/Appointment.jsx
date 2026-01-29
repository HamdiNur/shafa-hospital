import { useState } from "react";

function Appointment() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show success message
    setSubmitted(true);
  };

  const departments = ["Emergency", "Pediatrics", "Surgery", "Maternity", "Laboratory", "Pharmacy"];
  const doctors = ["Dr. Ahmed Ali", "Dr. Fatima Noor", "Dr. Mohamed Yusuf", "Dr. Amina Hassan"];

  return (
    <div className="max-w-3xl mx-auto px-4 py-20 space-y-12">

      {/* PAGE HEADER */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900">Book an Appointment</h1>
        <p className="mt-4 text-slate-600 max-w-xl mx-auto">
          Fill out the form below to schedule an appointment with Shafa Hospital.
        </p>
      </div>

      {submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-800 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-2">Appointment Submitted!</h2>
          <p>Thank you, {formData.fullName}. We will contact you soon to confirm your appointment.</p>
        </div>
      ) : (
        <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
            className="border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <option value="">Select Department</option>
            {departments.map((dep, idx) => (
              <option key={idx} value={dep}>{dep}</option>
            ))}
          </select>

          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            className="border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <option value="">Preferred Doctor (Optional)</option>
            {doctors.map((doc, idx) => (
              <option key={idx} value={doc}>{doc}</option>
            ))}
          </select>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          <textarea
            name="message"
            placeholder="Additional Message (Optional)"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          <button
            type="submit"
            className="bg-sky-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-sky-700 transition"
          >
            Book Appointment
          </button>
        </form>
      )}
    </div>
  );
}

export default Appointment;
