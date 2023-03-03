import { useAppDispatch } from "src/hooks/state";
import { setSelectedPage } from "src/navbarSlice";
import { SelectedPage } from "src/utility/types";

import { motion } from "framer-motion";
import HText from "src/shared/HText";

function Benefits() {
  const dispatch = useAppDispatch();
  const selectPage = (page: SelectedPage) => dispatch(setSelectedPage(page));
  const highlightNavbarTab = () =>
    dispatch(setSelectedPage(SelectedPage.Benefits));

  return (
    <section className="mx-auto min-h-full w-5/6 py-10">
      <motion.div className="" onViewportEnter={highlightNavbarTab}>
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;
