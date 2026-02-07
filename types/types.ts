export type NavItem = {
  id: number;
  label: string;
  href: string;
};

export type StatusItem = {
  id: number;
  value: string;
  label: string;
};

export type ServiceItem = {
  id: number;
  img: string;
  title: string;
};

export type ProcessItem = {
  id: number;
  title: string;
  step: string;
  text: string;
};

export type BlogItem = {
  id: number;
  title: string;
  text: string;
  date: string;
};

export type FooterItem = {
  id: number;
  title: string;
  list: string[];
};
