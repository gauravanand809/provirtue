import { useMemo } from "react";
import PropTypes from "prop-types";

const Property1Black = ({
  className = "",
  icon,
  label,
  property1BlackGap,
  iconWidth,
  iconHeight,
  labelFontSize,
  labelLineHeight,
  labelColor,
}) => {
  const property1BlackStyle = useMemo(() => {
    return {
      gap: property1BlackGap,
    };
  }, [property1BlackGap]);

  const icon1Style = useMemo(() => {
    return {
      width: iconWidth,
      height: iconHeight,
    };
  }, [iconWidth, iconHeight]);

  const label7Style = useMemo(() => {
    return {
      fontSize: labelFontSize,
      lineHeight: labelLineHeight,
      color: labelColor,
    };
  }, [labelFontSize, labelLineHeight, labelColor]);

  return (
    <div
      className={`flex flex-row items-center justify-start gap-[15px] text-left text-xl text-black font-p ${className}`}
      style={property1BlackStyle}
    >
      <img
        className="w-[41px] relative h-[41px]"
        alt=""
        src={icon}
        style={icon1Style}
      />
      <div className="relative leading-[28px]" style={label7Style}>
        {label}
      </div>
    </div>
  );
};

Property1Black.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,

  /** Style props */
  property1BlackGap: PropTypes.any,
  iconWidth: PropTypes.any,
  iconHeight: PropTypes.any,
  labelFontSize: PropTypes.any,
  labelLineHeight: PropTypes.any,
  labelColor: PropTypes.any,
};

export default Property1Black;
