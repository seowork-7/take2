import { memo, useMemo } from "react";
import PropTypes from "prop-types";

const FeatureCardDesign1 = memo(({ className = "", propLeft, propTop }) => {
  const featureCardDesign2Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div
      className={`absolute top-[128px] left-[112.2px] rounded-xl [background:linear-gradient(180deg,_rgba(2,_6,_23,_0)_51.36%,_rgba(2,_6,_23,_0.8)_80.37%)] w-[304px] h-[404px] overflow-hidden flex flex-col items-start justify-center py-[45px] px-[22px] box-border gap-[25px] min-w-[304px] text-left text-5xl text-text-ui-white-100 font-body-body-2-body-2-regular ${className}`}
      style={featureCardDesign2Style}
    >
      <img
        className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/rectangle-24@2x.png"
      />
      <div className="self-stretch relative h-[110px]">
        <div className="absolute top-[0px] left-[0px] font-black flex items-center w-[214.2px]">
          LYNC Wallet SDK
        </div>
        <div className="absolute top-[34px] left-[0px] text-sm text-text-ui-gray-75 flex items-center w-[260px]">
          <span className="w-full">
            <p className="m-0">Empowering developers to integrate</p>
            <p className="m-0">account abstraction in their game,</p>
            <p className="m-0">dapp, metaverse and more in</p>
            <p className="m-0">minutes.</p>
          </span>
        </div>
      </div>
    </div>
  );
});

FeatureCardDesign1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
};

export default FeatureCardDesign1;
