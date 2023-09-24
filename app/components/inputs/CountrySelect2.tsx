import { useCountries2 } from "@/app/hooks/useCountries2";
import Select from "react-select";
import { CountrySelectValue } from "./CountrySelect";

interface CountrySelect2Props {
  value: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

export function CountrySelect2({ value, onChange }: CountrySelect2Props) {
  const { getAll } = useCountries2();

  return (
    <Select
      placeholder="Anywhere"
      options={getAll()}
      isClearable
      value={value}
      onChange={(value: CountrySelectValue) => onChange(value)}
      formatOptionLabel={(option: any) => (
        <div
          className="
          flex flex-row items-center gap-3"
        >
          <div>{option.flag}</div>
          <div>
            {option.label},
            <span className="text-neutral-500 ml-1">{option.region}</span>
          </div>
        </div>
      )}
      classNames={{
        control: () => "p-3 border-2",
        input: () => "text-lg",
        option: () => "text-lg",
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 6,
        colors: {
          ...theme.colors,
          primary: "black",
          primary25: "#ffe4e6",
        },
      })}
    />
  );
}
