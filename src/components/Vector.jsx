import { memo } from "react";
import PropTypes from "prop-types";

const Vector = memo(({ className = "" }) => {
  return (
    <div
      className={`w-[161px] [background:linear-gradient(179.34deg,_rgba(217,_217,_217,_0)_51.21%,_rgba(217,_217,_217,_0.06))] h-[114px] ${className}`}
    />
  );
});

Vector.propTypes = {
  className: PropTypes.string,
};

export default Vector;
