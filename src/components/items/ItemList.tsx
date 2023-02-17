import classNames from "classnames";
import { Fragment } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import useSlider from "../../hooks/use-slider";
import { ItemsProps } from "../../utils/Items";
import Button from "../Button";
import Slide from "../slider/Slide";
import Slider from "../slider/Slider";
import Item from "./Item";

function ItemList({ items, colors }: ItemsProps) {
  const { handlePrevious, handleNext, handleDotIndex, currentIndex } =
    useSlider(items.length);

  const renderedColors = colors.map((color, index) => {
    const colorClasses = classNames(
      "item-color border border-gray-300 rounded-full w-[18px] h-[18px]",
      color
    );
    return <div key={index} className={colorClasses}></div>;
  });

  const renderedSlides = items[currentIndex].map((item, index) => {
    return (
      <Fragment key={index}>
        <Slide>
          <Item {...item} renderedColors={renderedColors} />
        </Slide>
      </Fragment>
    );
  });

  const renderedDots = items.map((item, index) => {
    return (
      <div
        key={index}
        onClick={() => handleDotIndex(index)}
        className={`cursor-pointer item-color border border-gray-300 rounded-full w-[12px] h-[12px] ${
          index == currentIndex ? "bg-gray-500" : "bg-gray-400"
        }`}
      ></div>
    );
  });

  return (
    <div className="item-list max-w-[1100px] mx-auto">
      <div className="item__inside flex gap-10">
        <Button className="hidden lg:block z-10" onClick={() => handlePrevious()}>
          <MdArrowBackIos className="text-3xl text-gray-400" />
        </Button>

        <Slider className="slider flex gap-8 mx-auto">{renderedSlides}</Slider>

        <Button className="hidden lg:block z-10" onClick={() => handleNext()}>
          <MdArrowForwardIos className="text-3xl text-gray-400" />
        </Button>
      </div>

      <div className="dots-indicators flex justify-center mt-10 gap-2">
        {renderedDots}
      </div>
    </div>
  );
}

export default ItemList;
