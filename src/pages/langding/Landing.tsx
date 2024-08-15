import AdviseBanner from "./AdvaiseBanner";
import DepartmentInfo from "./department/DepartmentInfo";
import EServices from "./EServices/EServices";

const Landing = () => {
  return (
    <div>
      <DepartmentInfo />
      <EServices />
      <AdviseBanner />
    </div>
  );
};

export default Landing;
