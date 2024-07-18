import { memo } from "react";
import PropTypes from "prop-types";

const NavLinks1 = memo(({ className = "" }) => {
  return (
    <div
      className={`w-[371px] relative rounded-13xl bg-gray-300 h-[450px] flex flex-col items-center justify-between p-5 box-border max-w-full max-h-full overflow-auto text-center text-5xl text-text-ui-white-100 font-body-body-2-body-2-regular ${className}`}
    >
      <div className="self-stretch rounded-13xl bg-gray-400 h-[60px] flex flex-row items-center justify-center p-2 box-border">
        <b className="relative">Home</b>
      </div>
      <div className="self-stretch rounded-13xl bg-gray-400 h-[60px] flex flex-row items-center justify-center p-2 box-border">
        <b className="relative">Documentation</b>
      </div>
      <div className="self-stretch rounded-13xl bg-gray-400 h-[60px] flex flex-row items-center justify-center p-2 box-border">
        <b className="relative">Blogs</b>
      </div>
      <div className="self-stretch rounded-13xl bg-gray-400 h-[60px] flex flex-row items-center justify-center p-2 box-border">
        <b className="relative">LYNC Portal</b>
      </div>
      <div className="self-stretch rounded-13xl bg-gray-400 h-[60px] flex flex-row items-center justify-center p-2 box-border">
        <b className="relative">Request a demo</b>
      </div>
      <div className="self-stretch rounded-13xl bg-gray-400 h-[60px] flex flex-row items-center justify-center p-2 box-border text-text-ui-gray-75">
        <b className="relative">Close</b>
      </div>
    </div>
  );
});

NavLinks1.propTypes = {
  className: PropTypes.string,
};

export default NavLinks1;
