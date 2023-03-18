import { FC, useState } from "react";
import { GymClassType } from "src/utility/types";

// const overlayStyles = `p-5 absolute z-30 flex
//   h-[380px] w-[450px] flex-col items-center justify-center
//   whitespace-normal bg-primary-500 text-center text-white
//   opacity-0 transition duration-500 hover:opacity-90`;

const Class: FC<GymClassType> = ({ name, description, image }) => {
  const [hovering, setHovering] = useState<boolean>(false);
  return (
    <li
      className="relative mx-5 inline-block h-[380px] w-[450px]"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* IMAGE OVERLAY */}
      <div
        className={`absolute z-20 flex h-full w-full bg-primary-500 opacity-0 transition duration-300 ${
          hovering ? "opacity-60" : ""
        }`}
      ></div>
      <div
        className={`absolute z-30 flex h-full w-full flex-col items-center justify-center whitespace-normal p-5 text-center opacity-0 transition duration-300 ${
          hovering ? "opacity-100" : ""
        }`}
      >
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>

      <img className="" alt={`${image}`} src={image} />
    </li>
  );
};

export default Class;
