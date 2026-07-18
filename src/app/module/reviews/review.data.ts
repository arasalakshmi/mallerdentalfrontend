export interface ReviewsHero {
  title: string;
  subtitle: string;
  description: string;

  backgroundImage: string;

  googleLogo: string;

  clinicLogo: string;

  rating: number;
  totalReviews: string;

  badgeTitle: string;
}

export const REVIEWS_HERO: ReviewsHero = {
    

  title: 'What Our\nPatients Say',

  subtitle: 'Real Smiles. Real Stories.',

  description:
    'We are truly grateful for the love and trust our patients give us. Here are some of the wonderful reviews from Google.',

  backgroundImage: 'assets/images/reviewImg/reviewheader.png',

  clinicLogo: 'assets/logo/logo-dark.png',

  googleLogo: 'assets/icons/google-logo.svg',

  rating: 4.9,

  totalReviews: '200+ Happy Patients',

  badgeTitle: 'Google Reviews'
};
export interface Review {
  name: string;
  profilePhoto: string;
  rating: number;
  review: string;
  time: string;
}

export const GOOGLE_REVIEW_INFO = {
  rating: 0,
  totalReviews: '',
  buttonText: 'Read More Reviews',
  buttonLink: 'https://share.google/MpedVJeZMHT6GfVKc'
};

export const DUMMY_REVIEWS: Review[] = [
  {
    name: 'Priya S',
    profilePhoto: 'assets/images/reviews/user1.webp',
    rating: 5,
    review: 'Excellent treatment and caring doctors. The entire staff made me feel comfortable throughout the procedure.',
    time: '2 weeks ago'
  },
  {
    name: 'Arun Kumar',
    profilePhoto: 'assets/images/reviews/user2.webp',
    rating: 5,
    review: 'Very clean clinic and highly professional team. I highly recommend Maller Dental Clinic.',
    time: '1 month ago'
  },
  {
    name: 'Revathi M',
    profilePhoto: 'assets/images/reviews/user3.webp',
    rating: 5,
    review: 'My child had an amazing experience. The doctors were patient and friendly.',
    time: '1 month ago'
  }
];

export interface ReviewFaq {
  question: string;
  answer: string;
}

export const REVIEW_FAQS: ReviewFaq[] = [
  {
    question: 'What are your clinic working hours?',
    answer: 'Maller Dental Clinic is open from Monday to Saturday, 10:00 AM to 8:00 PM. We remain closed on Sundays. For emergency assistance, please contact us before visiting.'
  },
  {
    question: 'How can I book an appointment?',
    answer: 'You can easily book an appointment through our website, call our clinic directly, or send us a WhatsApp message. Our team will confirm your preferred date and time.'
  },
  {
    question: 'Do I need an appointment before visiting?',
    answer: 'While walk-in patients are welcome, we recommend booking an appointment in advance to minimize waiting time and ensure you receive personalized attention from our dentists.'
  },
  {
    question: 'Do you provide dental care for children and adults?',
    answer: 'Yes. We offer comprehensive dental care for patients of all ages, including children, adults, and senior citizens. Our treatments are tailored to meet every patients unique dental needs.'
  },
  {
    question: 'Where is Maller Dental Clinic located?',
    answer: 'Maller Dental Clinic is conveniently located in RS Puram, Coimbatore, making it easily accessible for patients from across the city and nearby areas.'
  }
];