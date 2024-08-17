const MiddleHeader = () => {
  return (
    <div className="flex justify-between items-center flex-col lg:flex-row gap-6 max-w-5xl mx-auto py-12 lg:py-1 px-6 lg:px-0">
      <div className="flex  items-center gap-4">
        <select className="input  input-sm select-primary text-sm w-full max-w-[200px]">
          <option className="text-slate-400" value="" selected disabled>
            অফিসের ধরণ
          </option>
          <option value="ministry">মন্ত্রণালয়/বিভাগ</option>
          <option value="directorate">অধিদপ্তর বাতায়ন</option>
          <option value="divisional">বিভাগীয় বাতায়ন</option>
          <option value="districal">জেলা বাতায়ন</option>
          <option value="upazilaBatayon">উপজেলা বাতায়ন</option>
          <option value="unionBatayon">ইউনিয়ন বাতায়ন</option>
          <option value="otherOfficeList">অন্যান্য</option>
        </select>
        <button className="btn btn-sm bg-[#12498a] text-white">Go</button>
      </div>
      <div className="text-2xl font-semibold">
        <a href="#">ICT Division</a>
      </div>
      <div className="flex items-center gap-4 ">
        <div className="cursor-pointer">
          {/* <h2>পোলিং</h2> */}
          <img
            className="w-8"
            src="https://polling.portal.gov.bd/poll-icon.gif"
            alt=""
          />
        </div>
        <div className="border-r h-12"></div>
        <div className="cursor-pointer">
          {/* <h2>মতামত</h2> */}
          <img
            className="w-8"
            src="https://polling.portal.gov.bd/comment.gif"
            alt=""
          />
        </div>
        <div className="border-r h-12"></div>
        <button className="btn btn-sm bg-[#12498a] text-white">Bangla</button>
      </div>
    </div>
  );
};

export default MiddleHeader;
