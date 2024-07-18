import { memo } from "react";
import PropTypes from "prop-types";

const FrameComponent = memo(({ className = "" }) => {
  return (
    <div
      className={`absolute w-[calc(100%_-_178px)] top-[2756px] right-[90px] left-[88px] h-[329px] overflow-hidden ${className}`}
    >
      <div className="absolute top-[2px] left-[0px] [backdrop-filter:blur(300px)] rounded-13xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border w-[265px] h-[153px] border-[1px] border-solid border-gradient-stroke" />
      <div className="absolute top-[175px] left-[0px] [backdrop-filter:blur(300px)] rounded-13xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border w-[265px] h-[153px] border-[1px] border-solid border-gradient-stroke" />
      <div className="absolute top-[0px] left-[281px] [backdrop-filter:blur(300px)] rounded-13xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border w-[453px] h-[329px] border-[1px] border-solid border-gradient-stroke" />
      <img
        className="absolute top-[33.5px] left-[421.6px] w-[345.6px] h-[354.8px] object-contain"
        alt=""
        src="/httpslottiefilescomanimationscryptowalletyqvwzv1l981@2x.png"
      />
    </div>
  );
});

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
