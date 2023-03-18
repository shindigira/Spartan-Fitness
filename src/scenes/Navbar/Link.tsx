import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "src/utility/types";
import { useAppSelector, useAppDispatch } from "src/hooks/state";
import { setSelectedPage } from "src/store/navbarSlice";

type Props = {
  page: string;
};

const Link = ({ page }: Props) => {
  const dispatch = useAppDispatch();
  const selectedPage = useAppSelector((state) => state.navbar.selectedPage);
  const formattedLink = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const isSelectedPage: boolean = selectedPage === formattedLink;
  const selectPage = () => dispatch(setSelectedPage(formattedLink));

  return (
    <AnchorLink
      className={`${
        isSelectedPage ? "text-primary-500" : ""
      } duration-600 text-lg transition hover:text-primary-300`}
      href={`#${formattedLink}`}
      onClick={selectPage}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
