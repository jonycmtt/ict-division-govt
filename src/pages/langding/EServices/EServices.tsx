import { useEffect, useState } from "react";
import SingleEService from "./SingleEService";

const EServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("error fetch json", error));
  }, []);

  return (
    <div
      className="relative py-10 lg:py-20 px-4 xl:px-0"
      style={{
        backgroundImage:
          "url(https://gramotech.net/html/balad/images/deprtinfobg.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-y-6 lg:gap-12">
        <div className="col-span-12 lg:col-span-9">
          <div className="section-title">
            <h2 className="text-[#333333] font-bold text-xl sm:text-2xl montserrat">
              Internal EServices & Information Desk
            </h2>
            <p className="text-[#777777] italic relative my-2 flex items-center gap-2">
              <span className="w-5 h-[3px] bg-[#d94148] block"></span>
              <span>
                {" "}
                Access the latest EServices initiatives and information.
              </span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12 ">
            {services?.map((service, index) => (
              <SingleEService key={index} service={service} />
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-3 bg-[#40407e] w-full  text-center rounded">
          <h2 className="text-white text-xl font-bold montserrat p-6">
            Emergency Hotline Services
          </h2>
          <div className="images-gallery px-2">
            <a href="#">
              <img
                className="rounded w-full h-[470px] object-contain"
                src="https://ictd.portal.gov.bd/sites/default/files/files/ictd.portal.gov.bd/npfblock//hotline_v.2_bn.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EServices;
