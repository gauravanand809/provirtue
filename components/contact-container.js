import Field from "./field";
import Property1ButtonSecondary from "./property1-button-secondary";
import PropTypes from "prop-types";

const ContactContainer = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[433.063rem] left-[0rem] w-[90rem] flex flex-row items-center justify-start py-[0rem] px-[6.25rem] box-border text-left text-[1.125rem] text-black font-p ${className}`}
    >
      <div className="w-[77.5rem] rounded-26xl bg-grey flex flex-row items-start justify-start pt-[3.75rem] px-[6.25rem] pb-[5rem] box-border">
        <div className="flex flex-col items-start justify-start gap-[2.5rem]">
          <div className="flex flex-row items-start justify-start gap-[2.187rem]">
            <div className="w-[6rem] relative h-[1.75rem]">
              <div className="absolute top-[0.125rem] left-[2.625rem]">
                Say Hi
              </div>
              <div className="absolute top-[0rem] left-[0rem] w-[1.75rem] h-[1.75rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-10xl bg-white box-border w-[1.875rem] h-[1.875rem] border-[1px] border-solid border-black" />
                <div className="absolute top-[0.375rem] left-[0.375rem] rounded-[50%] bg-green w-[1rem] h-[1rem]" />
              </div>
            </div>
            <div className="w-[9.063rem] relative h-[1.75rem]">
              <div className="absolute top-[-0.062rem] left-[-0.062rem] rounded-10xl bg-white box-border w-[1.875rem] h-[1.875rem] border-[1px] border-solid border-black" />
              <div className="absolute top-[0.125rem] left-[2.625rem]">
                Get a Quote
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[1.562rem] text-[1rem]">
            <Field name1="Name" name2="Name" />
            <Field
              name1="Email*"
              name2="Email"
              propHeight="unset"
              propHeight1="unset"
            />
            <Field
              name1="Message*"
              name2="Message"
              propHeight="13.938rem"
              propHeight1="11.875rem"
            />
          </div>
          <Property1ButtonSecondary
            label="Send Message"
            property1ButtonSecondaryPadding="1.25rem 2.187rem"
            property1ButtonSecondaryBorder="unset"
            property1ButtonSecondaryBackgroundColor="#191a23"
            property1ButtonSecondaryPosition="unset"
            property1ButtonSecondaryTop="unset"
            property1ButtonSecondaryLeft="unset"
            property1ButtonSecondaryWidth="34.75rem"
            labelFontSize="1.25rem"
            labelLineHeight="1.75rem"
            labelColor="#fff"
          />
        </div>
      </div>
      <img
        className="w-[43.225rem] relative h-[40.5rem] object-contain ml-[-22.938rem]"
        alt=""
        src="/illustration6@2x.png"
      />
    </div>
  );
};

ContactContainer.propTypes = {
  className: PropTypes.string,
};

export default ContactContainer;
