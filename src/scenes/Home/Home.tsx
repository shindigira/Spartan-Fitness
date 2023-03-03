import { useAppSelector, useAppDispatch } from "src/hooks/state";
import { determineAboveMediumScreens } from "src/hooks/useMediaQuery";
import { setSelectedPage } from "src/navbarSlice";
import { SelectedPage } from "src/utility/types";

import { ActionButton } from "src/shared";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

import HomePageText from "src/assets/HomePageText.png";
import HomePageGraphic from "src/assets/HomePageGraphic.png";
import SponsorForbes from "src/assets/SponsorForbes.png";
import SponsorFortune from "src/assets/SponsorFortune.png";
import SponsorRedBull from "src/assets/SponsorRedBull.png";

type Props = {};

const Home = (props: Props) => {
  const dispatch = useAppDispatch();
  const isAboveMediumScreens = determineAboveMediumScreens();
  // const selectPage = (page: SelectedPage) => dispatch(setSelectedPage(page));
  const navigateContactUs = () =>
    dispatch(setSelectedPage(SelectedPage.ContactUs));

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* MAIN HEADER */}
        <div className="z-10 mt-16 md:mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
          >
            <div className="relative">
              <div className="before:absolute before:-top-10 before:-left-10 before:z-[-1] before:opacity-30 md:before:content-spartantext">
                <h1 className="font-alegreya text-5xl font-extrabold sm:whitespace-nowrap sm:text-6xl">
                  SPARTAN FITNESS
                </h1>
                <h2 className="font-alegreya text-3xl font-thin italic sm:text-4xl">
                  Evolutionary Fitness
                </h2>
                {/* <img alt="home-page-text" src={HomePageText} /> */}
              </div>
            </div>

            <p className="mt-8 text-sm">
              Unrivaled gym. Unparalleled training fitness classes. Ideal
              environment to improve your aesthetics... Get your dream body now!
            </p>
          </motion.div>

          {/* ACTIONS */}
          <div className="mt-8 flex items-center gap-8">
            <ActionButton>Join Now</ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={navigateContactUs}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16"
        >
          <img className="" alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[115px] bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
