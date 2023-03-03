import { useAppDispatch } from "src/hooks/state";
import { setSelectedPage } from "src/navbarSlice";
import { BenefitType, SelectedPage } from "src/utility/types";

import { flexBetween } from "src/utility/commonStyles";

import { motion } from "framer-motion";

import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import HText from "src/shared/HText";

const benefits: BenefitType[] = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

function Benefits() {
  const dispatch = useAppDispatch();
  const selectPage = (page: SelectedPage) => dispatch(setSelectedPage(page));
  const highlightNavbarTab = () =>
    dispatch(setSelectedPage(SelectedPage.Benefits));

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-10">
      <motion.div className="" onViewportEnter={highlightNavbarTab}>
        {/* HEADER */}
        <div className="border-2 border-solid border-indigo-600 md:my-5 md:w-3/5">
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </div>

        {/* BENEFITS */}
        <div className={`md:${flexBetween} mt-5 gap-8`}></div>
      </motion.div>
    </section>
  );
}

export default Benefits;
