import React from "react";
import { TfiNotepad } from "react-icons/tfi";
import { CiSquarePlus } from "react-icons/ci";

type TopBarProps = {
  value: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
};

export default function TopBar({ value, onChange, onAdd }: TopBarProps) {
  return (
    <div className="flex justify-center gap-2 w-1/3">
      <TfiNotepad className="h-10 w-10" />
      <input
        value={value}
        onChange={onChange}
        className="px-2 w-full text-black"
        type="text"
        placeholder="Enter your next task"
      ></input>
      <CiSquarePlus
        className="h-10 w-10"
        onClick={() => {
          onAdd();
        }}
      />
    </div>
  );
}
