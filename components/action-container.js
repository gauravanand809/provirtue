import Property1ButtonSecondary from "./property1-button-secondary";
import PropTypes from "prop-types";

const ActionContainer = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[138.25rem] left-[0rem] w-[90rem] h-[24.625rem] text-left text-[1.875rem] text-black font-p ${className}`}
    >
      <div className="absolute top-[0rem] left-[0rem] w-[90rem] flex flex-row items-center justify-start py-[0rem] px-[6.25rem] box-border">
        <div className="w-[77.5rem] rounded-26xl bg-grey h-[21.688rem] flex flex-row items-center justify-start py-[0rem] px-[3.75rem] box-border">
          <div className="flex flex-col items-start justify-start gap-[1.625rem]">
            <div className="w-[31.25rem] relative font-medium inline-block">
              Let’s make things happen
            </div>
            <div className="w-[31.25rem] relative text-[1.125rem] inline-block">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </div>
            <Property1ButtonSecondary
              label="Get your free proposal"
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
        </div>
        <img
          className="w-[30.875rem] relative h-[24.625rem] ml-[-44.688rem]"
          alt=""
          src="/frame-19.svg"
        />
      </div>
    </div>
  );
};

ActionContainer.propTypes = {
  className: PropTypes.string,
};

export default ActionContainer;
