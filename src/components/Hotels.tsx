import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import hotels from "../data/hotels.json";

function Hotels() {
  const [visible, setVisible] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = [
    "Luxury Stays",
    "Boutique Hotels",
    "Beach Resorts",
    "Budget Stays",
    "Family Hotels",
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory((current) => (current === category ? "" : category));
    setDropdownOpen(false);
  };

  const filteredHotels = hotels.filter((hotel) =>
    selectedCategory === "" ? true : hotel.category.includes(selectedCategory)
  );

  const showMore = () => {
    setVisible(hotels.length);
  };

  const showLess = () => {
    setVisible(3);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const maxStars = 5;

    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(
        <span key={i}>
          <svg
            className="text-yellow-500 w-5 h-auto fill-current pr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
          </svg>
        </span>
      );
    }

    for (let i = Math.floor(rating); i < maxStars; i++) {
      stars.push(
        <span key={i + "empty"}>
          <svg
            className="text-gray-300 w-5 h-auto fill-current pr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
          </svg>
        </span>
      );
    }

    return stars;
  };

  // For animation
  useEffect(() => {
    const currentSection = sectionRef.current;
    if (currentSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setAnimate(true);
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(currentSection);

      return () => {
        observer.unobserve(currentSection);
      };
    }
  }, []);

  return (
    <>
      {/* Title Part */}
      <div
        id="accommodations"
        ref={sectionRef}
        className={`flex flex-col mt-32 mx-12 xl:w-10/12 2xl:w-4/6 xl:mx-auto ${
          animate ? "fadeInUpTitle" : "opacity-0"
        }`}
      >
        <p className="[font-family:'Poppins', Helvetica] font-bold text-black text-[6vw] md:text-[4vw] text-center tracking-[0] leading-[normal]">
          Stay Your Way in Penang
        </p>
        <p className="[font-family:'Poppins', Helvetica] font-normal text-black text-[3vw] sm:text-lg lg:text-xl text-center tracking-[0] leading-[normal] mt-8">
          Explore a wide range of hotels, from luxurious resorts to
          budget-friendly stays, each offering you and your loved ones a unique
          Penang experience.
        </p>
        <div className="flex lg:hidden justify-center items-center mt-4 mb-2">
          <div className="relative inline-block">
            <button
              className="bg-secondary border-secondary rounded-full inline-flex items-center justify-center mx-4 py-2 px-7 text-center text-sm font-bold text-black border-2 border-black cursor-pointer"
              onClick={toggleDropdown}
            >
              Filter: {selectedCategory ? selectedCategory : "none"}
            </button>
            {isDropdownOpen && (
              <div className="z-20 absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-md rounded-lg">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`dropdown-item block w-full px-4 py-3 text-sm font-medium text-left${
                      selectedCategory === category ? " bg-gray-300" : ""
                    }`}
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Part */}
      <div
        ref={sectionRef}
        className={`relative bg-transparent px-6 pb-20 pt-[2vw] lg:px-8 lg:pb-28" ${
          animate ? "fadeInUpContent" : "opacity-0"
        }`}
        style={{ zIndex: isDropdownOpen ? -1 : 0 }}
      >
        <div className="relative mx-auto max-w-7xl">
          <div className="hidden lg:flex justify-center space-x-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-3xl ${
                  selectedCategory === category
                    ? "bg-blue-700 text-white"
                    : "bg-transparent text-[#4450ff] border-2 border-[#4450ff] hover:border-[#6e39ff] hover:text-[#6e39ff]"
                }`}
                onClick={() =>
                  setSelectedCategory((current) =>
                    current === category ? "" : category
                  )
                }
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mx-auto mt-0 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
            {filteredHotels.slice(0, visible).map((hotel) => (
              <article
                key={hotel.id}
                className="relative isolate flex flex-col justify-end h-72 overflow-hidden rounded-3xl shadow-xl cursor-pointer group"
              >
                <img
                  src={hotel.image}
                  alt={hotel.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40"></div>

                <h3 className="ml-8 mb-4 z-10 text-[4vw] sm:text-2xl lg:text-xl font-semibold text-white">
                  {hotel.title}
                </h3>

                <div className="flex flex-row mb-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-8 z-20"
                  >
                    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className="ml-2 text-[3vw] xs:text-sm xl:text-md z-10 text-white">
                    {hotel.location}
                  </p>
                </div>

                <div className="flex flex-row items-center mb-8">
                  <div className="ml-8 hidden xs:flex z-10">
                    {renderStars(hotel.ratings)}
                  </div>
                  <div className="ml-8 flex xs:hidden z-10">
                    <svg
                      className="text-yellow-500 w-5 h-auto fill-current pr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                    </svg>
                  </div>
                  <p className="ml-4 text-md font-bold z-10 text-white text-center">
                    {hotel.ratings.toFixed(1)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-12">
          {visible > 3 && filteredHotels.length > 3 && (
            <Link
              to="accommodations"
              spy={true}
              smooth={true}
              offset={-150}
              duration={100}
            >
              <button
                className="bg-secondary border-secondary rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-bold text-[#4450ff] border-2 border-[#4450ff] hover:text-[#0011ff] hover:border-[#0011ff] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
                onClick={showLess}
              >
                Show Less
              </button>
            </Link>
          )}
          {visible < hotels.length && filteredHotels.length > 3 && (
            <button
              className="bg-secondary border-secondary rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-bold text-[#4450ff] border-2 border-[#4450ff] hover:text-[#0011ff] hover:border-[#0011ff] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
              onClick={showMore}
            >
              More Hotels
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Hotels;
