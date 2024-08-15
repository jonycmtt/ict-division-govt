const AdviseBanner = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://gramotech.net/html/balad/images/deprtinfobg.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h2>To Prevent Dengue</h2>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default AdviseBanner;
