import React from "react";
import { IoMdCheckboxOutline } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
type TaskProps = {
  taskName: string;
  onDone: () => void;
  isDone: boolean;
  onDelete: () => void;
};

export default function Task({
  taskName,
  onDone,
  isDone,
  onDelete,
}: TaskProps) {
  return (
    <div className="bg-white flex w-1/3 rounded-md h-10 justify-between items-center">
      <div className="flex items-center">
        <IoMdCheckboxOutline
          onClick={onDone}
          className={
            isDone === true
              ? "text-green-500 h-10 w-10"
              : "text-slate-300 h-10 w-10"
          }
        />
        <p className="text-black px-2">{taskName}</p>
      </div>
      <FaRegTrashAlt onClick={onDelete} className="text-red-500 h-6 w-6 px-1" />
    </div>
  );
}
