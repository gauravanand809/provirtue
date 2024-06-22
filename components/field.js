import { useMemo } from "react";
import PropTypes from "prop-types";

const Field = ({ className = "", name1, name2, propHeight, propHeight1 }) => {
  const fieldStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const inputStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  return (
    <div
      className={`flex flex-col items-start justify-start gap-[0.312rem] text-left text-[1rem] text-black font-p ${className}`}
      style={fieldStyle}
    >
      <div className="relative leading-[1.75rem]">{name1}</div>
      <div
        className="w-[34.75rem] rounded-sm bg-white box-border overflow-hidden flex flex-row items-start justify-start py-[1.125rem] px-[1.875rem] text-[1.125rem] text-gray-100 border-[1px] border-solid border-black"
        style={inputStyle}
      >
        <div className="relative">{name2}</div>
      </div>
    </div>
  );
};

Field.propTypes = {
  className: PropTypes.string,
  name1: PropTypes.string,
  name2: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propHeight1: PropTypes.any,
};

export default Field;
