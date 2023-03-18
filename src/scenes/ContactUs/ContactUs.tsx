import { motion } from "framer-motion";
import { FC } from "react";

import { useAppDispatch } from "src/hooks/state";
import { HText } from "src/shared";
import { setSelectedPage } from "src/store/navbarSlice";
import { SelectedPage } from "src/utility/types";

const ContactUs: FC = () => {
  const dispatch = useAppDispatch();
  const highlightTab = () => dispatch(setSelectedPage(SelectedPage.ContactUs));

  const formSubmit = async (e: Event) => {
    console.dir(e.target);
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div onViewportEnter={highlightTab}>
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>
        {/* FORM AND IMAGE */}
        <div className="mt-10 md:flex md:justify-between md:gap-8">
          <motion.div
            className="mt-10 md:mt-0 md:basis-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <form>
              <button type="button" onClick={formSubmit}>
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
