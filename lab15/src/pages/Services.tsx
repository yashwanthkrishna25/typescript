
interface Service {
  title: string;
  description: string;
}

const servicesData: Service[] = [
  {
    title: "Flight Booking",
    description: "Book domestic and international flights at the best prices."
  },
  {
    title: "Hotel Reservations",
    description: "Comfortable stays from budget hotels to luxury resorts."
  },
  {
    title: "Tour Packages",
    description: "Customized tour packages for solo, family, and group travel."
  },
  {
    title: "Travel Insurance",
    description: "Stay protected with comprehensive travel insurance plans."
  },
  {
    title: "Visa Assistance",
    description: "Hassle-free visa processing and documentation support."
  },
  {
    title: "24/7 Travel Support",
    description: "Round-the-clock assistance throughout your journey."
  }
];

const Services: React.FC = () => {
  return (
    <div className="page services">
      <h1>Our Travel Services</h1>
      <p className="services-tagline">
        Everything you need for a smooth and memorable journey ✈️
      </p>

      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <img
        src="https://img.freepik.com/free-photo/travel-trip-vacation-holiday-journey-tourism_53876-133944.jpg?semt=ais_hybrid&w=740&q=80"
        alt="travel services"
        className="services-img"
      />
    </div>
  );
};

export default Services;


