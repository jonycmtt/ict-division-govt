import { useEffect, useState } from "react";
import SingleDepartmentCard from "./SingleDepartmentCard";

const DepartmentInfo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("department.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("error fetch json", error));
  }, []);

  return (
    <div className="bg-[#f7f7f7] py-10 lg:py-20 px-4 xl:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="section-title">
          <h2 className="text-[#333333] font-bold text-xl sm:text-2xl montserrat">
            Department News & Overview
          </h2>
          <p className="text-[#777777] italic relative my-2 flex items-center gap-2">
            <span className="w-5 h-[3px] bg-[#d94148] block"></span>
            <span>
              {" "}
              Access the latest department initiatives and information.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {data?.map((dataItems, index) => (
            <SingleDepartmentCard dataItems={dataItems} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentInfo;
