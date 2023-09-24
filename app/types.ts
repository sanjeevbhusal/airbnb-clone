import { IconType } from "react-icons";

export interface Category {
  label: string;
  description: string;
  icon: IconType;
}

export interface CountrySelectValue {
  value: string;
  label: string;
  flag: string;
  latlng: [number, number];
  region: string;
}
