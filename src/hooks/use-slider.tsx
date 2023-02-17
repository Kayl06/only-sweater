import { useState } from "react";

function useSlider(len: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = len;

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleDotIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return {
    handlePrevious,
    handleNext,
    currentIndex,
    handleDotIndex,
  };
}

export default useSlider;
