import Logo2 from "src/assets/Logo2.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <div className="max-w-[100px]">
            <img alt="logo" src={Logo2} />
          </div>

          <p className="my-5">
            © Spartan Fitness 2023, LLC. Spartan Fitness, Fittest on Earth,
            3...2...1...Go! Game and Sport of Fitness are trademarks of Spartan
            Fitness, LLC in the U.S. and/or other countries. All Rights
            Reserved.
          </p>
        </div>
        <div className="mt-8 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <a href="#" className="block">
            Terms & Conditions
          </a>
          <a href="#" className="block">
            Privacy Policy
          </a>
          <a href="#" className="block">
            Disclaimer
          </a>
          <a href="#" className="block">
            Do Not Sell My Info
          </a>
          <a href="#" className="block">
            Cookie Policy
          </a>
          <a href="#" className="block">
            Report IP Thef
          </a>
        </div>
        <div className="mt-8 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <a className="block" href="mailto:contactus@spartanfitness.com">
            contactus@spartanfitness.com
          </a>
          <a className="block" href="tel:3964678953">
            (896)-467-8953
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
