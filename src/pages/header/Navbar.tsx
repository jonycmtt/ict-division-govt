import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="max-w-7xl mx-auto relative flex justify-between items-center border-t py-5 px-6 xl:px-0">
      <div
        onClick={() => setShowNav(!showNav)}
        className="cursor-pointer lg:hidden z-20 text-white"
      >
        <FaBars
          className={`text-3xl ${showNav ? "text-white" : "text-black"}`}
        />
      </div>

      <ul
        className={` ${
          showNav ? "block" : "hidden"
        }flex lg:flex items-center flex-col lg:flex-row gap-y-4 lg:gap-6 text-[14.5px] absolute top-0 left-0 lg:relative z-50 bg-black lg:bg-white w-full h-screen lg:h-auto p-20 lg:p-0 text-center lg:text-left  text-white lg:text-[#333333]`}
      >
        <li>
          <a tabIndex={0} role="button" className="hover:text-[#12498a]  ">
            Home
          </a>
        </li>
        <li>
          <div className="dropdown">
            <summary className="">
              <a tabIndex={0} role="button" className="hover:text-[#12498a]  ">
                About Us
              </a>
            </summary>

            <div className=" dropdown-content bg-base-100 rounded-box z-[1] shadow">
              <div
                tabIndex={0}
                className="dropdown-content p-8  z-[10] shadow bg-white"
              >
                <div className="lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between lg:min-w-[900px]">
                  <div>
                    <ul className="space-y-2 text-black">
                      <li className="lg:text-xl font-bold text-black mb-4">
                        About Division
                      </li>
                      <li>
                        <a
                          href="/site/page/ab439356-145f-4759-942d-39ea506ff144/History-&amp;-Activities"
                          title="Enter to get more menu"
                        >
                          History &amp; Activities
                        </a>
                      </li>
                      <li>
                        <a
                          href="/site/page/ff299ff2-fd12-4dad-abd6-6b58cbf67610/-Vision-&amp;--Mission"
                          title="Enter to get more menu"
                        >
                          {" "}
                          Vision &amp; Mission
                        </a>
                      </li>
                      <li>
                        <a
                          href="/site/biography/60639e46-13db-4472-982e-d7e77af01eff/Honorable-Adviser"
                          title="Enter to get more menu"
                        >
                          Honorable Adviser
                        </a>
                      </li>
                      <li>
                        <a
                          href="/site/page/618d54e4-5111-4504-a749-54aa37804799/List-of-Ex-Ministers"
                          title="Enter to get more menu"
                        >
                          List of Ex-Ministers
                        </a>
                      </li>
                      <li>
                        <a
                          href="/site/biography/bf422def-b73d-4f9d-9b51-0474223e64d8/Secretary"
                          title="Enter to get more menu"
                        >
                          Secretary
                        </a>
                      </li>
                      <li>
                        <a
                          href="/site/page/00b3e366-b310-4d83-b6db-5cb707d387e7"
                          title="Enter to get more menu"
                        >
                          List of Ex-Secretaries
                        </a>
                      </li>
                      <li>
                        <a
                          href="/site/page/6cb2d28e-c5c3-4043-a6c3-baae14c98c70/Organogram-"
                          title="Enter to get more menu"
                        >
                          Organogram{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/site/files/7f60135d-3ba8-41b7-bd72-a10df59bb05d/Allocation-of-Business"
                          title="Enter to get more menu"
                        >
                          Allocation of Business
                        </a>
                      </li>
                      <li>
                        <a
                          href="/site/page/c1abcbed-65bc-45c5-8607-8b173e20bfe6/Principal-Function-"
                          title="Enter to get more menu"
                        >
                          Principal Function{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/site/view/list_of_work_distribution/Work-Distribution"
                          title="Enter to get more menu"
                        >
                          Work Distribution
                        </a>
                      </li>
                      <li>
                        <a
                          href="/site/files/808f43c2-8fa5-4f25-ac7c-cd8f8bc44e95/Member-Nomination"
                          title="Enter to get more menu"
                        >
                          Member Nomination
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      <li className="text-xl font-bold text-black mb-4">
                        Services of Divisions
                      </li>
                      <li>
                        <a
                          href="/site/office_citizen_charter/e4665996-8ffe-4f10-a21b-3998fe9c06ae/Citizen-Charter"
                          title="Enter to get more menu"
                        >
                          Citizen Charter
                        </a>
                      </li>
                      <li>
                        <a
                          href="/site/page/4df9738e-fa8a-467e-8a48-7575893340d1/List-of-Citizen-e-Services"
                          title="Enter to get more menu"
                        >
                          List of Citizen e-Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      <li className="text-xl font-bold text-black mb-4">
                        Manpower
                      </li>
                      <li>
                        <a
                          href="/site/view/officer_list_category/Officers"
                          title="Enter to get more menu"
                        >
                          Officers
                        </a>
                      </li>
                      <li>
                        <a
                          href="/site/page/60483757-1d19-4738-be88-61d345642f1d/Work-Distribution-"
                          title="Enter to get more menu"
                        >
                          Work Distribution{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/site/view/information_officers/Information-Officer"
                          title="Enter to get more menu"
                        >
                          Information Officer
                        </a>
                      </li>
                      <li>
                        <a
                          href="/site/page/87b54657-93c5-4f53-be44-15285d413eff/GRS--and-Appellate-Officer"
                          title="Enter to get more menu"
                        >
                          GRS and Appellate Officer
                        </a>
                      </li>
                      <li>
                        <a
                          href="/site/page/789fad95-0ba8-47e6-ab7f-2392f05c7c08/Focal-Point-Officers"
                          title="Enter to get more menu"
                        >
                          Focal Point Officers
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      <li className="text-xl font-bold text-black mb-4">
                        Committees of Ministry/Division
                      </li>
                      <li>
                        <a
                          href="/site/view/committees/Committees-chaired-by-Honorable-PM-&amp;-Honorable-Minister-Regarding--Ministry/Division"
                          title="Enter to get more menu"
                        >
                          Committees chaired by Honorable PM &amp; Honorable
                          Minister Regarding Ministry/Division
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <summary className="">
              <a tabIndex={0} role="button" className="hover:text-[#12498a]  ">
                Affiliated Officers/Institutions
              </a>
            </summary>

            <div className="dropdown-content bg-base-100 rounded-box z-[1] shadow">
              <div
                tabIndex={0}
                className="dropdown-content p-8  z-[10] shadow bg-white"
              >
                <div className="">
                  <div>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="/site/page/90b7cbe9-213b-433e-845b-a07a576c08ef/List-of-Offices/Institutions"
                          title="Enter to get more menu"
                        >
                          List of Offices/Institutions
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <summary className="">
              <a tabIndex={0} role="button" className="hover:text-[#12498a]  ">
                Project/Pro'me
              </a>
            </summary>

            <div className="dropdown-content bg-base-100 rounded-box z-[1] shadow">
              <div
                tabIndex={0}
                className="dropdown-content p-8  z-[10] shadow bg-white"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-w-[400px]">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Project </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="/site/page/847fccce-adfa-4bf0-b0b2-cb18d6208000/On-going-Projects"
                          title="Enter to get more menu"
                        >
                          On going Projects
                        </a>
                      </li>
                      <li>
                        <a
                          href="/site/page/a12e7693-7573-4922-915e-e8c724003cc8/Procurement-Plan"
                          title="Enter to get more menu"
                        >
                          Procurement Plan
                        </a>
                      </li>
                      <li>
                        <a
                          href="/site/files/3af87158-2f3c-4fcf-b6d4-579cd4b83fa2/Completed-Projects"
                          title="Enter to get more menu"
                        >
                          Completed Projects
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4"> Programme </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="/site/page/99ac0a2e-766b-4efe-a169-d24c5287c9de/Completed-Programme"
                          title="Enter to get more menu"
                        >
                          Completed Programme
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <summary className="">
              <a tabIndex={0} role="button" className="hover:text-[#12498a]  ">
                Gallery
              </a>
            </summary>

            <div className="dropdown-content bg-base-100 rounded-box z-[1] shadow">
              <div
                tabIndex={0}
                className="dropdown-content p-8  z-[10] shadow bg-white"
              >
                <div className="min-w-[200px]">
                  <div>
                    <ul className="space-y-2">
                      <li>
                        <a href="#">Photo Gallery</a>
                      </li>
                      <li>
                        <a href="#">Video Gallery</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <summary className="">
              <a tabIndex={0} role="button" className="hover:text-[#12498a]  ">
                Acts/Policy
              </a>
            </summary>

            <div className="dropdown-content bg-base-100 rounded-box z-[1] shadow">
              <div
                tabIndex={0}
                className="dropdown-content p-8  z-[10] shadow bg-white"
              >
                <div className="min-w-[200px]">
                  <div>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="/site/view/law/Acts-"
                          title="Enter to get more menu"
                        >
                          Acts{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/site/view/policies/Policy-"
                          title="Enter to get more menu"
                        >
                          Policy{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/site/view/legislative_information/Guidelines-and-Strategies-"
                          title="Enter to get more menu"
                        >
                          Guidelines and Strategies{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://ictd.portal.gov.bd/site/page/d05a8088-8272-49b4-883c-1698796dce3e/%E0%A6%96%E0%A6%B8%E0%A7%9C%E0%A6%BE-%E0%A6%86%E0%A6%87%E0%A6%A8-%E0%A6%93-%E0%A6%AC%E0%A6%BF%E0%A6%A7%E0%A6%BF-"
                          title="Enter to get more menu"
                        >
                          Draft Acts, Rules and Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <summary className="">
              <a tabIndex={0} role="button" className="hover:text-[#12498a]  ">
                e-Services
              </a>
            </summary>

            <div className="dropdown-content bg-base-100 rounded-box z-[1] shadow">
              <div
                tabIndex={0}
                className="dropdown-content p-8  z-[10] shadow bg-white"
              >
                <div className="min-w-[400px]">
                  <div>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="http://iims.ictd.gov.bd"
                          title="Enter to get more menu"
                        >
                          Innovation Information System Management System
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://leave.ictd.gov.bd/"
                          title="Enter to get more menu"
                        >
                          Casual Leave Management{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dashboard.gov.bd/bn/dashboard/90/"
                          title="Enter to get more menu"
                        >
                          Smart Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://freelancers.gov.bd/"
                          title="Enter to get more menu"
                        >
                          Get Your Freelancer ID
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://ims.ictd.gov.bd/"
                          title="Enter to get more menu"
                        >
                          Fellowship &amp; Innovation Fund Application
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://nothi.gov.bd/users/sslLogin"
                          title="Enter to get more menu"
                        >
                          e-Nothi
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://mail.bcc.net.bd/login.nsf?Open"
                          title="Enter to get more menu"
                        >
                          Web mail
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://ibas.finance.gov.bd/ibas2/Security/Login"
                          title="Enter to get more menu"
                        >
                          Online Salary Submission
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.eprocure.gov.bd/"
                          title="Enter to get more menu"
                        >
                          e-Tendering(e-GP)
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.mygov.bd/"
                          title="Enter to get more menu"
                        >
                          Mygov
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://grp.gov.bd/global/web/login"
                          title="Enter to get more menu"
                        >
                          GRP
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://pts.bcc.gov.bd/ProjectTracker/"
                          title="Enter to get more menu"
                        >
                          Project Monitoring System
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://acr.ictd.gov.bd"
                          title="Enter to get more menu"
                        >
                          Online ACR
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://erecruitment.bcc.gov.bd/exam/?lang=bn"
                          title="Enter to get more menu"
                        >
                          Online Recruitement
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://emporia.bcc.gov.bd/"
                          title="Enter to get more menu"
                        >
                          EMPORIA
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <summary className="">
              <a tabIndex={0} role="button" className="hover:text-[#12498a]  ">
                Contact & Comment
              </a>
            </summary>

            <div className="dropdown-content bg-base-100 rounded-box z-[1] shadow">
              <div
                tabIndex={0}
                className="dropdown-content p-8  z-[10] shadow bg-white"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-w-[400px]">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Contact </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="/site/page/772aa27f-def9-4c1d-8bbe-bed564bed754/Office-Address"
                          title="Enter to get more menu"
                        >
                          Office Address
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4"> Comment </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="https://ictd.portal.gov.bd/forms/form/feedback-forms"
                          title="Enter to get more menu"
                        >
                          Your Question &amp; Comment
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className=" flex sm:gap-4">
        <div className="join">
          <input
            className="input focus:none input-xs sm:input-sm input-bordered join-item"
            placeholder="Email"
          />
          <button className="btn btn-xs sm:btn-sm join-item rounded-r-full">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
