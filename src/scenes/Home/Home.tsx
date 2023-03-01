import { useAppSelector, useAppDispatch } from "src/hooks/state";
import { determineAboveMediumScreens } from "src/hooks/useMediaQuery";
import { setSelectedPage } from "src/navbarSlice";
import { SelectedPage } from "src/utility/types";
import HomePageText from "src/assets/HomePageText.png";

type Props = {};

const Home = (props: Props) => {
  const dispatch = useAppDispatch();
  const isAboveMediumScreens = determineAboveMediumScreens();

  return (
    <section id="home">
      <div className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
        {/* IMAGE AND MAIN HEADER */}
        <div>
          {/*  MAIN HEADER */}
          <div>
            {/* HEADINGS */}
            <div>
              <div>
                <div>
                  <img src={HomePageText} alt="home-page-text" />
                </div>
              </div>

              <p>Unrivaled</p>
            </div>
          </div>
          {/* FOREGROUND IMAGE */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
