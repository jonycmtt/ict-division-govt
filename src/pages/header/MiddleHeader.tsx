const MiddleHeader = () => {
  return (
    <div className="flex justify-between items-center flex-col lg:flex-row gap-6 max-w-5xl mx-auto py-8 lg:py-1 px-6 lg:px-0">
      <div className="flex  items-center gap-4">
        {/* <a href="#" className="lato">
          Bangladesh National Portal
        </a> */}
        <select className="select  input select-primary h-1 w-full max-w-[200px]">
          <option disabled selected>
            অফিসে ধরন
          </option>
          <option>Game of Thrones</option>
          <option>Lost</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
        </select>
        <button className="btn btn-sm bg-[#12498a] text-white">Go</button>
      </div>
      <div className="text-2xl font-semibold">
        <a href="#">ICT Division</a>
      </div>
      <div className="flex items-center gap-8 ">
        <div className="cursor-pointer">
          <h2>পোলিং</h2>
          <img
            className="w-8"
            src="https://polling.portal.gov.bd/poll-icon.gif"
            alt=""
          />
        </div>
        <div className="border-r h-16"></div>
        <div className="cursor-pointer">
          <h2>মতামত</h2>
          <img
            className="w-8"
            src="https://polling.portal.gov.bd/comment.gif"
            alt=""
          />
        </div>
        <div className="border-r h-16"></div>
        <button className="btn btn-sm bg-[#12498a] text-white">Bangla</button>
      </div>
    </div>
  );
};

export default MiddleHeader;
