import { BenefitType } from "src/utility/types";

import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const BenefitsData: BenefitType[] = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Our facilities promote physical activity, provides a safe, functional, and comfortable workout environment, and creates a pleasant and enjoyable atmosphere for recreation and socialization.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "We have some of the best class calendars around, with almost all classes (like yoga, spin, dance, cardio, strength, and more) coming included with your membership.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Spartan Fitness trainers are a great option if you're the kind of person who arrives at the gym without a meticulously crafted workout plan.",
  },
];

export default BenefitsData;
