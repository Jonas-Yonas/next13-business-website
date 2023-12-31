"use client";

import { ReactNode, useState } from "react";

interface ICardProps {
  id?: number;
  title: string;
  icon: ReactNode;
  text: string;
}

const Card = (props: ICardProps) => {
  const { title, icon: Icon, text } = props;

  const [showFull, setShowFull] = useState(false);

  const toggleDescription = () => {
    setShowFull((prev) => !prev);
  };

  const cardClasses = `w-full h-[17rem] bg-[#001a36] border border-gray-400 rounded-lg shadow-md p-4 py-6 ease-in-out duration-300 hover:scale-105 hover:cursor-pointer overflow-hidden hover:shadow-indigo-500/50 hover:shadow-2xl`;

  return (
    <div
      className={cardClasses}
      onMouseEnter={toggleDescription}
      onMouseLeave={toggleDescription}
    >
      <div
        className={`flex items-center justify-center text-emerald-500 text-3xl ${
          showFull ? "animate-ping ease-in duration-300" : ""
        }`}
      >
        {Icon}
      </div>
      <h2 className="text-xl font-semibold mt-4 text-white">{title}</h2>

      <div className="mt-4 text-gray-300 text-[14px]">
        <p className="">{showFull ? text : text.slice(0, 100) + "..."}</p>
      </div>
    </div>
  );
};

export default Card;
