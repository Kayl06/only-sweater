/* eslint-disable no-octal */
import BannerPage from "./BannerPage";
import DiscountBar from "../components/DiscountBar";
import Header from "../components/Header";
import AboutPage from "./AboutPage";
import ItemsPage from "./ItemsPage";
import InfoPage from "./InfoPage";
import ContactPage from "./ContactPage";
import FooterPage from "./FooterPage";
import Credits from "../components/Credits";
import CompanyDetails from "../components/CompanyDetails";
import Image from "../components/Image";
import Menu from "../components/Menu";

function LandingPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header />
        <BannerPage />
      </div>

      <DiscountBar content="新規登録で 10% ％オフキャンペーン実施中！" />

      <div className="max-w-[1170px] mx-auto text-gray-500">
        <AboutPage />
        <ItemsPage />
        <InfoPage />
        <ContactPage />
      </div>

      <div className="w-full">
        <FooterPage />
      </div>

      <div className="bottom_details mt-20 lg:mt-20 max-w-5xl mx-auto text-gray-500">
        <div className="bottom__logo__sm lg:hidden flex flex-col items-center justify-center">
          <Image logo={true} noBg={true} className="w-1/2" alt="logo" />
          <span className="text-xs text-gray-400">We sell only sweater</span>
        </div>

        <div className="lg:block bottom__details__menu">
          <div className="header__bottom hidden lg:block">
            <Header />
          </div>
        </div>

        <CompanyDetails tel="031234567" email={"onlysweater@jp.com"} />

        <div className="lg:hidden block mt-20">
          <Menu />
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <Credits content="2022@only sweater" />
      </div>
    </>
  );
}

export default LandingPage;
