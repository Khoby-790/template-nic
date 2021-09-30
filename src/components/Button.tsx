import React from "react";

type ButtonType = "primary" | "secondary" | "danger" | "success" | "warning";

interface Props {
  title: string;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

const Button = (props: Props) => {
  const type = props.color
    ? `bg-${props.color}-200 text-${props.color}-700`
    : "";
  return (
    <span
      onClick={props.onClick}
      className={`p-2 border ${type} cursor-pointer rounded mx-1`}
    >
      {props.title}
    </span>
  );
};

export default Button;
