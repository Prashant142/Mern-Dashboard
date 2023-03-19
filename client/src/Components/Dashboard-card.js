import React from "react";

const Card = ({ title, subtitle, icon, color }) => {
  return (
    <div
      className={`shadow-md rounded-lg p-4 flex flex-col w-64 h-30 ${color}`}>
      <div className="mb-2">
        <h3 className="text-3xl font-bold">{title}</h3>
        <span className="text-sm font-medium">{subtitle}</span>
      </div>
      <div className="flex-grow"></div>
      <div className="flex justify-end">
        <img src={icon} alt="icon" className="h-10 w-10" />
      </div>
    </div>
  );
};

export default Card;
