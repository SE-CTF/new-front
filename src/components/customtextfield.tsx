import { VisibilityOff, Visibility } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";

interface CustomTextFieldProps {
  multilline: boolean;
  id: string;
  type: "text" | "email" | "password";
  placeholder: string;
  label: string;
  value?: string;
  onChange?: () => {};
  variant: "outlined" | "standard" | "filled";
  fullWidth?: boolean;
  register?: any;
  name?: string;
  validationRules?: any;
  required?: boolean;
  isPassword?: boolean;
  helperText?:string;
}

const CustomTextField = ({
  multilline,
  id,
  type,
  placeholder,
  label,
  value,
  onChange,
  variant,
  fullWidth,
  register,
  name,
  validationRules,
  required,
  isPassword,
  helperText
}: CustomTextFieldProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <TextField
        {...register(name, validationRules)}
        helperText={helperText}
        error = {(helperText == "" || helperText==undefined) ? false : true}
        multiline={multilline}
        id={id}
        type={!isPassword ? type : showPassword ? "text" : "password"}
        placeholder={placeholder}
        label={label}
        value={value}
        onChange={onChange}
        variant={variant}
        fullWidth={fullWidth}
        required={required}
        InputProps={{
          style: {
            borderRadius: "8px",
          },
          endAdornment: !isPassword ? null : (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          style: {
            color: "#3498db",
          },
        }}
      ></TextField>
    </>
  );
};

export default CustomTextField;
