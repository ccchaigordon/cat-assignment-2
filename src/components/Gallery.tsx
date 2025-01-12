import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../controller/gallery.css";

function Gallery() {
  const [expanded, setExpanded] = useState(false);
  const [containerStyle, setContainerStyle] = useState({
    maxHeight: "520px",
    overflow: "hidden",
    transition: "max-height 0.3s ease-in-out",
  });

  useEffect(() => {
    function updateStyle() {
      if (window.innerWidth < 640) {
        setContainerStyle({
          maxHeight: expanded ? "none" : "700px",
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out",
        });
      } else {
        setContainerStyle({
          maxHeight: expanded ? "none" : "520px",
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out",
        });
      }
    }

    updateStyle();
    window.addEventListener("resize", updateStyle);
    return () => window.removeEventListener("resize", updateStyle);
  }, [expanded]);

  return (
    <>
      <section id="gallery" className="section">
        <p className="[font-family:'Poppins', Helvetica] font-bold text-blue-700 text-[6vw] mt-12 md:mt-0 mb-8 lg:mb-16 md:text-[4vw] text-center tracking-[0] leading-[normal]">
          Gallery
        </p>
        <div
          className="grid gap-[30px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] auto-rows-[150px] grid-flow-row-dense"
          style={containerStyle}
        >
          <div
            className="item"
            style={{ backgroundImage: "url('/gallery/medium_1.jpg')" }}
          ></div>
          <div className="item item--large">
            <video
              autoPlay
              loop
              muted
              className="absolute w-screen h-screen object-cover"
            >
              <source
                src="/gallery/penang_hill_memories.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div
            className="item item--medium"
            style={{ backgroundImage: "url('/gallery/medium_2.jpg')" }}
          ></div>
          <div
            className="item"
            style={{ backgroundImage: "url('/gallery/medium_3.jpg')" }}
          ></div>
          <div
            className="item item--full"
            style={{ backgroundImage: "url('/gallery/full_1.JPG')" }}
          ></div>
          <div
            className="item item--medium"
            style={{ backgroundImage: "url('/gallery/medium_4.jpg')" }}
          ></div>
          <div
            className="item item--large"
            style={{ backgroundImage: "url('/gallery/large_3.jpg')" }}
          ></div>
          <div
            className="item"
            style={{ backgroundImage: "url('/gallery/full_2.JPG')" }}
          ></div>
          <div
            className="item item--medium"
            style={{ backgroundImage: "url('/gallery/large_5.JPG')" }}
          ></div>
          <div
            className="item item--large"
            style={{ backgroundImage: "url('/gallery/large_2.PNG')" }}
          ></div>
          <div
            className="item"
            style={{ backgroundImage: "url('/gallery/small_1.jpg')" }}
          ></div>
          <div
            className="item item--medium"
            style={{ backgroundImage: "url('/gallery/large_7.jpg')" }}
          ></div>
          <div
            className="item item--medium"
            style={{ backgroundImage: "url('/gallery/medium_5.jpg')" }}
          ></div>
          <div
            className="item item--large"
            style={{ backgroundImage: "url('/gallery/large_6.jpg')" }}
          ></div>
          <div
            className="item"
            style={{ backgroundImage: "url('/gallery/small_2.jpg')" }}
          ></div>
        </div>
        <Link
          to={expanded ? "gallery" : ""}
          spy={true}
          smooth={true}
          offset={-80}
          duration={300}
          className="flex w-full mt-2 mb-6 items-center justify-center"
        >
          <button
            onClick={() => setExpanded(!expanded)}
            className="bg-secondary border-secondary rounded-full inline-flex items-center justify-center mt-6 mb-6 sm:mb-0 py-3 px-7 text-center text-base font-bold text-[#4450ff] border-2 border-[#4450ff] hover:text-[#0011ff] hover:border-[#0011ff] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
          >
            {expanded ? "See Less" : "See More"}
          </button>
        </Link>
      </section>
    </>
  );
}

export default Gallery;
