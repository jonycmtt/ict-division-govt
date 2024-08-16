import { MdKeyboardArrowRight } from "react-icons/md";

export type TDepartment = {
  name?: string;
  items?: string[];
  image?: string;
};

const SingleDepartmentCard = ({ dataItems }: { dataItems: TDepartment }) => {
  const { name, items, image } = dataItems;

  return (
    <div className="card card-compact bg-base-100 shadow ">
      <div className="card-body ">
        <div className="flex justify-center items-center flex-col gap-y-4">
          <img className="w-24 h-20 object-contain" src={image} alt="" />
          <h2 className="text-xl font-bold text-[#33333] montserrat text-center">
            {name}
          </h2>
        </div>
        <ul className="space-y-2 mt-5">
          {items?.map((item: any, index: number) => (
            <li key={index} className="flex items-center gap-1">
              <MdKeyboardArrowRight />{" "}
              <a href="#" className="text-[#333] montserrat">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleDepartmentCard;
