import { useState } from "react";
import { Bars3Icon, xMarkIcon } from "@heroicons/react/24/solid";
import Logo from "src/assets/Logo.png";

import { flexBetween } from "src/utility/commonStyles";
import { SelectedPage } from "src/utility/types";

import Link from "./Link";
import useMediaQuery from "src/hooks/useMediaQuery";
import ActionButton from "./ActionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT */}
            <img src={Logo} alt="logo" />
            {/* RIGHT */}
            {/* Only above 1060px */}
            {isAboveMediumScreens && (
              <div className={`${flexBetween} w-full`}>
                {/* RIGHT - INNER LEFT */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page={"Home"}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page={"Benefits"}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page={"Our Classes"}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page={"Contact Us"}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                {/* RIGHT - INNER RIGHT */}
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            )}
            {/* Three Bars Menu */}
            {!isAboveMediumScreens && (
              <button
                className={`rounded-full bg-secondary-500 p-2`}
                onClick={() => setIsMenuToggled((prevToggle) => !prevToggle)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
