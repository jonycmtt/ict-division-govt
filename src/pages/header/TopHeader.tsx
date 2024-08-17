const TopHeader = () => {
  return (
    <div className={`topHeader w-full px-2 lg:px-0 capitalize`}>
      <div className="max-w-5xl h-full mx-auto flex justify-between items-center text-white">
        <div>
          <h2 className="lato text-xs sm:text-[16px]">
            Office attachment
            <span className="font-semibold"> application form</span> !
          </h2>
        </div>
        <div className="flex items-center">
          <button className="btn h-full btn-error btn-xs sm:btn-sm  uppercase text-white font-bold rounded ">
            Application form
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
