import { Button, Typography } from "@mui/material";
import React from "react";

interface CustomButtonProps {
  handleClick?: () => {};
  buttonText: string;
  type?: "submit" | "button" | " reset";
  disabled?:boolean
}

const CustomButton = ({ handleClick, buttonText, type , disabled }: CustomButtonProps) => {
  return (
    <>
      <Button
        fullWidth
        onClick={handleClick !== undefined ? handleClick : () => {}}
        style={{ backgroundColor: "#67b26f", height: "100%", width:"100%" }}
        variant="contained"
        type={type !== undefined ? type : "submit"}
        disabled = {disabled == undefined ? false : disabled}
      >
        <Typography variant="h5">{buttonText}</Typography>
      </Button>
    </>
  );
};

export default CustomButton;
