const Navbar = () => {
  return (
    <nav className="max-w-6xl mx-auto flex justify-between items-center border-t py-6">
      <ul className="flex items-center gap-6 text-[16px]">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Affiliated Officers</a>
        </li>
        <li>
          <a href="#">Project</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">Acts/Policy</a>
        </li>
        <li>
          <a href="#">e-Services</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="flex gap-4">
        <div className="join">
          <input
            className="input focus:none input-sm input-bordered join-item"
            placeholder="Email"
          />
          <button className="btn btn-sm join-item rounded-r-full">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
