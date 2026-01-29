import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import doctors from "../data/doctors";

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
  const [appointments, setAppointments] = useState([]);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Minimum date: today
  const today = new Date().toISOString().split("T")[0];

  // Get current time for validation
  const getCurrentTime = () => {
    const now = new Date();
    return now.toTimeString().slice(0, 5); // "HH:MM" format
  };

  // Load appointments from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("appointments");
    if (saved) {
      setAppointments(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Reset doctor if department changes
    if (name === "department") {
      setFormData(prev => ({ ...prev, doctor: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent booking for past dates
    if (formData.date < today) {
      alert("You cannot book an appointment for a past date!");
      return;
    }

    // Prevent booking for past time if date is today
    if (formData.date === today && formData.time < getCurrentTime()) {
      alert("You cannot book an appointment for a past time today!");
      return;
    }

    const newAppointment = {
      ...formData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };

    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

    setSubmitted(true);
  };

  // Cancel appointment
  const handleCancel = (id) => {
    if (window.confirm("Are you sure you want to cancel this appointment?")) {
      const updatedAppointments = appointments.filter(app => app.id !== id);
      setAppointments(updatedAppointments);
      localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    }
  };

  // Format date for display
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
  };

  // Format time for display
  const formatTime = (timeStr) => {
    const [hours, minutes] = timeStr.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  // Get unique departments from doctors array
  const departments = [...new Set(doctors.map(d => d.category))];

  // Filter doctors based on selected department
  const filteredDoctors = doctors.filter(
    d => !formData.department || d.category === formData.department
  );

  return (
    <div className="space-y-0">
      {/* PAGE HEADER */}
      <div className="bg-gradient-to-b from-sky-50 to-white py-20 text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <span className="inline-block bg-sky-100 text-sky-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Schedule a Visit
          </span>
          <h1 className="text-4xl font-bold text-slate-800">
            Book an <span className="text-sky-600">Appointment</span>
          </h1>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto">
            Fill out the form below to schedule an appointment with Shafa Hospital.
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

        {/* Appointment Form */}
        {submitted ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-50 border border-green-200 p-8 rounded-2xl text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-green-800 mb-2">Appointment Submitted!</h2>
            <p className="text-green-700">Thank you, {formData.fullName}. We will contact you soon to confirm your appointment.</p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ fullName: "", phone: "", department: "", doctor: "", date: "", time: "", message: "" });
              }}
              className="mt-6 text-sky-600 font-medium hover:underline"
            >
              Book another appointment
            </button>
          </motion.div>
        ) : (
          <motion.form className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 space-y-6" onSubmit={handleSubmit} initial="hidden" animate="visible" variants={fadeUp}>

            {/* Personal Info */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 text-sm font-bold">1</span>
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required className="border border-slate-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition" />
                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="border border-slate-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition" />
              </div>
            </div>

            {/* Department & Doctor */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 text-sm font-bold">2</span>
                Select Department & Doctor
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select name="department" value={formData.department} onChange={handleChange} required className="border border-slate-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition bg-white">
                  <option value="">Select Department *</option>
                  {departments.map((dep, idx) => <option key={idx} value={dep}>{dep}</option>)}
                </select>
                <select name="doctor" value={formData.doctor} onChange={handleChange} className="border border-slate-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition bg-white">
                  <option value="">Preferred Doctor (Optional)</option>
                  {filteredDoctors.map(doc => <option key={doc.id} value={doc.name}>{doc.name}</option>)}
                </select>
              </div>
            </div>

            {/* Date & Time */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 text-sm font-bold">3</span>
                Choose Date & Time
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="date" name="date" value={formData.date} onChange={handleChange} required min={today} className="border border-slate-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition" />
                <input 
                  type="time" 
                  name="time" 
                  value={formData.time} 
                  onChange={handleChange} 
                  required 
                  min={formData.date === today ? getCurrentTime() : undefined}
                  className="border border-slate-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition" 
                />
              </div>
              {formData.date === today && (
                <p className="text-sm text-amber-600 mt-2 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Booking for today - please select a future time
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 text-sm font-bold">4</span>
                Additional Notes
              </h3>
              <textarea name="message" placeholder="Any additional information or symptoms... (Optional)" value={formData.message} onChange={handleChange} rows="4" className="w-full border border-slate-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition" />
            </div>

            <button type="submit" className="w-full bg-sky-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-sky-700 transition shadow-lg shadow-sky-600/25 flex items-center justify-center gap-2">
              Book Appointment
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.form>
        )}

        {/* MY APPOINTMENTS */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-sky-500 rounded"></div>
            <h2 className="text-2xl font-bold text-slate-800">
              My <span className="text-sky-600">Appointments</span>
            </h2>
          </div>

          {appointments.length === 0 ? (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-slate-700 mb-1">No appointments yet</h3>
              <p className="text-slate-500">Book your first appointment using the form above</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {appointments.map(app => (
                <div key={app.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="flex flex-col md:flex-row">
                    {/* Date Badge */}
                    <div className="bg-sky-600 text-white p-4 md:p-6 flex flex-row md:flex-col items-center justify-center gap-2 md:gap-0 md:min-w-[120px]">
                      <span className="text-2xl md:text-3xl font-bold">{new Date(app.date).getDate()}</span>
                      <span className="text-sm uppercase">{new Date(app.date).toLocaleDateString("en-US", { month: "short" })}</span>
                    </div>

                    {/* Details */}
                    <div className="flex-1 p-4 md:p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-slate-800">{app.fullName}</h3>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {formatTime(app.time)}
                            </span>
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                              {app.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                              {app.doctor || "Any Doctor"}
                            </span>
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              {app.phone}
                            </span>
                          </div>

                        {app.message && (
  <div className="flex items-start gap-1 mt-2 text-sm text-slate-500 italic">
    <svg className="w-4 h-4 text-sky-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8-1.86 0-3.59-.56-5-1.5L3 21l1.5-4c-1.28-1.36-2-3.09-2-5a9 9 0 019-9c4.97 0 9 3.58 9 8z" />
    </svg>
    "{app.message}"
  </div>
)}
                        </div>

                        {/* Cancel Button */}
                        <button
                          onClick={() => handleCancel(app.id)}
                          className="flex items-center gap-2 text-red-500 hover:text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition text-sm font-medium"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

      </div>
    </div>
  );
}

export default Appointment;