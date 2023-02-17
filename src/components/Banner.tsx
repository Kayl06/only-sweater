import logo from "../assets/brand/logo.png";
import banner from "../assets/images/landing-banner/Mask group.png";
import banner1 from "../assets/images/landing-banner/Mask group-1.png";
import banner2 from "../assets/images/landing-banner/Mask group-2.png";
import Image from "./Image";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__lg__bg hidden md:flex">
        <div className="center-logo absolute left-0 right-0">
          <img src={logo} alt="brand-logo" className="w-100" />
        </div>
        <div className="flex items-end">
          <div>
            <img className="mt-5" src={banner1} alt="banner1" />
          </div>
          <div>
            <img src={banner2} alt="banner2" />
          </div>
          <div>
            <img src={banner} alt="banner" className="" />
          </div>
        </div>
      </div>

      <div className="banner__sm__bg md:hidden">
        <div className="banner__single__sweater">
          <Image src={banner2} alt="banner" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
