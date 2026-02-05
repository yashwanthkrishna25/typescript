// const Services = () => {
//   return (
//     <div className="page">
//       <h1>Our Services</h1>
//       <ul>
//         <li>Web Development</li>
//         <li>Mobile Apps</li>
//         <li>Designing</li>
//         <li>Consulting</li>
//       </ul>
//       <img src="https://solidwp.com/wp-content/uploads/2022/08/Services-Pages-1024x537.png" alt="services" />
//     </div>
//   );
// };

// export default Services;

// interface Service {
//   title: string;
//   description: string;
// }

// const servicesData: Service[] = [
//   {
//     title: "Web Development",
//     description: "Building fast, responsive, and modern websites."
//   },
//   {
//     title: "Mobile Apps",
//     description: "Creating Android and iOS applications."
//   },
//   {
//     title: "Designing",
//     description: "UI/UX design for better user experience."
//   },
//   {
//     title: "Consulting",
//     description: "Professional IT and software consulting."
//   }
// ];

// const Services: React.FC = () => {
//   return (
//     <div className="page services">
//       <h1>Our Services</h1>

//       <div className="services-container">
//         {servicesData.map((service, index) => (
//           <div className="service-card" key={index}>
//             <h3>{service.title}</h3>
//             <p>{service.description}</p>
//           </div>
//         ))}
//       </div>

//       <img
//         src="https://solidwp.com/wp-content/uploads/2022/08/Services-Pages-1024x537.png"
//         alt="services"
//         className="services-img"
//       />
//     </div>
//   );
// };

// export default Services;


interface Service {
  title: string;
  description: string;
}

const servicesData: Service[] = [
  { title: "Custom Web Design", description: "We create beautiful, modern websites tailored to your brand." },
  { title: "SEO Optimization", description: "Boost your website's visibility on search engines." },
  { title: "Mobile App Development", description: "iOS and Android apps to grow your business." },
  { title: "Consulting & Support", description: "Expert advice to improve your digital strategy." }
];

const Services: React.FC = () => {
  return (
    <div className="page services">
      <h1>Our Services</h1>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <img
        src="https://example.com/your-services-image.jpg"
        alt="services"
        className="services-img"
      />
    </div>
  );
};

export default Services;

