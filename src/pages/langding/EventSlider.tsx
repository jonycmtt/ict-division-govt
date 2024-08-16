import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { FaImages } from "react-icons/fa";
import { IoPlayCircleOutline } from "react-icons/io5";
import { Swiper as SwiperType } from "swiper/types";

const EventSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <div className="relative h-full">
            <img
              className="w-full h-full  rounded"
              src="https://gramotech.net/html/balad/images/rec-event1.jpg"
              alt=""
            />
            <div className="bg-[rgba(0,0,0,.80)] text-white p-4 absolute w-full bottom-0 left-0">
              <h3 className="text-xl montserrat font-bold mb-3">
                Digital Literacy Programs
              </h3>
              <ul className="flex gap-4">
                <li className="flex items-center gap-2">
                  <FaImages />
                  <span>83 Photos</span>
                </li>
                <li className="flex items-center gap-2">
                  <IoPlayCircleOutline />
                  <span>16 Videos</span>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full">
            <img
              className="w-full h-full  rounded"
              src="https://gramotech.net/html/balad/images/rec-event2.jpg"
              alt=""
            />
            <div className="bg-[rgba(0,0,0,.80)] text-white p-4 absolute w-full bottom-0 left-0">
              <h3 className="text-xl montserrat font-bold mb-3">
                Digital Literacy Programs
              </h3>
              <ul className="flex gap-4">
                <li className="flex items-center gap-2">
                  <FaImages />
                  <span>83 Photos</span>
                </li>
                <li className="flex items-center gap-2">
                  <IoPlayCircleOutline />
                  <span>16 Videos</span>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full">
            <img
              className="w-full h-full  rounded"
              src="https://gramotech.net/html/balad/images/rec-event3.jpg"
              alt=""
            />
            <div className="bg-[rgba(0,0,0,.80)] text-white p-4 absolute w-full bottom-0 left-0">
              <h3 className="text-xl montserrat font-bold mb-3">
                Digital Literacy Programs
              </h3>
              <ul className="flex gap-4">
                <li className="flex items-center gap-2">
                  <FaImages />
                  <span>83 Photos</span>
                </li>
                <li className="flex items-center gap-2">
                  <IoPlayCircleOutline />
                  <span>16 Videos</span>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full">
            <img
              className="w-full h-full  rounded"
              src="https://gramotech.net/html/balad/images/rec-event4.jpg"
              alt=""
            />
            <div className="bg-[rgba(0,0,0,.80)] text-white p-4 absolute w-full bottom-0 left-0">
              <h3 className="text-xl montserrat font-bold mb-3">
                Digital Literacy Programs
              </h3>
              <ul className="flex gap-4">
                <li className="flex items-center gap-2">
                  <FaImages />
                  <span>83 Photos</span>
                </li>
                <li className="flex items-center gap-2">
                  <IoPlayCircleOutline />
                  <span>16 Videos</span>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper} // Correctly use onSwiper callback here
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://gramotech.net/html/balad/images/rec-event1.jpg"
            alt="Nature 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://gramotech.net/html/balad/images/rec-event2.jpg"
            alt="Nature 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://gramotech.net/html/balad/images/rec-event3.jpg"
            alt="Nature 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://gramotech.net/html/balad/images/rec-event4.jpg"
            alt="Nature 2"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default EventSlider;
