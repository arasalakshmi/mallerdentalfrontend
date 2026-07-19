export const SERVICES_PAGE = {

  // Hero Section
  hero: {
    badge: 'Our Services',
    title: 'Complete Dental Care for You & Your Family',
    subtitle:'Personalized treatments designed to restore, protect, and enhance every smile.',
    description:
      'Advanced technology, experienced hands, and a gentle touch for all your dental needs.',
    image: 'assets/images/serviceImg/hero.png'
  },

  // Services Grid Section
  servicesSection: {
    badge: 'Our Dental Services',
    title: 'Explore Our Wide Range of Dental Treatments',
     subtitle: 'Comprehensive dental solutions tailored to your oral health, comfort, and confidence.',
    description:
      'From preventive care to advanced restorative and cosmetic dentistry, we provide personalized treatments for every smile.'
  },

  // Features Strip
 features: [
  {
    icon: 'medical_services',
    title: 'Experienced Doctors',
    description: 'Skilled dental professionals with years of expertise.'
  },
  {
    icon: 'biotech',
    title: 'Advanced Technology',
    description: 'Modern equipment for precise and comfortable treatment.'
  },
  {
    icon: 'volunteer_activism',
    title: 'Patient-First Approach',
    description: 'Your comfort, care, and satisfaction are our priority.'
  },
  {
    icon: 'health_and_safety',
    title: 'Safe & Hygienic',
    description: 'Highest standards of sterilization and infection control.'
  }
],
  // CTA Section
  cta: {
    title: 'Ready for a Healthy & Beautiful Smile?',
    description:
      'Book your appointment today and experience compassionate, high-quality dental care.',
    buttonText: 'Book an Appointment',
    phone: '+91 94429 51313',
    doctorImage: 'assets/images/homeImg/doctorImg.png'
  }

};
export interface Service {

  id: number;

  title: string;

  slug: string;

  image: string;

  icon: string;

  shortDescription: string;

  featured?: boolean;

}
export const SERVICES = [

{
  id: 1,
  title: 'Full Mouth Rehabilitation',
  slug: 'full-mouth-rehabilitation',
  image:'assets/images/hometreat/fullmouth.png',
  shortDescription:
    'Restore your smile with a personalized treatment plan that rebuilds function, comfort, and aesthetics.'
},

{
  id: 2,
  title: 'Dental Implants',
  slug: 'dental-implants',
   image:'assets/images/hometreat/dentalimplant.png',
  shortDescription:
    'Replace missing teeth with durable, natural-looking dental implants for a confident smile.'
},

{
  id: 3,
  title: 'Clear Aligners | Invisalign',
  slug: 'clear-aligners-invisalign',
   image:'assets/images/hometreat/aligners.png',
  shortDescription:
    'Straighten your teeth comfortably with nearly invisible clear aligners designed for modern lifestyles.'
},

{
  id: 4,
  title: 'TMJ Disorders',
  slug: 'tmj-disorders',
   image:'assets/images/hometreat/tmjdis_order.png',
  shortDescription:
    'Comprehensive diagnosis and treatment for jaw pain, clicking, headaches, and TMJ-related problems.'
},

{
  id: 5,
  title: 'Oro Facial Pain Management',
  slug: 'orofacial-pain-management',
   image:'assets/images/hometreat/musclar.png',
  shortDescription:
    'Advanced care for chronic facial pain, muscle discomfort, and nerve-related oral conditions.'
},

{
  id: 6,
  title: 'Dental Veneers | Digital Smile Correction',
  slug: 'dental-veneers-digital-smile-correction',
   image:'assets/images/hometreat/veners.png',
  shortDescription:
    'Transform your smile with custom veneers and digital smile design for natural-looking results.'
},

{
  id: 7,
  title: 'Complete Dentures',
  slug: 'complete-dentures',
   image:'assets/images/hometreat/completedentures.png',
  shortDescription:
    'Comfortable, custom-made dentures that restore chewing ability, speech, and facial appearance.'
},

{
  id: 8,
  title: 'Root Canal Treatment',
  slug: 'root-canal-treatment',
   image:'assets/images/hometreat/rootcanal.png',
  shortDescription:
    'Save infected teeth with gentle root canal treatment that relieves pain and preserves your natural tooth.'
},

{
  id: 9,
  title: 'Conservative Dentistry',
  slug: 'conservative-dentistry',
   image:'assets/images/hometreat/conservative.png',
  shortDescription:
    'Preserve healthy tooth structure with minimally invasive fillings and restorative dental treatments.'
},

{
  id: 10,
  title: 'Myofunctional Appliance',
  slug: 'myofunctional-appliance',
   image:'assets/images/hometreat/myofunctional.png',
  shortDescription:
    'Guide healthy jaw growth and improve oral habits in growing children with functional appliances.'
},

{
  id: 11,
  title: 'Pediatric Dentistry',
  slug: 'pediatric-dentistry',
   image:'assets/images/hometreat/prediatric.png',
  shortDescription:
    'Gentle, child-friendly dental care focused on healthy smiles from infancy through adolescence.'
},

{
  id: 12,
  title: 'Preventive Dentistry',
  slug: 'preventive-dentistry',
   image:'assets/images/hometreat/preventive.png',
  shortDescription:
    'Protect your teeth with regular checkups, professional cleaning, fluoride therapy, and preventive care.'
},

{
  id: 13,
  title: 'Dental Photography',
  slug: 'dental-photography',
   image:'assets/images/hometreat/photography.png',
  shortDescription:
    'High-quality clinical photography for accurate diagnosis, treatment planning, and smile documentation.'
}

];