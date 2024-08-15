import { MdKeyboardArrowRight } from "react-icons/md";

const SingleDepartmentCard = ({ dataItems }: { dataItems: object }) => {
  const { name, items, image } = dataItems;

  return (
    <div className="card card-compact bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-xl font-bold text-[#33333] montserrat">{name}</h2>
        <div className="flex gap-4  mt-4">
          <img className="w-20 h-20 object-cover" src={image} alt="" />
          <ul className="space-y-2">
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
    </div>
  );
};

export default SingleDepartmentCard;
