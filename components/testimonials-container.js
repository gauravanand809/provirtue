import Card from "./card";
import PropTypes from "prop-types";

const TestimonialsContainer = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[377.063rem] left-[6.25rem] rounded-26xl bg-dark w-[77.5rem] h-[39.063rem] overflow-hidden text-left text-[1.125rem] text-white font-p ${className}`}
    >
      <div className="absolute top-[5.25rem] left-[-21.625rem] flex flex-col items-center justify-start gap-[7.75rem]">
        <div className="w-[119.875rem] flex flex-row items-start justify-between">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="w-[35.25rem] flex flex-row items-center justify-between">
          <img
            className="w-[1.25rem] relative h-[0rem]"
            alt=""
            src="/arrow-left.svg"
          />
          <img
            className="w-[9.125rem] relative h-[0.875rem]"
            alt=""
            src="/navigation-stars.svg"
          />
          <img
            className="w-[1.25rem] relative h-[0rem] object-contain"
            alt=""
            src="/arrow-right@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

TestimonialsContainer.propTypes = {
  className: PropTypes.string,
};

export default TestimonialsContainer;
