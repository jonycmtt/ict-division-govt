import AchieveMent from "./AchieveMent";
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
      <AchieveMent />
    </div>
  );
};

export default Landing;
