const Banner = () => {
  return (
    <div className="relative">
      {/* slider */}
      <div
        className="w-full h-screen flex justify-center items-center text-left"
        style={{
          backgroundImage:
            "url(https://gramotech.net/html/balad/images/h3-slide2.jpg) ",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="space-y-4">
          <h2 className="text-6xl font-bold text-white">ICT Division</h2>
          <p className="text-lg text-white italic">
            Government of the people's republic of bangladesh
          </p>
          <button className="btn btn-error btn-sm">Learn More</button>
        </div>
      </div>

      <div
        className="bottom-banner py-8 "
        style={{
          backgroundImage:
            "url(https://gramotech.net/html/balad/images/npatt.png) ",
        }}
      >
        <div className="max-w-6xl mx-auto text-white flex items-center gap-12">
          <div className="relative -mt-20">
            <img
              className="w-[700px] h-[350px] rounded-lg object-cover"
              src="https://ictd.portal.gov.bd/sites/default/files/files/ictd.portal.gov.bd/npfblock//Honorable%20Adviser%20%281%29.jpg"
              alt="nahid"
            />
            <span className="bg-[#40407e] text-sm montserrat  font-bold p-1 px-2 uppercase rounded rounded-l-none absolute top-2 left-0">
              Honorable Adviser
            </span>
            <a href="#" className="absolute bottom-4 right-4 cursor-pointer">
              <img
                src="https://gramotech.net/html/balad/images/playicon.png"
                alt=""
              />
            </a>
          </div>
          <div className="space-y-4">
            <h2 className="font-bold montserrat text-2xl">
              Welcome to Visit ICT Division
            </h2>
            <p className="">
              The Hightst Glory of the Citizen’s revolution was this; it
              connected in one indissoluble bond the principles of civil
              government with the principles of humanity. Saepe eveniet ut et
              voluptates etena repudiandae sint et molestiae non recusandae.
            </p>
            <span className="w-24 h-[1px] block bg-[rgba(255,255,255,.20)]"></span>
            <h2 className="text-xl font-semibold montserrat">
              Md. Nahid Islam
            </h2>
            <span className="italic">Honorable Adviser</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
