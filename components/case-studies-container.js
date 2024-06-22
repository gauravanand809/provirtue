import CaseStudyContainer from "./case-study-container";
import PropTypes from "prop-types";

const CaseStudiesContainer = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[179.813rem] left-[0.188rem] flex flex-col items-start justify-start py-[0rem] px-[6.25rem] text-left text-[1.125rem] text-white font-p ${className}`}
    >
      <div className="rounded-26xl bg-dark flex flex-row items-start justify-start py-[4.375rem] px-[3.75rem] gap-[4rem]">
        <CaseStudyContainer ppcCampaignResultText="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales." />
        <div className="w-[0.063rem] relative box-border h-[11.688rem] border-r-[1px] border-solid border-white" />
        <CaseStudyContainer ppcCampaignResultText="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic." />
        <div className="w-[0.063rem] relative box-border h-[11.688rem] border-r-[1px] border-solid border-white" />
        <CaseStudyContainer ppcCampaignResultText="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales." />
      </div>
    </div>
  );
};

CaseStudiesContainer.propTypes = {
  className: PropTypes.string,
};

export default CaseStudiesContainer;
