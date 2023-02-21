export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export type setSelectedPage = (value: SelectedPage) => void;

export interface NavbarState {
  selectedPage: SelectedPage;
  isMenuToggled: boolean;
}
