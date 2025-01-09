import muralImage from './assets/Mural In George Town Penang Malaysia Wallpaper By T1000.jpg';
import { useState, useEffect } from 'react';

function AboutUs() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 640);

  // Monitor screen size changes
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return (      
        <div>          
            <div className = "video">      
                <h1><span style={{
                        color: 'transparent',
                        WebkitTextStroke: '1.5px #1c42ca',
                        fontWeight: "bold",
                    }}>About</span> <span style={{ color: '#1c42ca' }}>Penang</span>
                </h1>      
            </div>

            {isLargeScreen ? (
              <div className="Penang-Container">
                <div className="text-content">
                    <h1 style={{ color: '#1c42ca', fontSize: '50px' }}>Penang</h1>
                    <p className="aboutPen1">
                        Penang, a world-renowned exotic holiday destination, is known for its natural beauty, rich heritage, and vibrant culture.
                        Penang is a melting pot of diverse cultures and religions, and is a haven for food lovers.
                        With its rich history, Penang is also a UNESCO World Cultural Heritage Site. 
                    </p>
                    <div className="stats1">
                        <span style={{ color: '#1c42ca', marginRight: '10px', fontWeight:'bold', fontSize: '20px' }}>1.74 Million</span>
                        <span style={{ color: 'black', fontSize: '15px'  }}>People living in harmony</span><br />
                        <span style={{ color: '#1c42ca', marginRight: '10px', fontWeight:'bold', fontSize: '20px'  }}>200+</span>
                        <span style={{ color: 'black', fontSize: '15px' }}>years as a UNESCO World Heritage Site</span><br />
                        <span style={{ color: '#1c42ca', marginRight: '10px', fontWeight:'bold', fontSize: '20px' }}>100+</span>
                        <span style={{ color: 'black', fontSize: '15px' }}>Street food earning the title of Food Heaven</span><br />
                        <span style={{ color: '#1c42ca', marginRight: '10px', fontWeight:'bold', fontSize: '20px'  }}>70+</span>
                        <span style={{ color: 'black', fontSize: '15px' }}>Tourist attractions</span><br />
                    </div>
                </div>
              <div className="image-container1">
                  <div className="image-frame1">
                      <img src={muralImage} alt="Example" />
                  </div>
                  <div className="circle-frame1 frame1_1">
                    <img src={muralImage} alt="Circle 1" />
                  </div>
                  <div className="circle-frame1 frame1_2">
                    <img src={muralImage} alt="Circle 1" />
                  </div>
              </div>
            </div>
          ) : (
            <div className = "Penang">
              <h1 style={{ color: '#1c42ca' }}>Penang</h1> 
              <p className="aboutPen">
                  Penang, a world-renowned exotic holiday destination,
                  is known for its natural beauty, rich heritage, and vibrant culture.
                  Penang is a melting pot of diverse cultures and religions, and is a haven for food lovers.
                  With its rich history, Penang is also a UNESCO World Cultural Heritage Site. 
              </p>
              <div className="image-container">
                <div className="image-frame">
                  <img 
                    src={muralImage}  
                    alt="Example" 
                  />                                 
                  <div className="circle-frame frame1">
                    <img 
                      src={muralImage}  
                      alt="Example" 
                    />
                  </div>
                  <div className="circle-frame frame2">
                    <img 
                      src={muralImage}  
                      alt="Example" 
                    />
                  </div>                  
                </div>
              </div>

              <p className='stats'>
                <span style={{ color: '#1c42ca', marginRight:'10px' }}>1.74 Million</span>
                <span style={{ color: 'black' }}>People living in harmony</span><br />
                <span style={{ color: '#1c42ca', marginRight:'10px' }}>200+</span>
                <span style={{ color: 'black' }}>years as a UNESCO World Heritage Site</span><br />
                <span style={{ color: '#1c42ca', marginRight:'10px' }}>100+</span>
                <span style={{ color: 'black' }}>Street food earning the title of Food Heaven</span><br />
                <span style={{ color: '#1c42ca', marginRight:'10px' }}>70+</span>
                <span style={{ color: 'black' }}>Tourist attractions</span><br />
              </p>
          </div>
        )}           
      </div>       
        
    );
  }
  
  export default AboutUs;