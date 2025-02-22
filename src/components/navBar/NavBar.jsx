import Logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import DarkModeSwitcher from "./DarkModeSwitcher";
export default function NavBar() {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900">
        <div className="bg-[#F8DCA1] py-2">
          <div className="container mx-auto px-14 flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-3xl flex gap-2">
                <img src={Logo} alt="logo" className="w-10" />
                Shopsy
              </a>
            </div>
            <div className="flex gap-4 ">
              <div className="relative group hidden sm:block">
                <input
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 
                  rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-[#FEA928] 
                  focus:border-2 bg-amber-50"
                  placeholder="Search"
                  type="text"
                />
                <FaSearch
                  className="text-gray-500 group-hover:text-[#FEA928] absolute  right-2 top-1/2 
                -translate-y-1/2 "
                />
              </div>
              {/* order button */}
              <button
                className="flex justify-center items-center gap-1 bg-gradient-to-r from-[#FEA928]
               to-[#ED8900] text-white px-4 py-1 rounded-full group cursor-pointer h-8.5"
              >
                <span className="hidden group-hover:block transition-all duration-300">
                  Order
                </span>
                <FaShoppingCart />
              </button>
              {/* dark mode switcher */}
              <DarkModeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
