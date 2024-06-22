import { useMemo } from "react";
import PropTypes from "prop-types";

const CompanyAmazon = ({
  className = "",
  companyAmazonCompanyAmazo,
  companyAmazonIconWidth,
  companyAmazonIconHeight,
  companyAmazonIconPosition,
  companyAmazonIconMixBlendMode,
}) => {
  const companyAmazonIconStyle = useMemo(() => {
    return {
      width: companyAmazonIconWidth,
      height: companyAmazonIconHeight,
      position: companyAmazonIconPosition,
      mixBlendMode: companyAmazonIconMixBlendMode,
    };
  }, [
    companyAmazonIconWidth,
    companyAmazonIconHeight,
    companyAmazonIconPosition,
    companyAmazonIconMixBlendMode,
  ]);

  return (
    <img
      className={`w-[110px] max-w-full overflow-hidden h-12 ${className}`}
      alt=""
      src={companyAmazonCompanyAmazo}
      style={companyAmazonIconStyle}
    />
  );
};

CompanyAmazon.propTypes = {
  className: PropTypes.string,
  companyAmazonCompanyAmazo: PropTypes.string,

  /** Style props */
  companyAmazonIconWidth: PropTypes.any,
  companyAmazonIconHeight: PropTypes.any,
  companyAmazonIconPosition: PropTypes.any,
  companyAmazonIconMixBlendMode: PropTypes.any,
};

export default CompanyAmazon;
