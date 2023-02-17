interface ISliderProps {
  children?: React.ReactNode;
  className?: string;
  slideContent?:any;
  
}

function Slider({ children, slideContent, ...rest }: ISliderProps) {
  return <div {...rest}>{children}</div>;
}

export default Slider;
