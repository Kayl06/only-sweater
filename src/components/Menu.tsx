import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Link from "./Link";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { ILinks, ISocialLinks } from "../utils/Header";
import Image from "./Image";

interface MenuProps {
  isToggleMenu?: null | boolean;
}

type State = {
  element: JSX.Element;
};

function Menu({ isToggleMenu = false }: MenuProps) {
  const [content, setContent] = useState<State>({ element: <div></div> });

  const links = [
    { label: "About", path: "/about" },
    { label: "Item", path: "/item" },
    { label: "Shop", path: "/shop" },
    { label: "Info", path: "/info" },
    { label: "Press", path: "/press" },
  ];

  const socialLinks = [
    {
      label: "Instagram",
      url: "https://instagram.com/only-sweater",
      icon: <FaInstagram />,
    },
    {
      label: "Facebook",
      url: "https://facebook.com/only-sweater",
      icon: <FaFacebook />,
    },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <div key={link.label} className="cursor-pointer">
        <Link to={link.path}>{link.label}</Link>
      </div>
    );
  });

  const renderedSocialLinks = socialLinks.map((link) => {
    return (
      <div key={link.label}>
        <Link className="text-2xl" to={link.url}>
          {link.icon}
        </Link>
      </div>
    );
  });

  useEffect(() => {
    if (!isToggleMenu) {
      setContent({
        element: (
          <div className="menu grid grid-rows-2 lg:grid-rows-1 grid-flow-col gap-10 justify-center items-center">
            {renderedLinks}
            <div className="menu__social__media flex gap-2">
              {renderedSocialLinks}
            </div>
          </div>
        ),
      });
    } else {
      document.body.classList.add("overflow-hidden");

      setContent({
        element: ReactDOM.createPortal(
          <div className="">
            <div className="fixed top-16 right-0 left-0 bottom-0 bg-white opacity-80"></div>
            <div className="fixed inset-40 text-center text-xl pb-20">
              <div className="flex flex-col gap-10 h-full">
                {renderedLinks}
                <div className="menu__social__media justify-center flex gap-2">
                  {renderedSocialLinks}
                </div>

                <div>
                  <Image
                    logo={true}
                    noBg={true}
                    className="w-full md:w-auto lg:h-auto bg-white p-5 opacity-70"
                    alt="logo"
                  />
                  <span className="text-xs">
                    We sell only sweater
                  </span>
                </div>
              </div>
            </div>
          </div>,

          document.querySelector(".mobile-menu-container") as HTMLElement
        ),
      });
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return <>{content.element}</>;
}

export default Menu;
