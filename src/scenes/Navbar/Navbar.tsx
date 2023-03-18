import { useRef, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "src/hooks/state";
import { toggleMenu } from "src/store/navbarSlice";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo2 from "src/assets/Logo2.png";

import { flexBetween, menuHidden, menuShow } from "src/utility/commonStyles";

import LinkBar from "./LinkBar";
import ActionButton from "src/shared/ActionButton";

import { determineAboveMediumScreens } from "src/hooks/useMediaQuery";
import useOnClickOutside from "src/hooks/useOnClickOutside";

import { setIsTopOfPage } from "src/store/appStateSlice";
import { setSelectedPage } from "src/store/navbarSlice";
import { SelectedPage } from "src/utility/types";

const Navbar = () => {
  const isAboveMediumScreens = determineAboveMediumScreens();
  const dispatch = useAppDispatch();
  const isMenuToggled = useAppSelector((state) => state.navbar.isMenuToggled);
  const toggleMenuTop = () => dispatch(toggleMenu(!isMenuToggled));
  const disableMenuToggle = () => dispatch(toggleMenu(false));

  const modalRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(modalRef, () => {
    if (isMenuToggled) disableMenuToggle();
  });

  const isTopOfPage = useAppSelector((state) => state.appState.isTopOfPage);
  // Navbar Background Color Changes based on Scroll
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  const setTopOfPage = (bool: boolean) => dispatch(setIsTopOfPage(bool));
  const selectPage = (page: SelectedPage) => dispatch(setSelectedPage(page));
  const selectHome = () => dispatch(setSelectedPage("home" as SelectedPage));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTopOfPage(true);
        selectPage(SelectedPage.Home);
      } else {
        setTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-40 w-full py-4 transition-colors duration-300`}
      >
        <div className={`${flexBetween} mx-auto w-full px-8`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT */}
            <button onClick={selectHome}>
              <div className="h-16 w-16">
                <img className="object-cover" src={Logo2} alt="logo" />
              </div>
            </button>
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
                onClick={toggleMenuTop}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && (
        <div
          ref={modalRef}
          className={`fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl ${menuHidden} ${
            isMenuToggled ? menuShow : ""
          }`}
        >
          {/* CLOSE BUTTON */}
          <div className="flex justify-end p-12">
            <button onClick={disableMenuToggle}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* DROPDOWN MENU */}
          <div className="ml-[33%] flex flex-col gap-7 text-xl">
            <LinkBar />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
