const SiteBanner = () => {
  return (
    <div
      className="py-10 min-h-[500px] my-20"
      style={{
        backgroundImage:
          "url(https://gramotech.net/html/balad/images/deprtinfobg.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl flex justify-between gap-12 mx-auto w-full ">
        <div className="w-full">
          <h2 className="text-2xl font-bold montserrat mb-10">
            বন্যার সময় কি করণীয়
          </h2>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/GT9ShGE_qjg?si=qc6TEvmKSh1R7lGI"
            title="YouTube video player"
            //   frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            //   referrerpolicy="strict-origin-when-cross-origin"
            //   allowfullscreen
          ></iframe>
        </div>
        <div className="h-full w-full text-center ">
          <div className="">
            <h2>
              <h2 className="text-center font-semibold mb-5">
                বার্ষিক কর্মসম্পাদন চুক্তি (এপিএ) ২০২০-২০২১ এর চূড়ান্ত মূল্যায়নে
                তথ্য ও যোগাযোগ প্রযুক্তি বিভাগের প্রথম স্থান অর্জন
              </h2>
            </h2>
            <a
              className="inline-flex justify-center items-center"
              target="_blank"
              href="https://ictd.portal.gov.bd/sites/default/files/files/ictd.portal.gov.bd/npfblock//ICT%20Division%20Result.png"
            >
              <img
                className="size-80 "
                src="https://ictd.portal.gov.bd/sites/default/files/files/ictd.portal.gov.bd/npfblock//ICT%20Division%20Result.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteBanner;
