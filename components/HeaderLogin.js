import { withAuthInfo } from "@propelauth/react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const useClickOutside = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

const Header = withAuthInfo((props) => {
  const [dropdownMenu1, setDropdownMenu1] = useState(false);
  const [dropdownMenu2, setDropdownMenu2] = useState(false);

  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);

  useClickOutside(dropdownRef1, () => setDropdownMenu1(false));
  useClickOutside(dropdownRef2, () => setDropdownMenu2(false));

  console.log(props.isLoggedIn);

  const DropdownMenu1 = () => (
    <div className="absolute bg-white shadow-md mt-2 py-2 w-48 rounded-md z-10">
      <a
        href="#"
        className="block px-4 py-2 hover:bg-green-500 hover:text-white"
      >
        Menu 1 Item 1
      </a>
      <a
        href="#"
        className="block px-4 py-2 hover:bg-green-500 hover:text-white"
      >
        Menu 1 Item 2
      </a>
      <a
        href="#"
        className="block px-4 py-2 hover:bg-green-500 hover:text-white"
      >
        Menu 1 Item 3
      </a>
    </div>
  );

  const DropdownMenu2 = () => (
    <div className="absolute bg-white shadow-md mt-2 py-2 w-48 rounded-md z-10">
      <a
        href="#"
        className="block px-4 py-2 hover:bg-green-500 hover:text-white"
      >
        Menu 2 Item 1
      </a>
      <a
        href="#"
        className="block px-4 py-2 hover:bg-green-500 hover:text-white"
      >
        Menu 2 Item 2
      </a>
      <a
        href="#"
        className="block px-4 py-2 hover:bg-green-500 hover:text-white"
      >
        Menu 2 Item 3
      </a>
    </div>
  );

  return (
    <header className="flex justify-between items-center p-6 bg-blue-500 shadow-md">
      {/* Logo */}
      <Link href="/">
      <div className="flex items-center rounded-full">
        <img src="/vendent.png" alt="Logo" className="w-40 h-12 rounded-full" />
      </div>
        </Link>

      {/* Search Bar and Dropdowns */}
      <div className="flex justify-center items-center w-full">
        <div className="relative" ref={dropdownRef1}>
          {/* Dropdown Menu 1 */}
          <button
            onClick={() => setDropdownMenu1(!dropdownMenu1)}
            className="p-2 rounded-md bg-white"
          >
            Stores
          </button>
          {dropdownMenu1 && <DropdownMenu1 />}
        </div>

        {/* Search Bar and Search Button */}
        <div className="flex items-center mx-6">
          <input
            type="text"
            placeholder="Search here..."
            className="p-2 rounded-l-md border-2 border-gray-300 w-96"
          />
          <button className="p-2 rounded-r-md bg-green-500 text-white">
            Search
          </button>
        </div>

        <div className="relative" ref={dropdownRef2}>
          {/* Dropdown Menu 2 */}
          <button
            onClick={() => setDropdownMenu2(!dropdownMenu2)}
            className="p-2 rounded-md bg-white"
          >
            Categories
          </button>
          {dropdownMenu2 && <DropdownMenu2 />}
        </div>
      </div>

      {/* Profile Button */}
      <Link href="/profile">
      <button className="p-2 rounded-full text-white">
        <img
          src={`${props.user.pictureUrl}`}
          alt="Profile Picture"
          className="w-10 h-10 rounded-full"
        />
      </button>
      </Link>
    </header>
  );
}); 

export default Header;
