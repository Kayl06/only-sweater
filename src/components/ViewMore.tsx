import classNames from "classnames";
import { HiArrowLongRight } from "react-icons/hi2";
import Button from "./Button";

interface ViewMoreProps {
  label?: string | null;
  children?: React.ReactNode;
  className?: string;
}

function ViewMore({ label = "View more", className, children }: ViewMoreProps) {
  const classes = classNames("view-more flex flex-start", className);

  return (
    <div className={classes}>
      <div className="view__more__content">
        <div className="flex justify-center">
          <Button className="flex items-center gap-1">
            {label}
            <span className="text-2xl">
              <HiArrowLongRight />
            </span>
          </Button>
        </div>

        <div className="underline w-[130px] border-gray-400 border-b mt-1"></div>
      </div>
    </div>
  );
}

export default ViewMore;
