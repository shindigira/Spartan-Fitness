import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "src/utility/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const formattedLink = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const isSelectedPage = selectedPage === formattedLink;
  const selectPage = () => setSelectedPage(formattedLink);
  return (
    <AnchorLink
      className={`${
        isSelectedPage ? "text-primary-500" : ""
      } duration-600 transition hover:text-primary-300`}
      href={`#${formattedLink}`}
      onClick={selectPage}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
