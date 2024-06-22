import { useMemo } from "react";
import Property1Green from "./property1-green";
import Property1Black from "./property1-black";
import PropTypes from "prop-types";

const Card2 = ({
  className = "",
  label,
  label1,
  illustration,
  propHeight,
  showLabel,
  labelVisible,
  labelVisible1,
  labelVisible2,
}) => {
  const illustrationIconStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={`w-[37.5rem] shadow-[0px_5px_0px_#191a23] rounded-26xl bg-grey box-border overflow-hidden shrink-0 flex flex-row items-center justify-between p-[3.125rem] border-[1px] border-solid border-dark ${className}`}
    >
      <div className="flex flex-col items-start justify-center gap-[5.812rem]">
        <Property1Green
          label="Search engine"
          label1="optimization"
          label2="(SEO)"
          showLabel
          labelVisible
          labelVisible1={false}
          labelVisible2
          labelPadding="0rem 0.437rem"
          labelBackgroundColor="#b9ff66"
          labelFontSize="1.875rem"
          labelPadding1="0rem 0.437rem"
          labelBackgroundColor1="#b9ff66"
          labelWidth="unset"
          labelHeight="unset"
          labelFontSize1="1.875rem"
          labelWidth1="unset"
          labelPadding2="0rem 0.437rem"
          labelBackgroundColor2="#b9ff66"
          labelWidth2="unset"
          labelHeight1="unset"
          labelFontSize2="1.875rem"
          labelWidth3="unset"
        />
        <Property1Black
          icon="/icon1.svg"
          label="Learn more"
          property1BlackGap="0.937rem"
          iconWidth="2.563rem"
          iconHeight="2.563rem"
          labelFontSize="1.25rem"
          labelLineHeight="1.75rem"
          labelColor="#000"
        />
      </div>
      <img
        className="w-[13.125rem] relative h-[10.625rem] object-cover"
        alt=""
        src={illustration}
        style={illustrationIconStyle}
      />
    </div>
  );
};

Card2.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  label1: PropTypes.string,
  illustration: PropTypes.string,
  showLabel: PropTypes.bool,
  labelVisible: PropTypes.bool,
  labelVisible1: PropTypes.bool,
  labelVisible2: PropTypes.bool,

  /** Style props */
  propHeight: PropTypes.any,
};

export default Card2;
