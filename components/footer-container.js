import Property1Default from "./property1-default";
import Property1Green from "./property1-green";
import Property1ButtonSecondary from "./property1-button-secondary";
import PropTypes from "prop-types";

const FooterContainer = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[490.125rem] left-[0rem] flex flex-col items-start justify-start py-[0rem] px-[6.25rem] text-left text-[1.125rem] text-white font-p ${className}`}
    >
      <div className="rounded-t-26xl rounded-b-none bg-dark flex flex-col items-start justify-start pt-[3.437rem] px-[3.75rem] pb-[3.125rem] gap-[3.125rem]">
        <div className="flex flex-col items-start justify-start gap-[4.125rem]">
          <div className="w-[70.063rem] flex flex-row items-center justify-start gap-[9.687rem]">
            <Property1Default
              icon="/icon4.svg"
              positivus="/positivus1.svg"
              property1DefaultWidth="11.25rem"
              property1DefaultHeight="1.813rem"
              property1DefaultPosition="relative"
              iconWidth="16.39%"
              iconRight="83.61%"
              positivusIconHeight="79.31%"
              positivusIconTop="8.28%"
              positivusIconBottom="12.41%"
            />
            <div className="flex flex-row items-start justify-start gap-[2.5rem]">
              <div className="relative [text-decoration:underline]">
                About us
              </div>
              <div className="relative [text-decoration:underline]">
                Services
              </div>
              <div className="relative [text-decoration:underline]">
                Use Cases
              </div>
              <div className="relative [text-decoration:underline]">
                Pricing
              </div>
              <div className="relative [text-decoration:underline]">Blog</div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[1.25rem]">
              <img
                className="w-[1.875rem] relative h-[1.875rem]"
                alt=""
                src="/social-icon1.svg"
              />
              <img
                className="w-[1.875rem] relative h-[1.875rem]"
                alt=""
                src="/social-icon2.svg"
              />
              <img
                className="w-[1.875rem] relative h-[1.875rem]"
                alt=""
                src="/social-icon3.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[9.625rem]">
            <div className="flex flex-col items-start justify-start gap-[1.687rem]">
              <Property1Green
                label="Contact us:"
                label1="Label"
                label2="Label"
                showLabel={false}
                labelVisible={false}
                labelVisible1={false}
                labelVisible2={false}
                labelPadding="0rem 0.437rem"
                labelBackgroundColor="#b9ff66"
                labelFontSize="1.25rem"
                labelPadding1="0rem 0.437rem"
                labelBackgroundColor1="#b9ff66"
                labelWidth="7.438rem"
                labelHeight="3.188rem"
                labelFontSize1="2.5rem"
                labelWidth1="6.563rem"
                labelPadding2="0rem 0.437rem"
                labelBackgroundColor2="#b9ff66"
                labelWidth2="7.438rem"
                labelHeight1="3.188rem"
                labelFontSize2="2.5rem"
                labelWidth3="6.563rem"
              />
              <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="relative">Email: info@positivus.com</div>
                <div className="relative">Phone: 555-567-8901</div>
                <div className="relative">
                  <p className="m-0">Address: 1234 Main St</p>
                  <p className="m-0">Moonstone City, Stardust State 12345</p>
                </div>
              </div>
            </div>
            <div className="rounded-sm bg-gray-200 overflow-hidden flex flex-row items-start justify-start py-[3.625rem] px-[2.5rem] gap-[1.25rem]">
              <div className="w-[17.813rem] rounded-sm box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[1.375rem] px-[2.187rem] border-[1px] border-solid border-white">
                <div className="relative">Email</div>
              </div>
              <Property1ButtonSecondary
                label="Subscribe to news"
                property1ButtonSecondaryPadding="1.25rem 2.187rem"
                property1ButtonSecondaryBorder="unset"
                property1ButtonSecondaryBackgroundColor="#b9ff66"
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
        </div>
        <div className="flex flex-col items-start justify-start gap-[3.125rem]">
          <div className="w-[70.063rem] relative box-border h-[0.063rem] border-t-[1px] border-solid border-white" />
          <div className="flex flex-row items-start justify-start gap-[2.5rem]">
            <div className="relative leading-[1.75rem]">
              © 2023 Positivus. All Rights Reserved.
            </div>
            <div className="relative [text-decoration:underline] leading-[1.75rem]">
              Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterContainer.propTypes = {
  className: PropTypes.string,
};

export default FooterContainer;
