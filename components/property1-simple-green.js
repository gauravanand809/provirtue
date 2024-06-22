import { useMemo } from "react";
import PropTypes from "prop-types";

const Property1SimpleGreen = ({
  className = "",
  label,
  property1SimpleGreenGap,
  labelFontSize,
  labelLineHeight,
  iconWidth,
  iconHeight,
}) => {
  const property1SimpleGreenStyle = useMemo(() => {
    return {
      gap: property1SimpleGreenGap,
    };
  }, [property1SimpleGreenGap]);

  const label8Style = useMemo(() => {
    return {
      fontSize: labelFontSize,
      lineHeight: labelLineHeight,
    };
  }, [labelFontSize, labelLineHeight]);

  const icon2Style = useMemo(() => {
    return {
      width: iconWidth,
      height: iconHeight,
    };
  }, [iconWidth, iconHeight]);

  return (
    <div
      className={`flex flex-row items-center justify-start gap-[15px] text-left text-xl text-green font-p ${className}`}
      style={property1SimpleGreenStyle}
    >
      <div className="relative leading-[28px]" style={label8Style}>
        {label}
      </div>
      <img
        className="w-[17.3px] relative h-2.5"
        alt=""
        src="/icon3.svg"
        style={icon2Style}
      />
    </div>
  );
};

Property1SimpleGreen.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,

  /** Style props */
  property1SimpleGreenGap: PropTypes.any,
  labelFontSize: PropTypes.any,
  labelLineHeight: PropTypes.any,
  iconWidth: PropTypes.any,
  iconHeight: PropTypes.any,
};

export default Property1SimpleGreen;
