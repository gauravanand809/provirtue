import Property1SimpleGreen from "./property1-simple-green";
import PropTypes from "prop-types";

const CaseStudyContainer = ({ className = "", ppcCampaignResultText }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-[1.25rem] text-left text-[1.125rem] text-white font-p ${className}`}
    >
      <div className="w-[17.875rem] relative inline-block">
        {ppcCampaignResultText}
      </div>
      <Property1SimpleGreen
        label="Learn more"
        property1SimpleGreenGap="0.937rem"
        labelFontSize="1.25rem"
        labelLineHeight="1.75rem"
        iconWidth="1.081rem"
        iconHeight="0.625rem"
      />
    </div>
  );
};

CaseStudyContainer.propTypes = {
  className: PropTypes.string,
  ppcCampaignResultText: PropTypes.string,
};

export default CaseStudyContainer;
