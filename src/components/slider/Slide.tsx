interface ISlide {
  children?: React.ReactNode;
  className?: string;

}

function Slide({ children, ...rest }: ISlide) {
  return <div className="slide" {...rest}>{children}</div>;
}

export default Slide;
