import { FaAngleRight } from "react-icons/fa";

import AudioPlayer from "./AudioPlayer";

const Community = () => {
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto ">
        <div>
          <h2>Important Link</h2>
          <ul>
            <li>
              <FaAngleRight />
              President's Office
            </li>
            <li>
              <FaAngleRight />
              Prime Minister's Office
            </li>
            <li>
              <FaAngleRight />
              Cabinet Division
            </li>
            <li>
              <FaAngleRight />
              Bangladesh Karmachari Kallyan Board (BKKB)
            </li>
            <li>
              <FaAngleRight />
              National Skills Development Authority
            </li>
            <li>
              <FaAngleRight />
              Primary Digital Content
            </li>
            <li>
              <FaAngleRight />
              National Portal
            </li>
          </ul>
        </div>
        <div>
          <h2>National Anthem</h2>
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <AudioPlayer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
