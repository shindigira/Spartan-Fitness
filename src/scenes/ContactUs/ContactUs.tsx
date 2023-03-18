import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "src/hooks/state";
import { HText } from "src/shared";
import { setSelectedPage } from "src/store/navbarSlice";
import { SelectedPage } from "src/utility/types";

import ContactUsPageGraphic from "src/assets/ContactUsPageGraphic.png";

const ContactUs = () => {
  const formSubmitURL = `https://formsubmit.co/${
    import.meta.env.VITE_FORM_SUBMIT_EMAIL_CODE
  }`;
  const dispatch = useAppDispatch();
  const highlightTab = () => dispatch(setSelectedPage(SelectedPage.ContactUs));

  // Form functions
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const formSubmit = async (e: any) => {
    const isValid = await trigger();
    console.log(isValid);
    if (!isValid) {
      e.preventDefault();
    }
    console.dir(e.target);
    console.log(import.meta.env.VITE_FORM_SUBMIT_EMAIL_CODE);
  };

  const inputStyles = `mb-1 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;
  const errorStyles = "mb-1 ml-2 text-primary-500";

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
            With the SF Black Card® membership, you can use any of our 2,300+
            locations, bring a guest for free as much as you want, and relax in
            the exclusive Black Card Spa! Check out everything the SF Black
            Card® has to offer.
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
            <form
              target="_blank"
              onSubmit={formSubmit}
              action={formSubmitURL}
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="Name"
                {...register("fullName", {
                  required: true,
                  maxLength: 100,
                  minLength: 4,
                })}
                onChange={() => trigger()}
              />
              {errors.fullName && (
                <p className={errorStyles}>
                  {errors.fullName.type === "required" &&
                    "This field is required."}
                  {errors.fullName.type === "maxLength" &&
                    "Max length is 100 char."}
                  {errors.fullName.type === "minLength" &&
                    "Min length is 4 char."}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className={errorStyles}>
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className={inputStyles}
                placeholder="Message"
                rows={8}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className={errorStyles}>
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}
              <button
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                type="submit"
              >
                Submit
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
