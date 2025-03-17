import {React ,useRef,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './HomeSlider.css'


function homeSlider() {
  const canvasRef= useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.src = "https://example.com/image.jpg"; // Replace with your image
    image.onload = () => {
      // Draw the image
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      // Apply text transformations
      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";

      // Rotate text for effect
      ctx.save(); // Save the current canvas state
      ctx.translate(canvas.width / 2, canvas.height / 2); // Center the text
      ctx.rotate(-0.1); // Rotate the text slightly
      ctx.fillText("Hello Canvas!", 0, 0); // Add text at the transformed position
      ctx.restore(); // Restore canvas to its original state
    };
  }, []);
  return (
    <div className="swiper-outer-container  overflow-auto  flex">
      <div className="left-inner-container  pl-18 pt-7 pr-7 ">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-2xl ">
          <SwiperSlide >
            <div className=" ">
              <img src="/banner-images/banner-image3.jpg" alt="" className='' />
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="">
              <img src="/banner-images/banner-image2.jpg" alt="" className='' />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="right-inner-container  flex flex-col pt-7  ">
        <div className="flex-1 pb-5 ">
        <canvas ref={canvasRef} className="w-[270px] h-[190px]"></canvas>;
          {/* <img src="/banner-images/right-banner-img1.jpg" alt="" className='rounded-2xl w-[270px] ' /> */}
          
        </div>
        <div className="flex-1 pb-8">
          <img src="/banner-images/right-banner-img2.jpg" alt="" className='rounded-2xl w-[270px]' />
        </div>
      </div>
    </div>

  )
}

export default homeSlider
