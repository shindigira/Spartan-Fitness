import { useState, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "src/assets/Logo.png";

import { flexBetween } from "src/utility/commonStyles";

import Link from "./Link";
import ActionButton from "./ActionButton";

import useMediaQuery from "src/hooks/useMediaQuery";
import useOnClickOutside from "src/hooks/UseOnClickOutside";

const LinkBar = () => {
  return (
    <>
      {["Home", "Benefits", "Our Classes", "Contact Us"].map((pageName) => (
        <Link page={pageName} />
      ))}
    </>
  );
};

const Navbar = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const disableMenuToggle = (): void => setIsMenuToggled(false);
  useOnClickOutside(modalRef, disableMenuToggle);

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
                  <LinkBar />
                </div>
                {/* RIGHT - INNER RIGHT */}
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton>Become a Member</ActionButton>
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
            {/* MOBILE MENU MODAL */}
            {!isAboveMediumScreens && isMenuToggled && (
              <div
                ref={modalRef}
                className="fixed right-0 bottom-0 z-30 h-full w-[300px] bg-primary-100 drop-shadow-xl"
              >
                {/* CLOSE BUTTON */}
                <div className="flex justify-end p-12">
                  <button onClick={disableMenuToggle}>
                    <XMarkIcon className="h-6 w-6 text-gray-400" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
