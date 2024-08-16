import AchieveMent from "./AchieveMent";
import AdviseBanner from "./AdvaiseBanner";
import Community from "./Community";
import DepartmentInfo from "./department/DepartmentInfo";
import EServices from "./EServices/EServices";
import NoticeAndEvent from "./NoticeAndEvent";
import SiteBanner from "./SiteBanner";

const Landing = () => {
  return (
    <div>
      <DepartmentInfo />
      <EServices />
      <AdviseBanner />
      {/* <Community /> */}
      <NoticeAndEvent />
      {/* <AchieveMent /> */}
      <SiteBanner />
    </div>
  );
};

export default Landing;
