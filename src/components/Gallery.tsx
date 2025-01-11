import "../controller/gallery.css";

function Gallery() {
  return (
    <>
      <section id="gallery" className="section">
        <p className="[font-family:'Poppins', Helvetica] font-bold text-blue-700 text-[6vw] mb-8 lg:mb-16 md:text-[4vw] text-center tracking-[0] leading-[normal]">
          Gallery
        </p>
        <div className="grid gap-[30px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] auto-rows-[150px] grid-flow-row-dense">
          <div
            className="item"
            style={{ backgroundImage: "url('/gallery/medium_1.jpg')" }}
          ></div>
          <div
            className="item item--large"
            style={{ backgroundImage: "url('/gallery/large_1.JPG')" }}
          ></div>
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
      </section>
    </>
  );
}

export default Gallery;
