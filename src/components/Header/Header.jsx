import { useState, useRef, useEffect } from 'react';
import Logo from '../../assets/images/logo/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import Ger from '../../assets/images/flags/ger.jpeg'

function Header({ onSearchChange }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuVisible2, setMenuVisible2] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Toggle function for the menu
  const handleMenuToggle = () => {
    setMenuVisible((prev) => !prev);
  };
  const handleFirstMenuToggle = () => {
    setMenuVisible2((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuVisible(false);
      setMenuVisible2(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Update search query as user types
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Trigger search when button is clicked
  const handleSearchButtonClick = () => {
    if (onSearchChange) {
      onSearchChange(searchQuery);
      navigate('/products')
    }
  };
  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter' || e.code === 'Enter') {
      handleSearchButtonClick();
    }
  };

  return (
    <header className="bg-white shadow w-full 2xs:pb-2">
      <nav className="px-0 w-full  md:px-16 sm:px-2 xs:px-1 2xs:px-0">
        <div className=" mx-auto px-14 md:px-1 md:mx-2 flex  justify-between py-5 xs:px-0 2xs:px-2 2xs:mx-0 ">
          <div className="flex items-center space-x-4 -mt-1 md:mr-4 sm:mr-10 2xs:mr-10">
          <button
              id="menu-toggle"
              onClick={handleFirstMenuToggle}
              className=" text focus:outline-none relative hidden 2xs:block items-center font-semibold "
            >
              <i className="fas fa-bars text-3xl"></i>
            </button>
            <nav
            id="menu"
            ref={menuRef}
            className={`absolute flex flex-col text-white w-28 text-center z-20 bg-blue-700 space-y-2 mt-40 -left-4 shadow-lg rounded-lg shadow-gray-600  ${
              menuVisible2 ? '' : 'hidden'
            }`}
          >
            <Link to="/account" className="hover:bg-blue-500 rounded-t-lg px-3 py-1">
              Account
            </Link>
            <Link to="/message" className="hover:bg-blue-500 px-3 py-1">
              Message
            </Link>
            <Link to="/orders" className="hover:bg-blue-500 px-3 py-1">
              Orders
            </Link>
            <Link to="/mycart" className="hover:bg-blue-500 rounded-b-lg px-3 py-1">
              My Cart
            </Link>
          </nav>
            <Link to="/" className="flex items-center text-blue-300 text-3xl font-bold">
              <img src={Logo} className="w-12 mr-1" alt="" />Brand
            </Link>
          </div>

          <div className="flex flex-1 items-center mx-4 md:mx-10 2xs:hidden ">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyDown}
              className="flex-1 w-auto border border-blue-400 rounded-l-md px-4 py-2 focus:outline-none "
            />
            <select className="border-t border-b border-y-8 h-[42px] border-blue-400 px-2 py-2 focus:outline-none xs:hidden 2xs:hidden">
              <option>All category</option>
              <option>Electronics</option>
              <option>Fashion</option>
            </select>
            <button
              onClick={handleSearchButtonClick}
              className="bg-blue-500 text-white h-[42px] px-4 py-2 rounded-r-md"
            >
              Search
            </button>
          </div>

          <div className="flex items-center space-x-6 sm:hidden xs:hidden ">
            <a href="" className="flex flex-col items-center text-gray-400 ">
              <i className="fa-solid fa-user w-5  mr-1 md:pt-2 md:text-xl 2xs:pt-2 2xs:text-2xl xs:fa-regular"></i>
              <p className="md:hidden 2xs:hidden">Profile</p>
            </a>
            <a href="#" className="flex flex-col items-center text-gray-400 md:hidden 2xs:hidden">
              <i className="fa-solid fa-message w-5  mr-1 "></i>
              <p>Message</p>
            </a>
            <a href="" className="flex flex-col items-center text-gray-400 md:hidden 2xs:hidden">
              <i className="fa-solid fa-heart w-5 mr-1 "></i>
              <p>Orders</p>
            </a>
            <Link to="/mycart" className="flex flex-col items-center text-gray-400">
              <i className="fa-solid fa-cart-shopping w-5  mr-1 md:pt-2 md:text-2xl 2xs:pt-2 2xs:text-2xl"></i>
              <p className="md:hidden 2xs:hidden">My cart</p>
            </Link>
          </div>
        </div>
      </nav>
      <nav className=" -mt-3 w-full px-0 sm:hidden xs:hidden md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden">
        <div className="flex items-center mx-2 justify-center mb-2">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyDown}
            className=" w-full border border-blue-400 rounded-l-md px-4 py-2 focus:outline-none "
          />
          
          <button
              onClick={handleSearchButtonClick}
              className="bg-blue-500 text-white px-4 py-2 h-[42px] rounded-r-md"
            >
              <i className='fa-solid fa-magnifying-glass text-white'></i>
            </button>
        </div>
        <div className="space-x-2 mx-4 mb-2">
          <Link to="/products" className="text-sm text-blue-500 bg-gray-300 rounded-md px-2 py-1">
            All category
          </Link>
          <Link to="/products" className="text-sm text-blue-500 bg-gray-300 rounded-md px-2 py-1">
            Gadget
          </Link>
          <Link to="/products" className="text-sm text-blue-500 bg-gray-300 rounded-md px-2 py-1">
            Clothes
          </Link>
        </div>
      </nav>
      <nav className="border-t border-black w-full px-0 2xs:hidden">
        <div className="container mx-auto px-14  md:px-0 flex items-start justify-between py-5 xs:px-0 2xs:px-2 2xs:mx-0">
          <div className="">
            <button
              id="menu-toggle"
              onClick={handleMenuToggle}
              className=" text focus:outline-none relative flex items-center font-semibold "
            >
              <i className="fas fa-bars"></i>
              <p className="pl-1.5">All category</p>
            </button>
          </div>
          <nav
            id="menu"
            ref={menuRef}
            className={`absolute flex flex-col space-y-2 mt-8 shadow-lg rounded-lg shadow-gray-600 bg-white ${
              menuVisible ? '' : 'hidden'
            }`}
          >
            <Link to="/products" className="hover:bg-blue-100 rounded-t-lg px-3 py-1">
              Automobiles
            </Link>
            <Link to="/products" className="hover:bg-blue-100 px-3 py-1">
              Clothes and wear
            </Link>
            <Link to="/products" className="hover:bg-blue-100 px-3 py-1">
              Home interiors
            </Link>
            <Link to="/products" className="hover:bg-blue-100 px-3 py-1">
              Tools, equipments
            </Link>
            <Link to="/products" className="hover:bg-blue-100 px-3 py-1">
              Sports and outdoor
            </Link>
            <Link to="/products" className="hover:bg-blue-100 px-3 py-1">
              Animal and pets
            </Link>
            <Link to="/products" className="hover:bg-blue-100 px-3 py-1">
              Machinery tools
            </Link>
            <Link to="/products" className="hover:bg-blue-100 rounded-b-lg px-3 py-1">
              More categories
            </Link>
          </nav>

          <ul className="flex flex-1 w-auto items-center ml-6 space-x-4 sm:hidden xs:hidden 2xs:hidden">
            <li>
              <a href="#">Hot Offers</a>
            </li>
            <li>
              <a href="#">Gift boxes</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Menu items</a>
            </li>
            <li>
              <select>
                <option>Help</option>
              </select>
            </li>
          </ul>
          <div className="flex items-center md:ml-2 flex-wrap space-x-2 ">
            <select>
              <option>English, USD</option>
              <option>Deutsch</option>
            </select>
            <button className="flex ">
              <span>Ship to</span>
              <img src={Ger} className="w-5 ml-1 pt-1.5" alt="" />
              <select></select>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
