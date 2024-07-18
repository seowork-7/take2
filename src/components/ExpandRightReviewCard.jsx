import { memo, useMemo } from "react";
import PropTypes from "prop-types";

const ExpandRightReviewCard = memo(
  ({
    className = "",
    propFlex,
    propMinWidth,
    propPosition,
    propTop,
    propLeft,
    propWidth,
    propAlignSelf,
  }) => {
    const expandRightReviewCardStyle = useMemo(() => {
      return {
        flex: propFlex,
        minWidth: propMinWidth,
        position: propPosition,
        top: propTop,
        left: propLeft,
        width: propWidth,
        alignSelf: propAlignSelf,
      };
    }, [
      propFlex,
      propMinWidth,
      propPosition,
      propTop,
      propLeft,
      propWidth,
      propAlignSelf,
    ]);

    return (
      <div
        className={`absolute w-[calc(100%_-_960px)] right-[808px] bottom-[136px] left-[152px] rounded-xl flex flex-col items-start justify-start text-left text-base text-text-ui-white-100 font-body-body-2-body-2-regular ${className}`}
        style={expandRightReviewCardStyle}
      >
        <div className="self-stretch rounded-t-xl rounded-b-none bg-bg-ui-dark-blue flex flex-row items-center justify-center py-4 px-5 opacity-[0.8]">
          <div className="flex-1 relative font-medium">
            Absolutely blown away by the capabilities of this company's Web3
            gaming SDK! Integrating it into my project was seamless, and the
            innovative tools provided took my game to the next level. The
            support team was incredibly responsive and helpful throughout the
            process. Highly recommended!
          </div>
        </div>
        <div className="self-stretch [backdrop-filter:blur(300px)] rounded-t-none rounded-b-xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] flex flex-row items-center justify-start py-4 px-5 gap-[10px] text-sm font-label-label-bold">
          <div className="flex flex-row items-start justify-start p-2">
            <div className="w-8 relative rounded-[50%] bg-gainsboro h-8" />
          </div>
          <div className="flex flex-col items-start justify-start">
            <b className="relative uppercase">Alex George</b>
            <b className="relative text-7xs tracking-[0.2em] leading-[125%] uppercase font-body-body-2-body-2-regular text-text-ui-gray-75">
              CEO, Polygon
            </b>
          </div>
        </div>
      </div>
    );
  }
);

ExpandRightReviewCard.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default ExpandRightReviewCard;
