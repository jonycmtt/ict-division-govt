import AdviseBanner from "./AdvaiseBanner";
import Community from "./Community";
import DepartmentInfo from "./department/DepartmentInfo";
import EServices from "./EServices/EServices";
import NoticeAndEvent from "./NoticeAndEvent";
import SiteBanner from "./SiteBanner";
import WithUse from "./WithUse";

const Landing = () => {
  return (
    <div>
      <DepartmentInfo />
      <EServices />
      <AdviseBanner />

      <SiteBanner />
      <NoticeAndEvent />
      <WithUse />
      <Community />
    </div>
  );
};

export default Landing;
