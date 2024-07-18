import { memo, useMemo } from "react";
import PropTypes from "prop-types";

const Card = memo(({ className = "", propTop, propLeft }) => {
  const cardStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className={`absolute bottom-[0px] left-[calc(50%_-_471px)] [backdrop-filter:blur(300px)] rounded-29xl box-border flex flex-col items-start justify-start min-w-[304px] text-left text-base text-text-ui-white-100 font-body-body-2-body-2-regular border-[1px] border-solid border-gradient-stroke ${className}`}
      style={cardStyle}
    >
      <img
        className="self-stretch relative rounded-t-xl rounded-b-none max-w-full overflow-hidden h-[171px] shrink-0 object-cover"
        alt=""
        src="/image-94@2x.png"
      />
      <div className="self-stretch [backdrop-filter:blur(300px)] rounded-t-none rounded-b-xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] flex flex-col items-start justify-start py-4 px-5 gap-[20px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
          <b className="self-stretch relative">
            LYNC teamed up with Astar Network to effortlessly bring the next
            billion gamers into Web3 🎮
          </b>
          <b className="self-stretch relative text-sm text-text-ui-gray-75">
            LYNC joins forces with Astar Network to allow game developers and
            studios to launch games in just a few minutes using LYNC’s SDK and
            infrastructure.
          </b>
        </div>
        <div className="rounded-xl bg-text-ui-white-100 flex flex-row items-center justify-center py-3 px-3.5 text-3xs text-text-ui-gray">
          <b className="relative">Read more</b>
        </div>
      </div>
    </div>
  );
});

Card.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default Card;
