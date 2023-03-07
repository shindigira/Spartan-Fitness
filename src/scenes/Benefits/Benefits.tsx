import { useAppDispatch } from "src/hooks/state";
import { setSelectedPage } from "src/navbarSlice";
import { BenefitType, SelectedPage } from "src/utility/types";

import { flexBetween } from "src/utility/commonStyles";

import { motion } from "framer-motion";

import { HText } from "src/shared";

import BenefitsData from "./BenefitsData";
import Benefit from "./Benefit";

// Benefits List Framer Motion
const benefitListContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, duration: 0.5 }, // stagger each Benefit
  },
};

function Benefits() {
  const dispatch = useAppDispatch();
  const highlightNavbarTab = () =>
    dispatch(setSelectedPage(SelectedPage.Benefits));

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-10">
      <motion.div onViewportEnter={highlightNavbarTab}>
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className={`md:${flexBetween} mt-5 gap-8`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={benefitListContainer}
        >
          {BenefitsData.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Benefits;
