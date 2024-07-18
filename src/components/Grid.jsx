import { memo } from "react";
import PropTypes from "prop-types";

const Grid = memo(({ className = "" }) => {
  return (
    <div
      className={`absolute top-[6944px] left-[-69px] w-[1579px] h-[4585px] mix-blend-overlay ${className}`}
    >
      <img
        className="absolute top-[0px] left-[0px] w-[1495.9px] h-[4585px]"
        alt=""
        src="/vertical-1.svg"
      />
      <img
        className="absolute top-[0px] left-[0px] w-[1579px] h-[4581px] object-contain"
        alt=""
        src="/horizontal1@2x.png"
      />
    </div>
  );
});

Grid.propTypes = {
  className: PropTypes.string,
};

export default Grid;
