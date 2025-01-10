function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden md:mt-[5rem] flex md:items-center">
      <video autoPlay muted className="absolute w-screen h-screen object-cover">
        <source src="/assets/hero_vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="z-10 w-10/12 mx-auto mt-[30vh] md:mt-0 text-center md:text-left text-white">
        <h1 className="hero-slide-left text-3xl md:text-7xl font-bold">
          Discover Penang
        </h1>
        <p className="hero-slide-up mt-6 text-md xs:text-lg font-md w-full md:w-[60vw] text-center md:text-justify">
          Penang, a paradise blending history, culture, nature, and tantalizing
          cuisine. Discover iconic landmarks, indulge in world-class street
          food, and immerse yourself in the vibrant local life. Begin your
          journey with us!
        </p>
        <button className="hero-slide-up-delay mt-10 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl shadow-md transition duration-300 ease-in-out">
          Discover More
        </button>
      </div>
    </div>
  );
}

export default Hero;
