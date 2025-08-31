import React from "react";

export interface MyButtonProps {
  label: string;
}

const MyButton: React.FC<MyButtonProps> = ({ label }) => {
  return (
    <button style={{ padding: "8px 16px", borderRadius: "8px" }}>
      {label}
    </button>
  );
};

export default MyButton;
