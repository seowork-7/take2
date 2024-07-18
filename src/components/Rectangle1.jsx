import { memo } from "react";
import PropTypes from "prop-types";

const Rectangle1 = memo(({ className = "" }) => {
  return (
    <div
      className={`w-[302px] [backdrop-filter:blur(300px)] rounded-13xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border h-[329px] border-[1px] border-solid border-gradient-stroke ${className}`}
    />
  );
});

Rectangle1.propTypes = {
  className: PropTypes.string,
};

export default Rectangle1;
