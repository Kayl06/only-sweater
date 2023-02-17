import Image from "./Image";

function Footer() {
  return (
    <div className="footer relative flex lg:h-[340px] h-[500px] bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-white opacity-60"></div>
      <div className="footer__logo z-10 flex items-center justify-center w-full">
        <Image logo={true} className="w-full md:w-auto lg:h-auto h-[400px] opacity-60 bg-white" alt="logo" />
      </div>
    </div>
  );
}

export default Footer;
