import Logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import DarkModeSwitcher from "./DarkModeSwitcher";
import { FaCaretDown } from "react-icons/fa";

export default function NavBar() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "#",
    },
    {
      id: 2,
      name: "Top Rated",
      link: "#",
    },
    {
      id: 3,
      name: "Kids Wear",
      link: "#",
    },
    {
      id: 4,
      name: "Mens Wear",
      link: "#",
    },
    {
      id: 5,
      name: "Electronics",
      link: "#",
    },
  ];

  const DropdownList = [
    {
      id: 1,
      name: "Trending Products",
      link: "#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "#",
    },
    {
      id: 3,
      name: "Top rated",
      link: "#",
    },
  ];

  return (
    <>
      <div className="relative shadow-md bg-white z-50">
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
                  className="text-gray-500 group-hover:text-[#FEA928] absolute  right-2.5 top-1/2
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
        {/* lower Navbar */}
        <div className="hidden sm:flex justify-center p-2">
          <div>
            <ul className="flex items-center gap-4">
              {Menu.map((data) => {
                return (
                  <li className="" key={data.id}>
                    <a
                      className="px-3 inline-block hover:text-[#F8DCA1] duration-200"
                      href={data.link}
                    >
                      {data.name}
                    </a>
                  </li>
                );
              })}
              <li className="px-3 inline-block duration-200 group">
                Trending Products
                <FaCaretDown className="inline ml-1 -translate-y-0.5 group-hover:rotate-180 transition-all duration-200" />
                {/* Drop down */}
                <div className="hidden group-hover:block absolute z-[9999] p-2 rounded-md bg-white shadow-md">
                  {DropdownList.map((data) => {
                    return (
                      <li
                        className="w-[200px] p-1 hover:bg-[#F8DCA1] rounded-sm"
                        key={data.id}
                      >
                        <a href={data.link}>{data.name}</a>
                      </li>
                    );
                  })}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
