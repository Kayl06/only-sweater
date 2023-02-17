import { useState } from "react";
import logo from "../assets/brand/logo.png";
import { MdMenu, MdClose } from "react-icons/md";
import Button from "./Button";
import Menu from "./Menu";
import Link from "./Link";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const closeBar = (): JSX.Element => {
    return (
      <Button
        className="text-gray-500 cursor-pointer"
        onClick={handleCloseMenu}
      >
        <MdClose className="text-3xl" />
      </Button>
    );
  };

  const burgerBar = (): JSX.Element => {
    return (
      <Button onClick={handleShowMenu} className="text-gray-500 cursor-pointer">
        <MdMenu className="text-3xl" />
      </Button>
    );
  };

  return (
    <div className="wrapper">
      <div className="header flex justify-between text-gray-500">
        <div className="header__logo__wrapper flex justify-start items-center relative">
          <div className="logo">
            <Link to="#logo">
              <img src={logo} alt="brand-logo" className="w-48 lg:w-56" />
            </Link>
          </div>
          <span className="text-xs">We sell only sweater</span>
        </div>

        <div className="header__menu__wrapper hidden lg:flex">
          <Menu />
        </div>

        <div className="header__side__menu toggle-button lg:hidden flex items-center justify-center mr-5">
          {!showMenu ? burgerBar() : closeBar()}

          {showMenu && <Menu isToggleMenu={true} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
