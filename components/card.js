import PropTypes from "prop-types";

const Card = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-end justify-start gap-[1.25rem] text-left text-[1.125rem] text-white font-p ${className}`}
    >
      <div className="w-[37.875rem] relative h-[16.625rem]">
        <div className="relative bg-dark w-[37.875rem] h-[16.625rem]">
          <img
            className="absolute top-[0rem] left-[0rem] rounded-26xl w-[37.875rem] h-[14.875rem]"
            alt=""
          />
          <img
            className="absolute top-[14.194rem] left-[3.188rem] w-[4rem] h-[2.431rem] object-contain"
            alt=""
          />
        </div>
        <div className="absolute top-[3rem] left-[3.25rem] inline-block w-[31.375rem]">
          "We have been working with Positivus for the past year and have seen a
          significant increase in website traffic and leads as a result of their
          efforts. The team is professional, responsive, and truly cares about
          the success of our business. We highly recommend Positivus to any
          company looking to grow their online presence."
        </div>
      </div>
      <div className="w-[32.875rem] relative inline-block text-[1.25rem] text-green">
        <p className="m-0 font-medium">John Smith</p>
        <p className="m-0 text-[1.125rem] text-white">
          Marketing Director at XYZ Corp
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
};

export default Card;
