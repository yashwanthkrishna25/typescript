const Home: React.FC<HomeProps> = ({
  developer,
  websiteName,
  tagline,
  imageUrl,
}) => {
  const handleExplore = () => {
    window.open(
      "https://www.trip.com/?Allianceid=4503262&SID=59614654",
      "_blank"
    );
  };

  return (
    <div className="page home">
      <h1>Welcome to {websiteName}</h1>
      <h2>{tagline}</h2>

      <img src={imageUrl} alt="Home" className="home-img" />

      <button className="home-btn" onClick={handleExplore}>
        Explore Now
      </button>
    </div>
  );
};

export default Home;


