import { MdLocalHospital, MdChildCare, MdMedicalServices , MdPregnantWoman, MdScience, MdLocalPharmacy, MdOutlinePhotoCamera, MdFavorite, MdPsychology, MdAccessibilityNew, MdHealing, MdRestaurant } from "react-icons/md";

const services = [
  { id: 1, title: "Emergency", description: "24/7 emergency care with rapid response.", icon: MdLocalHospital },
  { id: 2, title: "Pediatrics", description: "Compassionate healthcare for children.", icon: MdChildCare },
  { id: 3, title: "Surgery", description: "Advanced surgical procedures with expert surgeons.", icon: MdMedicalServices  },
  { id: 4, title: "Maternity", description: "Safe and supportive maternity services.", icon: MdPregnantWoman },
  { id: 5, title: "Laboratory", description: "Accurate diagnostics and testing services.", icon: MdScience },
  { id: 6, title: "Pharmacy", description: "Fully stocked in-house pharmacy services.", icon: MdLocalPharmacy },
  { id: 7, title: "Radiology", description: "Modern imaging for precise diagnosis.", icon: MdOutlinePhotoCamera },
  { id: 8, title: "Cardiology", description: "Heart care with expert cardiologists.", icon: MdFavorite },
  { id: 9, title: "Neurology", description: "Brain and nervous system specialists.", icon: MdPsychology },
  { id: 10, title: "Orthopedics", description: "Bone and joint care for all ages.", icon: MdAccessibilityNew },
  { id: 11, title: "Dermatology", description: "Skin treatments and care.", icon: MdHealing },
  { id: 12, title: "Nutrition", description: "Diet and wellness support.", icon: MdRestaurant },
];

export default services;
