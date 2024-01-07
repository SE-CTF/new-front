import { Snackbar, Alert, Typography } from "@mui/material";
import { useState } from "react";

interface TopAlertProps {
  open: boolean;
  setOpen: any;
  text: string;
  severity: "error";
}
const TopAlert = ({ open, setOpen, text, severity }: TopAlertProps) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert severity={severity}>
          <Typography>{text}</Typography>
        </Alert>
      </Snackbar>
    </>
  );
};

export default TopAlert;
