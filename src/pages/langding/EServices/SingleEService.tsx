import { TDepartment } from "../department/SingleDepartmentCard";

const SingleEService = ({ service }: { service: TDepartment }) => {
  const { image, name } = service;
  return (
    <div className="card card-compact bg-white py-5 shadow">
      <div className="card-body justify-center items-center gap-y-4">
        <img className="w-24" src={image} alt="" />
        <h2 className="montserrat  text-[16px] text-center font-semibold">
          <a className="text-[#222] bg-transparent" href="#">
            {name}
          </a>
        </h2>
      </div>
    </div>
  );
};

export default SingleEService;
