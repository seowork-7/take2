import { memo } from "react";
import PropTypes from "prop-types";

const BGPattern = memo(({ className = "" }) => {
  return (
    <div
      className={`absolute top-[171px] left-[-30px] w-[1510.4px] h-[644.8px] ${className}`}
    >
      <div className="absolute top-[0px] left-[1016.3px] rounded-8xl bg-bg-ui-dark-blue box-border w-[455.5px] h-[458.2px] [transform:_rotate(48.4deg)] [transform-origin:0_0] border-[2px] border-solid border-darkblue" />
      <div className="absolute top-[489.2px] left-[1195.6px] rounded-[11.06px] bg-bg-ui-dark-blue box-border w-[186.7px] h-[187.8px] [transform:_rotate(-42.4deg)] [transform-origin:0_0] border-[0.8px] border-solid border-darkblue" />
      <div className="absolute top-[196px] left-[1246px] rounded-[11.06px] bg-bg-ui-dark-blue box-border w-[186.7px] h-[187.8px] [transform:_rotate(-42.4deg)] [transform-origin:0_0] border-[0.8px] border-solid border-darkblue" />
      <div className="absolute top-[4px] left-[467.6px] rounded-8xl bg-bg-ui-dark-blue box-border w-[439.9px] h-[442.5px] [transform:_rotate(131.6deg)] [transform-origin:0_0] border-[2px] border-solid border-darkblue" />
      <div className="absolute top-[476.3px] left-[294.4px] rounded-[11.06px] bg-bg-ui-dark-blue box-border w-[180.3px] h-[181.3px] [transform:_rotate(-137.6deg)] [transform-origin:0_0] border-[0.8px] border-solid border-darkblue" />
      <div className="absolute top-[195px] left-[255.4px] rounded-[11.06px] bg-bg-ui-dark-blue box-border w-[180.3px] h-[181.3px] [transform:_rotate(-137.6deg)] [transform-origin:0_0] border-[0.8px] border-solid border-darkblue" />
    </div>
  );
});

BGPattern.propTypes = {
  className: PropTypes.string,
};

export default BGPattern;
