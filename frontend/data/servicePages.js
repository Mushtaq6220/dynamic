export const servicePages = [
  {
    slug: "visa-stamping",
    title: "Visa Stamping",
    eyebrow: "Services",
    summary:
      "Guided visa stamping support with clearer paperwork handling, status visibility, and customer coordination before departure.",
    highlights: [
      "Passport and document checking before submission",
      "Support for processing updates and next-step guidance",
      "Useful for Gulf-bound work and travel documentation",
    ],
  },
  {
    slug: "air-ticketing",
    title: "Air Ticketing",
    eyebrow: "Services",
    summary:
      "At Fly International, we offer a seamless air ticket booking experience for domestic and international flights. Whether you are traveling for a sacred Umrah journey, a business trip to the Gulf, or a global vacation, we ensure you get the most competitive fares with expert route planning.",
    highlights: [
      "Exclusive Umrah & Hajj Flight Deals",
      "Special Fares for Gulf & Middle East Routes",
      "Domestic & International Group Bookings",
      "Flexible Date & Route Optimization",
      "24/7 Customer Support for Booking Modifications",
      "Assistance with Web Check-in & Excess Baggage",
      "Reliable Multi-Stop Itinerary Planning",
    ],
  },
  {
    slug: "train-ticket-booking",
    title: "Train Ticket Booking",
    eyebrow: "Services",
    summary:
      "We provide hassle-free Indian Railways (IRCTC) ticket booking services for all categories. Whether you need a connection to a major international airport or are planning a domestic pilgrimage tour, our experts handle the complexities of seat availability, tatkal bookings, and waitlist tracking.",
    highlights: [
      "Instant IRCTC E-Ticket Generation",
      "Tatkal & Premium Tatkal Support",
      "Waitlist Status Monitoring & Auto-Confirm Help",
      "Bulk Bookings for Family & Pilgrimage Groups",
      "Seamless Connection to International Flights",
      "Senior Citizen & Concession Booking Assistance",
      "Easy Cancellation & Refund Management",
    ],
  },
  {
    slug: "visit-visa",
    title: "Visit Visa",
    eyebrow: "Services",
    summary:
      "Visit visa assistance for Gulf destinations with checklist guidance, route planning support, and enquiry handling.",
    highlights: [
      "Tourist and family visit visa support",
      "Clear document requirements and submission help",
      "Tracking and communication in one place",
    ],
  },
  {
    slug: "certificate-attestations",
    title: "Certificate Attestations",
    eyebrow: "Services",
    summary:
      "Attestation support for personal and official documents such as degree, marriage, birth, and other certificates.",
    highlights: [
      "Degree, marriage, birth, and related document handling",
      "Useful for visa and migration-related workflows",
      "Dedicated support as part of your travel platform",
    ],
  },
  {
    slug: "study-abroad",
    title: "Study Abroad",
    eyebrow: "Services",
    summary:
      "Unlock a world of opportunities with our comprehensive Study Abroad consulting. From identifying the right university to securing your student visa and arranging premium travel, we guide you through every step of your international academic journey.",
    highlights: [
      "Global University Selection & Admission",
      "Student Visa Documentation & Interview Prep",
      "SOP & Letter of Recommendation Guidance",
      "Scholarship & Financial Aid Assistance",
      "Pre-Departure Briefings & Air Ticketing",
      "Accommodation & Local Guardian Support",
      "Post-Arrival Essential Services",
    ],
  },
];

export function getServicePage(slug) {
  return servicePages.find((item) => item.slug === slug);
}
