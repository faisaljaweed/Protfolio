import { Link } from "react-router-dom";
import image1 from "../Images/Screenshot_2023-04-24-20-28-21-08.jpg";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Sidebar Component
const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
        <div className="absolute inset-y-0 left-0 w-64 bg-gray-800 shadow-lg ">
          <button
            className="absolute top-4 right-4 p-2"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="h-8 w-8 text-red-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2" // Corrected to camelCase
              stroke="currentColor"
              fill="none"
              strokeLinecap="round" // Corrected to camelCase
              strokeLinejoin="round" // Corrected to camelCase
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="p-4 flex items-center justify-center flex-col mt-16 gap-4">
            <div className="border-[5px] border-[#00ae76] rounded-full flex items-center justify-center">
              <img className="size-28 rounded-full" src={image1} alt="image1" />
            </div>
            <Link to="/">
              <h2
                className="text-[18px] text-[#edf6e1]"
                onClick={() => setIsOpen(false)}
              >
                Home
              </h2>
            </Link>
            <Link to="/about">
              <h2
                className="text-[18px] text-[#edf6e1]"
                onClick={() => setIsOpen(false)}
              >
                About
              </h2>
            </Link>
            <Link to="/contact">
              <h2
                className="text-[18px] text-[#edf6e1]"
                onClick={() => setIsOpen(false)}
              >
                Contacts
              </h2>
            </Link>
            <Link to="/skills">
              <h2
                className="text-[18px] text-[#edf6e1]"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </h2>
            </Link>
            <Link to="/project">
              <h2
                className="text-[18px] text-[#edf6e1]"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </h2>
            </Link>
          </div>
        </div>
      </div>

      {/* Large Screen Sidebar */}
      <div className="hidden lg:block lg:w-64 bg-gray-800 text-white">
        <div className="p-4">
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Link to="/about">
            <h2>About</h2>
          </Link>
          <Link to="/contact">
            <h2>Contacts</h2>
          </Link>
          <Link to="/skills">
            <h2>Skills</h2>
          </Link>
          <Link to="/project">
            <h2>Portfolio</h2>
          </Link>
        </div>
      </div>

      {/* Toggle Button for Mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 text-white p-2 rounded-full"
        onClick={() => setIsOpen(true)}
      >
        <svg
          className="h-8 w-8 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeLinecap="round" // Corrected to camelCase
          strokeLinejoin="round" // Corrected to camelCase
          strokeWidth="2" // Corrected to camelCase
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </>
  );
};

export default Sidebar;
