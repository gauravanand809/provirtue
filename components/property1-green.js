import { useMemo } from "react";
import PropTypes from "prop-types";

const Property1Green = ({
  className = "",
  label,
  label1,
  label2,
  showLabel,
  labelVisible,
  labelVisible1,
  labelVisible2,
  labelPadding,
  labelBackgroundColor,
  labelFontSize,
  labelPadding1,
  labelBackgroundColor1,
  labelWidth,
  labelHeight,
  labelFontSize1,
  labelWidth1,
  labelPadding2,
  labelBackgroundColor2,
  labelWidth2,
  labelHeight1,
  labelFontSize2,
  labelWidth3,
}) => {
  const labelStyle = useMemo(() => {
    return {
      padding: labelPadding,
      backgroundColor: labelBackgroundColor,
    };
  }, [labelPadding, labelBackgroundColor]);

  const label1Style = useMemo(() => {
    return {
      fontSize: labelFontSize,
    };
  }, [labelFontSize]);

  const label2Style = useMemo(() => {
    return {
      padding: labelPadding1,
      backgroundColor: labelBackgroundColor1,
      width: labelWidth,
      height: labelHeight,
    };
  }, [labelPadding1, labelBackgroundColor1, labelWidth, labelHeight]);

  const label3Style = useMemo(() => {
    return {
      fontSize: labelFontSize1,
      width: labelWidth1,
    };
  }, [labelFontSize1, labelWidth1]);

  const label4Style = useMemo(() => {
    return {
      padding: labelPadding2,
      backgroundColor: labelBackgroundColor2,
      width: labelWidth2,
      height: labelHeight1,
    };
  }, [labelPadding2, labelBackgroundColor2, labelWidth2, labelHeight1]);

  const label5Style = useMemo(() => {
    return {
      fontSize: labelFontSize2,
      width: labelWidth3,
    };
  }, [labelFontSize2, labelWidth3]);

  return (
    <div
      className={`flex flex-col items-start justify-start text-left text-21xl text-black font-p ${className}`}
    >
      <div
        className="rounded-6xs bg-green flex flex-col items-start justify-start py-0 px-[7px]"
        style={labelStyle}
      >
        <div className="relative font-medium" style={label1Style}>
          {label}
        </div>
      </div>
      {showLabel && (
        <div
          className="rounded-6xs bg-green flex flex-col items-start justify-start py-0 px-[7px]"
          style={label2Style}
        >
          {labelVisible && (
            <div className="relative font-medium" style={label3Style}>
              {label1}
            </div>
          )}
        </div>
      )}
      {labelVisible1 && (
        <div
          className="rounded-6xs bg-green flex flex-col items-start justify-start py-0 px-[7px]"
          style={label4Style}
        >
          {labelVisible2 && (
            <div className="relative font-medium" style={label5Style}>
              {label2}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

Property1Green.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  label1: PropTypes.string,
  label2: PropTypes.string,
  showLabel: PropTypes.bool,
  labelVisible: PropTypes.bool,
  labelVisible1: PropTypes.bool,
  labelVisible2: PropTypes.bool,

  /** Style props */
  labelPadding: PropTypes.any,
  labelBackgroundColor: PropTypes.any,
  labelFontSize: PropTypes.any,
  labelPadding1: PropTypes.any,
  labelBackgroundColor1: PropTypes.any,
  labelWidth: PropTypes.any,
  labelHeight: PropTypes.any,
  labelFontSize1: PropTypes.any,
  labelWidth1: PropTypes.any,
  labelPadding2: PropTypes.any,
  labelBackgroundColor2: PropTypes.any,
  labelWidth2: PropTypes.any,
  labelHeight1: PropTypes.any,
  labelFontSize2: PropTypes.any,
  labelWidth3: PropTypes.any,
};

export default Property1Green;
