import { ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useAppDispatch } from "src/hooks/state";
import { setSelectedPage } from "src/navbarSlice";
import { SelectedPage } from "src/utility/types";

type Props = {
  children: ReactNode;
};

const ActionLink = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const navigateContactUs = () =>
    dispatch(setSelectedPage(SelectedPage.ContactUs));
  return (
    <AnchorLink
      className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
      onClick={navigateContactUs}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionLink;
