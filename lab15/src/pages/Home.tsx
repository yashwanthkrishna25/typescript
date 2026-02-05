// const Home = () => {
//   return (
//     <div className="page">
//       <h1>Welcome to Our Website</h1>
//       <h1>Developed by <strong>LOHITH YERRANI</strong></h1>
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevPF9corvE4C7T5gEG1w09Ske_YrxCkHE2g&s" alt="home" />
//     </div>
//   );
// };

// export default Home;

// import "./Home.css"
// interface HomeProps {
//   developer: string;
// }

// const Home: React.FC<HomeProps> = ({ developer }) => {
//   return (
//     <div className="page home">
//       <h1>Welcome to Our Website</h1>

//       <h2>
//         Developed by <strong>{developer}</strong>
//       </h2>

//       <p>
//         This is a simple React + TypeScript project created as part of a lab
//         assignment.
//       </p>

//       <img
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevPF9corvE4C7T5gEG1w09Ske_YrxCkHE2g&s"
//         alt="Home page"
//         className="home-img"
//       />

//       <button className="home-btn">Get Started</button>
//     </div>
//   );
// };

// export default Home;

interface HomeProps {
  developer: string;
  websiteName: string;
  tagline: string;
  imageUrl: string;
}

const Home: React.FC<HomeProps> = ({ websiteName, tagline }) => {
  return (
    <div className="page home">
      <h1>Welcome to {websiteName}</h1>
      <h2>{tagline}</h2>
      <img src="https://img.freepik.com/free-photo/view-travel-items-assortment-still-life_23-2149617645.jpg" alt="home-image" className="home-img" />
      <button className="home-btn">Explore Now</button>
    </div>
  );
};

export default Home;

