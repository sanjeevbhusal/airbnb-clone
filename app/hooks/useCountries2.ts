import countries from "world-countries";
import { CountrySelectValue } from "../types";

const formattedCountries: CountrySelectValue[] = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));

export function useCountries2() {
  const getAll = () => formattedCountries;
  const getByValue = (value: string) =>
    formattedCountries.find((country) => country.value === value);
  return {
    getAll,
    getByValue,
  };
}
