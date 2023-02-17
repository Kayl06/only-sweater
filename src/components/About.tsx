import logo from "../assets/brand/logo.png";
import sweater1 from "../assets/images/items/sweater1.png";
import sweater2 from "../assets/images/items/sweater3.png";
import Image from "./Image";
import ViewMore from "./ViewMore";

function About() {
  return (
    <div className="about">
      <div className="about__lg hidden lg:flex flex flex-row gap-5 mx-auto items-center justify-center">
        <div className="flex-none">
          <Image src={sweater1} alt="sweater-1" className="h-[600px]" />
        </div>
        <div className="flex-none w-[600px] relative mb-20">
          <div className="about__content mt-2 z-10 relative ml-[40px] w-[480px]">
            <h1 className="text-3xl text-center mb-10 text-gray-900">About</h1>
            <p className="mb-10">
              着るだけで心が満たされていくそんなセーターを作るために
              セーターだけを販売するOnly Sweaterを立ち上げました。
              <br />
              <br />
              <br />
              冬の季節にしか着ないセーターだけれど、
              少しこだわるだけで今年の冬を特別なものにしてもらえるように
              細部までこだわって作りました。
              <br />
              <br />
              <br />
              あなたの冬が特別なものになりますように...
            </p>

            <ViewMore className="mt-14" />
          </div>

          <div className="z-0 bottom-0 ellipsis absolute rounded-full border-2 border-dashed border-gray-100 w-[34rem] h-[33rem] top-[-60px]"></div>
        </div>
      </div>

      <div className="about__sm flex flex-col justify-center lg:hidden">
        <div className="about__logo flex justify-center">
          <Image src={logo} alt="logo" className="w-96 md:w-96" />
        </div>

        <div className="flex flex-row gap-2 mx-3">
          <div className="flex-1">
            <Image src={sweater1} className="w-full" alt="sweater1" />
          </div>
          <div className="flex-1">
            <Image src={sweater2} className="w-full" alt="sweater2" />
          </div>
        </div>

        <div className="about__content flex justify-center flex-col mt-10 mx-8">
          <h1 className="text-3xl text-center mb-10 text-gray-900">About</h1>
          <p className="tracking-wide leading-[2.5rem] text-justify text-md">
            着るだけで心が満たされていくそんなセーターを作るために
            セーターだけを販売するOnly Sweaterを立ち上げました。
            <br />
            冬の季節にしか着ないセーターだけれど、
            少しこだわるだけで今年の冬を特別なものにしてもらえるように
            <br />
            細部までこだわって作りました。
            あなたの冬が特別なものになりますように...
          </p>

          <ViewMore className="mt-14 justify-center" />
        </div>
      </div>
    </div>
  );
}

export default About;
