function Discover() {
  return (
    <div className="text-center text-black h-screen flex flex-col justify-center items-center">
      <div className="space-y-6">
        <p className="text-[4vw] xs:text-xl lg:text-2xl font-semibold leading-6 mx-8 mt-8">
          Traveling opens the door to creating memories
        </p>

        <h1 className="text-[10vw] sm:text-6xl lg:text-8xl font-semibold py-12">
          Discover <span className="text-blue-800">Penang</span>
        </h1>

        <p className="text-sm leading-6 mx-8">
          Welcome to Penang, a paradise blending history, culture, nature, and
          tantalizing cuisine. Discover iconic landmarks, indulge in world-class
          street food, and immerse yourself in the vibrant local life. Begin
          your journey with us!
        </p>

        <button className="text-white bg-blue-800 hover:bg-blue-700 font-normal rounded-full py-2.5 px-12 mt-12 shadow-md cursor-pointer">
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default Discover;
