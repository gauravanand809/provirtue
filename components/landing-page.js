import Property1Default from "./property1-default";
import Property1ButtonSecondary from "./property1-button-secondary";
import CompanyAmazon from "./company-amazon";
import PropTypes from "prop-types";

const LandingPage = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[3.75rem] left-[0rem] w-[90rem] flex flex-col items-start justify-start gap-[4.375rem] text-left text-[1.25rem] text-black font-p ${className}`}
    >
      <div className="w-[90rem] overflow-hidden flex flex-row items-center justify-between py-[0rem] px-[6.25rem] box-border">
        <div className="overflow-hidden flex flex-row items-start justify-start py-[0.625rem] px-[0rem]">
          <Property1Default
            icon="/icon.svg"
            positivus="/positivus.svg"
            property1DefaultWidth="13.719rem"
            property1DefaultHeight="2.25rem"
            property1DefaultPosition="relative"
            iconWidth="16.4%"
            iconRight="83.6%"
            positivusIconHeight="79.44%"
            positivusIconTop="8.33%"
            positivusIconBottom="12.22%"
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-[2.5rem]">
          <div className="relative leading-[1.75rem]">About us</div>
          <div className="relative leading-[1.75rem]">Services</div>
          <div className="relative leading-[1.75rem]">Use Cases</div>
          <div className="relative leading-[1.75rem]">Pricing</div>
          <div className="relative leading-[1.75rem]">Blog</div>
          <Property1ButtonSecondary
            label="Request a quote"
            property1ButtonSecondaryPadding="1.25rem 2.187rem"
            property1ButtonSecondaryBorder="1px solid #191a23"
            property1ButtonSecondaryBackgroundColor="unset"
            property1ButtonSecondaryPosition="unset"
            property1ButtonSecondaryTop="unset"
            property1ButtonSecondaryLeft="unset"
            property1ButtonSecondaryWidth="unset"
            labelFontSize="1.25rem"
            labelLineHeight="1.75rem"
            labelColor="#000"
          />
        </div>
      </div>
      <div className="w-[90rem] overflow-hidden flex flex-row items-start justify-between py-[0rem] px-[6.25rem] box-border text-[3.75rem]">
        <div className="flex flex-col items-start justify-start gap-[2.187rem]">
          <div className="w-[33.188rem] relative font-medium inline-block">
            Navigating the digital landscape for success
          </div>
          <div className="w-[31.125rem] relative text-[1.25rem] leading-[1.75rem] inline-block">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </div>
          <Property1ButtonSecondary
            label="Book a consultation"
            property1ButtonSecondaryPadding="1.25rem 2.187rem"
            property1ButtonSecondaryBorder="unset"
            property1ButtonSecondaryBackgroundColor="#191a23"
            property1ButtonSecondaryPosition="unset"
            property1ButtonSecondaryTop="unset"
            property1ButtonSecondaryLeft="unset"
            property1ButtonSecondaryWidth="unset"
            labelFontSize="1.25rem"
            labelLineHeight="1.75rem"
            labelColor="#fff"
          />
        </div>
        <img
          className="w-[37.531rem] relative h-[32.188rem]"
          alt=""
          src="/illustration.svg"
        />
      </div>
      <div className="w-[90rem] overflow-hidden flex flex-row items-start justify-between py-[0rem] px-[6.25rem] box-border">
        <CompanyAmazon
          companyAmazonCompanyAmazo="/company-logo.svg"
          companyAmazonIconWidth="7.756rem"
          companyAmazonIconHeight="3rem"
          companyAmazonIconPosition="relative"
          companyAmazonIconMixBlendMode="luminosity"
        />
        <CompanyAmazon
          companyAmazonCompanyAmazo="/company-logo1.svg"
          companyAmazonIconWidth="7.9rem"
          companyAmazonIconHeight="3rem"
          companyAmazonIconPosition="relative"
          companyAmazonIconMixBlendMode="luminosity"
        />
        <CompanyAmazon
          companyAmazonCompanyAmazo="/company-logo2.svg"
          companyAmazonIconWidth="8.038rem"
          companyAmazonIconHeight="3rem"
          companyAmazonIconPosition="relative"
          companyAmazonIconMixBlendMode="luminosity"
        />
        <CompanyAmazon
          companyAmazonCompanyAmazo="/company-logo3.svg"
          companyAmazonIconWidth="9.1rem"
          companyAmazonIconHeight="3rem"
          companyAmazonIconPosition="relative"
          companyAmazonIconMixBlendMode="luminosity"
        />
        <CompanyAmazon
          companyAmazonCompanyAmazo="/company-logo4.svg"
          companyAmazonIconWidth="7.825rem"
          companyAmazonIconHeight="3rem"
          companyAmazonIconPosition="relative"
          companyAmazonIconMixBlendMode="luminosity"
        />
        <CompanyAmazon
          companyAmazonCompanyAmazo="/company-logo5.svg"
          companyAmazonIconWidth="6.913rem"
          companyAmazonIconHeight="3rem"
          companyAmazonIconPosition="relative"
          companyAmazonIconMixBlendMode="luminosity"
        />
      </div>
    </div>
  );
};

LandingPage.propTypes = {
  className: PropTypes.string,
};

export default LandingPage;
