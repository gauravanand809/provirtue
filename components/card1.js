import { useMemo } from "react";
import PropTypes from "prop-types";

const Card1 = ({
  className = "",
  picture,
  johnSmith,
  cEOAndFounder,
  yearsOfExperienceInDigita,
  propHeight,
  propWidth,
  propWidth1,
  propHeight1,
  propTop,
  propLeft,
  propDisplay,
  propWidth2,
}) => {
  const cardStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const pictureIconStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const nameStyle = useMemo(() => {
    return {
      width: propWidth1,
      height: propHeight1,
    };
  }, [propWidth1, propHeight1]);

  const cEOAndFounderStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      display: propDisplay,
      width: propWidth2,
    };
  }, [propTop, propLeft, propDisplay, propWidth2]);

  return (
    <div
      className={`w-[24.188rem] shadow-[0px_5px_0px_#191a23] rounded-26xl bg-white box-border h-[20.688rem] overflow-hidden shrink-0 flex flex-col items-start justify-start py-[2.5rem] px-[2.187rem] text-left text-[1.25rem] text-black font-p border-[1px] border-solid border-dark ${className}`}
      style={cardStyle}
    >
      <div className="flex flex-col items-start justify-start gap-[1.75rem]">
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="flex-1 flex flex-row items-end justify-start py-[0rem] pr-[4.75rem] pl-[0rem] gap-[1.25rem]">
            <img
              className="w-[6.6rem] relative h-[6.425rem] object-cover"
              alt=""
              src={picture}
              style={pictureIconStyle}
            />
            <div
              className="w-[9.25rem] relative h-[3.063rem]"
              style={nameStyle}
            >
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                {johnSmith}
              </div>
              <div
                className="absolute top-[1.625rem] left-[0rem] text-[1.125rem]"
                style={cEOAndFounderStyle}
              >
                {cEOAndFounder}
              </div>
            </div>
          </div>
          <img
            className="w-[2.125rem] relative h-[2.125rem] ml-[-4.188rem]"
            alt=""
            src="/social-icon.svg"
          />
        </div>
        <div className="w-[19.875rem] relative box-border h-[0.063rem] border-t-[1px] border-solid border-black" />
        <div className="w-[19.813rem] relative text-[1.125rem] inline-block">
          {yearsOfExperienceInDigita}
        </div>
      </div>
    </div>
  );
};

Card1.propTypes = {
  className: PropTypes.string,
  picture: PropTypes.string,
  johnSmith: PropTypes.string,
  cEOAndFounder: PropTypes.string,
  yearsOfExperienceInDigita: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propHeight1: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propDisplay: PropTypes.any,
  propWidth2: PropTypes.any,
};

export default Card1;
