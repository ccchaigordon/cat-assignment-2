import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import attractions from "../data/attractions.json";

function Attractions() {
  const [visible, setVisible] = useState(3);
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const showMore = () => {
    setVisible(attractions.length);
  };

  const showLess = () => {
    setVisible(3);
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
        ref={sectionRef}
        id="slideLeft-element"
        className={`slideLeft-element mt-32 mb-8 xs:mb-0 relative $${
          animate ? "fadeInUpTitle" : "opacity-0"
        }`}
      >
        <div
          id="unfilled"
          className="absolute z-10 w-11/12 md:w-9/12 h-[20vw] left-0 bg-[#eaeff8] rounded-[0px_222px_222px_0px] border-[2px] sm:border-[3px] border-l-0 sm:border-l-0 border-solid border-[#1c42ca]"
        />
        <div
          id="filled"
          className="absolute z-0 w-11/12 ml-8 mt-8 md:w-9/12 h-[20vw] left-0 bg-[#1c42ca] rounded-[0px_222px_222px_0px]"
        />
        <div className="flex flex-col h-[30vw] md:h-60 w-5/6 pt-[6vw] mx-auto ">
          <p
            id="element-text"
            className="z-50 [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[2.5vw] md:text-[1.5vw] text-justify tracking-[0] leading-[normal]"
          >
            Must-Visit Gems You Can't Miss in Penang
          </p>
          <p
            id="element-text"
            className="z-50 [font-family:'Poppins',Helvetica] font-bold text-black text-[5vw] md:text-[4vw] text-justify tracking-[0] leading-[normal]"
          >
            Explore Penang Attractions
          </p>
        </div>
      </div>

      {/* Card Part */}
      <div
        ref={sectionRef}
        className={`relative bg-transparent px-6 pb-20 pt-[4vw] xl:pt-[10vw] lg:px-8 lg:pb-28 ${
          animate ? "fadeInUpContent" : "opacity-0"
        }`}
      >
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mt-0 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
            {attractions.slice(0, visible).map((attraction) => (
              <div
                key={attraction.id}
                className="flex flex-col overflow-hidden rounded-3xl shadow-lg hover:scale-[1.025] duration-200 ease-in-out cursor-pointer"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-72 w-full object-cover"
                    src={attraction.image}
                    alt={attraction.title}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <a
                      href=""
                      onClick={(e) => e.preventDefault()}
                      className="mt-2 block"
                    >
                      <p className="text-xl font-semibold text-gray-900">
                        {attraction.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500 text-justify">
                        {attraction.description}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href="" onClick={(e) => e.preventDefault()}>
                        <img
                          className="h-10 w-10 rounded-full"
                          src={attraction.icon}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900"></p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <span>{attraction.distance} from Georgetown</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-12">
          {visible > 3 && (
            <Link
              to="slideLeft-element"
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
          {visible < attractions.length && (
            <button
              className="bg-secondary border-secondary rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-bold text-[#4450ff] border-2 border-[#4450ff] hover:text-[#0011ff] hover:border-[#0011ff] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
              onClick={showMore}
            >
              More Attractions
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Attractions;
