import { useMemo } from "react";
import PropTypes from "prop-types";

const Property1Default = ({
  className = "",
  icon,
  positivus,
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultPosition,
  iconWidth,
  iconRight,
  positivusIconHeight,
  positivusIconTop,
  positivusIconBottom,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      position: property1DefaultPosition,
    };
  }, [property1DefaultWidth, property1DefaultHeight, property1DefaultPosition]);

  const iconStyle = useMemo(() => {
    return {
      width: iconWidth,
      right: iconRight,
    };
  }, [iconWidth, iconRight]);

  const positivusIconStyle = useMemo(() => {
    return {
      height: positivusIconHeight,
      top: positivusIconTop,
      bottom: positivusIconBottom,
    };
  }, [positivusIconHeight, positivusIconTop, positivusIconBottom]);

  return (
    <div
      className={`w-[219.5px] h-9 ${className}`}
      style={property1DefaultStyle}
    >
      <img
        className="absolute h-full w-[16.4%] top-[0%] right-[83.6%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={icon}
        style={iconStyle}
      />
      <img
        className="absolute h-[79.44%] w-[77.72%] top-[8.33%] right-[0%] bottom-[12.22%] left-[22.28%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={positivus}
        style={positivusIconStyle}
      />
    </div>
  );
};

Property1Default.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  positivus: PropTypes.string,

  /** Style props */
  property1DefaultWidth: PropTypes.any,
  property1DefaultHeight: PropTypes.any,
  property1DefaultPosition: PropTypes.any,
  iconWidth: PropTypes.any,
  iconRight: PropTypes.any,
  positivusIconHeight: PropTypes.any,
  positivusIconTop: PropTypes.any,
  positivusIconBottom: PropTypes.any,
};

export default Property1Default;
