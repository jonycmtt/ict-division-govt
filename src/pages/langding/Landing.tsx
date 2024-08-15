import AdviseBanner from "./AdvaiseBanner";
import Community from "./Community";
import DepartmentInfo from "./department/DepartmentInfo";
import EServices from "./EServices/EServices";
import NoticeAndEvent from "./NoticeAndEvent";

const Landing = () => {
  return (
    <div>
      <DepartmentInfo />
      <EServices />
      <AdviseBanner />
      {/* <Community /> */}
      <NoticeAndEvent />
    </div>
  );
};

export default Landing;
