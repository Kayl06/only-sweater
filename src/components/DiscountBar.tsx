interface DiscountBarProps {
  content: string;
}
function DiscountBar({ content }: DiscountBarProps) {
  return (
    <div className="w-full discount-bar flex p-2 text-sm justify-center items-center bg-[#F5B05F] text-white">
      <span>{content}</span>
    </div>
  );
}

export default DiscountBar;
