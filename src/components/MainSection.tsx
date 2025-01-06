function MainSection() {
  return (
    <>
      <section className="bg-white text-center py-20 px-4">
        <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-black text-4xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Traveling opens the door to creating memories
        </p>
        <p className="[mt-2 font-family:'Epilogue-Regular',Helvetica] font-normal text-transparent text-[160px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          <span className="text-black">Discover </span>
          <span className="text-[#1c42ca]">Penang</span>
        </p>

        <p className="text-base text-gray-500 max-w-2xl mx-auto">
          Welcome to Penang, a paradise blending history, culture, nature, and
          tantalizing cuisine. Discover iconic landmarks, indulge in world-class
          street food, and immerse yourself in the vibrant local life. Begin
          your journey with us!
        </p>
        <button className="mt-8 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
          Explore Now
        </button>
      </section>
    </>
  );
}

export default MainSection;
