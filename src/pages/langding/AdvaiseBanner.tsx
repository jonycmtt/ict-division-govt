const AdviseBanner = () => {
  return (
    <div
      className="py-20 h-[400px] mb-20"
      style={{
        backgroundImage:
          "url(https://github.com/jonycmtt/ict-division-govt/blob/main/src/assets/img/dangu.jpg?raw=true)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white">To Prevent Dengue</h2>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default AdviseBanner;
