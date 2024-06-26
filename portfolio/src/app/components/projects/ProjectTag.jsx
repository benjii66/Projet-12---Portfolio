import React from "react";

const ProjectTag = ({ name, onClick, isSelected, selectedColor, unSelectedColor }) => {
  const buttonStyles = isSelected
    ? selectedColor
    : unSelectedColor;
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
      aria-label="Project tag"
      itemProp="keywords"
    >
      {name}
    </button>
  );
};

export default ProjectTag;

// "text-white border-blue-400"
// "text-[#ADB7BE] border-slate-600 hover:border-white"