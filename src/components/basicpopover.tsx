import { Button, IconButton, Popover, Typography } from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import React from "react";

interface PopoverProps {
  hint: string;
  id: string;
}

export default function BasicPopover({ hint, id }: PopoverProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  console.log(id);

  return (
    <div>
      <IconButton style={{ color: '#5efce8', border : "none"}} aria-describedby={id} onClick={handleClick}>
        <PriorityHighIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>{hint}</Typography>
      </Popover>
    </div>
  );
}