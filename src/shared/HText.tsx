import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function HText({ children }: Props) {
  return <h1 className="font-montserrat text-3xl font-bold">{children}</h1>;
}

export default HText;
