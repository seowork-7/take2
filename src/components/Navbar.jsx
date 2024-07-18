import { memo, useState, useCallback } from "react";
import NavLinks from "./NavLinks";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";

const Navbar = memo(({ className = "" }) => {
  const [isNavLinksOpen, setNavLinksOpen] = useState(false);

  const openNavLinks = useCallback(() => {
    setNavLinksOpen(true);
  }, []);

  const closeNavLinks = useCallback(() => {
    setNavLinksOpen(false);
  }, []);

  return (
    <>
      <div
        className={`absolute top-[62px] left-[calc(50%_-_372px)] [backdrop-filter:blur(250px)] rounded-29xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border w-[744px] h-20 flex flex-row items-center justify-between py-2.5 px-5 text-left text-sm text-gray-100 font-body-body-2-body-2-regular border-[1px] border-solid border-gradient-stroke ${className}`}
      >
        <img
          className="w-8 relative h-8 cursor-pointer"
          alt=""
          src="/menu.svg"
          onClick={openNavLinks}
        />
        <div className="w-[127px] flex flex-row items-center justify-end py-2.5 px-3.5 box-border">
          <div className="w-[37.1px] relative h-[23px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [filter:blur(1.3px)] hidden">
              <img
                className="relative w-[23px] h-[23px]"
                alt=""
                src="/subtract.svg"
              />
              <img
                className="relative w-[23px] h-[23px] object-contain"
                alt=""
                src="/subtract-11@2x.png"
              />
            </div>
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <img
                className="relative w-[22.9px] h-[23px]"
                alt=""
                src="/subtract-2.svg"
              />
              <img
                className="relative w-[23px] h-[23px] object-contain"
                alt=""
                src="/subtract-31@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-text-ui-white-100 overflow-hidden flex flex-row items-center justify-center py-2 px-3.5 gap-[4px]">
          <div className="w-[75px] relative h-5">
            <b className="absolute top-[0%] left-[0%] tracking-[0.25px] leading-[20px]">
              Get started
            </b>
          </div>
          <img
            className="w-6 relative h-6"
            alt=""
            src="/arrow-alt-lright-alt-2.svg"
          />
        </div>
      </div>
      {isNavLinksOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNavLinks}
        >
          <NavLinks onClose={closeNavLinks} />
        </PortalPopup>
      )}
    </>
  );
});

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
