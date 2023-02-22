import Link from "./Link";

const LinkBar = () => {
  return (
    <>
      {["Home", "Benefits", "Our Classes", "Contact Us"].map((pageName) => (
        <Link key={pageName} page={pageName} />
      ))}
    </>
  );
};

export default LinkBar;
