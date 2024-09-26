import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="flex justify-end w-full">
          <a
            className="bg-white p-2 py-1 rounded-sm text-[#11071f] font-bold uppercase"
            href="/cv.pdf"
            download
          >
            Cv
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
