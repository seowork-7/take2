import { memo } from "react";
import PropTypes from "prop-types";

const Image1 = memo(({ className = "" }) => {
  return (
    <div
      className={`w-[799.5px] max-w-full h-[714px] bg-[url('/public/image-99@3x.png')] bg-cover bg-no-repeat bg-[top] ${className}`}
    />
  );
});

Image1.propTypes = {
  className: PropTypes.string,
};

export default Image1;
