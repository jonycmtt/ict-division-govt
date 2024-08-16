import { BsFillPersonLinesFill } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { MdOutlineToday } from "react-icons/md";

const WithUse = () => {
  return (
    <div
      className="py-10 lg:py-20 px-4 xl:px-0"
      style={{
        backgroundImage:
          "url(https://gramotech.net/html/balad/images/h2factsbg.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div
          className="p-4 md:p-10 rounded text-white "
          style={{
            backgroundImage:
              "url(https://gramotech.net/html/balad/images/h3newsletterbg.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h3 className="text-2xl font-bold montserrat mb-4">
            Be Updated with us
          </h3>
          <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="input input-bordered w-full"
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div className="grid grid-cols-12 gap-y-6 lg:gap-10 mt-4">
              <span className="col-span-12 lg:col-span-8 italic">
                Signup to get the updates on email from the city & town affairs!
              </span>
              <button className="btn bg-[#144b8b] border-0 text-white sm:rounded-3xl col-span-12 sm:col-span-4">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div>
          {/* no-repeat bottom #d94249 */}
          <h2 className="text-2xl font-bold text-[#77777] montserrat ">
            Visitor Counter
          </h2>
          <p className="text-[#777777] italic">Free-Hit-Counters.net</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-1 mt-6 gap-3">
            <div className="border p-4 bg-white f">
              <MdOutlineToday className="text-2xl text-[#d94249]" />
              <h2 className=" font-semibold">Today</h2>
              <span className="text-lg font-semibold">284</span>
            </div>
            <div className="border p-4 bg-white">
              <MdOutlineToday className="text-2xl text-[#d94249]" />
              <h2 className=" font-semibold">Yesterday</h2>
              <span className="text-lg font-semibold">3841</span>
            </div>
            <div className="border p-4 bg-white">
              <CiWallet className="text-2xl text-[#d94249]" />
              <h2 className=" font-semibold">All</h2>
              <span className="text-lg font-semibold">28400</span>
            </div>
            <div className="border p-4 bg-white">
              <BsFillPersonLinesFill className="text-2xl text-[#d94249]" />
              <h2 className=" font-semibold">Online</h2>
              <span className="text-lg font-semibold">46</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithUse;
