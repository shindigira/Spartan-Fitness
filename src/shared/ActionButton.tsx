import { ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useAppDispatch } from "src/hooks/state";
import { setSelectedPage } from "src/store/navbarSlice";
import { SelectedPage } from "src/utility/types";

type Props = {
  children: ReactNode;
};

const ActionButton = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const navigateContactUs = () =>
    dispatch(setSelectedPage(SelectedPage.ContactUs));
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={navigateContactUs}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
