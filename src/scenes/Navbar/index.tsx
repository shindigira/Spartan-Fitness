import { useState } from "react";
import { Bars3Icon, xMarkIcon } from "@heroicons/react/24/solid";
import Logo from "src/assets/Logo.png";

import { flexBetween } from "src/utility/commonStyles";
type Props = {};

const Navbar = (props: Props) => {
  // const [first, setfirst] = useState(second);
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        Navbar
      </div>
    </nav>
  );
};

export default Navbar;
