import { useState, useEffect, useRef } from "react";

function About() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      <div>
        {/* <div className="flex h-56 mt-8 mx-12 xl:w-10/12 2xl:w-4/6 xl:mx-auto justify-center items-center bg-gray-300">
          <div className="flex flex-row">
            <div className="[-webkit-text-stroke:3px_#1c42ca] font-bold text-transparent text-9xl">
              About
            </div>
            <div className="ml-12 font-bold text-[#1c42ca] text-9xl">
              Penang
            </div>
          </div>
        </div> */}
        <div className="w-full bg-white py-28">
          <div className="flex flex-col lg:flex-row mx-12 xl:w-10/12 2xl:w-4/6 xl:mx-auto">
            {/* Text contents */}
            <div
              ref={sectionRef}
              className={`flex flex-col w:full lg:w-1/2 ${
                animate ? "fadeInUpTitle" : "opacity-0"
              }`}
            >
              <div className="font-bold text-[#1c42ca] text-5xl sm:text-7xl text-center lg:text-justify">
                Penang
              </div>
              <div className="mt-6">
                <p className="text-center lg:text-justify text-sm sm:text-lg">
                  known as the 'Pearl of the Orient,' is a UNESCO World Heritage
                  Site with a perfect mix of heritage, modernity, and natural
                  wonders. Let's uncover its hidden gems together! (can yap more
                  here make it like a small paragraph)
                </p>
              </div>
              <div className="flex flex-row mt-12 lg:mt-16 justify-center lg:justify-start items-center">
                <p className="text-[#1C42CA] text-xl sm:text-4xl font-semibold">
                  1.74 million
                </p>
                <div className="ml-3 sm:ml-4">
                  <p className="text-md sm:text-xl">people living in harmony</p>
                </div>
              </div>

              <div className="flex flex-row mt-6 lg:mt-10 justify-center lg:justify-start items-center">
                <p className="text-[#1C42CA] text-2xl sm:text-4xl font-semibold">
                  200+
                </p>
                <div className="ml-6 sm:ml-4">
                  <p className="text-md sm:text-xl">
                    years as a UNESCO World Heritage Site
                  </p>
                </div>
              </div>

              <div className="flex flex-row mt-6 lg:mt-10 justify-center lg:justify-start items-center">
                <p className="text-[#1C42CA] text-2xl sm:text-4xl font-semibold">
                  100+
                </p>
                <div className="ml-6 sm:ml-4">
                  <p className="text-md sm:text-xl">
                    street food earning the title of Food Heaven
                  </p>
                </div>
              </div>

              <div className="flex flex-row mt-6 lg:mt-10 justify-center lg:justify-start items-center">
                <p className="text-[#1C42CA] text-2xl sm:text-4xl font-semibold">
                  70+
                </p>
                <div className="ml-8 xs:ml-4">
                  <p className="text-md sm:text-xl">tourist attractions</p>
                </div>
              </div>
            </div>

            {/* Shape element */}
            <div
              ref={sectionRef}
              className={`hidden sm:flex justify-center items-center w-full mt-4 lg:mt-0 xl:ml-[8vw] lg:w-[500px] ${
                animate ? "fadeInUpContent" : "opacity-0"
              }`}
            >
              <div className="relative w-full max-w-xl aspect-square">
                <div className="absolute inset-0 flex justify-center items-center rounded-full top-10 left-40 w-64 h-[30rem] overflow-hidden  animate-float">
                  <img
                    src="/assets/mural_georgetown.jpg"
                    alt="Example"
                    className="w-[full] h-full object-cover"
                  />
                </div>
                <div className="absolute flex justify-center items-center w-[30%] h-[30%] top-[10%] left-[12%] border-8 border-[white] rounded-full bg-[rgba(32,229,239,0.2)] overflow-hidden animate-float-delay-200">
                  <img
                    src="/assets/mural_georgetown.jpg"
                    alt="Circle 1"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute flex justify-center items-center w-[30%] h-[30%] bottom-[10%] lg:bottom-[0%] right-[10%] lg:right-[0%] border-8 border-[white] rounded-full bg-[rgba(32,229,239,0.2)] overflow-hidden animate-float-delay-600">
                  <img
                    src="/assets/mural_georgetown.jpg"
                    alt="Circle 2"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
