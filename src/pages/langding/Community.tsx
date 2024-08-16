import { FaAngleRight } from "react-icons/fa";

import AudioPlayer from "./AudioPlayer";

const Community = () => {
  return (
    <div className="py-20  h-auto">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5">
          <h2 className="text-2xl font-bold mb-8">National Anthem</h2>
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <img
                  className="w-full"
                  src="https://github.com/jonycmtt/ict-division-govt/blob/main/src/assets/img/sadhin.png?raw=true"
                  alt=""
                />
                <AudioPlayer />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-bold mb-8">Important Link</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <FaAngleRight />
              <a href="#"> President's Office</a>
            </li>
            <li className="flex items-center gap-2">
              <FaAngleRight />
              <a href="#">Prime Minister's Office</a>
            </li>
            <li className="flex items-center gap-2">
              <FaAngleRight />
              <a href="#"> Cabinet Division</a>
            </li>
            <li className="flex items-center gap-2">
              <FaAngleRight />
              <a href="#"> Bangladesh Karmachari Kallyan Board (BKKB)</a>
            </li>
            <li className="flex items-center gap-2">
              <FaAngleRight />
              <a href="#"> National Skills Development Authority</a>
            </li>
            <li className="flex items-center gap-2">
              <FaAngleRight />
              <a href="#"> Primary Digital Content</a>
            </li>
            <li className="flex items-center gap-2">
              <FaAngleRight />
              <a href="">National Portal</a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold mb-8"> Adds Show</h2>
          <ul className="space-y-4">
            <li>
              <a href="#">
                <img
                  src="https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/npfblock//e-directory.jpg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/page/f1024bfc_ca81_4ef8_98cd_9a4436b0b423/internal_eservice_bn.jpg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/page/f1024bfc_ca81_4ef8_98cd_9a4436b0b423/mygov_logo_bn.jpg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/files/f071a55e_9356_44ed_ba33_461288ec14bd/discount_bn.jpg"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Community;
