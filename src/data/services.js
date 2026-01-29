import { MdLocalHospital, MdChildCare, MdMedicalServices, MdPregnantWoman, MdScience, MdLocalPharmacy, MdOutlinePhotoCamera, MdFavorite, MdPsychology, MdAccessibilityNew, MdHealing, MdRestaurant } from "react-icons/md";

const services = [
  { 
    id: 1, 
    title: "Emergency", 
    description: "24/7 emergency care with rapid response. Our team ensures critical patients receive immediate attention and lifesaving treatment whenever needed.", 
    icon: MdLocalHospital 
  },
  { 
    id: 2, 
    title: "Pediatrics", 
    description: "Compassionate healthcare for children. From routine checkups to specialized pediatric treatments, we focus on the health and happiness of your child.", 
    icon: MdChildCare 
  },
  { 
    id: 3, 
    title: "Surgery", 
    description: "Advanced surgical procedures with expert surgeons. We use state-of-the-art operating theaters and minimally invasive techniques to ensure fast recovery.", 
    icon: MdMedicalServices  
  },
  { 
    id: 4, 
    title: "Maternity", 
    description: "Safe and supportive maternity services. Our experienced staff provides care for both mother and newborn, including prenatal, delivery, and postnatal support.", 
    icon: MdPregnantWoman 
  },
  { 
    id: 5, 
    title: "Laboratory", 
    description: "Accurate diagnostics and testing services. Equipped with modern lab technology to deliver precise and timely results for better treatment planning.", 
    icon: MdScience 
  },
  { 
    id: 6, 
    title: "Pharmacy", 
    description: "Fully stocked in-house pharmacy services. We provide all essential medications with expert guidance from our pharmacists.", 
    icon: MdLocalPharmacy 
  },
  { 
    id: 7, 
    title: "Radiology", 
    description: "Modern imaging for precise diagnosis. From X-rays to advanced scans, we help detect conditions early with accurate imaging solutions.", 
    icon: MdOutlinePhotoCamera 
  },
  { 
    id: 8, 
    title: "Cardiology", 
    description: "Heart care with expert cardiologists. We offer comprehensive heart evaluations, treatments, and ongoing cardiac care for patients of all ages.", 
    icon: MdFavorite 
  },
  { 
    id: 9, 
    title: "Neurology", 
    description: "Brain and nervous system specialists. Our team diagnoses and treats neurological conditions with advanced techniques and personalized care.", 
    icon: MdPsychology 
  },
  { 
    id: 10, 
    title: "Orthopedics", 
    description: "Bone and joint care for all ages. From fractures to chronic conditions, we provide treatments and rehabilitation to restore mobility and comfort.", 
    icon: MdAccessibilityNew 
  },
  { 
    id: 11, 
    title: "Dermatology", 
    description: "Skin treatments and care. Our dermatology team handles cosmetic, therapeutic, and preventive skin solutions for healthy, glowing skin.", 
    icon: MdHealing 
  },
  { 
    id: 12, 
    title: "Nutrition", 
    description: "Diet and wellness support. Our nutritionists provide personalized meal plans and guidance to help patients achieve optimal health.", 
    icon: MdRestaurant 
  },
];

export default services;
