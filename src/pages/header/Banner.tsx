// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
const Banner = () => {
  return (
    <div className="relative">
      {/* slider */}
      <Swiper
        className="mySwiper"
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 4000, // Delay between slides (in milliseconds)
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        loop={true}
      >
        <SwiperSlide>
          <div
            className="flex items-center w-full h-[400px] sm:h-[400px] lg:h-[450px] "
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/top_banner/c8c2e326_f0dd_4f0d_8972_b748b556d2af/Banner-2.jpg) ",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full max-w-5xl  mx-auto">
              <div className="w-full flex gap-5">
                <img
                  className="slider-img"
                  src="https://ictd.gov.bd/themes/responsive_npf/img/logo/logo.png"
                  alt=""
                />
                <div className="">
                  <h2 className="text-4xl font-bold text-white">
                    ICT Division Bangladesh
                  </h2>
                  <p className="text-lg text-white italic mb-6">
                    Government of the people's republic of bangladesh
                  </p>
                  <button className="btn bg-[#12498a] border-0 text-white ">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex items-center w-full h-[400px] sm:h-[400px] lg:h-[450px] "
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(//ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/top_banner/78b6ffb5_f497_4a06_bf93_242db0cbef0d/Banner-1.jpg) ",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full max-w-5xl  mx-auto">
              <div className="w-full flex gap-5">
                <img
                  className="slider-img"
                  src="https://ictd.gov.bd/themes/responsive_npf/img/logo/logo.png"
                  alt=""
                />
                <div className="">
                  <h2 className="text-4xl font-bold text-white">
                    ICT Division Bangladesh
                  </h2>
                  <p className="text-lg text-white italic mb-6">
                    Government of the people's republic of bangladesh
                  </p>
                  <button className="btn bg-[#12498a] border-0 text-white ">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div
        className="bottom-banner py-8 z-50"
        style={{
          backgroundImage:
            "url(https://gramotech.net/html/balad/images/npatt.png) ",
        }}
      >
        <div className="max-w-6xl mx-auto text-white flex flex-col lg:flex-row items-center gap-12 px-4 xl:px-0">
          <div className="relative mt-0 lg:-mt-20 z-50">
            <img
              className="max-w-[700px] h-[350px] rounded-lg  object-cover"
              src="https://ictd.portal.gov.bd/sites/default/files/files/ictd.portal.gov.bd/npfblock//Honorable%20Adviser%20%281%29.jpg"
              alt="nahid"
            />
            <span className="bg-[#40407e] text-sm montserrat  font-bold p-1 px-2 uppercase rounded rounded-l-none absolute top-2 left-0">
              Honorable Adviser
            </span>
            <span className="bg-[#40407e] text-sm montserrat  font-bold p-1 px-2 uppercase rounded rounded-l-none absolute bottom-2 left-0">
              Md. Nahid Islam
            </span>
            <a href="#" className="absolute bottom-4 right-4 cursor-pointer">
              <img
                src="https://gramotech.net/html/balad/images/playicon.png"
                alt=""
              />
            </a>
          </div>
          <div className="space-y-4">
            <h2 className="font-bold montserrat text-xl lg:text-2xl text-center">
              Welcome to Visit ICT Division
            </h2>
            <p className="text-left text-[#ddd]">
              " The ICT Division of Bangladesh leads the nation's digital
              transformation by implementing policies and projects that promote
              innovation and e-governance. Discover more at ICT Division. "
            </p>
            <div className="flex justify-between items-center">
              <div className="mt-4">
                <span className="w-24 h-[1px] block bg-[rgba(255,255,255,.20)]"></span>
                <h2 className="text-xs font-semibold montserrat">
                  Md. Nahid Islam
                </h2>
                <span className="italic text-xs">Honorable Adviser</span>
              </div>
              <div className="mt-4">
                <span className="w-24 h-[1px] block bg-[rgba(255,255,255,.20)]"></span>
                <h2 className="text-xs font-semibold montserrat z-10">
                  Md. Shamsul Arefin
                </h2>
                <span className="italic text-xs">Secretary</span>
              </div>
            </div>
          </div>
          <div className="relative mt-0 lg:-mt-20 z-50">
            <img
              className="max-w-[700px] h-[350px] rounded-lg object-cover"
              src="https://ictd.portal.gov.bd/sites/default/files/files/ictd.portal.gov.bd/npfblock//Honorable%20Secretary%20Sir.jpg"
              alt="nahid"
            />

            <span className="bg-[#40407e] text-sm montserrat  font-bold p-1 px-2 uppercase rounded rounded-l-none absolute top-2 left-0">
              Secretary
            </span>
            <span className="bg-[#40407e] text-sm montserrat  font-bold p-1 px-2 uppercase rounded rounded-l-none absolute bottom-2 left-0">
              Md. Shamsul Arefin
            </span>
            <a href="#" className="absolute bottom-4 right-4 cursor-pointer">
              <img
                src="https://gramotech.net/html/balad/images/playicon.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
