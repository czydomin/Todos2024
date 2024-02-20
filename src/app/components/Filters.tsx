import React from "react";

type FiltersProps = {
  status: string;
  setStatus: (status: "ALL" | "TODO" | "DONE") => void;
};

export default function Filters({ status, setStatus }: FiltersProps) {
  return (
    <div className="flex gap-4 w-1/3 justify-end">
      <button
        onClick={() => {
          setStatus("TODO");
        }}
        className={
          status === "TODO"
            ? "border rounded-lg px-2 bg-white text-black"
            : "border rounded-lg px-2"
        }
      >
        TODO
      </button>
      <button
        onClick={() => {
          setStatus("DONE");
        }}
        className={
          status === "DONE"
            ? "border rounded-lg px-2  bg-white text-black"
            : "border rounded-lg px-2"
        }
      >
        DONE
      </button>
      <button
        onClick={() => {
          setStatus("ALL");
        }}
        className={
          status === "ALL"
            ? "border rounded-lg px-2 bg-white text-black"
            : "border rounded-lg px-2"
        }
      >
        ALL
      </button>
    </div>
  );
}
