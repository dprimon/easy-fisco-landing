import exp from "constants";

export type Feature = {
  id: string;
  name: string;
  icon: string;
  iconColor: string;
  description: string;
}

export type Price = {
  id: string;
  name: string;
  features: string[];
  value: string;
}

export type Question = {
  id: string;
  title: string;
  answer: string;
}

export type ContactForm = {
  fullName: string;
  email: string;
  phoneNumber: string;
  coupon?: string;
  hasPartitaIVA: string;
  privacy: boolean;
}
