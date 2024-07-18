import { memo, useMemo } from "react";
import PropTypes from "prop-types";

const CompanyInfo = memo(({ className = "", propBottom, propLeft }) => {
  const companyInfoStyle = useMemo(() => {
    return {
      bottom: propBottom,
      left: propLeft,
    };
  }, [propBottom, propLeft]);

  return (
    <div
      className={`absolute bottom-[325.6px] left-[calc(50%_-_532px)] w-[202px] h-[139px] text-left text-lg text-text-ui-white-100 font-body-body-2-body-2-regular ${className}`}
      style={companyInfoStyle}
    >
      <img
        className="absolute bottom-[104.8px] left-[calc(50%_-_100px)] w-[143px] h-[34.2px]"
        alt=""
        src="/logo.svg"
      />
      <b className="absolute bottom-[68px] left-[calc(50%_-_100px)]">
        A GameFi Infrastructure
      </b>
      <div className="absolute bottom-[0px] left-[calc(50%_-_101px)] w-[164px] h-12">
        <div className="absolute bottom-[0px] left-[calc(50%_-_82px)] [backdrop-filter:blur(300px)] rounded-13xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border w-12 h-12 flex flex-col items-center justify-center p-3 border-[1px] border-solid border-gradient-stroke">
          <img
            className="w-6 relative h-[23px]"
            alt=""
            src="/social-icon.svg"
          />
        </div>
        <div className="absolute bottom-[0px] left-[calc(50%_-_24px)] [backdrop-filter:blur(300px)] rounded-13xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border w-12 h-12 flex flex-col items-center justify-center p-3 border-[1px] border-solid border-gradient-stroke">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/akariconsdiscordfill.svg"
          />
        </div>
        <div className="absolute bottom-[0px] left-[calc(50%_+_34px)] [backdrop-filter:blur(300px)] rounded-13xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border w-12 h-12 flex flex-col items-center justify-center p-3 border-[1px] border-solid border-gradient-stroke">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/akariconstwitterfill.svg"
          />
        </div>
      </div>
    </div>
  );
});

CompanyInfo.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBottom: PropTypes.any,
  propLeft: PropTypes.any,
};

export default CompanyInfo;
