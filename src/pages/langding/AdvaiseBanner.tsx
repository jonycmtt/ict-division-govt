const AdviseBanner = () => {
  return (
    <div
      className="py-20 h-[500px] mb-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,0.7)), url(https://github.com/jonycmtt/ict-division-govt/blob/main/src/assets/img/dangu.jpeg?raw=true)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-5xl h-full mx-auto flex flex-col gap-y-5 justify-center items-start">
        <h2 className="text-6xl montserrat font-bold text-white ">
          To Prevent Dengue
        </h2>
        <div className="w-1/2 text-center">
          <a href="#">
            <button className="btn btn-error text-white">Learn More</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdviseBanner;
