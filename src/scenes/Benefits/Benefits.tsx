import { useAppDispatch } from "src/hooks/state";
import { setSelectedPage } from "src/store/navbarSlice";
import { BenefitType, SelectedPage } from "src/utility/types";

import { flexBetween } from "src/utility/commonStyles";

import { motion } from "framer-motion";

import { ActionButton, HText } from "src/shared";

import BenefitsData from "./BenefitsArrayData";
import Benefit from "./Benefit";

import BenefitsPageGraphic from "src/assets/BenefitsPageGraphic.png";

// Benefits List Framer Motion
const benefitListContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, duration: 0.5 }, // stagger each Benefit
  },
};

function Benefits() {
  const dispatch = useAppDispatch();
  const highlightTab = () => dispatch(setSelectedPage(SelectedPage.Benefits));

  return (
    <section id="benefits" className="mx-auto mb-10 min-h-full w-5/6 py-10">
      <motion.div onViewportEnter={highlightTab}>
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

        {/* GRAPHIC AND DESCRIPTION */}
        <div className="mt-16 gap-20 md:mt-28 md:flex md:items-center md:justify-between">
          {/* GRAPHIC */}
          <div className="graphic-container mb-32">
            <img
              className="mx-auto"
              src={BenefitsPageGraphic}
              alt="benefits-page-graphic"
            />
          </div>

          {/* DESCRIPTION */}
          <div className="md:basis-1/2">
            {/* DESCRIPTION TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>.
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPTION TEXT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Every kind of lover of fitness will find something they like in
                the Spartan Fitness Gym. You can go there if you want to lose
                weight, tone or bulk up, or if you want to get in shape.
                Transform your body and feel the burn with isolated movements,
                targeting muscles in your arms, legs, hips and thighs. Each
                workout is crafted carefully with each fitness level in mind.
              </p>
              <p className="mb-5">
                At those big chain gyms, a member is just another body on a
                machine or in a class. At Spartan Fitness Gym, our members are
                people who live in our community - neighbors who are looking for
                a fitness club where everyone feels comfortable and welcomed and
                people know their name. If you're not…
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles md:before:-right-16">
                <ActionButton>Join Now</ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;
