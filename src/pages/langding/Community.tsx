const Community = () => {
  return (
    <div
      className="py-20"
      style={{
        backgroundImage:
          "url(https://gramotech.net/html/balad/images/npatt.png) ",
      }}
    >
      <div className="max-w-5xl mx-auto ">
        <h2 className="text-4xl font-semibold montserrat">Meet Officials</h2>
        <div className="flex my-6 gap-12">
          <div>
            <img
              className="w-full h-[250px]"
              src="https://ictd.portal.gov.bd/sites/default/files/files/ictd.portal.gov.bd/npfblock//Honorable%20Adviser%20%281%29.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[250px]"
              src="https://ictd.portal.gov.bd/sites/default/files/files/ictd.portal.gov.bd/npfblock//Honorable%20Secretary%20Sir.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
