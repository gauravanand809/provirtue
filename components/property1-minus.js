import { useMemo } from "react";
import PropTypes from "prop-types";

const Property1Minus = ({
  className = "",
  property1MinusProperty1Mi,
  property1MinusIconWidth,
  property1MinusIconOverflow,
  property1MinusIconHeight,
  property1MinusIconPosition,
}) => {
  const property1MinusIconStyle = useMemo(() => {
    return {
      width: property1MinusIconWidth,
      overflow: property1MinusIconOverflow,
      height: property1MinusIconHeight,
      position: property1MinusIconPosition,
    };
  }, [
    property1MinusIconWidth,
    property1MinusIconOverflow,
    property1MinusIconHeight,
    property1MinusIconPosition,
  ]);

  return (
    <img
      className={`w-[58px] max-w-full overflow-hidden h-[58px] ${className}`}
      alt=""
      src={property1MinusProperty1Mi}
      style={property1MinusIconStyle}
    />
  );
};

Property1Minus.propTypes = {
  className: PropTypes.string,
  property1MinusProperty1Mi: PropTypes.string,

  /** Style props */
  property1MinusIconWidth: PropTypes.any,
  property1MinusIconOverflow: PropTypes.any,
  property1MinusIconHeight: PropTypes.any,
  property1MinusIconPosition: PropTypes.any,
};

export default Property1Minus;
