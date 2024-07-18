import { memo } from "react";
import PropTypes from "prop-types";

const DocsCard = memo(({ className = "" }) => {
  return (
    <div
      className={`w-[544px] rounded-[32.24px] box-border max-w-full h-[327px] overflow-hidden border-[1px] border-solid border-text-ui-white-100 ${className}`}
    >
      <img
        className="absolute top-[44px] left-[-236px] w-[558.6px] h-[651.7px] object-contain mix-blend-normal"
        alt=""
        src="/bg-gradient@2x.png"
      />
    </div>
  );
});

DocsCard.propTypes = {
  className: PropTypes.string,
};

export default DocsCard;
