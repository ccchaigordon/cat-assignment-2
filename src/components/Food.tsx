import "../controller/food.css";
import carouselItems from "../data/food.json";

function Food() {
  return (
    <>
      <div className="flex h-[70vh] w-full animated-background bg-gradient-to-r from-blue-900 via-blue-900 to-indigo-700 overflow-hidden">
        <div className="flex flex-row w-screen lg:w-10/12 mx-auto justify-center md:justify-between">
          {/* Carousel */}
          <div className="relative w-full max-w-[31.25rem] flex justify-center flex-col">
            {carouselItems.map((item, index) => (
              <div key={index} className="carousel__item drop-shadow-xl">
                <div className="carousel__item-head [font-family:'Poppins', Helvetica]">
                  <img
                    src={item.path}
                    alt=""
                    className="w-full h-auto rounded-full"
                  />
                </div>
                <div className="carousel__item-body">
                  <p className="text-[3.5vw] sm:text-[20px] font-semibold">
                    {item.title}
                  </p>
                  <p className="text-[2.5vw] sm:text-[15px] font-base">
                    {item.desc_short}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Descriptions */}
          <div className="hidden md:flex relative w-full max-w-[40vw] justify-center flex-col">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className="carousel__item flex bg-transparent justify-center items-center h-full"
              >
                <div className="flex-col bg-transparent items-center">
                  <img
                    src={item.path}
                    alt=""
                    className="w-auto h-full rounded-full object-cover mx-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Food;
