import EventSlider from "./EventSlider";

const NoticeAndEvent = () => {
  return (
    <div
      className="pt-20 pb-36"
      style={{
        backgroundImage:
          "url(https://gramotech.net/html/balad/images/eventsbg.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl h-full relative mx-auto grid grid-cols-12 gap-20">
        <div className="col-span-5 relative">
          <h2 className="text-4xl font-bold text-white montserrat mb-8">
            Recent Events
          </h2>
          <EventSlider />
        </div>
        <div className="col-span-7">
          <h2 className="text-4xl font-bold text-white montserrat mb-8">
            Notice Board
          </h2>
          <div className="overflow-hidden  rounded">
            <div className="bg-[#ddd] w-32 p-2 rounded-r rounded-b-">
              <a href="3" className="montserrat font-semibold ">
                ALL NOTICE
              </a>
            </div>
            <ul className="bg-white rounded-r">
              <li className="flex items-center gap-4 p-6 border-b hover:border-l-4 border-l-4 hover:border-l-[#d94148] relative">
                <div>
                  <strong className="text-[#d94148] block font-bold uppercase">
                    15 Aug 2024
                  </strong>
                  {/* <strong className="block text-[#aaaaaa] uppercase">
                    09:00 pm
                  </strong> */}
                </div>
                <div>
                  <a href="#" className="text-[15px] ">
                    প্রজ্ঞাপন (স্মারক-৬৮, চাকরি স্থায়ীকরণ, প্রোগ্রামার ও
                    সহকারী...
                  </a>
                </div>
                <div className="badge badge-neutral ">New</div>
              </li>
              <li className="flex items-center gap-4 p-6 border-b hover:border-l-4 border-l-4 hover:border-l-[#d94148] relative">
                <div>
                  <strong className="text-[#d94148] block font-bold uppercase">
                    11 Aug 2024
                  </strong>
                  {/* <strong className="block text-[#aaaaaa] uppercase">
                    09:00 pm
                  </strong> */}
                </div>
                <div>
                  <a href="#" className="text-[15px] ">
                    অফিস আদেশ (দায়িত্ব বণ্টন)
                  </a>
                </div>
                <div className="badge badge-neutral ">New</div>
              </li>
              <li className="flex items-center gap-4 p-6 border-b hover:border-l-4 border-l-4 hover:border-l-[#d94148] relative">
                <div>
                  <strong className="text-[#d94148] block font-bold uppercase">
                    8 aug 2024
                  </strong>
                  {/* <strong className="block text-[#aaaaaa] uppercase">
                    09:00 pm
                  </strong> */}
                </div>
                <div>
                  <a href="#" className="text-[15px] ">
                    ২০২৪-২০২৫ অর্থবছরের বিজ্ঞপ্তি
                  </a>
                </div>
                <div className="badge badge-neutral ">New</div>
              </li>
              <li className="flex items-center gap-4 p-6 border-b hover:border-l-4 border-l-4 hover:border-l-[#d94148] relative">
                <div>
                  <strong className="text-[#d94148] block font-bold uppercase">
                    5 Aug 2024
                  </strong>
                  {/* <strong className="block text-[#aaaaaa] uppercase">
                    09:00 pm
                  </strong> */}
                </div>
                <div>
                  <a href="#" className="text-[15px] ">
                    e-Tender For “Procurement of Food and Refreshment...
                  </a>
                </div>
                {/* <div>
                  <button>Open</button>
                </div> */}
              </li>
              <li className="flex items-center gap-4 p-6 border-b hover:border-l-4 border-l-4 hover:border-l-[#d94148] relative">
                <div>
                  <strong className="text-[#d94148] block font-bold uppercase">
                    02 Aug 2024
                  </strong>
                  {/* <strong className="block text-[#aaaaaa] uppercase">
                    09:00 pm
                  </strong> */}
                </div>
                <div>
                  <a href="#" className="text-[15px] ">
                    অফিস আদেশ (অবমুক্তি, জনাব মির্জা মুরাদ হাসান বেগ,
                    উপ-পরিচালক)
                  </a>
                </div>
                {/* <div>
                  <button>Open</button>
                </div> */}
              </li>
              <li className="flex items-center gap-4 p-6 border-b hover:border-l-4 border-l-4 hover:border-l-[#d94148] relative">
                <div>
                  <strong className="text-[#d94148] block font-bold uppercase">
                    01 Aug 2024
                  </strong>
                </div>
                <div>
                  <a href="#" className="text-[15px] ">
                    অফিস আদেশ (অবমুক্তি, জনাব মির্জা মুরাদ হাসান বেগ,
                    উপ-পরিচালক)
                  </a>
                </div>
                {/* <div>
                  <button>Open</button>
                </div> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeAndEvent;
