import { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlinePlusCircle,
} from "react-icons/ai";

interface CounterProps {
  value: number;
  onChange: (value: number) => void;
  title: string;
  subtitle: string;
}

export function Counter({ value, onChange, title, subtitle }: CounterProps) {
  const incrementValue = () => {
    onChange(value + 1);
  };

  const decrementValue = () => {
    if (value === 1) {
      return;
    }
    onChange(value - 1);
  };

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col">
        <p className="font-bold">{title}</p>
        <p className="text-neutral-500">{subtitle}</p>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <button
          className="w-10 h-10 border border-neutral-400 rounded-full flex items-center justify-center hover:opacity-80 transition"
          onClick={incrementValue}
        >
          <AiOutlinePlus />
        </button>
        <p className="font-light text-xl text-neutral-600">{value}</p>
        <button
          className="w-10 h-10 border border-neutral-400 rounded-full flex items-center justify-center hover:opacity-80 transition"
          onClick={decrementValue}
        >
          <AiOutlineMinus />
        </button>
      </div>
    </div>
  );
}
