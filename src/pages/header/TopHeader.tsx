import { IoClose } from "react-icons/io5";

const TopHeader = () => {
  return (
    <div className="topHeader w-full">
      <div className="max-w-5xl h-full mx-auto flex justify-between items-center text-white">
        <div>
          <h2 className="lato ">
            Office attachment
            <span className="font-semibold">application form</span> !
          </h2>
        </div>
        <div className="flex items-center">
          <button className="btn h-full btn-error btn-sm  uppercase text-white font-bold rounded ">
            Application form
          </button>
          <button className="bg-[rgba(0,0,0,.30)] h-full w-full p-2">
            <IoClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
