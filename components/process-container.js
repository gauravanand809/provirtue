import Property1Minus from "./property1-minus";
import ResearchContainer from "./research-container";
import PropTypes from "prop-types";

const ProcessContainer = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[217.125rem] left-[0.188rem] flex flex-col items-start justify-start py-[0rem] px-[6.25rem] gap-[1.875rem] text-left text-[3.75rem] text-black font-p ${className}`}
    >
      <div className="w-[77.125rem] shadow-[0px_5px_0px_#191a23] rounded-26xl bg-green box-border overflow-hidden flex flex-col items-start justify-start py-[2.562rem] px-[3.75rem] gap-[1.875rem] border-[1px] border-solid border-dark">
        <div className="w-[69.813rem] overflow-hidden flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-start gap-[1.562rem]">
            <div className="relative font-medium">01</div>
            <div className="w-[38.25rem] relative text-[1.875rem] font-medium inline-block shrink-0">
              Consultation
            </div>
          </div>
          <Property1Minus
            property1MinusProperty1Mi="/plus-icon.svg"
            property1MinusIconWidth="3.625rem"
            property1MinusIconOverflow="unset"
            property1MinusIconHeight="3.625rem"
            property1MinusIconPosition="relative"
          />
        </div>
        <div className="w-[69.688rem] relative box-border h-[0.063rem] border-t-[1px] border-solid border-black" />
        <div className="w-[69.625rem] relative text-[1.125rem] inline-block h-[3.75rem] shrink-0">
          During the initial consultation, we will discuss your business goals
          and objectives, target audience, and current marketing efforts. This
          will allow us to understand your needs and tailor our services to best
          fit your requirements.
        </div>
      </div>
      <ResearchContainer
        prop="02"
        researchAndStrategyDevelo="Research and Strategy Development"
      />
      <ResearchContainer
        prop="03"
        researchAndStrategyDevelo="Implementation"
        propColor="#000"
      />
      <ResearchContainer
        prop="04"
        researchAndStrategyDevelo="Monitoring and Optimization"
        propColor="#000"
      />
      <ResearchContainer
        prop="05"
        researchAndStrategyDevelo="Reporting and Communication"
        propColor="#000"
      />
      <ResearchContainer
        prop="06"
        researchAndStrategyDevelo="Continual Improvement"
        propColor="#191a23"
      />
    </div>
  );
};

ProcessContainer.propTypes = {
  className: PropTypes.string,
};

export default ProcessContainer;
