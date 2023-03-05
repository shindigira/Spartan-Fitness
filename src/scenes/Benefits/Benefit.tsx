import { BenefitType } from "src/utility/types";

import { ActionLink } from "src/shared";

type Props = BenefitType;

const Benefit = ({ icon, title, description }: Props) => {
  return (
    <div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <ActionLink>
        <p>Learn More</p>
      </ActionLink>
    </div>
  );
};

export default Benefit;
