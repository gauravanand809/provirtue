import { useMemo } from "react";
import PropTypes from "prop-types";

const Property1ButtonSecondary = ({
  className = "",
  label,
  property1ButtonSecondaryPadding,
  property1ButtonSecondaryBorder,
  property1ButtonSecondaryBackgroundColor,
  property1ButtonSecondaryPosition,
  property1ButtonSecondaryTop,
  property1ButtonSecondaryLeft,
  property1ButtonSecondaryWidth,
  labelFontSize,
  labelLineHeight,
  labelColor,
}) => {
  const property1ButtonSecondaryStyle = useMemo(() => {
    return {
      padding: property1ButtonSecondaryPadding,
      border: property1ButtonSecondaryBorder,
      backgroundColor: property1ButtonSecondaryBackgroundColor,
      position: property1ButtonSecondaryPosition,
      top: property1ButtonSecondaryTop,
      left: property1ButtonSecondaryLeft,
      width: property1ButtonSecondaryWidth,
    };
  }, [
    property1ButtonSecondaryPadding,
    property1ButtonSecondaryBorder,
    property1ButtonSecondaryBackgroundColor,
    property1ButtonSecondaryPosition,
    property1ButtonSecondaryTop,
    property1ButtonSecondaryLeft,
    property1ButtonSecondaryWidth,
  ]);

  const label6Style = useMemo(() => {
    return {
      fontSize: labelFontSize,
      lineHeight: labelLineHeight,
      color: labelColor,
    };
  }, [labelFontSize, labelLineHeight, labelColor]);

  return (
    <div
      className={`rounded-sm flex flex-row items-start justify-start py-5 px-[35px] text-center text-xl text-black font-p border-[1px] border-solid border-dark ${className}`}
      style={property1ButtonSecondaryStyle}
    >
      <div className="relative leading-[28px]" style={label6Style}>
        {label}
      </div>
    </div>
  );
};

Property1ButtonSecondary.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,

  /** Style props */
  property1ButtonSecondaryPadding: PropTypes.any,
  property1ButtonSecondaryBorder: PropTypes.any,
  property1ButtonSecondaryBackgroundColor: PropTypes.any,
  property1ButtonSecondaryPosition: PropTypes.any,
  property1ButtonSecondaryTop: PropTypes.any,
  property1ButtonSecondaryLeft: PropTypes.any,
  property1ButtonSecondaryWidth: PropTypes.any,
  labelFontSize: PropTypes.any,
  labelLineHeight: PropTypes.any,
  labelColor: PropTypes.any,
};

export default Property1ButtonSecondary;
