import { useState } from "react";

import attractions from "../data/attractions.json";

function Attractions() {
  const [visible, setVisible] = useState(3);

  const showMore = () => {
    setVisible((prevVisible) => prevVisible + 3);
  };

  const showLess = () => {
    setVisible((prevVisible) => (prevVisible > 3 ? prevVisible - 3 : 3));
  };

  return (
    <>
      {/* Title Part */}
      <div
        id="slideLeft-element"
        className="slideLeft-element mt-20 mb-8 xs:mb-0 relative"
      >
        <div
          id="unfilled"
          className="absolute z-10 w-5/6 md:w-4/6 h-[20vw] left-0 bg-[#eaeff8] rounded-[0px_222px_222px_0px] border-[2px] sm:border-[3px] border-l-0 sm:border-l-0 border-solid border-[#1c42ca]"
        />
        <div
          id="filled"
          className="absolute z-0 w-5/6 ml-8 mt-8 md:w-4/6 h-[20vw] left-0 bg-[#1c42ca] rounded-[0px_222px_222px_0px]"
        />
        <div className="flex flex-col h-40 md:h-60 w-full pt-[6vw] pl-[5vw] md:pl-[4vw]">
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
      <div className="relative bg-transparent px-6 pb-20 pt-[4vw] xl:pt-[10vw] lg:px-8 lg:pb-28">
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
                    <a href="#" className="mt-2 block">
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
                      <a href="#">
                        <span className="sr-only">{attraction.author}</span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src={attraction.authorImage}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href="#" className="hover:underline">
                          {attraction.author}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <span aria-hidden="true">·</span>
                        <span>{attraction.readTime}</span>
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
            <button
              className="bg-secondary border-secondary rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-bold text-[#4450ff] border-2 border-[#4450ff] hover:text-[#0011ff] hover:border-[#0011ff] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
              onClick={showLess}
            >
              Show Less
            </button>
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
