import { useMemo } from "react";
import Property1Minus from "./property1-minus";
import PropTypes from "prop-types";

const ResearchContainer = ({
  className = "",
  prop,
  researchAndStrategyDevelo,
  propColor,
}) => {
  const researchAndStrategyStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className={`w-[77.125rem] shadow-[0px_5px_0px_#191a23] rounded-26xl bg-grey box-border overflow-hidden flex flex-col items-start justify-start py-[2.562rem] px-[3.75rem] text-left text-[3.75rem] text-black font-p border-[1px] border-solid border-dark ${className}`}
    >
      <div className="w-[69.813rem] overflow-hidden flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-[1.562rem]">
          <div className="relative font-medium">{prop}</div>
          <div
            className="w-[38.25rem] relative text-[1.875rem] font-medium inline-block shrink-0"
            style={researchAndStrategyStyle}
          >
            {researchAndStrategyDevelo}
          </div>
        </div>
        <Property1Minus
          property1MinusProperty1Mi="/plus-icon1.svg"
          property1MinusIconWidth="3.625rem"
          property1MinusIconOverflow="unset"
          property1MinusIconHeight="3.625rem"
          property1MinusIconPosition="relative"
        />
      </div>
    </div>
  );
};

ResearchContainer.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  researchAndStrategyDevelo: PropTypes.string,

  /** Style props */
  propColor: PropTypes.any,
};

export default ResearchContainer;
