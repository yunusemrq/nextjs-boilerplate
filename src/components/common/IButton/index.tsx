import React from "react";

interface IButtonProps {
  title: string;
  primary?: boolean;
  onClick: () => void;
}

export const IButton = (props: IButtonProps) => {
  const { onClick, title, primary = true } = props;
  return (
    <span onClick={onClick} className="border p-2 rounded-lg cursor-pointer">
      {title}
    </span>
  );
};
